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
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-id</code>: API 명세 고유 식별자 (UUID)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-progress</code>: 개발 진행 상태 (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code> | <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">completed</code>)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-tag</code>: 개발 태그 (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">none</code> | <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">implementing</code> | <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">bugfix</code>)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-diff</code>: 명세와 구현의 차이 (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">none</code> | <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">request</code> | <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">response</code> | <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">endpoint</code> | <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">both</code>)
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-600">
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">none</code>: 차이가 없음</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">request</code>: 요청 파라미터, 헤더, 본문 스키마에 차이가 있음</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">response</code>: 응답 상태 코드, 헤더, 본문 스키마에 차이가 있음</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">endpoint</code>: 경로 및 메서드가 명세와 구현 간 일치하지 않음</li>
              <li><code className="bg-gray-100 px-1 py-0.5 rounded">both</code>: 요청과 응답 모두 차이가 있음</li>
            </ul>
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          명세를 수정하면 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-diff</code>가 자동으로 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">none</code>으로 재설정됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema-level 확장</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code>: DataFaker 표현식 (예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{name.fullName}}'}</code>)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-orders</code>: 필드 순서 배열</li>
        </ul>
        <p className="text-sm text-gray-600 mb-4">
          Ouroboros는 검증 중에 누락된 Ouroboros 확장 필드를 자동으로 추가하고 명세를 보강합니다.
        </p>
      </section>
    </div>
  );
}
