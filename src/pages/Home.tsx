import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={logo} alt="Ouroboros" className="h-24 w-24" />
          <h1 className="text-5xl font-bold text-gray-900">
            <span className="text-primary">{t('home.title')}</span>
          </h1>
        </div>
        <p className="text-xl text-gray-600 mb-8">
          {t('home.subtitle')}
        </p>
        <div className="mb-8">
          <img 
            src="/images/scrennshots/complete-gui.png" 
            alt="Ouroboros 전체 UI" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <Link
            to="/quick-start"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            {t('common.quickStart')}
          </Link>
          <a
            href="https://github.com/whitesnakegang/ouroboros"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('home.features.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.features.apiSpec.title')}</h3>
            <p className="text-gray-600">
              {t('home.features.apiSpec.desc')}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.features.mockServer.title')}</h3>
            <p className="text-gray-600">
              {t('home.features.mockServer.desc')}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.features.validation.title')}</h3>
            <p className="text-gray-600">
              {t('home.features.validation.desc')}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.features.try.title')}</h3>
            <p className="text-gray-600">
              {t('home.features.try.desc')}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.features.websocket.title')}</h3>
            <p className="text-gray-600">
              {t('home.features.websocket.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('home.quickStart.title')}</h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="text-sm text-red-800">
            {t('home.quickStart.warning')}
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('home.quickStart.step1.title')}</h3>
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm mb-4">
            <p>
              {t('home.quickStart.step1.versionWarning')}
            </p>
          </div>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm mb-4"><code>{`dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.5'
}`}</code></pre>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('home.quickStart.step2.title')}</h3>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm mb-4"><code>{t('home.quickStart.homeConfigCode')}</code></pre>
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm mb-4">
            <p>
              {t('home.quickStart.step2.springwolfNote')}
            </p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('home.quickStart.step3.title')}</h3>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm mb-4"><code>{`./gradlew bootRun`}</code></pre>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('home.quickStart.step4.title')}</h3>
          <p className="text-gray-700 mb-4">
            {t('home.quickStart.step4.desc')}
          </p>
          
          <Link
            to="/quick-start"
            className="inline-block text-primary hover:underline font-medium"
          >
            {t('home.quickStart.moreGuide')}
          </Link>
        </div>
      </section>
    </div>
  );
} 