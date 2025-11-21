import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function QuickStart() {
  const { t } = useTranslation();
  const [restGifKey, setRestGifKey] = useState(0);
  const [wsGifKey, setWsGifKey] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setRestGifKey(prev => prev + 1);
    }, 10000);

    const interval2 = setInterval(() => {
      setWsGifKey(prev => prev + 1);
    }, 10000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('quickStart.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('quickStart.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.prerequisites.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('quickStart.prerequisites.items.java')}</li>
          <li>{t('quickStart.prerequisites.items.springBoot')}</li>
          <li>{t('quickStart.prerequisites.items.buildTool')}</li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm space-y-2">
          <p>
            {t('quickStart.prerequisites.lombokNote')}
          </p>
          <p>
            {t('quickStart.prerequisites.swaggerNote')} <Link to="/guide/known-issues" className="text-amber-900 underline font-medium">{t('sidebar.knownIssues')}</Link>{t('quickStart.prerequisites.swaggerNoteEnd')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.step1.title')}</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step1.basicDeps')}</h3>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step1.basicDepsDesc')}
        </p>
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm mb-4">
          <p>
            {t('quickStart.step1.versionWarning')}
          </p>
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Gradle</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.5'
}`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Maven</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`<dependency>
    <groupId>io.github.whitesnakegang</groupId>
    <artifactId>ouroboros</artifactId>
    <version>1.0.5</version>
</dependency>`}</code></pre>

        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mt-4 space-y-2">
          <p>
            {t('quickStart.step1.note1')}
          </p>
          <p>
            {t('quickStart.step1.note2')}
          </p>
          <p>
            {t('quickStart.step1.note3')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.step2.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step2.configDesc')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step2.restConfig')}</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{t('quickStart.step2.restConfigCode')}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          {t('quickStart.step2.disableNote')}
        </p>
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            {t('quickStart.step2.springwolfImportant')}
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step2.websocketConfig')}</h3>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step2.websocketDesc')}
        </p>
        
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mb-3">
          <p className="font-semibold mb-2">{t('quickStart.step2.websocketImportant')}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('quickStart.step2.websocketItem1')}</li>
            <li>{t('quickStart.step2.websocketItem2')}</li>
            <li>{t('quickStart.step2.websocketItem3')}</li>
            <li>{t('quickStart.step2.websocketItem4')}</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('quickStart.step2.option1')}</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{t('quickStart.step2.option1Code')}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t('quickStart.step2.option2')}</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{t('quickStart.step2.option2Code')}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.step3.title')}</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`./gradlew bootRun`}</code></pre>
        <p className="text-gray-700 mt-3">
          {t('quickStart.step3.ideNote')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.step4.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step4.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`http://localhost:8080/ouroboros/`}</code></pre>
        <p className="text-gray-700 mt-3">
          {t('quickStart.step4.note')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.step5.title')}</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step5.restTitle')}</h3>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step5.restDesc')}
        </p>
        <div className="mb-4">
          <img 
            key={restGifKey}
            src={`/images/gif/rest-work-flow.gif?t=${restGifKey}`}
            alt={t('quickStart.restWorkflowAlt')} 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('quickStart.step5.restSteps.1')}</li>
          <li>{t('quickStart.step5.restSteps.2')}</li>
          <li>{t('quickStart.step5.restSteps.3')}</li>
        </ol>
        <p className="text-gray-700 mt-3">
          {t('quickStart.step5.restNote')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step5.websocketTitle')}</h3>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step5.websocketDesc')}
        </p>
        <div className="mb-4">
          <img 
            key={wsGifKey}
            src={`/images/gif/websocket-workflow.gif?t=${wsGifKey}`}
            alt={t('quickStart.websocketWorkflowAlt')} 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('quickStart.step5.websocketSteps.1')}</li>
          <li>{t('quickStart.step5.websocketSteps.2')}</li>
          <li>{t('quickStart.step5.websocketSteps.3')}</li>
          <li>{t('quickStart.step5.websocketSteps.4')}</li>
        </ol>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            {t('quickStart.step5.websocketNote')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.step6.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step6.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`curl http://localhost:8080/api/users`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.step7.title')}</h2>
        <p className="text-gray-700 mb-4">
          {t('quickStart.step7.desc')}
        </p>


        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step7.webUiTitle')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('quickStart.step7.webUiSteps.1')}</li>
          <li>{t('quickStart.step7.webUiSteps.2')}</li>
          <li>{t('quickStart.step7.webUiSteps.3')}</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step7.methodTracingTitle')}</h3>
        <p className="text-gray-700 mb-3">
          {t('quickStart.step7.methodTracingDesc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages=your.package`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          {t('quickStart.step7.methodTracingNote')} <Link to="/guide/try-feature" className="text-primary hover:underline">{t('sidebar.tryFeature')}</Link> {t('quickStart.prerequisites.methodTracingNoteEnd')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code> {t('quickStart.prerequisites.methodTracingNoteEnd2')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.step7.websocketTryTitle')}</h3>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm space-y-2">
          <p>
            <strong>{t('quickStart.step7.websocketTryImportant')}</strong>
          </p>
          <p>
            {t('quickStart.step7.websocketTryDesc')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.nextSteps.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/guide/basic-usage" className="text-primary hover:underline">{t('sidebar.basicUsage')}</Link> - {t('quickStart.nextSteps.basicUsage')}</li>
          <li><Link to="/guide/api-spec" className="text-primary hover:underline">{t('sidebar.apiSpec')}</Link> - {t('quickStart.nextSteps.apiSpec')}</li>
          <li><Link to="/guide/mock-api" className="text-primary hover:underline">{t('sidebar.mockApi')}</Link> - {t('quickStart.nextSteps.mockApi')}</li>
          <li><Link to="/guide/try-feature" className="text-primary hover:underline">{t('sidebar.tryFeature')}</Link> - {t('quickStart.nextSteps.tryFeature')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quickStart.specLocation.title')}</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.specLocation.restTitle')}</h3>
        <p className="text-gray-700 mb-3">
          {t('quickStart.specLocation.restDesc')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('quickStart.specLocation.websocketTitle')}</h3>
        <p className="text-gray-700 mb-3">
          {t('quickStart.specLocation.websocketDesc')}
        </p>

      </section>
    </div>
  );
} 