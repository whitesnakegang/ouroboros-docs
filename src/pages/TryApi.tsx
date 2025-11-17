import { Link } from 'react-router-dom';

export default function TryApi() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Try & 성능 추적 API</h1>
      <p className="text-xl text-gray-600 mb-12">
        Try 요청으로 생성된 실행 기록을 REST API로 조회하는 방법을 정리했습니다. 현재 SDK는 애플리케이션 메모리에 기록을 저장하며, 별도 외부 저장소 연동은 제공하지 않습니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 흐름</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>요청에 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try: on</code> 헤더를 추가해 실행합니다.</li>
          <li>응답 헤더의 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try-Id</code> 값이 추적 식별자가 됩니다.</li>
          <li>아래 엔드포인트를 사용해 Try 요약, 메서드 목록, 트레이스를 확인합니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">엔드포인트 요약</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Method</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Path</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}</td>
                <td className="px-4 py-3">Try 요약 (상태, HTTP 코드, 총 소요 시간, span 수 등)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}/methods</td>
                <td className="px-4 py-3">메서드 실행 목록 (selfDuration 기준 내림차순, page/size 파라미터 지원)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}/trace</td>
                <td className="px-4 py-3">트레이스 트리 (부모/자식 스팬 구조와 소요 시간)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">요약 응답 예시</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`GET /ouro/tries/{tryId}

{
  "status": 200,
  "data": {
    "tryId": "a2b4...",
    "traceId": "1b8f...",
    "status": "COMPLETED",
    "statusCode": 200,
    "totalDurationMs": 153,
    "spanCount": 12
  }
}`}</code></pre>
        <p className="text-sm text-gray-600 mt-2">
          메서드 목록 API는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">page</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">size</code> 파라미터를 지원하며, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">hasMore</code> 필드를 통해 다음 페이지 여부를 제공합니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WebSocket STOMP를 사용한 Try 요청</h2>
        <p className="text-gray-700 mb-4">
          WebSocket을 통해 Try 요청을 보낼 때는 STOMP 클라이언트를 사용하여 Try 결과를 실시간으로 수신할 수 있습니다.
        </p>

        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm space-y-2 mb-4">
          <p>
            <strong>중요:</strong> WebSocket Try 기능을 사용하려면 서버 측 메시지 브로커 설정에서 <code className="bg-amber-100 px-1.5 py-0.5 rounded">/queue</code> prefix를 활성화해야 합니다.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">클라이언트 설정</h3>
        <p className="text-gray-700 mb-3">
          STOMP 클라이언트를 연결하고 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/user/queue/ouro/try</code> 토픽을 구독하여 Try 결과를 수신합니다.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">JavaScript (stompjs) 예시</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{`import { Client } from '@stomp/stompjs';

// STOMP 클라이언트 생성
const client = new Client({
    brokerURL: 'ws://localhost:8080/ws',
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
});

// 연결 성공 시
client.onConnect = (frame) => {
    console.log('STOMP 연결 성공');
    
    // /user/queue/ouro/try 토픽 구독
    client.subscribe('/user/queue/ouro/try', (message) => {
        const tryData = JSON.parse(message.body);
        console.log('Try ID:', tryData.tryId);
        console.log('Try 결과:', tryData);
        // Try 결과 처리
    });
};

// 에러 처리
client.onStompError = (frame) => {
    console.error('STOMP 에러:', frame.headers['message'], frame.body);
};

// 클라이언트 활성화
client.activate();`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Try 요청 전송</h4>
        <p className="text-gray-700 mb-3">
          WebSocket을 통해 Try 요청을 보낼 때는 STOMP 메시지에 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try: on</code> 헤더를 포함해야 합니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{`// Try 요청 전송 예시
client.publish({
    destination: '/app/your-websocket-endpoint',
    body: JSON.stringify({ your: 'data' }),
    headers: {
        'X-Ouroboros-Try': 'on'
    }
});`}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">서버 설정 (참고)</h3>
        <p className="text-gray-700 mb-3">
          서버 측에서 메시지 브로커의 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/queue</code> prefix를 활성화해야 합니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-3"><code>{`@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // /queue prefix 활성화 (필수)
        config.enableSimpleBroker("/queue", "/topic");
    }
    
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").withSockJS();
    }
}`}</code></pre>
        <p className="text-gray-700 text-sm">
          상세한 WebSocket Try 기능 설정은 <Link to="/guide/try-feature" className="text-primary hover:underline">Try 기능 가이드</Link>를 참고하세요.
        </p>
      </section>
    </div>
  );
}
