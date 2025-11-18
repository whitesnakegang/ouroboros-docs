import { useTranslation } from 'react-i18next';

export default function ApiSpec() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('apiSpec.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('apiSpec.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('apiSpec.newApi.title')}</h2>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/spec-editor.png" 
            alt="API 명세 편집기" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>{t('apiSpec.newApi.items.1')}</li>
          <li>{t('apiSpec.newApi.items.2')}</li>
          <li>{t('apiSpec.newApi.items.3')}</li>
          <li>{t('apiSpec.newApi.items.4')}</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('apiSpec.manage.title')}</h2>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/api-detail-page.png" 
            alt="API 상세 페이지" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-3">
          {t('apiSpec.manage.desc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('apiSpec.manage.features.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('apiSpec.manage.features.items.overview')}</strong></li>
          <li><strong>{t('apiSpec.manage.features.items.request')}</strong></li>
          <li><strong>{t('apiSpec.manage.features.items.response')}</strong></li>
          <li><strong>{t('apiSpec.manage.features.items.try')}</strong></li>
          <li><strong>{t('apiSpec.manage.features.items.validation')}</strong></li>
          <li><strong>{t('apiSpec.manage.features.items.code')}</strong></li>
          <li><strong>{t('apiSpec.manage.features.items.export')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('apiSpec.manage.quickActions.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('apiSpec.manage.quickActions.items.1')}</li>
          <li>{t('apiSpec.manage.quickActions.items.2')}</li>
          <li>{t('apiSpec.manage.quickActions.items.3')}</li>
          <li>{t('apiSpec.manage.quickActions.items.4')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('apiSpec.importExport.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('apiSpec.importExport.desc')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('apiSpec.editor.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('apiSpec.editor.desc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('apiSpec.editor.sections.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('apiSpec.editor.sections.basic')}</strong></li>
          <li><strong>{t('apiSpec.editor.sections.request.title')}</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>{t('apiSpec.editor.sections.request.items.1')}</li>
              <li>{t('apiSpec.editor.sections.request.items.2')}</li>
              <li>{t('apiSpec.editor.sections.request.items.3')}</li>
            </ul>
          </li>
          <li><strong>{t('apiSpec.editor.sections.response.title')}</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>{t('apiSpec.editor.sections.response.items.1')}</li>
              <li>{t('apiSpec.editor.sections.response.items.2')}</li>
              <li>{t('apiSpec.editor.sections.response.items.3')}</li>
            </ul>
          </li>
          <li><strong>{t('apiSpec.editor.sections.metadata')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('apiSpec.editor.features.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('apiSpec.editor.features.items.1')}</li>
          <li>{t('apiSpec.editor.features.items.2')}</li>
          <li>{t('apiSpec.editor.features.items.3')}</li>
          <li>{t('apiSpec.editor.features.items.4')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('apiSpec.websocket.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('apiSpec.websocket.desc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('apiSpec.websocket.steps.title')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('apiSpec.websocket.steps.items.1')}</li>
          <li>{t('apiSpec.websocket.steps.items.2')}</li>
          <li>{t('apiSpec.websocket.steps.items.3')}</li>
          <li>{t('apiSpec.websocket.steps.items.4')}</li>
        </ol>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p className="font-semibold mb-2">{t('apiSpec.websocket.important.title')}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('apiSpec.websocket.important.items.1')}</li>
            <li>{t('apiSpec.websocket.important.items.2')}</li>
            <li>{t('apiSpec.websocket.important.items.3')}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
