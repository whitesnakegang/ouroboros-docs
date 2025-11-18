import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Guide() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guide.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('guide.subtitle')}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/guide/basic-usage" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('guide.basicUsage.title')}</h2>
          <p className="text-gray-600">{t('guide.basicUsage.desc')}</p>
        </Link>

        <Link to="/guide/api-spec" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('guide.apiSpec.title')}</h2>
          <p className="text-gray-600">{t('guide.apiSpec.desc')}</p>
        </Link>

        <Link to="/guide/schema" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('guide.schema.title')}</h2>
          <p className="text-gray-600">{t('guide.schema.desc')}</p>
        </Link>

        <Link to="/guide/mock-api" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('guide.mockApi.title')}</h2>
          <p className="text-gray-600">{t('guide.mockApi.desc')}</p>
        </Link>

        <Link to="/guide/openapi-extension" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('guide.openapiExtension.title')}</h2>
          <p className="text-gray-600">{t('guide.openapiExtension.desc')}</p>
        </Link>

        <Link to="/guide/try-feature" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('guide.tryFeature.title')}</h2>
          <p className="text-gray-600">{t('guide.tryFeature.desc')}</p>
        </Link>

        <Link to="/guide/implementation-validation" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('guide.implementationValidation.title')}</h2>
          <p className="text-gray-600">{t('guide.implementationValidation.desc')}</p>
        </Link>
      </div>
    </div>
  );
} 