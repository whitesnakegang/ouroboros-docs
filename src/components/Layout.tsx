import { type ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex pt-[60px]">
        <Sidebar />
        <main className="flex-1 min-h-[calc(100vh-60px)]">
          {children}
        </main>
      </div>
    </div>
  );
} 