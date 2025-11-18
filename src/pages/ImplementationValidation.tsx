import { useTranslation } from 'react-i18next';

export default function ImplementationValidation() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('implementationValidation.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('implementationValidation.subtitle')}
      </p>

      <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 mb-8 text-sm">
        {t('implementationValidation.lombokWarning')}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('implementationValidation.progress.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{t('implementationValidation.progress.items.1')}</li>
          <li>{t('implementationValidation.progress.items.2')}</li>
          <li>{t('implementationValidation.progress.items.3')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('implementationValidation.status.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('implementationValidation.status.desc')}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code>: {t('implementationValidation.status.items.mock').replace('mock: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">completed</code>: {t('implementationValidation.status.items.completed').replace('completed: ', '')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('implementationValidation.validation.title')}</h2>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/validation-screen.png" 
            alt={t('implementationValidation.validationScreenAlt')} 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-3">
          {t('implementationValidation.validation.desc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('implementationValidation.validation.typesTitle')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('implementationValidation.validation.types.request')}</strong></li>
          <li><strong>{t('implementationValidation.validation.types.response')}</strong></li>
          <li><strong>{t('implementationValidation.validation.types.endpoint')}</strong></li>
          <li><strong>{t('implementationValidation.validation.types.both')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('implementationValidation.validation.featuresTitle')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('implementationValidation.validation.features.1')}</strong></li>
          <li><strong>{t('implementationValidation.validation.features.2')}</strong></li>
          <li><strong>{t('implementationValidation.validation.features.3')}</strong></li>
          <li><strong>{t('implementationValidation.validation.features.4')}</strong></li>
          <li><strong>{t('implementationValidation.validation.features.5')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('implementationValidation.validation.workflowTitle')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>{t('implementationValidation.validation.workflow.1')}</li>
          <li>{t('implementationValidation.validation.workflow.2')}</li>
          <li>{t('implementationValidation.validation.workflow.3')}</li>
          <li>{t('implementationValidation.validation.workflow.4')}</li>
        </ol>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-4">
          <p>
            {t('implementationValidation.validation.lombokNote')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('implementationValidation.websocket.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('implementationValidation.websocket.desc')}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('implementationValidation.websocket.typesTitle')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('implementationValidation.websocket.types.channel')}</strong></li>
          <li><strong>{t('implementationValidation.websocket.types.message')}</strong></li>
          <li><strong>{t('implementationValidation.websocket.types.operation')}</strong></li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p className="font-semibold mb-2">{t('implementationValidation.websocket.requirementsTitle')}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('implementationValidation.websocket.requirements.1')}</li>
            <li>{t('implementationValidation.websocketAnnotationNote')}</li>
            <li>{t('implementationValidation.websocket.requirements.3')}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
