import { Link } from 'react-router-dom';

export default function BasicUsage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">기본 사용법</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 웹 UI에서 명세를 작성하고 활용하는 기본 흐름을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">전체 워크플로우</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-4">
          <li><strong>웹 UI 접속</strong>: 브라우저에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">http://localhost:8080/ouroboros/</code>로 이동합니다.</li>
          <li><strong>Schema 생성</strong>: 왼쪽 사이드바의 “Schemas”를 선택하고 “New Schema” 버튼으로 재사용 가능한 데이터 모델을 등록합니다.</li>
          <li><strong>API 명세 작성</strong>: “APIs” 탭에서 경로·메서드·요약과 Schema를 연결해 엔드포인트를 만듭니다.</li>
          <li><strong>Mock 테스트</strong>: 명세 카드에서 “Try” 또는 “Copy cURL”을 활용해 Mock 응답을 확인합니다.</li>
          <li><strong>상태 업데이트</strong>: 구현이 완료되면 명세 우측 패널에서 진행 상태(Progress)를 “completed”로 변경합니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 UI 기능 요약</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Schemas 탭</strong>: JSON 형태로 스키마를 작성하고 필수 필드를 지정할 수 있습니다.</li>
          <li><strong>APIs 탭</strong>: Path/Method 입력 후 Request Body, Response, Headers를 드래그&드롭 혹은 폼으로 설정합니다.</li>
          <li><strong>Import/Export</strong>: 우측 상단 “Import YAML”, “Export YAML” 버튼으로 OpenAPI 파일을 가져오거나 내보냅니다.</li>
          <li><strong>Try 패널</strong>: API 상세 화면에서 파라미터를 입력한 뒤 "Send" 버튼으로 Mock 응답을 바로 확인합니다.
            <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-3 py-2 text-xs mt-2 ml-4">
              <strong>참고:</strong> WebSocket 명세서의 Try 기능을 사용하려면 메시지 브로커의 <code className="bg-amber-100 px-1 py-0.5 rounded">/queue</code> prefix를 열어줘야 합니다.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">다음 단계</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/guide/api-spec" className="text-primary hover:underline">API 명세서 작성</Link> – UI에서 엔드포인트를 작성하는 방법</li>
          <li><Link to="/guide/schema" className="text-primary hover:underline">Schema 관리</Link> – 재사용 모델 등록</li>
          <li><Link to="/guide/mock-api" className="text-primary hover:underline">Mock API</Link> – Try 패널로 테스트하기</li>
        </ul>
      </section>
    </div>
  );
} 