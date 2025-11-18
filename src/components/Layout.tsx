import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from './Sidebar';
import Header from './Header';
import ChatbotComponent from './Chatbot';
import 'react-chatbot-kit/build/main.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // 라우팅 완료 후 스크롤 처리
    // HashRouter를 사용하므로 window.location.hash에서 anchor 추출
    // 예: #/guide/try-feature#websocket -> websocket 추출
    const fullHash = window.location.hash;
    let anchorId: string | null = null;
    
    // hash에서 마지막 # 이후 부분을 anchor로 사용
    // HashRouter는 #/path 형태를 사용하므로, #/path#anchor 형태로 구분
    const hashParts = fullHash.split('#');
    if (hashParts.length > 2) {
      // 마지막 부분이 anchor (예: #/guide/try-feature#websocket -> websocket)
      anchorId = hashParts[hashParts.length - 1];
    } else if (hashParts.length === 2 && !hashParts[1].startsWith('/')) {
      // #anchor 형태 (라우팅 경로가 아닌 경우)
      anchorId = hashParts[1];
    }
    
    if (anchorId) {
      // anchor에 해당하는 요소 찾기
      const element = document.getElementById(anchorId);
      
      if (element) {
        // 요소가 존재하면 해당 위치로 스크롤
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // DOM 렌더링 대기
      } else {
        // 요소가 없으면 맨 위로 스크롤
        window.scrollTo(0, 0);
      }
    } else {
      // anchor가 없으면 맨 위로 스크롤
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const disposers: Array<() => void> = [];
    const preElements = Array.from(document.querySelectorAll<HTMLPreElement>('pre'));

    preElements.forEach((pre) => {
      if (pre.querySelector(':scope > button[data-copy="true"]')) {
        return;
      }

      const code = pre.querySelector('code');
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.copy = 'true';
      button.className = 'copy-btn';
      button.textContent = t('common.copy');

      const handleClick = async () => {
        const text = code?.textContent ?? pre.textContent ?? '';
        try {
          await navigator.clipboard.writeText(text.trimEnd());
          const original = button.textContent;
          button.textContent = t('common.copied');
          setTimeout(() => {
            button.textContent = original ?? t('common.copy');
          }, 1500);
        } catch {
          button.textContent = t('common.failed');
          setTimeout(() => {
            button.textContent = t('common.copy');
          }, 1500);
        }
      };

      button.addEventListener('click', handleClick);
      pre.classList.add('has-copy-btn');
      pre.appendChild(button);

      disposers.push(() => {
        button.removeEventListener('click', handleClick);
        if (button.parentElement === pre) {
          pre.removeChild(button);
        }
        pre.classList.remove('has-copy-btn');
      });
    });

    return () => {
      disposers.forEach((dispose) => dispose());
    };
  }, [location.pathname, t]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex pt-[60px]">
        <Sidebar />
        <main className="flex-1 min-h-[calc(100vh-60px)] min-w-0">
          {children}
        </main>
      </div>
      <ChatbotComponent />
    </div>
  );
} 