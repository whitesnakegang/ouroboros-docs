import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="h-full flex items-center justify-between px-6 max-w-full">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold text-gray-900 no-underline">
          <img src={logo} alt="Ouroboros" className="h-12 w-12" />
          <span className="text-primary">Ouroboros</span>
        </Link>
        <nav className="flex gap-6 items-center">
          <a
            href="https://github.com/whitesnakegang/ouroboros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-sm font-medium hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://ouroboros.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-sm font-medium hover:text-primary transition-colors"
          >
            공식 사이트
          </a>
        </nav>
      </div>
    </header>
  );
} 