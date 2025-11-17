import { Link } from 'react-router-dom';

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
ouroboros.method-tracing.allowed-packages=your.package`}</code></pre>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">트레이스 저장 기간</h3>
            <p className="mb-3">
              기본 저장소는 애플리케이션 메모리이므로 재시작 시 Try 기록이 초기화됩니다. 
              대부분의 개발 및 테스트 시나리오에서는 <strong>in-memory 저장소로 충분</strong>합니다.
            </p>
            <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm space-y-2 mb-3">
              <p>
                <strong>Tempo 연동 (선택 사항):</strong> 영구 저장이 필요하다면 <strong>Grafana Tempo</strong>를 연동할 수 있습니다.
              </p>
              <p>
                Tempo를 사용하면 다음이 가능합니다:
              </p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>영구 트레이스 저장 (애플리케이션 재시작 후에도 트레이스 유지)</li>
                <li>여러 요청에 걸친 고급 트레이스 분석</li>
                <li>여러 애플리케이션 인스턴스 간 트레이스 공유</li>
                <li>장기간 트레이스 보관</li>
              </ul>
            </div>
            <p className="mb-3 text-sm">
              Tempo 연동을 활성화하려면 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application.properties</code>에 다음 설정을 추가하세요:
            </p>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-3"><code>{`# Tempo 연동 활성화
ouroboros.tempo.enabled=true
ouroboros.tempo.base-url=http://localhost:3200

# OpenTelemetry Exporter 설정
management.tracing.enabled=true
management.otlp.tracing.endpoint=http://localhost:4318/v1/traces`}</code></pre>
            <p className="text-gray-700 text-sm">
              상세한 Tempo 설정 방법은 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code> 문서의 <strong>Tempo 연동</strong> 섹션을 참고하세요.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WebSocket 명세서 Try 기능 설정</h3>
            <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm space-y-2 mb-3">
              <p>
                <strong>중요:</strong> WebSocket 명세서의 Try 기능을 사용하려면 메시지 브로커의 <code className="bg-amber-100 px-1.5 py-0.5 rounded">/queue</code> prefix를 열어줘야 합니다.
              </p>
              <p>
                메시지 브로커 설정에서 <code className="bg-amber-100 px-1.5 py-0.5 rounded">/queue</code> prefix에 대한 접근 권한을 허용하지 않으면 WebSocket Try 기능이 정상적으로 동작하지 않을 수 있습니다.
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              REST API와 달리 WebSocket은 메시지 브로커를 통해 통신하므로, 브로커 설정에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/queue</code> prefix에 대한 접근을 허용해야 Try 기능이 정상 작동합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 자료</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/api/try" className="text-primary hover:underline">Try & 성능 추적 API</Link> – REST API 상세 설명</li>
          <li><a href="https://ouroboros.co.kr" className="text-primary hover:underline" target="_blank" rel="noreferrer">공식 문서</a> – 최신 가이드</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code> – Try 기능 설정 세부 가이드</li>
        </ul>
      </section>
    </div>
  );
}
