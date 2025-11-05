export default function BasicUsage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">기본 사용법</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros의 기본 사용 워크플로우를 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">전체 워크플로우</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-4">
          <li><strong>API 명세서 작성</strong>: 웹 UI 또는 REST API로 OpenAPI 3.1.0 명세서 작성</li>
          <li><strong>Mock API 자동 생성</strong>: 명세서가 저장되면 자동으로 Mock API가 생성됨</li>
          <li><strong>프론트엔드 개발</strong>: Mock API로 프론트엔드 개발 진행</li>
          <li><strong>백엔드 구현</strong>: 실제 API 구현 및 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code> 어노테이션 추가</li>
          <li><strong>구현 검증</strong>: Ouroboros가 자동으로 명세서와 구현의 일치성 검증</li>
          <li><strong>Try 기능</strong>: 성능 추적 및 분석</li>
        </ol>
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
    </div>
  );
} 