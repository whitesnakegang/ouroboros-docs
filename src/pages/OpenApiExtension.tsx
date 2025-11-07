export default function OpenApiExtension() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">OpenAPI 확장</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 커스텀 확장 필드와 자동 보정 규칙을 정리했습니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Operation-level 확장</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-id</code>: 고유 식별자 (UUID)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-progress</code>: 진행 상태 (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code> / <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">completed</code>)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-tag</code>: 개발 태그 (none, implementing, bugfix)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-diff</code>: 명세-구현 차이 (none, request, response, endpoint, both)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-isvalid</code>: 검증 상태 플래그 (웹 UI에서 사용)</li>
        </ul>
        <p className="text-sm text-gray-600">초기 생성 시 모든 값은 자동으로 채워지며, 명세를 수정하면 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">diff</code>가 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">none</code>으로 재설정됩니다.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema-level 확장</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code>: Mock 데이터 생성 표현식 (DataFaker 문법)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-orders</code>: 필드 순서 정의 (JSON 응답 키 순서)</li>
        </ul>
        <p className="text-sm text-gray-600">
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">SchemaValidator</code>가 누락된 항목을 자동으로 채우며, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">minItems &gt; maxItems</code>와 같은 오류를 보정합니다.
        </p>
      </section>
    </div>
  );
}
