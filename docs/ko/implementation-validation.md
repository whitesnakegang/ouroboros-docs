# 구현 검증

웹 UI에서 명세와 구현 진행 상태를 관리하고 확인하는 방법을 소개합니다.

> **Lombok 사용 시 주의**: Lombok을 사용하는 프로젝트라면 반드시 `annotationProcessor 'org.projectlombok:lombok'`를 빌드 설정에 포함해야 합니다. 이 설정이 없으면 @ApiState 메타데이터가 생성되지 않아 자동 검증이 동작하지 않습니다.

![검증 화면](/images/validation-screen.png)

## 진행 상태 관리

1. Progress 값은 SDK가 명세와 구현 상태를 비교해 자동으로 "mock" 또는 "completed"로 조정합니다.
2. Tag 역시 스캔 결과에 따라 자동으로 업데이트되어 현재 구현 상태(implementing, bugfix 등)를 표시합니다.
3. 변경 사항은 저장 직후 목록에 반영되어 진행 상황을 수동으로 조작할 필요가 없습니다.

## 상태 확인

목록 또는 상세 화면에서 API별 진행 상태를 한눈에 확인할 수 있으며, 상태에 따라 배지 색상이 표시됩니다.

- **mock**: Mock 응답만 제공 중
- **completed**: 실제 구현이 완료된 엔드포인트

## 자동 검증

사용자가 작성한 명세는 실행 중인 애플리케이션의 OpenAPI 스캔 결과와 자동으로 비교됩니다. 변경사항을 저장하면 SDK가 명세와 구현을 동기화하여 불일치 항목을 표시합니다.

### 검증 유형

#### Request Validation
요청 파라미터, 헤더, 본문 스키마 비교

```java
@PostMapping("/users")
@ApiState(progress = ApiProgress.COMPLETED)
public ResponseEntity<User> createUser(
    @RequestBody User user,
    @RequestHeader("X-API-Key") String apiKey
) {
    // ...
}
```

#### Response Validation
응답 상태 코드, 헤더, 본문 스키마 비교

```java
@GetMapping("/users/{id}")
@ApiState(progress = ApiProgress.COMPLETED)
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return ResponseEntity.ok(user);
}
```

#### Endpoint Validation
명세와 구현 간 경로 및 메서드 일치 여부 확인

```java
@GetMapping("/api/users")  // 경로가 명세와 일치해야 함
@ApiState(progress = ApiProgress.COMPLETED)
public ResponseEntity<List<User>> getUsers() {
    // ...
}
```

#### Both
요청과 응답 모두 명세와 다른 경우

### 주요 기능

1. **Visual Diff Display**: 명세와 구현 간 차이점을 정확히 확인
2. **One-Click Sync**: 코드에서 명세로 변경사항을 한 번의 클릭으로 적용
3. **Validation Status Badge**: 각 엔드포인트의 검증 상태 표시(Valid/Invalid/Diff detected)
4. **Detailed Reports**: 모든 엔드포인트에 대한 포괄적인 검증 보고서 확인
5. **Filter by Status**: 검증 상태별로 엔드포인트 필터링하여 빠른 검토

### 워크플로우

1. 코드 스캔 후 검증 결과 확인
2. 인터페이스에서 강조 표시된 불일치 항목 검토
3. 코드와 명세를 동기화하기 위해 변경사항 적용
4. 각 엔드포인트의 검증 상태 추적

> ⚠️ **중요**: Lombok을 사용하는 프로젝트라면 `annotationProcessor 'org.projectlombok:lombok'` 설정이 있어야 정상 동작합니다.

## @ApiState 어노테이션 사용

### 기본 사용법

```java
import io.github.whitesnakegang.ouroboros.annotation.ApiState;
import io.github.whitesnakegang.ouroboros.annotation.ApiProgress;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    @ApiState(progress = ApiProgress.COMPLETED)
    public ResponseEntity<List<User>> getUsers() {
        // 구현
    }

    @PostMapping
    @ApiState(progress = ApiProgress.MOCK)
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // 아직 구현 중
    }
}
```

### Progress 상태

- **ApiProgress.MOCK**: 명세만 작성되고 실제 구현은 없음
- **ApiProgress.COMPLETED**: 실제 구현 완료

> **참고**: @ApiState 어노테이션이 붙은 메서드만 스캔됩니다. 어노테이션이 없는 메서드는 명세 검증 대상에서 제외됩니다.

## WebSocket/STOMP 검증

WebSocket/STOMP API도 REST API와 동일하게 명세와 구현을 검증할 수 있습니다. Springwolf를 통해 코드 스캔이 활성화된 경우 자동으로 검증이 수행됩니다.

### WebSocket 검증 유형

#### Channel Validation
채널 주소가 명세와 구현 간 일치하는지 확인

```java
@MessageMapping("/app/chat/send")  // 전체 경로 포함
@SendTo("/topic/chat")
public ChatMessage sendMessage(ChatMessage message) {
    return message;
}
```

#### Message Validation
메시지 페이로드 스키마가 명세와 구현 간 일치하는지 확인

```java
@MessageMapping("/app/chat/send")
@SendTo("/topic/chat")
public ChatMessage sendMessage(
    @Payload ChatMessage message  // 스키마와 일치해야 함
) {
    return message;
}
```

#### Operation Validation
receive/reply Operation이 명세와 구현 간 일치하는지 확인

### ⚠️ WebSocket 검증을 위한 요구사항

1. Springwolf 의존성 추가 및 활성화 필요
2. @MessageMapping과 @SendTo 어노테이션이 붙은 메소드만 스캔됩니다
3. 채널 주소는 애플리케이션 destination prefix를 포함한 전체 경로로 작성해야 합니다

### WebSocket 설정 예시

```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic", "/queue");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").withSockJS();
    }
}
```

> **참고**: @MessageMapping과 @SendTo 어노테이션이 붙은 메소드만 스캔됩니다

## 다음 단계

- [OpenAPI 확장](./openapi-extension.md) - 차이 상태 이해하기
- [Try 기능](./try-feature.md) - 성능 추적 및 분석
- [API 명세서 작성](./api-spec.md) - 명세 업데이트
