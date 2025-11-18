import { useTranslation } from 'react-i18next';

export default function Contributing() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('contributing.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('contributing.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.methods.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('contributing.methods.desc')}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('contributing.methods.items.bug')}</strong></li>
          <li><strong>{t('contributing.methods.items.feature')}</strong></li>
          <li><strong>{t('contributing.methods.items.docs')}</strong></li>
          <li><strong>{t('contributing.methods.items.code')}</strong></li>
          <li><strong>{t('contributing.methods.items.translation')}</strong></li>
          <li><strong>{t('contributing.methods.items.test')}</strong></li>
          <li><strong>{t('contributing.methods.items.ui')}</strong></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.setup.title')}</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.setup.requirements.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('contributing.setup.requirements.backend')}</strong></li>
          <li><strong>{t('contributing.setup.requirements.frontend')}</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.setup.backendTitle')}</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{t('contributing.backendSetupCode')}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.setup.frontendTitle')}</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{t('contributing.frontendSetupCode')}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.branch.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('contributing.branch.desc')}
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">{t('contributing.branch.table.branch')}</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">{t('contributing.branch.table.purpose')}</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">{t('contributing.branch.table.base')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">main</code></td>
                <td className="px-4 py-3">{t('contributing.branch.table.rows.main')}</td>
                <td className="px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">develop</code></td>
                <td className="px-4 py-3">{t('contributing.branch.table.rows.develop')}</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">main</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">feature/*</code></td>
                <td className="px-4 py-3">{t('contributing.branch.table.rows.feature')}</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">fix/*</code></td>
                <td className="px-4 py-3">{t('contributing.branch.table.rows.fix')}</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">hotfix/*</code></td>
                <td className="px-4 py-3">{t('contributing.branch.table.rows.hotfix')}</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">main</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">release/*</code></td>
                <td className="px-4 py-3">{t('contributing.branch.table.rows.release')}</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.commit.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('contributing.conventionalCommits')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto mb-4"><code>{`<type>: <short description>

[optional] body

[optional] footer`}</code></pre>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.commit.types.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">feat</code>: {t('contributing.commit.types.feat').replace('feat: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">fix</code>: {t('contributing.commit.types.fix').replace('fix: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">docs</code>: {t('contributing.commit.types.docs').replace('docs: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">style</code>: {t('contributing.commit.types.style').replace('style: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">refactor</code>: {t('contributing.commit.types.refactor').replace('refactor: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">test</code>: {t('contributing.commit.types.test').replace('test: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">chore</code>: {t('contributing.commit.types.chore').replace('chore: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">perf</code>: {t('contributing.commit.types.perf').replace('perf: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ci</code>: {t('contributing.commit.types.ci').replace('ci: ', '')}</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">build</code>: {t('contributing.commit.types.build').replace('build: ', '')}</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.commit.rules.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('contributing.commit.rules.subject')}</strong></li>
          <li><strong>{t('contributing.commit.rules.body')}</strong></li>
          <li><strong>{t('contributing.commit.rules.footer')}</strong></li>
          <li><strong>{t('contributing.commit.rules.lang')}</strong></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.codeStyle.title')}</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.codeStyle.java.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('contributing.codeStyle.java.items.1')}</strong></li>
          <li><strong>{t('contributing.codeStyle.java.items.2')}</strong></li>
          <li><strong>{t('contributing.codeStyle.java.items.3')}</strong></li>
          <li><strong>{t('contributing.codeStyle.java.items.4')}</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.codeStyle.typescript.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('contributing.codeStyle.typescript.items.1')}</strong></li>
          <li><strong>{t('contributing.codeStyle.typescript.items.2')}</strong></li>
          <li><strong>{t('contributing.codeStyle.typescript.items.3')}</strong></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.pr.title')}</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.pr.checklist.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code> {t('contributing.pr.checklist.items.1')}</li>
          <li>{t('contributing.pr.checklist.items.2')}</li>
          <li>{t('contributing.pr.checklist.items.3')}</li>
          <li>{t('contributing.pr.checklist.items.4')}</li>
          <li>{t('contributing.pr.checklist.items.5')}</li>
          <li>{t('contributing.pr.checklist.items.6')}</li>
          <li>{t('contributing.pr.checklist.items.7')}</li>
          <li>{t('contributing.pr.checklist.items.8')}</li>
          <li>{t('contributing.pr.checklist.items.9')}</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('contributing.pr.review.title')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>{t('contributing.pr.review.items.1')}</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code></li>
          <li><strong>{t('contributing.pr.review.items.2')}</strong></li>
          <li><strong>{t('contributing.pr.review.items.3')}</strong></li>
          <li><strong>{t('contributing.pr.review.items.4')}</strong></li>
          <li><strong>{t('contributing.pr.review.items.5')}</strong></li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.localTest.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('contributing.localTest.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{t('contributing.localTestCode')}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contributing.resources.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://github.com/whitesnakegang/ouroboros" className="text-primary hover:underline" target="_blank" rel="noreferrer">{t('common.githubRepository')}</a> – {t('contributing.resources.items.github')}</li>
          <li><a href="https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CONTRIBUTING.md" className="text-primary hover:underline" target="_blank" rel="noreferrer">{t('common.contributingGuide')}</a> – {t('contributing.resources.items.contributing')}</li>
          <li><a href="https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CODE_OF_CONDUCT.md" className="text-primary hover:underline" target="_blank" rel="noreferrer">{t('common.codeOfConduct')}</a> – {t('contributing.resources.items.codeOfConduct')}</li>
        </ul>
      </section>
    </div>
  );
}
