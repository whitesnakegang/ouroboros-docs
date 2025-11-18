import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BasicUsage() {
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGifKey(prev => prev + 1);
    }, 20000); // 10초마다 리로드

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">기본 사용법</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 웹 UI에서 명세를 작성하고 활용하는 기본 흐름을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">전체 워크플로우</h2>
        <div className="mb-4">
          <img 
            key={gifKey}
            src={`/images/gif/rest-work-flow.gif?t=${gifKey}`}
            alt="REST API 워크플로우" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 1: 재사용 가능한 Schema 정의</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 <strong>"Schemas"</strong> 탭으로 이동합니다</li>
          <li>스키마 폼을 작성합니다:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Name</strong>: 예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">User</code></li>
              <li><strong>Type</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">object</code></li>
              <li>속성 추가 (예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">id</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">name</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">email</code>)</li>
              <li>DataFaker 문법을 사용하여 Mock 표현식 설정 (예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{random.uuid}}'}</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{name.fullName}}'}</code>)</li>
              <li>필수 필드 지정</li>
            </ul>
          </li>
          <li><strong>"Save"</strong> 버튼을 클릭합니다</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 2: API 명세 생성</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>"APIs"</strong> 탭으로 이동합니다</li>
          <li><strong>"New API"</strong> 버튼을 클릭합니다</li>
          <li>API 폼을 작성합니다:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Path</strong>: 예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/api/users</code></li>
              <li><strong>Method</strong>: 예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">POST</code></li>
              <li><strong>Summary</strong>: 예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Create user</code></li>
              <li><strong>Request Body</strong>: 앞서 생성한 Schema 참조</li>
              <li><strong>Response (201)</strong>: Schema 참조</li>
              <li><strong>Progress</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code></li>
            </ul>
          </li>
          <li><strong>"Save"</strong> 버튼을 클릭합니다 - Mock API가 즉시 생성됩니다!</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 3: Mock API 테스트</h3>
        <p className="text-gray-700 mb-2">
          Mock API는 지정된 경로에서 즉시 사용 가능합니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{`curl -X POST http://localhost:8080/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Doe", "email": "john@example.com"}'`}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 4: 구현 및 검증 (백엔드 개발자)</h3>
        <p className="text-gray-700 mb-2">
          컨트롤러에 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code> 어노테이션을 추가합니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code>{`@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @PostMapping
    @ApiState(state = ApiState.State.IMPLEMENTING)
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // 실제 구현...
        return ResponseEntity.status(201).body(savedUser);
    }
}`}</code></pre>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mb-4">
          <p><strong>⚠️ 중요:</strong> <code className="bg-amber-100 px-1.5 py-0.5 rounded">@ApiState</code> 어노테이션이 붙은 컨트롤러 메서드만 코드 스캔에 포함됩니다. 이 어노테이션이 없는 메서드는 스캔되지 않으며 명세와의 검증도 수행되지 않습니다.</p>
        </div>
        <p className="text-gray-700 mb-2">
          애플리케이션 시작 시, Ouroboros는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code> 어노테이션이 붙은 모든 메서드에 대해 자동으로 구현을 명세와 검증합니다.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 5: 상태 업데이트</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 API를 선택합니다</li>
          <li><strong>Progress</strong>를 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code>에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">completed</code>로 변경합니다</li>
          <li><strong>"Save"</strong> 버튼을 클릭합니다</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 UI 개요</h2>
        <p className="text-gray-700 mb-4">
          Ouroboros는 직관적인 웹 기반 인터페이스를 제공합니다. 모든 작업은 코드 작성 없이 GUI를 통해 수행할 수 있습니다.
        </p>
        <div className="mb-4">
          <img 
            src="/images/scrennshots/sidebar-badges.png" 
            alt="사이드바와 상태 배지" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-4">
          인터페이스는 세 가지 주요 영역으로 구성됩니다: 사이드바(탐색), 메인 콘텐츠 영역(명세 보기 및 편집), 액션 패널(테스트 및 검증).
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">주요 영역</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>왼쪽 사이드바</strong>: 모든 API 엔드포인트, 스키마, WebSocket 작업 탐색</li>
          <li><strong>메인 콘텐츠 영역</strong>: API 명세, 스키마, 메시지 보기 및 편집</li>
          <li><strong>액션 패널</strong>: API 테스트, 검증 결과 확인, 성능 분석</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">상태 배지</h3>
        <p className="text-gray-700 mb-2">
          사이드바는 상태 배지와 함께 모든 API 엔드포인트를 표시하여 개발 상태를 한눈에 확인할 수 있습니다:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>🟢 <strong>Completed</strong>: API가 완전히 구현되고 테스트됨</li>
          <li>🟡 <strong>Implementing</strong>: API가 현재 개발 중</li>
          <li>🔴 <strong>Mock</strong>: API가 명세로만 존재 (아직 구현되지 않음)</li>
          <li>🟠 <strong>Bugfix</strong>: API가 버그 수정 중</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">주요 기능</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Schemas 탭</strong>: 스키마를 작성하고 필수 필드를 지정할 수 있습니다</li>
          <li><strong>APIs 탭</strong>: Path, Method 입력 후 Request Body, Response, Headers를 폼으로 설정합니다</li>
          <li><strong>Import/Export</strong>: 우측 상단 "Import YAML", "Export YAML" 버튼으로 OpenAPI 파일을 가져오거나 내보냅니다</li>
          <li><strong>API Try 패널</strong>: API 상세 화면의 "API Try" 탭에서 파라미터를 입력한 뒤 "RUN" 버튼으로 Mock 응답을 바로 확인합니다</li>
          <li><strong>인증 설정</strong>: "Try/Test" 탭에서 "Authentication" 또는 "Auth" 버튼을 클릭하여 인증 값을 설정하면 모든 테스트 요청에 자동으로 포함됩니다</li>
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