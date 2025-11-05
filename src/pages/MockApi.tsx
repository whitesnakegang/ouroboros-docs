export default function MockApi() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Mock API</h1>
      <p className="text-xl text-gray-600 mb-12">
        자동 생성되는 Mock 서버를 사용하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">자동 Mock 생성</h2>
        <p className="text-gray-700 mb-4">
          API 명세서를 저장하면 자동으로 Mock API가 생성됩니다. 
          웹 UI에서 명세서의 진행 상태가 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code>인 경우,
          해당 엔드포인트는 Mock API로 동작합니다.
        </p>
        <p className="text-gray-700 mb-4">
          웹 UI에서 "Try" 버튼을 클릭하여 Mock API를 바로 테스트할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">DataFaker 표현식</h2>
        <p className="text-gray-700 mb-3">
          웹 UI에서 Schema의 각 속성에 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code> 필드를 추가하여 
          Mock 데이터 생성 방식을 지정할 수 있습니다:
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
        <p className="text-gray-700 mt-3">
          DataFaker 표현식을 사용하면 더 현실적인 Mock 데이터를 생성할 수 있습니다.
        </p>
      </section>
    </div>
  );
}
