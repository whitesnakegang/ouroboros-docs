# Try 기능

별도 인프라 없이도 API 실행을 추적하고, 필요에 따라 메소드 단위까지 분석하는 방법을 정리했습니다.

## 동작 개요

1. **기본값**: 설정 없이 in-memory 저장소로 즉시 사용 가능
2. **트리거**: `X-Ouroboros-Try: on` 헤더가 포함된 요청만 추적
3. **조회**: 응답 헤더의 `X-Ouroboros-Try-Id`로 성능 데이터를 조회

## 웹 UI에서 사용하기

1. API 상세 화면의 "API Try" 탭을 열고 파라미터를 입력합니다.
2. "RUN" 버튼을 누르면 헤더가 자동으로 추가되어 요청이 실행됩니다.
3. 응답 패널에서 실행 시간, 상태 코드, Mock 데이터 등을 확인합니다.
4. 우측 "TEST" 패널에서 최근 Try 이력을 다시 조회할 수 있습니다.

## 직접 요청 보내기

도구(HTTPie, Postman 등)로 호출할 때는 헤더를 수동으로 추가합니다.

```bash
curl -X GET http://localhost:8080/api/users \
  -H "X-Ouroboros-Try: on"
```

응답 헤더의 Try ID를 복사해 `/ouro/tries/{tryId}` 등 REST API로 세부 정보를 확인할 수 있습니다.

### 응답 예시

```
HTTP/1.1 200 OK
X-Ouroboros-Try-Id: 550e8400-e29b-41d4-a716-446655440000
Content-Type: application/json

{
  "data": [...]
}
```

### Try 결과 조회

```bash
curl http://localhost:8080/ouro/tries/550e8400-e29b-41d4-a716-446655440000
```

## 메소드 성능 추적

Method Tracing이 활성화되면 메소드별 실행 시간을 상세히 확인할 수 있습니다.

### 설정 방법

```yaml
ouroboros:
  method-tracing:
    enabled: true
    allowed-packages: com.example.myapp  # 추적할 패키지 경로
```

또는 properties 형식:

```properties
ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages=com.example.myapp
```

## 고급 설정 (선택)

### Method Tracing

내부 메소드 호출까지 추적하려면 아래 설정을 추가합니다.

```yaml
ouroboros:
  method-tracing:
    enabled: true
    allowed-packages: your.package.name  # 추적할 패키지 경로 지정
```

### 트레이스 저장 기간

기본 저장소는 애플리케이션 메모리이므로 재시작 시 Try 기록이 초기화됩니다. 대부분의 개발 및 테스트 시나리오에서는 in-memory 저장소로 충분합니다.

#### Tempo 연동 (선택 사항)

영구 저장이 필요하다면 Grafana Tempo를 연동할 수 있습니다.

**Tempo를 사용하면 다음이 가능합니다:**

1. 영구 트레이스 저장 (애플리케이션 재시작 후에도 트레이스 유지)
2. 여러 요청에 걸친 고급 트레이스 분석
3. 여러 애플리케이션 인스턴스 간 트레이스 공유
4. 장기간 트레이스 보관

**Tempo 연동을 활성화하려면 application.properties에 다음 설정을 추가하세요:**

```properties
# Tempo 연동 활성화
ouroboros.tempo.enabled=true
ouroboros.tempo.base-url=http://localhost:3200

# OpenTelemetry Exporter 설정
management.tracing.enabled=true
management.otlp.tracing.endpoint=http://localhost:4318/v1/traces
```

상세한 Tempo 설정 방법은 `TRY_SETUP.md` 문서의 Tempo 연동 섹션을 참고하세요.

### WebSocket Try 기능 사용

> **중요**: WebSocket의 Try 기능을 사용하려면 서버의 메시지 브로커가 /queue prefix를 사용하도록 설정되어 있어야 합니다.

Spring WebSocket 메시지 브로커 설정에서 /queue prefix를 활성화해야 합니다:

```java
@Override
public void configureMessageBroker(MessageBrokerRegistry config) {
    // Enable /queue prefix (required)
    config.enableSimpleBroker("/queue", "/topic");
}
```

**참고**:
- Ouroboros SDK는 Try 요청 메타데이터를 `/queue/ouro/try` 토픽으로 전송합니다.
- 클라이언트는 `/user/queue/ouro/try` 토픽을 구독하여 Try 결과를 받을 수 있습니다.

## 관련 자료

- [Try & 성능 추적 API](https://github.com/whitesnakegang/ouroboros/blob/main/docs/api/try-api.md) – REST API 상세 설명
- [공식 문서](https://github.com/whitesnakegang/ouroboros) – 최신 가이드
- `TRY_SETUP.md` – Try 기능 설정 세부 가이드

## 다음 단계

- [구현 검증](./implementation-validation.md) - 명세와 구현 일치성 검증
- [Mock API](./mock-api.md) - Mock 서버 사용법
