import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BasicUsage() {
  const { t } = useTranslation();
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGifKey(prev => prev + 1);
    }, 20000); // 10초마다 리로드

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('basicUsage.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('basicUsage.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('basicUsage.workflow.title')}</h2>
        <div className="mb-4">
          <img 
            key={gifKey}
            src={`/images/gif/rest-work-flow.gif?t=${gifKey}`}
            alt="REST API 워크플로우" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.workflow.step1.title')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('basicUsage.workflow.step1.items.1')}</li>
          <li>{t('basicUsage.workflow.step1.items.2')}
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>{t('basicUsage.workflow.step1.items.2Name')}</strong></li>
              <li><strong>{t('basicUsage.workflow.step1.items.2Type')}</strong></li>
              <li>{t('basicUsage.workflow.step1.items.2Props')}</li>
              <li>{t('basicUsage.workflow.step1.items.2Mock')}</li>
              <li>{t('basicUsage.workflow.step1.items.2Required')}</li>
            </ul>
          </li>
          <li>{t('basicUsage.workflow.step1.items.3')}</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.workflow.step2.title')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('basicUsage.workflow.step2.items.1')}</li>
          <li>{t('basicUsage.workflow.step2.items.2')}</li>
          <li>{t('basicUsage.workflow.step2.items.3')}
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>{t('basicUsage.workflow.step2.items.3Path')}</strong></li>
              <li><strong>{t('basicUsage.workflow.step2.items.3Method')}</strong></li>
              <li><strong>{t('basicUsage.workflow.step2.items.3Summary')}</strong></li>
              <li><strong>{t('basicUsage.workflow.step2.items.3Request')}</strong></li>
              <li><strong>{t('basicUsage.workflow.step2.items.3Response')}</strong></li>
              <li><strong>{t('basicUsage.workflow.step2.items.3Progress')}</strong></li>
            </ul>
          </li>
          <li>{t('basicUsage.workflow.step2.items.4')}</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.workflow.step3.title')}</h3>
        <p className="text-gray-700 mb-2">
          {t('basicUsage.workflow.step3.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{`curl -X POST http://localhost:8080/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Doe", "email": "john@example.com"}'`}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.workflow.step4.title')}</h3>
        <p className="text-gray-700 mb-2">
          {t('basicUsage.workflow.step4.desc')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{`@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @PostMapping
    @ApiState(state = ApiState.State.IMPLEMENTING)
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // 실제 구현...
        return ResponseEntity.status(201).body(savedUser);
    }
}`}</code></pre>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mb-4">
          <p>{t('basicUsage.workflow.step4.warning')}</p>
        </div>
        <p className="text-gray-700 mb-2">
          {t('basicUsage.workflow.step4.note')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.workflow.step5.title')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('basicUsage.workflow.step5.items.1')}</li>
          <li>{t('basicUsage.workflow.step5.items.2')}</li>
          <li>{t('basicUsage.workflow.step5.items.3')}</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('basicUsage.webUI.title')}</h2>
        <p className="text-gray-700 mb-4">
          {t('basicUsage.webUI.desc')}
        </p>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/sidebar-badges.png" 
            alt="사이드바와 상태 배지" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-4">
          {t('basicUsage.webUI.desc2')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.webUI.areas.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('basicUsage.webUI.areas.items.1')}</li>
          <li>{t('basicUsage.webUI.areas.items.2')}</li>
          <li>{t('basicUsage.webUI.areas.items.3')}</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.webUI.badges.title')}</h3>
        <p className="text-gray-700 mb-2">
          {t('basicUsage.webUI.badges.desc')}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('basicUsage.webUI.badges.items.completed')}</li>
          <li>{t('basicUsage.webUI.badges.items.implementing')}</li>
          <li>{t('basicUsage.webUI.badges.items.mock')}</li>
          <li>{t('basicUsage.webUI.badges.items.bugfix')}</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('basicUsage.webUI.features.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>{t('basicUsage.webUI.features.items.1')}</li>
          <li>{t('basicUsage.webUI.features.items.2')}</li>
          <li>{t('basicUsage.webUI.features.items.3')}</li>
          <li>{t('basicUsage.webUI.features.items.4')}</li>
          <li>{t('basicUsage.webUI.features.items.5')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('basicUsage.nextSteps.title')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/guide/api-spec" className="text-primary hover:underline">{t('sidebar.apiSpec')}</Link> – {t('basicUsage.nextSteps.items.1')}</li>
          <li><Link to="/guide/schema" className="text-primary hover:underline">{t('sidebar.schema')}</Link> – {t('basicUsage.nextSteps.items.2')}</li>
          <li><Link to="/guide/mock-api" className="text-primary hover:underline">{t('sidebar.mockApi')}</Link> – {t('basicUsage.nextSteps.items.3')}</li>
        </ul>
      </section>
    </div>
  );
} 