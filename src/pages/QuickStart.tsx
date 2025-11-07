export default function QuickStart() {
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
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1단계: 설치</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Gradle</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.0'
    implementation 'org.springframework.boot:spring-boot-starter-web'
}`}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Maven</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`<dependency>
    <groupId>io.github.whitesnakegang</groupId>
    <artifactId>ouroboros</artifactId>
    <version>1.0.0</version>
</dependency>`}</code></pre>
        <p className="text-gray-700 mt-3">
          라이브러리는 내부적으로 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">spring-boot-starter-actuator</code>와
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">spring-boot-starter-aop</code>를 함께 제공합니다.
          <span className="block mt-2">Mock 서버와 REST API 컨트롤러는 자동 구성으로 등록되므로 별도 설정 없이 사용할 수 있습니다.</span>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2단계: 설정 (선택사항)</h2>
        <p className="text-gray-700 mb-3">
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application.yml</code> 또는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application.properties</code>에 다음 설정을 추가할 수 있습니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`ouroboros:
  enabled: true  # 기본값: true
  server:
    url: http://localhost:8080
    description: Local Development Server`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          설정을 비활성화하면 모든 컨트롤러, 필터, 자동 구성이 등록되지 않습니다. (예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ouroboros.enabled=false</code>)
        </p>
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
        <p className="text-gray-700 mb-3">
          웹 UI에서:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>"New API" 버튼 클릭</li>
          <li>경로, HTTP 메서드, 요약 등 입력</li>
          <li>요청/응답 스키마 정의</li>
          <li>저장</li>
        </ol>
        <p className="text-gray-700 mt-3">
          저장하면 자동으로 Mock API가 생성되어 바로 테스트할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6단계: Mock API 테스트</h2>
        <p className="text-gray-700 mb-3">
          명세서의 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-progress</code>가 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code>인 경우,
          해당 엔드포인트로 요청하면 자동으로 Mock 응답이 반환됩니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`curl http://localhost:8080/api/users`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          Mock 엔드포인트 판정은 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-progress</code> 값이 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mock</code>인 경우에만 이루어집니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7단계: Try 기능 사용하기</h2>
        <p className="text-gray-700 mb-4">
          Try 기능은 API 요청의 성능을 추적하고 분석하는 기능입니다. 웹 UI에서 간단하게 사용할 수 있습니다.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Try 기능 설정 (선택사항)</h3>
        <p className="text-gray-700 mb-3">
          Try 기능을 사용하려면 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application.properties</code>에 다음 설정을 추가하세요:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`# Tempo 연동 (Trace 저장소)
ouroboros.tempo.enabled=true
ouroboros.tempo.base-url=http://localhost:3200

# 메서드 추적 (tryId 와 span 매핑)
ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages[0]=com.example`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          자세한 설정 방법은 <a href="/guide/try-feature" className="text-primary hover:underline">Try 기능 가이드</a>를 참고하세요.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">OpenTelemetry Exporter 설정</h3>
        <p className="text-gray-700 mb-3">
          Grafana Tempo에 트레이스를 전송하려면 Spring Boot Actuator 추적 설정이 필요합니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`management.tracing.enabled=true
management.tracing.sampling.probability=1.0
management.otlp.tracing.endpoint=http://localhost:4318/v1/traces`}</code></pre>
        <p className="text-gray-700 mt-3 text-sm">
          수집된 Trace는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try: on</code> 헤더가 포함된 요청만 저장됩니다.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">웹 UI에서 Try 요청 보내기</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 API 명세서 선택</li>
          <li>"Try" 버튼 클릭</li>
          <li>요청 파라미터 입력 (필요한 경우)</li>
          <li>"실행" 버튼 클릭</li>
        </ol>
        <p className="text-gray-700 mt-3">
          웹 UI가 자동으로 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try</code> 헤더를 추가하여 요청을 추적합니다.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Try 결과 확인</h3>
        <p className="text-gray-700 mb-3">
          Try 요청 실행 후 웹 UI에서 다음 정보를 확인할 수 있습니다:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>요청 실행 시간 및 성능 지표</li>
          <li>트레이스 데이터 분석 결과</li>
          <li>성능 이슈 자동 감지 결과</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">다음 단계</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="/guide/basic-usage" className="text-primary hover:underline">기본 사용법</a> - API 명세 관리의 기본 워크플로우</li>
          <li><a href="/guide/api-spec" className="text-primary hover:underline">API 명세서 작성</a> - 상세한 명세서 작성 방법</li>
          <li><a href="/guide/mock-api" className="text-primary hover:underline">Mock API</a> - Mock 서버 사용법</li>
          <li><a href="/guide/try-feature" className="text-primary hover:underline">Try 기능</a> - 성능 추적 및 분석</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">참고: 명세 저장 위치</h2>
        <p className="text-gray-700 mb-3">
          모든 REST 명세는 애플리케이션 루트 기준 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">src/main/resources/ouroboros/rest/ourorest.yml</code> 파일 하나에 저장됩니다.
          라이브러리는 <span className="text-primary font-medium">ReentrantReadWriteLock</span>을 사용해 해당 파일을 안전하게 읽고 쓰며,
          저장 시 자동으로 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-*</code> 확장 필드를 채워 넣습니다.
        </p>
      </section>
    </div>
  );
} 