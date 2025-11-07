export default function MockApi() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Mock API</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 Mock 응답을 확인하고 활용하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mock 테스트</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>API 상세 화면에서 “Try” 탭을 선택합니다.</li>
          <li>필요한 Path/Query/Header 값을 입력합니다.</li>
          <li>Request Body가 있으면 예시 JSON을 수정한 뒤 “Send” 버튼을 클릭합니다.</li>
          <li>우측 하단에서 Mock 응답 본문과 헤더를 바로 확인할 수 있습니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mock 데이터 관리</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Schema에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code> 값을 지정하면 Try 응답에 반영됩니다.</li>
          <li>Response 탭에서 예시 JSON을 직접 편집해 API 문서에서 공유할 Mock 예시를 구성할 수 있습니다.</li>
          <li>“Copy cURL” 버튼을 이용하면 동일한 Mock 호출을 터미널에서 재현할 수 있습니다.</li>
        </ul>
      </section>
    </div>
  );
}
