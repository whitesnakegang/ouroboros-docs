import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

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
      button.textContent = '복사';

      const handleClick = async () => {
        const text = code?.textContent ?? pre.textContent ?? '';
        try {
          await navigator.clipboard.writeText(text.trimEnd());
          const original = button.textContent;
          button.textContent = '복사됨';
          setTimeout(() => {
            button.textContent = original ?? '복사';
          }, 1500);
        } catch (error) {
          button.textContent = '실패';
          setTimeout(() => {
            button.textContent = '복사';
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
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex pt-[60px]">
        <Sidebar />
        <main className="flex-1 min-h-[calc(100vh-60px)] min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
} 