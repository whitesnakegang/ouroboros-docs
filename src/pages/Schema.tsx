import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Schema() {
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
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('schema.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('schema.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('schema.create.title')}</h2>
        <div className="mb-4">
          <img 
            key={gifKey}
            src={`/images/gif/rest-work-flow.gif?t=${gifKey}`}
            alt={t('schema.create.workflowAlt')} 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>{t('schema.create.items.1')}</li>
          <li>{t('schema.create.items.2')}</li>
          <li>{t('schema.create.items.3')}</li>
          <li>{t('schema.create.items.4')}</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('schema.manage.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('schema.manage.items.1')}</li>
          <li>{t('schema.manage.items.2')}</li>
          <li>{t('schema.manage.items.3')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('schema.mock.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('schema.mock.desc')}
        </p>
        <p className="text-gray-700 mb-3">
          {t('schema.mock.examples.title')}
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{random.uuid}}'}</code> - {t('schema.mock.examples.items.1')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{name.fullName}}'}</code> - {t('schema.mock.examples.items.2')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{internet.emailAddress}}'}</code> - {t('schema.mock.examples.items.3')}</li>
        </ul>
        <p className="text-sm text-gray-600">
          {t('schema.mock.examples.note')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('schema.websocket.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('schema.websocket.desc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('schema.websocket.schemaTitle')}</h3>
        <p className="text-gray-700 mb-3">
          {t('schema.websocket.schemaDesc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('schema.websocket.messageTitle')}</h3>
        <p className="text-gray-700 mb-3">
          {t('schema.websocket.messageDesc')}
        </p>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            <strong>{t('common.note')}:</strong> {t('schema.websocket.notePart1')} 
            {t('schema.websocket.notePart2')} <code className="bg-blue-100 px-1.5 py-0.5 rounded">ourowebsocket.yml</code> {t('schema.websocket.notePart3')}
          </p>
        </div>
      </section>
    </div>
  );
}
