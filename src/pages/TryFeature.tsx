

export default function TryFeature() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Try 기능</h1>
      <p className="text-xl text-gray-600 mb-12">
        OpenTelemetry 기반의 API 성능 추적 및 분석 기능입니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">개요</h2>
        <p className="text-gray-700 mb-4">
          Try 기능은 API 요청의 성능을 추적하고 분석하는 기능입니다. 
          웹 UI에서 간단하게 사용할 수 있으며, Grafana Tempo를 통해 트레이스 데이터를 수집하고 분석합니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">환경 설정</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. application.properties 설정</h3>
        <p className="text-gray-700 mb-3">
          Try 기능을 사용하려면 다음 설정을 추가하세요:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`# Ouroboros 기본 설정
ouroboros.enabled=true
ouroboros.server.url=https://your-api-server.com
ouroboros.server.description=Your API Server Description

# Tempo 연동 설정
ouroboros.tempo.enabled=true
ouroboros.tempo.base-url=http://\${TEMPO_HOST:localhost}:\${TEMPO_UI_PORT:3200}

# 메소드 트래킹 설정
ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages=your.package.name

# OpenTelemetry Exporter 설정 (App -> Tempo)
management.tracing.enabled=true
management.otlp.tracing.endpoint=http://\${TEMPO_HOST:localhost}:\${TEMPO_HTTP_PORT:4318}/v1/traces
management.tracing.sampling.probability=1.0

# 로깅 설정 (디버깅 시)
logging.level.kr.co.ouroboros=DEBUG`}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Tempo 설정 (Docker Compose)</h3>
        <p className="text-gray-700 mb-3">
          Grafana Tempo는 Try 기능의 백엔드 서버입니다. Docker Compose로 실행합니다.
        </p>
        
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">.env 파일 생성</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`# Docker ↔ App 동기화 변수
TEMPO_HOST=localhost
TEMPO_HTTP_PORT=4318  # OTLP HTTP (트레이스 데이터 전송)
TEMPO_UI_PORT=3200    # Tempo UI / Query API`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">docker-compose.yml</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`services:
  tempo:
    image: grafana/tempo:2.6.1
    container_name: tempo
    ports:
      - "\${TEMPO_HTTP_PORT:-4318}:4318"  # OTLP HTTP
      - "\${TEMPO_UI_PORT:-3200}:3200"    # Tempo UI
    command: ["-config.file=/etc/tempo/tempo.yaml"]
    volumes:
      - ./tempo.yaml:/etc/tempo/tempo.yaml:ro
      - ./tempo-data:/var/tempo
    restart: unless-stopped`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Tempo 실행</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`docker compose up -d`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">@ApiState 어노테이션 사용법</h2>
        <p className="text-gray-700 mb-4">
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code> 어노테이션은 Ouroboros가 
          실제 구현된 메소드를 자동으로 식별하고 명세서와 연결하기 위해 사용됩니다.
          컨트롤러의 각 핸들러 메소드 위에 추가하세요.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">기본 사용법</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`import io.github.whitesnakegang.ouroboros.annotation.ApiState;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping("/{id}")
    @ApiState(state = ApiState.State.COMPLETED)
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
}`}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">ApiState.State 값</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">BUGFIX</code>: bugfix 상태
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-gray-600">
              <li>bugfix 상태를 나타내며, Mock API로 임시 응답</li>
              <li>Ouroboros가 자동 생성한 Mock API로 응답</li>
            </ul>
          </li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">IMPLEMENTING</code>: 구현 중 (검증 진행)
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-gray-600">
              <li>실제 코드 구현이 진행 중인 상태</li>
              <li>Ouroboros가 명세서와 구현의 일치 여부를 검증</li>
            </ul>
          </li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">COMPLETED</code>: 구현 완료 (실제 API 동작)
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-gray-600">
              <li>구현이 완료되고 검증을 통과한 상태</li>
              <li>실제 API가 동작하며 Try 기능으로 테스트 가능</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">다양한 HTTP 메서드 예시</h3>
        
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">POST 요청</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`@PostMapping
@ApiState(state = ApiState.State.IMPLEMENTING)
public ResponseEntity<User> createUser(@RequestBody CreateUserRequest request) {
    User user = userService.create(request);
    return ResponseEntity.status(201).body(user);
}`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">PUT 요청</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`@PutMapping("/{id}")
@ApiState(state = ApiState.State.COMPLETED)
public ResponseEntity<User> updateUser(
    @PathVariable Long id, 
    @RequestBody UpdateUserRequest request
) {
    User user = userService.update(id, request);
    return ResponseEntity.ok(user);
}`}</code></pre>

        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">DELETE 요청</h4>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`@DeleteMapping("/{id}")
@ApiState(state = ApiState.State.COMPLETED)
public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    userService.delete(id);
    return ResponseEntity.noContent().build();
}`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Try 기능 사용법</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">웹 UI에서 Try 요청 보내기</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 API 명세서 선택</li>
          <li>"Try" 버튼 클릭</li>
          <li>요청 파라미터 입력 (필요한 경우)</li>
          <li>"실행" 버튼 클릭</li>
        </ol>
        <p className="text-gray-700 mt-3">
          웹 UI가 자동으로 요청을 추적하며, 성능 분석이 진행됩니다.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Try 기능 동작 원리</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>요청 감지</strong>: 웹 UI에서 Try 요청 실행</li>
          <li><strong>Try ID 생성</strong>: 고유한 Try ID (UUID) 자동 생성</li>
          <li><strong>트레이스 수집</strong>: OpenTelemetry를 통해 요청 실행 중 모든 트레이스 수집</li>
          <li><strong>Tempo 저장</strong>: 수집된 트레이스 데이터를 Tempo로 전송 및 저장</li>
          <li><strong>결과 분석</strong>: 웹 UI에서 성능 분석 결과 확인</li>
        </ol>
      </section>
    </div>
  );
}
