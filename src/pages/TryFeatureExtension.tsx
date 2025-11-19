import { useTranslation } from 'react-i18next';

export default function TryFeatureExtension() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('tryFeatureExtension.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('tryFeatureExtension.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeatureExtension.tempo.title')}</h2>
        
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 mb-6">
          <p className="font-semibold mb-2">{t('tryFeatureExtension.tempo.whenToUse.title')}</p>
          <p className="mb-2">{t('tryFeatureExtension.tempo.whenToUse.desc')}</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>{t('tryFeatureExtension.tempo.whenToUse.items.1')}</li>
            <li>{t('tryFeatureExtension.tempo.whenToUse.items.2')}</li>
            <li>{t('tryFeatureExtension.tempo.whenToUse.items.3')}</li>
          </ul>
          <p className="mt-2 font-semibold">{t('tryFeatureExtension.tempo.whenToUse.note')}</p>
        </div>

        <p className="text-gray-700 mb-6">
          {t('tryFeatureExtension.tempo.desc')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.tempo.appConfig.title')}</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.appConfig.code')}</code></pre>
        <p className="text-gray-700 text-sm mb-6">
          {t('tryFeatureExtension.tempo.appConfig.note')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.tempo.otelConfig.title')}</h3>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mb-3">
          <p><strong>{t('tryFeatureExtension.tempo.otelConfig.note')}</strong></p>
        </div>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.otelConfig.code')}</code></pre>
        <p className="text-gray-700 text-sm mb-6">
          {t('tryFeatureExtension.tempo.otelConfig.envNote')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.tempo.serverConfig.title')}</h3>
        
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.tempo.serverConfig.structure.title')}</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.serverConfig.structure.code')}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.tempo.serverConfig.envFile.title')}</h4>
        <p className="text-gray-700 mb-3">
          {t('tryFeatureExtension.tempo.serverConfig.envFile.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.serverConfig.envFile.code')}</code></pre>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mb-6">
          <p className="mb-2">{t('tryFeatureExtension.tempo.serverConfig.envFile.note')}</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>{t('tryFeatureExtension.tempo.serverConfig.envFile.noteItems.1')}</li>
            <li>{t('tryFeatureExtension.tempo.serverConfig.envFile.noteItems.2')}</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.tempo.serverConfig.dockerCompose.title')}</h4>
        <p className="text-gray-700 mb-3">
          {t('tryFeatureExtension.tempo.serverConfig.dockerCompose.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.serverConfig.dockerCompose.code')}</code></pre>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mb-6">
          <p>{t('tryFeatureExtension.tempo.serverConfig.dockerCompose.note')}</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.tempo.serverConfig.tempoYaml.title')}</h4>
        <p className="text-gray-700 mb-3">
          {t('tryFeatureExtension.tempo.serverConfig.tempoYaml.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.serverConfig.tempoYaml.code')}</code></pre>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mb-6">
          <p>{t('tryFeatureExtension.tempo.serverConfig.tempoYaml.note')}</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.tempo.serverConfig.run.title')}</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.serverConfig.run.code')}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.tempo.serverConfig.gitignore.title')}</h4>
        <p className="text-gray-700 mb-3">
          {t('tryFeatureExtension.tempo.serverConfig.gitignore.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.tempo.serverConfig.gitignore.code')}</code></pre>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mb-6">
          <p className="font-semibold mb-2">{t('tryFeatureExtension.tempo.serverConfig.gitignore.warning.title')}</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>{t('tryFeatureExtension.tempo.serverConfig.gitignore.warning.items.1')}</li>
            <li>{t('tryFeatureExtension.tempo.serverConfig.gitignore.warning.items.2')}</li>
            <li>{t('tryFeatureExtension.tempo.serverConfig.gitignore.warning.items.3')}</li>
            <li>{t('tryFeatureExtension.tempo.serverConfig.gitignore.warning.items.4')}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

