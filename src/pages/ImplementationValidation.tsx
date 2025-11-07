export default function ImplementationValidation() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">구현 검증</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 명세와 구현 진행 상태를 관리하고 확인하는 방법을 소개합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">진행 상태 관리</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>API 상세 화면 우측 패널에서 Progress 값을 “mock” 또는 “completed”로 변경할 수 있습니다.</li>
          <li>Tag 필드를 사용해 “implementing”, “bugfix” 등 팀 내부 상태를 표시하세요.</li>
          <li>변경 내용은 저장 직후 목록에도 반영되어 진행 중인 항목을 빠르게 파악할 수 있습니다.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">상태 확인</h2>
        <p className="text-gray-700 mb-3">
          목록 또는 상세 화면에서 API별 진행 상태를 한눈에 확인할 수 있으며, 상태에 따라 배지 색상이 표시됩니다.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code>: Mock 응답만 제공 중</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">completed</code>: 실제 구현이 완료된 엔드포인트</li>
        </ul>
      </section>
    </div>
  );
}
