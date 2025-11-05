export default function ApiSpec() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">API 명세서 작성</h1>
      <p className="text-xl text-gray-600 mb-12">
        REST API 명세서를 작성하고 관리하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 UI에서 작성</h2>
        <p className="text-gray-700 mb-3">
          웹 UI (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">http://localhost:8080/ouroboros/index.html</code>)에서 
          시각적으로 API 명세서를 작성할 수 있습니다.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>"New API" 버튼 클릭</li>
          <li>경로, HTTP 메서드, 요약 입력</li>
          <li>요청 파라미터, 요청 본문, 응답 스키마 정의</li>
          <li>저장</li>
        </ol>
        <p className="text-gray-700 mt-3">
          저장하면 자동으로 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ourorest.yml</code> 파일에 반영되며,
          Mock API가 생성되어 바로 테스트할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세서 수정 및 삭제</h2>
        <p className="text-gray-700 mb-3">
          웹 UI에서 명세서를 선택하여 수정하거나 삭제할 수 있습니다. 
          모든 변경사항은 자동으로 파일에 저장됩니다.
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
    </div>
  );
}
