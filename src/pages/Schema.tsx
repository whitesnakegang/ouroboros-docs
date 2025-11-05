export default function Schema() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Schema 관리</h1>
      <p className="text-xl text-gray-600 mb-12">
        재사용 가능한 Schema 컴포넌트를 관리하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 생성</h2>
        <p className="text-gray-700 mb-3">
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">POST /ouro/rest-specs/schemas</code> 엔드포인트로 
          Schema를 생성할 수 있습니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`POST /ouro/rest-specs/schemas
Content-Type: application/json

{
  "name": "User",
  "schema": {
    "type": "object",
    "properties": {
      "id": { "type": "string" },
      "name": { "type": "string" }
    }
  }
}`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 재사용</h2>
        <p className="text-gray-700 mb-3">
          API 명세서에서 Schema를 참조하여 재사용할 수 있습니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`{
  "requestBody": {
    "content": {
      "application/json": {
        "schema": {
          "$ref": "#/components/schemas/User"
        }
      }
    }
  }
}`}</code></pre>
      </section>
    </div>
  );
}
