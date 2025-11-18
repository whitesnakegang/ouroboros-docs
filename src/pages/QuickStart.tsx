import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function QuickStart() {
  const [restGifKey, setRestGifKey] = useState(0);
  const [wsGifKey, setWsGifKey] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setRestGifKey(prev => prev + 1);
    }, 10000);

    const interval2 = setInterval(() => {
      setWsGifKey(prev => prev + 1);
    }, 10000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Quick Start</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros를 프로젝트에 추가하고 기본 기능을 동작시키는 절차를 정리합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">전제 조건</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Java 17 이상</li>
          <li>Spring Boot 3.x</li>
          <li>Gradle 또는 Maven</li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm space-y-2">
          <p>
            Lombok을 사용하는 프로젝트라면 <code className="bg-amber-100 px-1.5 py-0.5 rounded">annotationProcessor 'org.projectlombok:lombok'</code> 설정이 필수입니다. 누락되면 <code className="bg-amber-100 px-1.5 py-0.5 rounded">@ApiState</code> 스캔이 이루어지지 않아 명세-구현 자동 검증이 동작하지 않습니다.
          </p>
          <p>
            Swagger UI (springdoc-openapi)를 함께 사용하는 경우, <code className="bg-amber-100 px-1.5 py-0.5 rounded">springdoc-openapi-starter-webmvc-ui</code> 버전이 <strong>2.8.13 이상</strong>이어야 합니다. 2.2.0 같은 낮은 버전에서는 충돌이 발생할 수 있습니다. 자세한 내용은 <Link to="/guide/known-issues" className="text-amber-900 underline font-medium">알려진 버그</Link>를 참고하세요.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1단계: 설치</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">기본 의존성</h3>
        <p className="text-gray-700 mb-3">
          기본 의존성만 추가하면 REST API와 WebSocket 기능 모두 사용할 수 있습니다.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Gradle</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.2'
    implementation 'org.springframework.boot:spring-boot-starter-web'
}`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Maven</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`<dependency>
    <groupId>io.github.whitesnakegang</groupId>
    <artifactId>ouroboros</artifactId>
    <version>1.0.2</version>
</dependency>`}</code></pre>

        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mt-4 space-y-2">
          <p>
            <strong>참고:</strong> 라이브러리는 내부적으로 <code className="bg-blue-100 px-1.5 py-0.5 rounded">spring-boot-starter-actuator</code>와
            <code className="bg-blue-100 px-1.5 py-0.5 rounded">spring-boot-starter-aop</code>를 함께 제공합니다.
          </p>
          <p>
            Mock 서버와 REST API 컨트롤러는 자동 구성으로 등록되므로 별도 설정 없이 사용할 수 있습니다.
          </p>
          <p>
            Lombok을 사용한다면 반드시 <code className="bg-blue-100 px-1.5 py-0.5 rounded">annotationProcessor 'org.projectlombok:lombok'</code>를 추가해야 
            <code className="bg-blue-100 px-1.5 py-0.5 rounded">@ApiState</code> 기반 자동 스캔이 정상 동작합니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2단계: 설정</h2>
        <p className="text-gray-700 mb-3">
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application.yml</code> 또는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application.properties</code>에 다음 설정을 추가할 수 있습니다:
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">REST API 설정</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`ouroboros:
  enabled: true  # 기본값: true
  server:
    url: http://localhost:8080
    description: Local Development Server

  # Method Tracing 설정 (선택사항)
  # Try 기능에서 내부 메소드 추적이 필요할 때만 설정
  method-tracing:
    enabled: true
    allowed-packages: your.package.name  # 추적할 패키지 경로 지정

