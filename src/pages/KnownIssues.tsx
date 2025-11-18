import { useTranslation } from 'react-i18next';

export default function KnownIssues() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('knownIssues.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('knownIssues.subtitle')}
      </p>

      <section className="mb-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h2 className="text-2xl font-bold text-red-900 mb-3">{t('knownIssues.swagger.title')}</h2>
          <p className="text-gray-800 mb-4">
            <strong>{t('knownIssues.swagger.problem').split(':')[0]}:</strong> {t('knownIssues.swagger.problem').split(': ')[1]}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>{t('knownIssues.swagger.symptoms')}</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
            <li>{t('knownIssues.swagger.symptomItems.1')}</li>
            <li>{t('knownIssues.swagger.symptomItems.2')}</li>
            <li>{t('knownIssues.swagger.symptomItems.3')}</li>
          </ul>
          <p className="text-gray-800 mb-4">
            <strong>{t('common.cause')}:</strong> {t('knownIssues.swagger.cause')}
          </p>
          <div className="bg-white border border-red-200 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('knownIssues.swagger.solution.title')}</h3>
            <p className="text-gray-700 mb-3">
              {t('knownIssues.swagger.solutionText')}
            </p>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`// Gradle
implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.13'

// Maven
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.8.13</version>
</dependency>`}</code></pre>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-800">
              <strong>{t('common.note')}:</strong> {t('knownIssues.swagger.note')}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h2 className="text-2xl font-bold text-red-900 mb-3">{t('knownIssues.springBoot.title')}</h2>
          <p className="text-gray-800 mb-4">
            <strong>{t('common.problem')}:</strong> {t('knownIssues.springBoot.problem').replace('문제: ', '')}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>{t('common.supportedVersion')}:</strong> {t('knownIssues.springBoot.supported').replace('지원 버전: ', '')}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>{t('common.cause')}:</strong> {t('knownIssues.springBoot.cause').replace('원인: ', '')}
          </p>
          <div className="bg-white border border-red-200 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('knownIssues.springBoot.solution.title')}</h3>
            <p className="text-gray-700 mb-3">
              {t('knownIssues.springBoot.solution.desc')}
            </p>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`// Gradle
implementation platform('org.springframework.boot:spring-boot-dependencies:3.5.7')

// Maven
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.7</version>
</parent>`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('knownIssues.bugReport.title')}</h2>
        <p className="text-gray-700 mb-4">
          {t('knownIssues.bugReport.desc')}
        </p>
        <a
          href="https://github.com/whitesnakegang/ouroboros/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          {t('knownIssues.bugReport.button')}
        </a>
      </section>
    </div>
  );
}

