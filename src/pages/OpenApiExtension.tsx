export default function OpenApiExtension() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">OpenAPI 확장</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 커스텀 확장 필드를 사용하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Operation-level 확장</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-id</code>: 고유 식별자 (UUID)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-progress</code>: 진행 상태 (mock, implementing, completed)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-tag</code>: 개발 태그 (none, implementing, bugfix)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-diff</code>: 명세-구현 차이 (none, request, response, endpoint, both)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-isvalid</code>: 검증 상태 플래그</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema-level 확장</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code>: Mock 데이터 생성 표현식 (DataFaker 문법)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-orders</code>: 필드 순서 정의 (JSON 응답 키 순서)</li>
        </ul>
      </section>
    </div>
  );
}
