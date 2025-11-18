export default function ProjectStructure() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">프로젝트 구조</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 프로젝트의 구조를 설명합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">전체 구조</h2>
        <p className="text-gray-700 mb-3">
          Ouroboros는 <strong>backend</strong> (Spring Boot 라이브러리)와 <strong>front</strong> (React 웹 UI)로 구성되어 있습니다.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">백엔드 패키지 구조</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">프론트엔드 구조</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">핵심 컴포넌트</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Global</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>OuroApiSpecManager</strong>: 명세서 캐시의 단일 소스 (중앙 캐시)</li>
          <li><strong>OuroProtocolHandler</strong>: 프로토콜 전략 패턴 (REST, WebSocket 지원)</li>
          <li><strong>SpecSyncPipeline</strong>: 명세서 동기화 파이프라인</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">REST</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>RestApiYamlParser</strong>: OpenAPI 3.1.0 YAML 파싱</li>
          <li><strong>RestApiSpecService</strong>: REST API 명세 CRUD 서비스</li>
          <li><strong>OuroborosMockFilter</strong>: Mock 서버 필터</li>
          <li><strong>ApiStateGlobalMethodFilter</strong>: @ApiState 메소드 필터링</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>AsyncApiYamlParser</strong>: AsyncAPI 3.0.0 YAML 파싱</li>
          <li><strong>WebSocketSpecService</strong>: WebSocket 명세 CRUD 서비스</li>
          <li><strong>OuroWebSocketHandler</strong>: WebSocket 프로토콜 핸들러</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">데이터 저장</h2>
        <p className="text-gray-700 mb-3">
          모든 API 명세서는 다음 위치에 단일 파일로 저장됩니다:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>REST API 명세:</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{`{프로젝트}/src/main/resources/ouroboros/rest/ourorest.yml`}</code></li>
          <li><strong>WebSocket/STOMP API 명세:</strong> <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{`{프로젝트}/src/main/resources/ouroboros/websocket/ourowebsocket.yml`}</code></li>
        </ul>
       
      </section>
    </div>
  );
}
