import { useTranslation } from 'react-i18next';

export default function TryFeatureExtension() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('tryFeatureExtension.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('tryFeatureExtension.subtitle')}
      </p>

      <section id="aspectj" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tryFeatureExtension.aspectj.title')}</h2>
        <p className="text-gray-700 mb-6">
          {t('tryFeatureExtension.aspectj.subtitle')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.aspectj.why.title')}</h3>

        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 mb-4">
          <p className="font-semibold mb-2">{t('tryFeatureExtension.aspectj.why.springAop.title')}</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>{t('tryFeatureExtension.aspectj.why.springAop.items.1')}</li>
            <li>{t('tryFeatureExtension.aspectj.why.springAop.items.2')}</li>
            <li>{t('tryFeatureExtension.aspectj.why.springAop.items.3')}</li>
            <li>{t('tryFeatureExtension.aspectj.why.springAop.items.4')}</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 mb-6">
          <p className="font-semibold mb-2">{t('tryFeatureExtension.aspectj.why.aspectj.title')}</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>{t('tryFeatureExtension.aspectj.why.aspectj.items.1')}</li>
            <li>{t('tryFeatureExtension.aspectj.why.aspectj.items.2')}</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.aspectj.quickStart.title')}</h3>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.aspectj.quickStart.step1.title')}</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.aspectj.quickStart.step1.pluginsCode')}</code></pre>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.aspectj.quickStart.step1.depsCode')}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.aspectj.quickStart.step2.title')}</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{t('tryFeatureExtension.aspectj.quickStart.step2.code')}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('tryFeatureExtension.aspectj.quickStart.step3.title')}</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-6"><code>{t('tryFeatureExtension.aspectj.quickStart.step3.code')}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.aspectj.verification.title')}</h3>
        <p className="text-gray-700 mb-3">
          {t('tryFeatureExtension.aspectj.verification.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-6"><code>{t('tryFeatureExtension.aspectj.verification.logCode')}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.aspectj.maven.title')}</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-6"><code>{t('tryFeatureExtension.aspectj.maven.code')}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('tryFeatureExtension.aspectj.comparison.title')}</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.feature')}</th>
                <th className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.springAop')}</th>
                <th className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.aspectj')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.selfInvocation')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">❌ {t('tryFeatureExtension.aspectj.comparison.table.impossible')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">✅ {t('tryFeatureExtension.aspectj.comparison.table.possible')}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.privateMethod')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">❌ {t('tryFeatureExtension.aspectj.comparison.table.impossible')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">✅ {t('tryFeatureExtension.aspectj.comparison.table.possible')}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.staticMethod')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">❌ {t('tryFeatureExtension.aspectj.comparison.table.impossible')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">✅ {t('tryFeatureExtension.aspectj.comparison.table.possible')}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.configComplexity')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{t('tryFeatureExtension.aspectj.comparison.table.simple')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{t('tryFeatureExtension.aspectj.comparison.table.slightlyComplex')}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.buildTime')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{t('tryFeatureExtension.aspectj.comparison.table.fast')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{t('tryFeatureExtension.aspectj.comparison.table.slightlySlow')}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">{t('tryFeatureExtension.aspectj.comparison.table.runtimePerformance')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{t('tryFeatureExtension.aspectj.comparison.table.proxyOverhead')}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{t('tryFeatureExtension.aspectj.comparison.table.almostNoOverhead')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="tempo" className="mb-12">
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

