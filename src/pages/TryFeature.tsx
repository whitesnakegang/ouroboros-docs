

export default function TryFeature() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Try 기능</h1>
      <p className="text-xl text-gray-600 mb-12">
        별도 인프라 없이도 API 실행을 추적하고, 필요에 따라 메소드 단위까지 분석하는 방법을 정리했습니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">동작 개요</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>기본값</strong>: 설정 없이 in-memory 저장소로 즉시 사용 가능</li>
          <li><strong>트리거</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try: on</code> 헤더가 포함된 요청만 추적</li>
          <li><strong>조회</strong>: 응답 헤더의 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try-Id</code>로 성능 데이터를 조회</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 UI에서 사용하기</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>API 상세 화면의 “Try” 탭을 열고 파라미터를 입력합니다.</li>
          <li>“Send” 버튼을 누르면 헤더가 자동으로 추가되어 요청이 실행됩니다.</li>
          <li>응답 패널에서 실행 시간, 상태 코드, Mock 데이터 등을 확인합니다.</li>
          <li>우측 “History” 버튼에서 최근 Try 이력을 다시 조회할 수 있습니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">직접 요청 보내기</h2>
        <p className="text-gray-700 mb-3">
          도구(HTTPie, Postman 등)로 호출할 때는 헤더를 수동으로 추가합니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`curl -X POST "http://localhost:8080/api/orders" \
  -H "Content-Type: application/json" \
  -H "X-Ouroboros-Try: on" \
  -d '{"amount": 1000}'`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          응답 헤더의 Try ID를 복사해 `/ouro/tries/{'{'}tryId{'}'}` 등 REST API로 세부 정보를 확인할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">고급 설정 (선택)</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Method Tracing</h3>
            <p className="mb-3">내부 메소드 호출까지 추적하려면 아래 설정을 추가합니다.</p>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages=your.package
management.tracing.sampling.probability=1.0`}</code></pre>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">트레이스 저장 기간</h3>
            <p className="mb-3">기본 저장소는 애플리케이션 메모리이므로 재시작 시 Try 기록이 초기화됩니다. 장기 보관이 필요하다면 별도 저장소 연동 기능이 추가될 예정입니다.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 자료</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="/api/try" className="text-primary hover:underline">Try & 성능 추적 API</a> – REST API 상세 설명</li>
          <li><a href="https://ouroboros.co.kr" className="text-primary hover:underline" target="_blank" rel="noreferrer">공식 문서</a> – 최신 가이드</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code> – Try 기능 설정 세부 가이드</li>
        </ul>
      </section>
    </div>
  );
}
