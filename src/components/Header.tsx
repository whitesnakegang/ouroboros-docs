import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="h-full flex items-center justify-between px-6 max-w-full">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold text-gray-900 no-underline">
          <img src={logo} alt="Ouroboros" className="h-12 w-12" />
          <span className="text-primary">Ouroboros</span>
        </Link>
        <nav className="flex gap-6 items-center">
          <div className="flex gap-2 items-center border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => changeLanguage('ko')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                i18n.language === 'ko'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t('common.korean')}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                i18n.language === 'en'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t('common.english')}
            </button>
          </div>
          <a
            href="https://github.com/whitesnakegang/ouroboros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-sm font-medium hover:text-primary transition-colors"
          >
            {t('common.github')}
          </a>
          <a
            href="https://ouroboros.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-sm font-medium hover:text-primary transition-colors"
          >
            {t('common.officialSite')}
          </a>
        </nav>
      </div>
    </header>
  );
} 