import { useState, useEffect, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
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

  // 코드 블록을 렌더링하는 함수
  const renderCodeBlocks = useCallback(() => {
    const messageContainer = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-message-container');
    if (!messageContainer) {
      return;
    }

    const botMessages = messageContainer.querySelectorAll('.react-chatbot-kit-chat-bot-message');
    
    botMessages.forEach((messageElement) => {
      // 이미 처리된 메시지인지 확인하되, 실제로 코드 블록이 렌더링되었는지도 확인
      const isProcessed = messageElement.hasAttribute('data-code-processed');
      const hasCodeBlockComponent = messageElement.querySelector('.custom-code-block-container');
      
      // 처리되었다고 표시되어 있지만 실제로 코드 블록 컴포넌트가 없으면 다시 처리
      if (isProcessed && hasCodeBlockComponent) {
        return;
      }
      
      if (isProcessed && !hasCodeBlockComponent) {
        messageElement.removeAttribute('data-code-processed');
      }
      
      // 처리 중인 메시지는 건너뛰기
      if (messageElement.hasAttribute('data-processing')) {
        return;
      }
      
      // 백틱이 있는지 먼저 빠르게 확인 (코드 블록이 있을 가능성 체크)
      const messageHtmlElement = messageElement as HTMLElement;
      const quickCheckSpan = messageElement.querySelector('span');
      const checkElement = quickCheckSpan || messageHtmlElement;
      const quickCheck = checkElement.textContent || (checkElement as HTMLElement).innerText || '';
      
      // 코드 블록이 있을 가능성이 있으면 즉시 숨기기
      if (quickCheck.includes('```')) {
        messageElement.setAttribute('data-processing', 'true');
        messageHtmlElement.style.visibility = 'hidden';
      }
      
      // 메시지 텍스트 추출
      // innerHTML에서 직접 텍스트를 추출 (HTML 엔티티 포함)
      let messageText = '';
      
      // span이나 다른 자식 요소에서 텍스트 추출
      const spanElement = messageElement.querySelector('span');
      
      if (spanElement) {
        // innerHTML을 사용하여 원본 텍스트 가져오기 (백틱 포함)
        const htmlSpan = spanElement as HTMLElement;
        // innerHTML에서 HTML 엔티티를 디코딩
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlSpan.innerHTML;
        messageText = tempDiv.textContent || tempDiv.innerText || '';
      } else {
        // span이 없으면 직접 innerHTML 사용
        const htmlElement = messageElement as HTMLElement;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlElement.innerHTML;
        messageText = tempDiv.textContent || tempDiv.innerText || '';
      }
      
      // 백틱이 있는지 확인 (코드 블록이 있는지)
      const hasBackticks = messageText.includes('```');
      
      if (!hasBackticks) {
        // 코드 블록이 없으면 다시 보이기
        messageElement.removeAttribute('data-processing');
        messageHtmlElement.style.visibility = 'visible';
        messageElement.setAttribute('data-code-processed', 'true');
        return;
      }
      
      const parsed = parseMarkdownCodeBlocks(messageText);
      
      // 코드 블록이 있는 경우에만 처리
      const hasCodeBlock = parsed.parts.some((part: { type: 'text' | 'code'; content: string; language?: string }) => part.type === 'code');
      if (!hasCodeBlock) {
        // 코드 블록이 없으면 다시 보이기
        messageElement.removeAttribute('data-processing');
        messageHtmlElement.style.visibility = 'visible';
        messageElement.setAttribute('data-code-processed', 'true');
        return;
      }
      
      // 메시지 내용을 재구성
      const fragment = document.createDocumentFragment();
      
      parsed.parts.forEach((part: { type: 'text' | 'code'; content: string; language?: string }) => {
        if (part.type === 'text') {
          // 텍스트를 div로 감싸서 줄바꿈이 제대로 표시되도록 함
          const textWrapper = document.createElement('div');
          textWrapper.className = 'message-text-content';
          textWrapper.textContent = part.content;
          fragment.appendChild(textWrapper);
        } else if (part.type === 'code') {
          // 코드 블록을 위한 컨테이너 생성
          const codeContainer = document.createElement('div');
          codeContainer.className = 'custom-code-block-container';
          codeContainer.setAttribute('data-code-content', part.content);
          codeContainer.setAttribute('data-code-language', part.language || '');
          
          // React 컴포넌트로 렌더링
          const root = createRoot(codeContainer);
          root.render(<CodeBlock code={part.content} language={part.language} />);
          
          fragment.appendChild(codeContainer);
        }
      });
      
      // 기존 내용을 새 내용으로 교체
      messageElement.innerHTML = '';
      messageElement.appendChild(fragment);
      messageElement.setAttribute('data-code-processed', 'true');
      messageElement.removeAttribute('data-processing');
      
      // 처리 완료 후 다시 보이기
      messageHtmlElement.style.visibility = 'visible';
    });
  }, []);
  
  // 코드 블록 처리를 위한 별도 useEffect
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    
    // 챗봇이 열렸을 때 주기적으로 코드 블록 체크
    const checkInterval = setInterval(() => {
      renderCodeBlocks();
    }, 1000);
    
    // 초기 실행 (여러 번 시도)
    setTimeout(() => {
      renderCodeBlocks();
    }, 500);
    
    setTimeout(() => {
      renderCodeBlocks();
    }, 1000);
    
    setTimeout(() => {
      renderCodeBlocks();
    }, 2000);
    
    return () => {
      clearInterval(checkInterval);
    };
  }, [isOpen, renderCodeBlocks]);
  
  // 메시지 변경 감지를 위한 별도 useEffect (isOpen과 무관하게 항상 실행)
  useEffect(() => {
    const chatbotContainer = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-container');
    if (!chatbotContainer) {
      return;
    }
    
    const messageContainer = chatbotContainer.querySelector('.react-chatbot-kit-chat-message-container');
    if (!messageContainer) {
      return;
    }
    
    const observer = new MutationObserver((mutations) => {
      // 새로 추가된 메시지가 있으면 즉시 확인하고 숨기기
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            // 새로 추가된 메시지 요소 찾기
            const botMessage = element.classList?.contains('react-chatbot-kit-chat-bot-message')
              ? element
              : element.querySelector?.('.react-chatbot-kit-chat-bot-message');
            
            if (botMessage && !botMessage.hasAttribute('data-code-processed')) {
              // 백틱이 있는지 빠르게 확인
              const spanElement = botMessage.querySelector('span');
              const checkElement = spanElement || botMessage;
              const quickCheck = checkElement.textContent || (checkElement as HTMLElement).innerText || '';
              
              if (quickCheck.includes('```')) {
                // 즉시 숨기기
                (botMessage as HTMLElement).style.visibility = 'hidden';
                botMessage.setAttribute('data-processing', 'true');
              }
            }
          }
        });
      });
      
      // 약간의 지연을 두어 DOM이 완전히 렌더링된 후 처리
      setTimeout(() => {
        renderCodeBlocks();
      }, 100);
    });
    
    observer.observe(messageContainer, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    
    // 초기 체크
    setTimeout(() => {
      renderCodeBlocks();
    }, 500);
    
    return () => {
      observer.disconnect();
    };
  }, [renderCodeBlocks]);

  useEffect(() => {
    const chatbotContainer = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-container') as HTMLElement;
    const chatButton = chatbotRef.current?.querySelector('.react-chatbot-kit-chat-button') as HTMLElement;
    
    if (chatbotContainer) {
      if (isOpen) {
        chatbotContainer.style.display = 'block';
        chatbotContainer.style.bottom = '90px'; // 버튼 위에 위치 (버튼 높이 60px + bottom 20px + 여백 10px)
        if (chatButton) chatButton.style.display = 'none';
        
        // 빈 메시지 전송 방지
        const inputForm = chatbotContainer.querySelector('.react-chatbot-kit-chat-input-form') as HTMLFormElement;
        const sendButton = chatbotContainer.querySelector('.react-chatbot-kit-chat-btn-send') as HTMLButtonElement;
        const inputField = chatbotContainer.querySelector('.react-chatbot-kit-chat-input') as HTMLInputElement;
        
        const handleSubmit = (e: Event) => {
          const input = inputField || chatbotContainer.querySelector('.react-chatbot-kit-chat-input') as HTMLInputElement;
          if (input && input.value.trim().length === 0) {
            e.preventDefault();
            e.stopPropagation();
            return false; // 빈 메시지는 전송하지 않음
          }
        };
        
        const handleButtonClick = (e: Event) => {
          const input = inputField || chatbotContainer.querySelector('.react-chatbot-kit-chat-input') as HTMLInputElement;
          if (input && input.value.trim().length === 0) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        };
        
        if (inputForm) {
          inputForm.addEventListener('submit', handleSubmit, true);
        }
        
        if (sendButton) {
          sendButton.addEventListener('click', handleButtonClick, true);
        }
        
        // cleanup 함수
        return () => {
          if (inputForm) {
            inputForm.removeEventListener('submit', handleSubmit, true);
          }
          if (sendButton) {
            sendButton.removeEventListener('click', handleButtonClick, true);
          }
        };
      } else {
        chatbotContainer.style.bottom = '-600px';
        if (chatButton) chatButton.style.display = 'flex';
        // 애니메이션 후 display none
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
        aria-label={isOpen ? "챗봇 닫기" : "챗봇 열기"}
      >
        <img src="/chatbot-icon.png" alt="챗봇" />
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

