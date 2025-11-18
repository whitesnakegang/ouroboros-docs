import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MockApi() {
  const { t } = useTranslation();
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGifKey(prev => prev + 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('mockApi.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('mockApi.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('mockApi.test.title')}</h2>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/testing-setting.png" 
            alt={t('mockApi.test.settingScreenAlt')} 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg mb-4"
          />
          <img 
            src="/images/scrennshots/test-response.png" 
            alt={t('mockApi.test.responseScreenAlt')} 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>{t('mockApi.test.items.1')}</li>
          <li>{t('mockApi.test.items.2')}</li>
          <li>{t('mockApi.test.items.3')}</li>
          <li>{t('mockApi.test.items.4')}</li>
        </ol>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('mockApi.auth.title')}</h2>
        <div className="mb-4">
          <img 
            key={gifKey}
            src={`/images/gif/auth-setup.gif?t=${gifKey}`}
            alt={t('mockApi.auth.workflowAlt')} 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-3">
          {t('mockApi.auth.desc')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('mockApi.response.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('mockApi.response.desc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('mockApi.response.viewTitle')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('mockApi.response.items.mock')}</strong></li>
          <li><strong>{t('mockApi.response.items.actual')}</strong></li>
          <li><strong>{t('mockApi.response.items.compare')}</strong></li>
          <li><strong>{t('mockApi.response.items.details')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('mockApi.response.featuresTitle')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('mockApi.response.feature1Part1')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code> {t('mockApi.response.feature1Part2')}</li>
          <li>{t('mockApi.response.features.2')}</li>
          <li>{t('mockApi.response.features.3')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('mockApi.websocket.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('mockApi.websocket.desc')}
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
          <li>{t('mockApi.websocket.items.1')}</li>
          <li>{t('mockApi.websocket.items.2')}</li>
          <li>{t('mockApi.websocket.items.3')}</li>
        </ol>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            <strong>{t('mockApi.websocket.important')}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
