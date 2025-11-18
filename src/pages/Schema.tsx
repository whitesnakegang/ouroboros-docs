import { useEffect, useState } from 'react';

export default function Schema() {
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGifKey(prev => prev + 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Schema 관리</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 재사용 가능한 데이터 모델(Schema)을 작성하고 활용하는 방법을 소개합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 생성 및 사용</h2>
        <div className="mb-4">
          <img 
            key={gifKey}
            src={`/images/gif/rest-work-flow.gif?t=${gifKey}`}
            alt="Schema 생성 및 사용 워크플로우" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>좌측 사이드바에서 "Schemas"를 선택합니다.</li>
          <li>"New Schema" 버튼을 눌러 이름과 설명을 입력합니다.</li>
          <li>Properties 영역에서 필드를 추가하고 타입, 필수 여부, Mock 값을 설정합니다.</li>
          <li>저장을 누르면 Schema가 등록되고, API 작성 시 바로 참조할 수 있습니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 관리</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>목록에서 Schema를 선택하면 오른쪽 패널에서 상세 정보를 수정할 수 있습니다.</li>
          <li>필요 시 “Duplicate”로 비슷한 구조를 복제하거나 “Delete”로 삭제 가능합니다.</li>
          <li>Schema 이름은 API에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$ref</code> 선택 목록에 바로 표시됩니다.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mock 데이터</h2>
        <p className="text-gray-700 mb-3">
          각 필드는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code>에 DataFaker 문법을 사용하여 Mock 표현식을 지정할 수 있으며, Try 패널에서 Mock 응답을 확인할 때 사용됩니다.
        </p>
        <p className="text-gray-700 mb-3">
          예시:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{random.uuid}}'}</code> - UUID 생성</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{name.fullName}}'}</code> - 전체 이름 생성</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{internet.emailAddress}}'}</code> - 이메일 주소 생성</li>
        </ul>
        <p className="text-sm text-gray-600">
          DataFaker 문법을 사용하면 실제와 유사한 Mock 데이터를 자동으로 생성할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WebSocket용 Schema 및 Message</h2>
        <p className="text-gray-700 mb-3">
          WebSocket/STOMP API 명세 작성을 위해 별도의 Schema와 Message를 정의할 수 있습니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket Schema</h3>
        <p className="text-gray-700 mb-3">
          "WebSocket" → "Schemas" 탭에서 WebSocket 메시지 페이로드용 스키마를 생성합니다. REST API용 Schema와 동일하게 필드와 타입을 정의할 수 있으며, DataFaker 문법도 사용 가능합니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Message 생성</h3>
        <p className="text-gray-700 mb-3">
          "WebSocket" → "Messages" 탭에서 앞서 생성한 Schema를 참조하는 Message를 정의합니다. Message는 WebSocket Operation에서 사용됩니다.
        </p>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            <strong>참고:</strong> WebSocket용 Schema와 Message는 REST API용 Schema와 독립적으로 관리되며, 
            WebSocket 명세는 <code className="bg-blue-100 px-1.5 py-0.5 rounded">ourowebsocket.yml</code> 파일에 저장됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}
