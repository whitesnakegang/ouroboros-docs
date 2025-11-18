import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Developer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('developer.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('developer.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('developer.quickLinks.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/developer/project-structure" className="text-primary hover:underline">{t('sidebar.projectStructure')}</Link> – {t('developer.quickLinks.items.1')}</li>
          <li><Link to="/developer/contributing" className="text-primary hover:underline">{t('sidebar.contributing')}</Link> – {t('developer.quickLinks.items.2')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('developer.resources.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://github.com/whitesnakegang/ouroboros" className="text-primary hover:underline" target="_blank" rel="noreferrer">{t('common.githubRepository')}</a> – {t('developer.resources.items.github')}</li>
          <li><a href={i18n.language === 'ko' ? "https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CONTRIBUTING.md" : "https://github.com/whitesnakegang/ouroboros/blob/develop/CONTRIBUTING.md"} className="text-primary hover:underline" target="_blank" rel="noreferrer">{t('common.contributingGuide')}</a> – {t('developer.resources.items.contributing')}</li>
          <li><a href={i18n.language === 'ko' ? "https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CODE_OF_CONDUCT.md" : "https://github.com/whitesnakegang/ouroboros/blob/develop/CODE_OF_CONDUCT.md"} className="text-primary hover:underline" target="_blank" rel="noreferrer">{t('common.codeOfConduct')}</a> – {t('developer.resources.items.codeOfConduct')}</li>
        </ul>
      </section>
    </div>
  );
}



