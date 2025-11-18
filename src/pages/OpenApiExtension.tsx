import { useTranslation } from 'react-i18next';

export default function OpenApiExtension() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('openApiExtension.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('openApiExtension.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('openApiExtension.operation.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-id</code>: {t('openApiExtension.operation.items.id').replace('x-ouroboros-id: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-progress</code>: {t('openApiExtension.operation.items.progress').replace('x-ouroboros-progress: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-tag</code>: {t('openApiExtension.operation.items.tag').replace('x-ouroboros-tag: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-diff</code>: {t('openApiExtension.operation.items.diff').replace('x-ouroboros-diff: ', '')}
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-600">
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">none</code>: {t('openApiExtension.operation.items.diffItems.none').replace('none: ', '')}</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">request</code>: {t('openApiExtension.operation.items.diffItems.request').replace('request: ', '')}</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">response</code>: {t('openApiExtension.operation.items.diffItems.response').replace('response: ', '')}</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">endpoint</code>: {t('openApiExtension.operation.items.diffItems.endpoint').replace('endpoint: ', '')}</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">both</code>: {t('openApiExtension.operation.items.diffItems.both').replace('both: ', '')}</li>
            </ul>
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          {t('openApiExtension.operation.note')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('openApiExtension.schema.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code>: {t('openApiExtension.schema.items.mock').replace('x-ouroboros-mock: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-orders</code>: {t('openApiExtension.schema.items.orders').replace('x-ouroboros-orders: ', '')}</li>
        </ul>
        <p className="text-sm text-gray-600 mb-4">
          {t('openApiExtension.schema.note')}
        </p>
      </section>
    </div>
  );
}
