import { useState, useEffect, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import Chatbot from "react-chatbot-kit";

import config from "../configs/chatbotConfig";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import { parseMarkdownCodeBlocks } from "../utils/markdownParser";
import CodeBlock from "./CodeBlock";
import "./Chatbot.css";

export default function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  type MessagePart = { type: 'text' | 'code'; content: string; language?: string };

  const extractMessageText = (messageElement: Element): string => {
    const spanElement = messageElement.querySelector('span');
    const htmlElement = spanElement || (messageElement as HTMLElement);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlElement.innerHTML;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const showMessage = (messageElement: Element) => {
    const htmlElement = messageElement as HTMLElement;
    htmlElement.style.display = '';
    messageElement.removeAttribute('data-processing');
  };

  const renderCodeBlocks = useCallback(() => {
    const messageContainer = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-message-container');
    if (!messageContainer) return;

    const botMessages = messageContainer.querySelectorAll('.react-chatbot-kit-chat-bot-message');
    
    botMessages.forEach((messageElement) => {
      const isProcessed = messageElement.hasAttribute('data-code-processed');
      const hasCodeBlockComponent = messageElement.querySelector('.custom-code-block-container');
      
      if (isProcessed && hasCodeBlockComponent) return;
      if (isProcessed && !hasCodeBlockComponent) {
        messageElement.removeAttribute('data-code-processed');
      }
      
      if (messageElement.hasAttribute('data-processing')) return;
      
      const messageHtmlElement = messageElement as HTMLElement;
      const quickCheckSpan = messageElement.querySelector('span');
      const checkElement = quickCheckSpan || messageHtmlElement;
      const quickCheck = checkElement.textContent || (checkElement as HTMLElement).innerText || '';
      
      if (quickCheck.includes('```')) {
        messageElement.setAttribute('data-processing', 'true');
        messageHtmlElement.style.display = 'none';
      }
      
      const messageText = extractMessageText(messageElement);
      
      if (!messageText.includes('```')) {
        showMessage(messageElement);
        messageElement.setAttribute('data-code-processed', 'true');
        return;
      }
      
      const parsed = parseMarkdownCodeBlocks(messageText);
      const hasCodeBlock = parsed.parts.some((part: MessagePart) => part.type === 'code');
      
      if (!hasCodeBlock) {
        showMessage(messageElement);
        messageElement.setAttribute('data-code-processed', 'true');
        return;
      }
      
      const fragment = document.createDocumentFragment();
      
      parsed.parts.forEach((part: MessagePart) => {
        if (part.type === 'text') {
          const textWrapper = document.createElement('div');
          textWrapper.className = 'message-text-content';
          textWrapper.textContent = part.content;
          fragment.appendChild(textWrapper);
        } else if (part.type === 'code') {
          const codeContainer = document.createElement('div');
          codeContainer.className = 'custom-code-block-container';
          codeContainer.setAttribute('data-code-content', part.content);
          codeContainer.setAttribute('data-code-language', part.language || '');
          
          const root = createRoot(codeContainer);
          root.render(<CodeBlock code={part.content} language={part.language} />);
          fragment.appendChild(codeContainer);
        }
      });
      
      messageElement.innerHTML = '';
      messageElement.appendChild(fragment);
      messageElement.setAttribute('data-code-processed', 'true');
      showMessage(messageElement);
    });
  }, []);
  
  useEffect(() => {
    const chatbotContainer = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-container');
    if (!chatbotContainer) return;
    
    const messageContainer = chatbotContainer.querySelector('.react-chatbot-kit-chat-message-container');
    if (!messageContainer) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const botMessage = element.classList?.contains('react-chatbot-kit-chat-bot-message')
              ? element
              : element.querySelector?.('.react-chatbot-kit-chat-bot-message');
            
            if (botMessage && !botMessage.hasAttribute('data-code-processed')) {
              const spanElement = botMessage.querySelector('span');
              const checkElement = spanElement || botMessage;
              const quickCheck = checkElement.textContent || (checkElement as HTMLElement).innerText || '';
              
              if (quickCheck.includes('```')) {
                (botMessage as HTMLElement).style.display = 'none';
                botMessage.setAttribute('data-processing', 'true');
              }
            }
          }
        });
      });
      
      setTimeout(() => renderCodeBlocks(), 50);
    });
    
    observer.observe(messageContainer, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    
    setTimeout(() => renderCodeBlocks(), 300);
    
    return () => observer.disconnect();
  }, [renderCodeBlocks]);

  useEffect(() => {
    const chatbotContainer = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-container') as HTMLElement;
    const chatButton = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-button') as HTMLElement;
    
    if (chatbotContainer) {
      if (isOpen) {
        chatbotContainer.style.display = 'block';
        chatbotContainer.style.bottom = '90px';
        if (chatButton) chatButton.style.display = 'none';
        
        const inputForm = chatbotContainer.querySelector('.react-chatbot-kit-chat-input-form') as HTMLFormElement;
        const sendButton = chatbotContainer.querySelector('.react-chatbot-kit-chat-btn-send') as HTMLButtonElement;
        const inputField = chatbotContainer.querySelector('.react-chatbot-kit-chat-input') as HTMLInputElement;
        
        const preventEmptySubmit = (e: Event) => {
          const input = inputField || chatbotContainer.querySelector('.react-chatbot-kit-chat-input') as HTMLInputElement;
          if (input && input.value.trim().length === 0) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        };
        
        if (inputForm) inputForm.addEventListener('submit', preventEmptySubmit, true);
        if (sendButton) sendButton.addEventListener('click', preventEmptySubmit, true);
        
        return () => {
          if (inputForm) inputForm.removeEventListener('submit', preventEmptySubmit, true);
          if (sendButton) sendButton.removeEventListener('click', preventEmptySubmit, true);
        };
      } else {
        chatbotContainer.style.bottom = '-600px';
        if (chatButton) chatButton.style.display = 'flex';
        setTimeout(() => {
          if (!isOpen && chatbotContainer) {
            chatbotContainer.style.display = 'none';
          }
        });
      }
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container" ref={chatbotRef}>
      <button 
        className="custom-chatbot-button"
        onClick={handleToggle}
        aria-label={isOpen ? t('common.chatbotClose') : t('common.chatbotOpen')}
      >
        <img src="/chatbot-icon.png" alt={t('common.chatbot')} />
      </button>
      <div className="chatbot-wrapper">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

