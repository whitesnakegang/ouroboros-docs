export default function ImplementationValidation() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">구현 검증</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 명세와 구현 진행 상태를 관리하고 확인하는 방법을 소개합니다.
      </p>

      <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 mb-8 text-sm">
        Lombok을 사용하는 프로젝트라면 반드시 <code className="bg-amber-100 px-1.5 py-0.5 rounded">annotationProcessor 'org.projectlombok:lombok'</code>를 빌드 설정에 포함해야 합니다. 이 설정이 없으면 <code className="bg-amber-100 px-1.5 py-0.5 rounded">@ApiState</code> 메타데이터가 생성되지 않아 자동 검증이 동작하지 않습니다.
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">진행 상태 관리</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Progress 값은 SDK가 명세와 구현 상태를 비교해 자동으로 “mock” 또는 “completed”로 조정합니다.</li>
          <li>Tag 역시 스캔 결과에 따라 자동으로 업데이트되어 현재 구현 상태(implementing, bugfix 등)를 표시합니다.</li>
          <li>변경 사항은 저장 직후 목록에 반영되어 진행 상황을 수동으로 조작할 필요가 없습니다.</li>
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">자동 검증</h2>
        <p className="text-gray-700 mb-3">
          사용자가 작성한 명세는 실행 중인 애플리케이션의 OpenAPI 스캔 결과와 자동으로 비교됩니다. 변경사항을 저장하면 SDK가 명세와 구현을 동기화하여 불일치 항목을 표시합니다.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-diff</code>: 요청/응답/엔드포인트 차이를 자동 표시</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-progress</code>: 구현 완료 시 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">completed</code>로 자동 조정</li>
          <li>웹 UI에서 강조 표시된 필드를 통해 차이점을 바로 확인할 수 있습니다.</li>
          <li className="text-sm text-gray-600">Lombok을 사용하는 프로젝트라면 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">annotationProcessor 'org.projectlombok:lombok'</code> 설정이 있어야 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code> 스캔이 정상 동작합니다.</li>
        </ul>
      </section>
    </div>
  );
}
