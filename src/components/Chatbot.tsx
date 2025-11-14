import { useState, useEffect, useRef } from "react";
import Chatbot from "react-chatbot-kit";

import config from "../configs/chatbotConfig";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "./Chatbot.css";

export default function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);

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

  const handleClose = () => {
    setIsOpen(false);
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
        {isOpen && (
          <button 
            className="chatbot-close-button"
            onClick={handleClose}
            aria-label="챗봇 닫기"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