# Springwolf 설정 (필수)
# REST API만 사용하거나 WebSocket 코드 스캔이 필요 없는 경우 false로 설정해야 정상 부팅됩니다
springwolf:
  enabled: false  # WebSocket 코드 스캔 미사용 시 필수`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          설정을 비활성화하면 모든 컨트롤러, 필터, 자동 구성이 등록되지 않습니다. (예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ouroboros.enabled=false</code>)
        </p>
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            <strong>⚠️ 중요:</strong> <code className="bg-red-100 px-1.5 py-0.5 rounded">springwolf.enabled=false</code> 설정은 REST API만 사용하는 경우에도 필수입니다. 
            이 설정이 없으면 애플리케이션이 정상적으로 부팅되지 않을 수 있습니다.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket 설정 (선택사항)</h3>
        <p className="text-gray-700 mb-3">
          WebSocket/STOMP API 코드 스캔 기능을 사용할 때의 설정입니다. WebSocket 명세 작성 기능은 기본 의존성만으로 사용 가능합니다.
        </p>
        
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm mb-3">
          <p className="font-semibold mb-2">⚠️ 중요 사항:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>명세 작성만 필요한 경우:</strong> Springwolf 의존성을 추가하지 않고 <code className="bg-amber-100 px-1 py-0.5 rounded">springwolf.enabled=false</code>로 설정하면 됩니다.</li>
            <li><strong>코드 스캔이 필요한 경우:</strong> Springwolf 의존성을 추가하고 Springwolf를 활성화해야 합니다.</li>
            <li><strong>채널 주소:</strong> 명세에 채널 주소를 작성할 때는 애플리케이션 destination prefix를 포함한 전체 경로를 입력해야 합니다. (예: <code className="bg-amber-100 px-1 py-0.5 rounded">/app/chat/send</code>)</li>
            <li><strong>어노테이션:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">@MessageMapping</code>과 <code className="bg-amber-100 px-1 py-0.5 rounded">@SendTo</code> 어노테이션이 있는 메소드만 스캔됩니다.</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">옵션 1: 명세 작성만 (Springwolf 비활성화)</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`springwolf:
  enabled: false  # Springwolf 비활성화 (명세 작성만 사용)`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">옵션 2: 코드 스캔 및 명세 비교 (Springwolf 활성화)</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`springwolf:
  enabled: true
  docket:
    info:
      title: WebSocket API
      version: 1.0.0
      description: WebSocket API Description
    servers:
      websocket:
        host: localhost:8080
        protocol: ws
        description: WebSocket Server
    base-package: com.yourpackage  # @MessageMapping 스캔할 패키지 경로`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3단계: 애플리케이션 실행</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`./gradlew bootRun`}</code></pre>
        <p className="text-gray-700 mt-3">
          또는 IDE에서 Spring Boot 애플리케이션을 실행하세요.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4단계: 웹 UI 접속</h2>
        <p className="text-gray-700 mb-3">
          브라우저에서 다음 주소로 접속하세요:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`http://localhost:8080/ouroboros/`}</code></pre>
        <p className="text-gray-700 mt-3">
          웹 UI에서 API 명세를 생성하고 관리할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5단계: 첫 번째 API 명세서 작성</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">REST API 명세 작성</h3>
        <p className="text-gray-700 mb-3">
          웹 UI에서 REST API 명세를 작성합니다:
        </p>
        <div className="mb-4">
          <img 
            key={restGifKey}
            src={`/images/gif/rest-work-flow.gif?t=${restGifKey}`}
            alt="REST API 워크플로우" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>경로, HTTP 메서드, 요약 등 입력</li>
          <li>요청/응답 스키마 정의</li>
          <li>저장</li>
        </ol>
        <p className="text-gray-700 mt-3">
          저장하면 자동으로 Mock API가 생성되어 바로 테스트할 수 있습니다.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket/STOMP API 명세 작성 (선택사항)</h3>
        <p className="text-gray-700 mb-3">
          WebSocket/STOMP API 명세를 작성할 수 있습니다. AsyncAPI 3.0.0 표준을 지원합니다.
        </p>
        <div className="mb-4">
          <img 
            key={wsGifKey}
            src={`/images/gif/websocket-workflow.gif?t=${wsGifKey}`}
            alt="WebSocket 워크플로우" 
            className="max-w-full rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Schema 생성:</strong> "WebSocket" → "Schemas" 탭에서 메시지 페이로드용 스키마 생성</li>
          <li><strong>Message 생성:</strong> "WebSocket" → "Messages" 탭에서 스키마를 참조하는 메시지 정의</li>
          <li><strong>Operation 생성:</strong> "WebSocket" → "receive" 또는 "reply" 탭에서 채널 주소와 메시지 연결</li>
          <li><strong>채널 주소 입력:</strong> 전체 경로 포함 (예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/app/chat/send</code>)</li>
        </ol>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm mt-3">
          <p>
            <strong>참고:</strong> WebSocket 명세 작성만 필요하다면 Springwolf 의존성을 추가하지 않아도 됩니다.
            코드 스캔 및 명세 비교 기능이 필요할 때만 Springwolf를 설정하세요.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6단계: Mock API 테스트</h2>
        <p className="text-gray-700 mb-3">
          명세서의 내용대로 엔드포인트가 구현되지 않았거나 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code>의 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">progress</code>가 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">completed</code>가 아닌 경우, 해당 엔드포인트로 요청하면 자동으로 Mock 응답이 반환됩니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`curl http://localhost:8080/api/users`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7단계: Try 기능 사용하기</h2>
        <p className="text-gray-700 mb-4">
          Try 기능은 API 요청의 실행 시간을 추적하고 기록합니다. <strong>별도 설정 없이 기본으로 활성화</strong>되어 있으며, 메모리 기반 저장소를 사용해 즉시 결과를 확인할 수 있습니다.
        </p>


        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">웹 UI에서 확인</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>API 상세 화면에서 “API Try” 탭 선택</li>
          <li>요청 파라미터 입력 후 “RUN” 클릭</li>
          <li>결과 영역과 “TEST” 패널에서 실행 이력 확인</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">선택 사항: Method Tracing</h3>
        <p className="text-gray-700 mb-3">
          메소드 수준까지 추적하려면 다음 설정을 추가합니다. (Try 기능 기본 사용에는 필요 없음)
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages=your.package`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          상세 설정은 <Link to="/guide/try-feature" className="text-primary hover:underline">Try 기능 가이드</Link>와 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code>를 참고하세요.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket 명세서 Try 기능 사용 시 주의사항</h3>
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm space-y-2">
          <p>
            <strong>중요:</strong> WebSocket 명세서의 Try 기능을 사용하려면 메시지 브로커의 <code className="bg-amber-100 px-1.5 py-0.5 rounded">/queue</code> prefix를 열어줘야 합니다.
          </p>
          <p>
            메시지 브로커 설정에서 <code className="bg-amber-100 px-1.5 py-0.5 rounded">/queue</code> prefix에 대한 접근 권한을 허용하지 않으면 WebSocket Try 기능이 정상적으로 동작하지 않을 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">다음 단계</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/guide/basic-usage" className="text-primary hover:underline">기본 사용법</Link> - API 명세 관리의 기본 워크플로우</li>
          <li><Link to="/guide/api-spec" className="text-primary hover:underline">API 명세서 작성</Link> - 상세한 명세서 작성 방법</li>
          <li><Link to="/guide/mock-api" className="text-primary hover:underline">Mock API</Link> - Mock 서버 사용법</li>
          <li><Link to="/guide/try-feature" className="text-primary hover:underline">Try 기능</Link> - 성능 추적 및 분석</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">참고: 명세 저장 위치</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">REST API 명세</h3>
        <p className="text-gray-700 mb-3">
          모든 REST 명세는 애플리케이션 루트 기준 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">src/main/resources/ouroboros/rest/ourorest.yml</code> 파일 하나에 저장됩니다.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">WebSocket/STOMP API 명세</h3>
        <p className="text-gray-700 mb-3">
          모든 WebSocket/STOMP 명세는 애플리케이션 루트 기준 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">src/main/resources/ouroboros/websocket/ourowebsocket.yml</code> 파일 하나에 저장됩니다.
        </p>

      </section>
    </div>
  );
} 