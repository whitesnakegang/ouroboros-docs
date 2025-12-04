import { useTranslation } from 'react-i18next';

export default function ProjectStructure() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('projectStructure.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('projectStructure.subtitle')}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.overall.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('projectStructure.overall.descPart1')} <strong>{t('projectStructure.overall.descPart2')}</strong> {t('projectStructure.overall.descPart3')} <strong>{t('projectStructure.overall.descPart4')}</strong> {t('projectStructure.overall.descPart5')}
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`ouroboros/
├── backend/           [Spring Boot Library]
│   ├── src/main/java/kr.co.ouroboros/
│   └── build.gradle
├── front/             [React Web UI]
│   ├── src/
│   └── package.json
├── docs/              [Documentation]
├── CONTRIBUTING.md
└── README.md`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.backend.title')}</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`kr.co.ouroboros/
├── core/
│   ├── global/
│   │   ├── annotation/          [@ApiState annotation]
│   │   ├── config/              [Auto-configuration]
│   │   ├── exception/           [Global exception handler]
│   │   ├── handler/             [OuroProtocolHandler, SpecSyncPipeline]
│   │   ├── manager/             [OuroApiSpecManager - Central cache]
│   │   ├── mock/                [Mock data generation (DataFaker)]
│   │   ├── properties/          [OuroborosProperties]
│   │   ├── response/            [GlobalApiResponse wrapper]
│   │   ├── runner/              [ApplicationReady event handler]
│   │   ├── spec/                [OuroApiSpec, SpecValidationUtil]
│   │   └── tryit/               [Try feature: method tracing, storage, service]
│   ├── rest/
│   │   ├── common/
│   │   │   ├── dto/             [OpenAPI 3.1.0 DTOs]
│   │   │   └── yaml/            [RestApiYamlParser]
│   │   ├── config/              [OpenAPI Customizer]
│   │   ├── filter/              [ApiStateGlobalMethodFilter]
│   │   ├── handler/             [OuroRestHandler, comparison & diff helpers]
│   │   ├── mock/                [Mock server filter & registry]
│   │   ├── spec/                [REST API spec CRUD service]
│   │   └── tryit/               [REST Try identification]
│   └── websocket/
│       ├── common/
│       │   ├── dto/             [AsyncAPI 3.0.0 DTOs]
│       │   └── yaml/            [AsyncApiYamlParser]
│       ├── config/              [AsyncAPI Customizer, WebSocket config]
│       ├── handler/             [OuroWebSocketHandler, comparison helpers]
│       ├── spec/                [WebSocket spec CRUD service]
│       └── tryit/               [WebSocket Try identification & message tracing]
└── ui/
    ├── frontend/                [Frontend static resources serving]
    ├── global/
    │   └── tryit/controller/    [Try feature REST API]
    ├── rest/
    │   └── spec/controller/     [REST API spec endpoints]
    └── websocket/
        └── spec/controller/     [WebSocket spec endpoints]`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.frontend.title')}</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`front/
├── src/
│   ├── app/                     [App component]
│   ├── components/              [Common components]
│   ├── features/
│   │   ├── spec/                [API spec editor & viewer]
│   │   └── sidebar/             [Sidebar navigation]
│   ├── services/                [Backend API communication]
│   ├── store/                   [Zustand state management]
│   └── ui/                      [UI components]
└── public/                      [Static resources]`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.components.title')}</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.components.global.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.components.global.items.1')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.2')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.3')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.4')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.5')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.6')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.7')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.components.rest.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.components.rest.items.1')}</strong></li>
          <li><strong>{t('projectStructure.components.rest.items.2')}</strong></li>
          <li><strong>{t('projectStructure.components.rest.items.3')}</strong></li>
          <li><strong>{t('projectStructure.components.rest.items.4')}</strong></li>
          <li><strong>{t('projectStructure.components.rest.items.5')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.components.websocket.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.components.websocket.items.1')}</strong></li>
          <li><strong>{t('projectStructure.components.websocket.items.2')}</strong></li>
          <li><strong>{t('projectStructure.components.websocket.items.3')}</strong></li>
          <li><strong>{t('projectStructure.components.websocket.items.4')}</strong></li>
          <li><strong>{t('projectStructure.components.websocket.items.5')}</strong></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.storage.title')}</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.storage.apiSpec.title')}</h3>
        <p className="text-gray-700 mb-3">
          {t('projectStructure.storage.apiSpec.desc')}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.storage.apiSpec.rest')}</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{t('common.project')}/src/main/resources/ouroboros/rest/ourorest.yml</code></li>
          <li><strong>{t('projectStructure.storage.apiSpec.websocket')}</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{t('common.project')}/src/main/resources/ouroboros/websocket/ourowebsocket.yml</code></li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.storage.tryData.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.storage.tryData.inMemory')}</strong></li>
          <li><strong>{t('projectStructure.storage.tryData.tempo')}</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{t('common.project')}/tempo-data</code></li>
        </ul>
      </section>
    </div>
  );
}
