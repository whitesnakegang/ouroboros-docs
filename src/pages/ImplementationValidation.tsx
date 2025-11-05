export default function ImplementationValidation() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">구현 검증</h1>
      <p className="text-xl text-gray-600 mb-12">
        명세서와 실제 구현의 일치성을 검증하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">자동 검증</h2>
        <p className="text-gray-700 mb-4">
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code> 어노테이션이 붙은 메소드는 
          애플리케이션 시작 시 자동으로 명세서와 비교되어 검증됩니다.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>경로 및 HTTP 메서드 일치 여부</li>
          <li>요청/응답 스키마 일치 여부</li>
          <li>상태 코드 일치 여부</li>
        </ul>
        <p className="text-gray-700 mt-3">
          검증 결과는 웹 UI에서 확인할 수 있으며, 명세서와 구현 간 차이점이 표시됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">검증 결과 확인</h2>
        <p className="text-gray-700 mb-3">
          웹 UI에서 각 API 명세서를 선택하면 검증 결과를 확인할 수 있습니다:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>명세서와 구현이 일치하는 경우: 정상 상태로 표시</li>
          <li>차이가 있는 경우: 차이점이 명확히 표시됨</li>
        </ul>
      </section>
    </div>
  );
}
