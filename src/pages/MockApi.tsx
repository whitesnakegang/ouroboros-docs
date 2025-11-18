import { useEffect, useState } from 'react';

export default function MockApi() {
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGifKey(prev => prev + 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Mock API</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 Mock 응답을 확인하고 활용하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mock 테스트</h2>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/testing-setting.png" 
            alt="테스트 설정 화면" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg mb-4"
          />
          <img 
            src="/images/scrennshots/test-response.png" 
            alt="테스트 응답 화면" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>API 상세 화면에서 "API Try" 탭을 선택합니다.</li>
          <li>필요한 Path/Query/Header 값을 입력합니다.</li>
          <li>Request Body가 있으면 예시 JSON을 수정한 뒤 "RUN" 버튼을 클릭합니다.</li>
          <li>우측 하단 "TEST" 패널에서 Mock 응답 본문과 헤더를 바로 확인할 수 있습니다.</li>
        </ol>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">인증 설정</h2>
        <div className="mb-4">
          <img 
            key={gifKey}
            src={`/images/gif/auth-setup.gif?t=${gifKey}`}
            alt="인증 설정 워크플로우" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-3">
          API 테스트 전에 인증 설정을 구성할 수 있습니다. "Authentication" 또는 "Auth" 버튼을 클릭하여 
          인증 정보를 입력하면 모든 테스트 요청에 자동으로 포함됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">응답 확인</h2>
        <p className="text-gray-700 mb-3">
          Testing Screen은 API를 테스트하고 Mock 및 실제 응답을 확인할 수 있으며, 메소드 수준의 성능 추적도 함께 제공합니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">응답 보기</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Mock Response</strong>: 명세에서 생성된 Mock 데이터로 테스트(프론트엔드 개발에 유용)</li>
          <li><strong>Actual Response</strong>: 실제 백엔드 구현으로 테스트</li>
          <li><strong>Side-by-Side Comparison</strong>: Mock vs 실제 응답을 비교하여 구현 정확성 검증</li>
          <li><strong>Response Details</strong>: 상태 코드, 헤더, 포맷팅된 응답 본문(JSON, XML 등) 확인</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">주요 기능</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Schema에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code> 값을 지정하면 Try 응답에 반영됩니다</li>
          <li>Code Snippet 생성 기능으로 cURL, JavaScript, Python 등 다양한 언어의 코드 예시를 생성할 수 있습니다</li>
          <li>Export 기능으로 API 문서를 Markdown 또는 OpenAPI YAML 형식으로 내보낼 수 있습니다</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WebSocket Mock 테스트</h2>
        <p className="text-gray-700 mb-3">
          WebSocket/STOMP API도 REST API와 동일하게 Mock 응답을 테스트할 수 있습니다.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
          <li>WebSocket Operation 상세 화면에서 "API Try" 탭을 선택합니다.</li>
          <li>메시지 페이로드를 입력합니다 (Schema에서 정의한 Mock 표현식이 자동으로 채워집니다).</li>
          <li>"RUN" 버튼을 클릭하면 WebSocket 메시지가 전송되고 Mock 응답을 확인할 수 있습니다.</li>
        </ol>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            <strong>⚠️ 중요:</strong> WebSocket Try 기능을 사용하려면 메시지 브로커의 <code className="bg-amber-100 px-1.5 py-0.5 rounded">/queue</code> prefix를 활성화해야 합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
