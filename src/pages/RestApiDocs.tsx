export default function RestApiDocs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">API 문서</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros는 웹 UI를 통해 API 명세를 관리합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 UI 접속</h2>
        <p className="text-gray-700 mb-3">
          애플리케이션 실행 후 다음 주소로 접속하세요:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`http://localhost:8080/ouroboros/index.html`}</code></pre>
        <p className="text-gray-700 mt-3">
          웹 UI에서 API 명세서를 시각적으로 생성, 수정, 삭제할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세서 저장 위치</h2>
        <p className="text-gray-700 mb-3">
          모든 API 명세서는 다음 위치에 단일 파일로 저장됩니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`{프로젝트}/src/main/resources/ouroboros/rest/ourorest.yml`}</code></pre>
        <p className="text-gray-700 mt-3">
          이 파일은 OpenAPI 3.1.0 표준을 따르며, 모든 API 명세가 통합되어 관리됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">현재 지원 범위</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>REST API</strong>: 완전 지원 (명세서 작성, Mock API, 구현 검증)</li>
          <li><strong>GraphQL</strong>: 개발 예정 (현재 REST만 지원)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">API 명세서 확인 방법</h2>
        <p className="text-gray-700 mb-3">
          저장된 명세서는 다음 방법으로 확인할 수 있습니다:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 목록 조회 및 상세 보기</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ourorest.yml</code> 파일 직접 확인</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 문서</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="/guide/api-spec" className="text-primary hover:underline">API 명세서 작성 가이드</a></li>
          <li><a href="/guide/schema" className="text-primary hover:underline">Schema 관리 가이드</a></li>
          <li><a href="/guide/mock-api" className="text-primary hover:underline">Mock API 사용법</a></li>
        </ul>
      </section>
    </div>
  );
}
