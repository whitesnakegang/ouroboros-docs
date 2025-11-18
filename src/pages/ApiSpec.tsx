export default function ApiSpec() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">API 명세서 작성</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 웹 UI에서 REST API 명세를 작성하고 관리하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">새 API 추가</h2>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/spec-editor.png" 
            alt="API 명세 편집기" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>좌측 사이드바에서 "APIs"를 선택한 뒤 "New API" 버튼을 누릅니다.</li>
          <li>Path, Method, Summary, Description을 입력합니다.</li>
          <li>Parameters, Request Body, Responses 영역에서 필요한 항목을 추가하거나 Schema를 연결합니다.</li>
          <li>오른쪽 상단 "Save" 버튼을 눌러 명세를 저장하면 Mock 엔드포인트가 즉시 생성됩니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세 수정 및 관리</h2>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/api-detail-page.png" 
            alt="API 상세 페이지" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-3">
          API Detail Page는 각 API 명세에 대한 포괄적인 정보를 제공합니다. 요청/응답 스키마, 파라미터, 메타데이터 등 모든 정보가 탭으로 구성되어 있어 쉽게 탐색할 수 있습니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">주요 기능</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Overview Tab</strong>: 경로, 메서드, 요약, 설명, 태그를 포함한 완전한 API 명세 확인</li>
          <li><strong>Request Tab</strong>: 요청 파라미터, 헤더, 쿼리 파라미터, 요청 본문 스키마 구성</li>
          <li><strong>Response Tab</strong>: 다양한 상태 코드(200, 201, 400, 404 등)에 대한 응답 스키마 정의</li>
          <li><strong>API Try Tab</strong>: API 테스트 실행 및 응답 확인</li>
          <li><strong>Validation Tab</strong>: 검증 상태 및 명세와 구현 간 불일치 확인</li>
          <li><strong>Code Snippets</strong>: cURL, JavaScript, Python 등 다양한 언어의 코드 예시 생성</li>
          <li><strong>Export</strong>: Markdown 또는 OpenAPI YAML 형식으로 API 문서 내보내기</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">빠른 작업</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>페이지에서 직접 API 세부 정보 편집</li>
          <li>요청/응답 본문에 재사용 가능한 스키마 참조</li>
          <li>개발 진행 상태 및 태그 설정</li>
          <li>검증 상태 확인 및 변경사항 적용</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Import / Export</h2>
        <p className="text-gray-700 mb-3">
          상단 메뉴의 “Import YAML”, “Export YAML” 버튼으로 OpenAPI 3.1 YAML 파일을 가져오거나 내보낼 수 있습니다. 기존 명세가 있는 상태에서 Import하면 UI가 자동으로 병합 결과를 안내합니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세 편집기</h2>
        <p className="text-gray-700 mb-3">
          Specification Editor는 직관적인 폼 기반 편집기를 통해 API 명세를 생성하고 편집할 수 있습니다. 편집기는 API의 모든 측면을 정의하는 단계별 워크플로우를 제공합니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">편집기 섹션</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Basic Information</strong>: 경로, HTTP 메서드(GET, POST, PUT, DELETE 등), 요약, 설명 정의</li>
          <li><strong>Request Configuration</strong>:
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>경로 파라미터, 쿼리 파라미터, 헤더 추가</li>
              <li>요청 본문 스키마 정의(기존 스키마 참조 또는 인라인 생성)</li>
              <li>콘텐츠 타입 설정(application/json, application/xml 등)</li>
            </ul>
          </li>
          <li><strong>Response Configuration</strong>:
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>각 상태 코드에 대한 응답 정의 추가</li>
              <li>응답 헤더 및 본문 스키마 정의</li>
              <li>응답 콘텐츠 타입 설정</li>
            </ul>
          </li>
          <li><strong>Metadata</strong>: 개발 진행 상태(mock/completed), 태그(none/implementing/bugfix), 검증 상태 설정</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">기능</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{"{ref: \"SchemaName\"}"}</code>를 사용하여 재사용 가능한 스키마 참조</li>
          <li>스키마 이름 및 필드 경로에 대한 자동 완성</li>
          <li>OpenAPI 3.1.0 준수 여부 실시간 검증</li>
          <li>생성된 OpenAPI 명세 미리보기</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WebSocket/STOMP API 명세 작성</h2>
        <p className="text-gray-700 mb-3">
          Ouroboros는 AsyncAPI 3.0.0 표준을 지원하여 WebSocket/STOMP API 명세를 작성하고 관리할 수 있습니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket 명세 작성 절차</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Schema 생성:</strong> "WebSocket" → "Schemas" 탭에서 메시지 페이로드용 스키마 생성</li>
          <li><strong>Message 생성:</strong> "WebSocket" → "Messages" 탭에서 스키마를 참조하는 메시지 정의</li>
          <li><strong>Operation 생성:</strong> "WebSocket" → "receive" 또는 "reply" 탭에서 채널 주소와 메시지 연결</li>
          <li><strong>채널 주소 입력:</strong> 애플리케이션 destination prefix를 포함한 전체 경로 입력 (예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/app/chat/send</code>)</li>
        </ol>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p className="font-semibold mb-2">⚠️ 중요 사항:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>채널 주소:</strong> 명세에 채널 주소를 작성할 때는 애플리케이션 destination prefix를 포함한 전체 경로를 입력해야 합니다.</li>
            <li><strong>어노테이션:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">@MessageMapping</code>과 <code className="bg-amber-100 px-1 py-0.5 rounded">@SendTo</code> 어노테이션이 있는 메소드만 코드 스캔됩니다.</li>
            <li><strong>명세 저장 위치:</strong> 모든 WebSocket/STOMP 명세는 <code className="bg-amber-100 px-1 py-0.5 rounded">src/main/resources/ouroboros/websocket/ourowebsocket.yml</code> 파일에 저장됩니다.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
