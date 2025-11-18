import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TryFeature() {
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
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('tryFeature.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('tryFeature.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeature.overview.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>{t('tryFeature.overview.items.1')}</strong></li>
          <li><strong>{t('tryFeature.overview.items.2')}</strong></li>
          <li><strong>{t('tryFeature.overview.items.3')}</strong></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeature.webUI.title')}</h2>
        <div className="mb-4">
          <img 
            key={gifKey}
            src={`/images/gif/method-test-results.gif?t=${gifKey}`}
            alt="메소드 테스트 결과" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>{t('tryFeature.webUI.items.1')}</li>
          <li>{t('tryFeature.webUI.items.2')}</li>
          <li>{t('tryFeature.webUI.items.3')}</li>
          <li>{t('tryFeature.webUI.items.4')}</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeature.directRequest.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('tryFeature.directRequest.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`curl -X POST "http://localhost:8080/api/orders" \
  -H "Content-Type: application/json" \
  -H "X-Ouroboros-Try: on" \
  -d '{"amount": 1000}'`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          {t('tryFeature.directRequest.note')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeature.methodTracing.title')}</h2>
        <p className="text-gray-700 mb-4">
          {t('tryFeature.methodTracing.desc')}
        </p>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/method-tracing-simple.png" 
            alt="메소드 추적 간단 보기" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg mb-4"
          />
          <img 
            src="/images/scrennshots/method-tracing-detail.png" 
            alt="메소드 추적 상세 보기" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeature.advanced.title')}</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('tryFeature.advanced.methodTracing.title')}</h3>
            <p className="mb-3">{t('tryFeature.advanced.methodTracing.desc')}</p>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages=your.package`}</code></pre>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('tryFeature.advanced.traceStorage.title')}</h3>
            <p className="mb-3">
              {t('tryFeature.advanced.traceStorage.desc')}
            </p>
            <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm space-y-2 mb-3">
              <p>
                <strong>{t('tryFeature.advanced.traceStorage.tempo.title')}</strong> {t('tryFeature.advanced.traceStorage.tempo.desc')}
              </p>
              <p>
                {t('tryFeature.advanced.traceStorage.tempo.benefits.title')}
              </p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>{t('tryFeature.advanced.traceStorage.tempo.benefits.items.1')}</li>
                <li>{t('tryFeature.advanced.traceStorage.tempo.benefits.items.2')}</li>
                <li>{t('tryFeature.advanced.traceStorage.tempo.benefits.items.3')}</li>
                <li>{t('tryFeature.advanced.traceStorage.tempo.benefits.items.4')}</li>
              </ul>
            </div>
            <p className="mb-3 text-sm">
              {t('tryFeature.advanced.traceStorage.tempo.setup')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application.properties</code>
            </p>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-3"><code>{t('tryFeature.tempoConfigCode')}</code></pre>
            <p className="text-gray-700 text-sm">
              {t('tryFeature.advanced.traceStorage.tempo.details')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('tryFeature.advanced.websocketTry.title')}</h3>
            <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm space-y-2 mb-3">
              <p>
                <strong>{t('tryFeature.advanced.websocketTry.important')}</strong>
              </p>
            </div>
            <p className="text-gray-700 mb-3">
              {t('tryFeature.advanced.websocketTry.desc')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/queue</code>
            </p>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-3"><code>{t('tryFeature.websocketConfigCode')}</code></pre>
            <p className="text-gray-700 text-sm mb-3">
              {t('tryFeature.advanced.websocketTry.note1')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/queue/ouro/try</code>
            </p>
            <p className="text-gray-700 text-sm">
              {t('tryFeature.advanced.websocketTry.note2')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/user/queue/ouro/try</code>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeature.resources.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/api/try" className="text-primary hover:underline">{t('tryFeature.resources.items.1')}</Link></li>
          <li><a href="https://ouroboros.co.kr" className="text-primary hover:underline" target="_blank" rel="noreferrer">{t('tryFeature.resources.items.2')}</a></li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code> – {t('tryFeature.resources.items.3')}</li>
        </ul>
      </section>
    </div>
  );
}
