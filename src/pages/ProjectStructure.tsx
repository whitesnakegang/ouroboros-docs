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
│   │   ├── manager/             [OuroApiSpecManager - 중앙 캐시]
│   │   ├── mock/                [Mock 데이터 생성 (DataFaker)]
│   │   ├── properties/          [OuroborosProperties]
│   │   ├── response/            [GlobalApiResponse wrapper]
│   │   ├── runner/              [ApplicationReady 이벤트 처리]
│   │   └── spec/                [OuroApiSpec, SpecValidationUtil]
│   ├── rest/
│   │   ├── common/
│   │   │   ├── dto/             [OpenAPI 3.1.0 DTOs]
│   │   │   └── yaml/            [RestApiYamlParser]
│   │   ├── config/              [OpenAPI Customizer]
│   │   ├── filter/              [ApiStateGlobalMethodFilter]
│   │   ├── handler/             [OuroRestHandler, 비교 및 Diff 헬퍼]
│   │   ├── mock/                [Mock 서버 필터 및 레지스트리]
│   │   ├── spec/                [REST API 명세 CRUD 서비스]
│   │   └── tryit/               [OpenTelemetry 추적 및 Tempo 연동]
│   └── websocket/
│       ├── common/
│       │   ├── dto/             [AsyncAPI 3.0.0 DTOs]
│       │   └── yaml/            [AsyncApiYamlParser]
│       ├── config/              [AsyncAPI Customizer, WebSocket 설정]
│       ├── handler/             [OuroWebSocketHandler, 비교 헬퍼]
│       ├── spec/                [WebSocket 명세 CRUD 서비스]
│       └── tryit/               [WebSocket 메시지 추적]
└── ui/
    ├── frontend/                [Frontend 정적 리소스 서빙]
    ├── rest/
    │   ├── spec/controller/     [REST API 명세 엔드포인트]
    │   └── tryit/controller/    [Try 기능 엔드포인트]
    └── websocket/
        └── spec/controller/     [WebSocket 명세 엔드포인트]`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.frontend.title')}</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`front/
├── src/
│   ├── app/                     [App 컴포넌트]
│   ├── components/              [공통 컴포넌트]
│   ├── features/
│   │   ├── spec/                [API 명세 편집기 및 뷰어]
│   │   └── sidebar/             [사이드바 네비게이션]
│   ├── services/                [백엔드 API 통신]
│   ├── store/                   [Zustand 상태 관리]
│   └── ui/                      [UI 컴포넌트]
└── public/                      [정적 리소스]`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.components.title')}</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.components.global.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.components.global.items.1')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.2')}</strong></li>
          <li><strong>{t('projectStructure.components.global.items.3')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.components.rest.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.components.rest.items.1')}</strong></li>
          <li><strong>{t('projectStructure.components.rest.items.2')}</strong></li>
          <li><strong>{t('projectStructure.components.rest.items.3')}</strong></li>
          <li><strong>{t('projectStructure.components.rest.items.4')}</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('projectStructure.components.websocket.title')}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.components.websocket.items.1')}</strong></li>
          <li><strong>{t('projectStructure.components.websocket.items.2')}</strong></li>
          <li><strong>{t('projectStructure.components.websocket.items.3')}</strong></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('projectStructure.storage.title')}</h2>
        <p className="text-gray-700 mb-3">
          {t('projectStructure.storage.desc')}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>{t('projectStructure.storage.rest')}</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{t('common.project')}/src/main/resources/ouroboros/rest/ourorest.yml</code></li>
          <li><strong>{t('projectStructure.storage.websocket')}</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{t('common.project')}/src/main/resources/ouroboros/websocket/ourowebsocket.yml</code></li>
        </ul>
       
      </section>
    </div>
  );
}
