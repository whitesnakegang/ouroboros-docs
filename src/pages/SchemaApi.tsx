export default function SchemaApi() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Schema 관리</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 스키마를 작성하고 유지하는 기본 절차를 정리했습니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 UI에서 Schema 관리</h2>
        <p className="text-gray-700 mb-4">
          스키마 탭에서는 생성, 수정, 삭제가 모두 지원됩니다. REST API를 통한 제어는 <a href="/guide/schema" className="text-primary hover:underline">Schema 가이드</a>에서 확인하세요.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 생성</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 Schema 탭으로 이동</li>
          <li>"New Schema" 버튼 클릭</li>
          <li>Schema 이름과 속성 정의</li>
          <li>저장</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 조회</h2>
        <p className="text-gray-700 mb-3">
          웹 UI에서 생성된 모든 Schema 목록을 확인할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 수정</h2>
        <p className="text-gray-700 mb-3">
          우측 패널에서 속성을 수정하면 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">orders</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">required</code> 항목이 자동으로 정렬됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 삭제</h2>
        <p className="text-gray-700 mb-3">
          웹 UI에서 Schema를 선택하고 삭제 버튼을 클릭하면 삭제됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 재사용</h2>
        <p className="text-gray-700 mb-3">
          API 명세서 작성 시 생성한 Schema를 참조하여 재사용할 수 있습니다.
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$ref</code>를 통해 Schema를 참조하세요.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mock 데이터 표현식</h2>
        <p className="text-gray-700 mb-3">
          Schema의 각 속성에 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code> 필드를 추가하여 
          Mock 데이터 생성 방식을 지정할 수 있습니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`{
  "properties": {
    "id": {
      "type": "string",
      "x-ouroboros-mock": "{{$random.uuid}}"
    },
    "name": {
      "type": "string",
      "x-ouroboros-mock": "{{$name.fullName}}"
    }
  }
}`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 문서</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="/guide/schema" className="text-primary hover:underline">Schema 관리 가이드</a></li>
          <li><a href="/guide/mock-api" className="text-primary hover:underline">Mock API 사용법</a></li>
          <li><a href="/guide/api-spec" className="text-primary hover:underline">API 명세서 작성</a></li>
        </ul>
      </section>
    </div>
  );
}
