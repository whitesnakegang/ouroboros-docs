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
        <div className="mb-4">
          <img 
            src="/images/scrennshots/validation-screen.png" 
            alt="검증 화면" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-3">
          사용자가 작성한 명세는 실행 중인 애플리케이션의 OpenAPI 스캔 결과와 자동으로 비교됩니다. 변경사항을 저장하면 SDK가 명세와 구현을 동기화하여 불일치 항목을 표시합니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">검증 유형</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Request Validation</strong>: 요청 파라미터, 헤더, 본문 스키마 비교</li>
          <li><strong>Response Validation</strong>: 응답 상태 코드, 헤더, 본문 스키마 비교</li>
          <li><strong>Endpoint Validation</strong>: 명세와 구현 간 경로 및 메서드 일치 여부 확인</li>
          <li><strong>Both</strong>: 요청과 응답 모두 명세와 다른 경우</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">주요 기능</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Visual Diff Display</strong>: 명세와 구현 간 차이점을 정확히 확인</li>
          <li><strong>One-Click Sync</strong>: 코드에서 명세로 변경사항을 한 번의 클릭으로 적용</li>
          <li><strong>Validation Status Badge</strong>: 각 엔드포인트의 검증 상태 표시(Valid/Invalid/Diff detected)</li>
          <li><strong>Detailed Reports</strong>: 모든 엔드포인트에 대한 포괄적인 검증 보고서 확인</li>
          <li><strong>Filter by Status</strong>: 검증 상태별로 엔드포인트 필터링하여 빠른 검토</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">워크플로우</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>코드 스캔 후 검증 결과 확인</li>
          <li>인터페이스에서 강조 표시된 불일치 항목 검토</li>
          <li>코드와 명세를 동기화하기 위해 변경사항 적용</li>
          <li>각 엔드포인트의 검증 상태 추적</li>
        </ol>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-4">
          <p>
            <strong>⚠️ 중요:</strong> Lombok을 사용하는 프로젝트라면 <code className="bg-amber-100 px-1.5 py-0.5 rounded">annotationProcessor 'org.projectlombok:lombok'</code> 설정이 있어야 정상 동작합니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WebSocket/STOMP 검증</h2>
        <p className="text-gray-700 mb-3">
          WebSocket/STOMP API도 REST API와 동일하게 명세와 구현을 검증할 수 있습니다. Springwolf를 통해 코드 스캔이 활성화된 경우 자동으로 검증이 수행됩니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket 검증 유형</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Channel Validation</strong>: 채널 주소가 명세와 구현 간 일치하는지 확인</li>
          <li><strong>Message Validation</strong>: 메시지 페이로드 스키마가 명세와 구현 간 일치하는지 확인</li>
          <li><strong>Operation Validation</strong>: receive/reply Operation이 명세와 구현 간 일치하는지 확인</li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p className="font-semibold mb-2">⚠️ WebSocket 검증을 위한 요구사항:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Springwolf 의존성 추가 및 활성화 필요</li>
            <li><code className="bg-amber-100 px-1 py-0.5 rounded">@MessageMapping</code>과 <code className="bg-amber-100 px-1 py-0.5 rounded">@SendTo</code> 어노테이션이 붙은 메소드만 스캔됩니다</li>
            <li>채널 주소는 애플리케이션 destination prefix를 포함한 전체 경로로 작성해야 합니다</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
