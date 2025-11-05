export default function ProjectStructure() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">프로젝트 구조</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 프로젝트의 구조를 설명합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">패키지 구조</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`kr.co.ouroboros/
├── ui/
│   └── rest/
│       ├── spec/controller/     [REST API & Schema CRUD endpoints]
│       └── tryit/controller/    [Try/QA endpoints]
├── core/
│   ├── global/
│   │   ├── annotation/          [ApiState annotation]
│   │   ├── config/              [Auto-configuration]
│   │   ├── handler/             [Protocol strategy + SpecSyncPipeline]
│   │   ├── manager/             [OuroApiSpecManager - CENTRAL CACHE]
│   │   ├── mock/                [Mock data generation with Faker]
│   │   └── response/            [GlobalApiResponse wrapper]
│   └── rest/
│       ├── common/dto/          [OpenAPI 3.1.0 DTOs]
│       ├── common/yaml/         [RestApiYamlParser]
│       ├── spec/
│       │   ├── service/         [REST API & Schema services]
│       │   ├── validator/       [YAML structure validators]
│       │   └── exception/       [Custom exceptions]
│       ├── handler/             [Diff helpers & comparators]
│       ├── mock/                [Mock server filter & registry]
│       ├── filter/              [ApiState method filter]
│       └── tryit/               [OpenTelemetry tracing & Tempo integration]
│           ├── identification/  [Try request filter]
│           ├── infrastructure/  [Tracing, instrumentation, Tempo client]
│           ├── trace/           [Trace analysis & issue detection]
│           └── service/         [Try result services]
└── websocket/                   [WebSocket support - in progress]`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">핵심 컴포넌트</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>OuroApiSpecManager</strong>: 명세서 캐시의 단일 소스 (중앙 캐시)</li>
          <li><strong>OuroProtocolHandler</strong>: 프로토콜 전략 패턴 (REST, GraphQL, WebSocket 지원)</li>
          <li><strong>RestApiYamlParser</strong>: OpenAPI 3.1.0 YAML 파싱</li>
          <li><strong>OuroborosMockFilter</strong>: Mock 서버 필터</li>
          <li><strong>ApiState Filter</strong>: 메소드 트래킹 필터</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">데이터 저장</h2>
        <p className="text-gray-700 mb-3">
          모든 API 명세서는 다음 위치에 단일 파일로 저장됩니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`{프로젝트}/src/main/resources/ouroboros/rest/ourorest.yml`}</code></pre>
      </section>
    </div>
  );
}
