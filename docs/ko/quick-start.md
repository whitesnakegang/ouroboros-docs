# Quick Start

Ouroboros를 프로젝트에 추가하고 기본 기능을 동작시키는 절차를 정리합니다.

## 전제 조건

- Java 17 이상
- Spring Boot 3.x
- Gradle 또는 Maven

> **참고**: Lombok을 사용하는 프로젝트라면 `annotationProcessor 'org.projectlombok:lombok'` 설정이 필수입니다. 누락되면 @ApiState 스캔이 이루어지지 않아 명세-구현 자동 검증이 동작하지 않습니다.

> **참고**: Swagger UI (springdoc-openapi)를 함께 사용하는 경우, springdoc-openapi-starter-webmvc-ui 버전이 2.8.13 이상이어야 합니다. 2.2.0 같은 낮은 버전에서는 충돌이 발생할 수 있습니다. 자세한 내용은 [알려진 버그](./known-issues.md)를 참고하세요.

## 워크플로우

### REST API 워크플로우
![REST API 워크플로우](/images/gif/rest-work-flow.gif)

### WebSocket 워크플로우
![WebSocket 워크플로우](/images/gif/websocket-workflow.gif)

## 1단계: 설치

### 기본 의존성

기본 의존성만 추가하면 REST API와 WebSocket 기능 모두 사용할 수 있습니다.

> ⚠️ **1.0.2 버전은 에러가 발생하므로 사용하지 마세요. 반드시 1.0.5 버전을 사용해주세요.**

#### Gradle

```gradle
dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.5'
}
```

#### Maven

```xml
<dependency>
    <groupId>io.github.whitesnakegang</groupId>
    <artifactId>ouroboros</artifactId>
    <version>1.0.5</version>
</dependency>
```

> **참고**:
> - 라이브러리는 내부적으로 spring-boot-starter-actuator와 spring-boot-starter-aop를 함께 제공합니다.
> - Mock 서버와 REST API 컨트롤러는 자동 구성으로 등록되므로 별도 설정 없이 사용할 수 있습니다.
> - Lombok을 사용한다면 반드시 `annotationProcessor 'org.projectlombok:lombok'`를 추가해야 @ApiState 기반 자동 스캔이 정상 동작합니다.

## 2단계: 설정

application.yml 또는 application.properties에 다음 설정을 추가할 수 있습니다:

### REST API 설정

```yaml
ouroboros:
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
  enabled: false  # WebSocket 코드 스캔 미사용 시 필수
```

> **참고**: 설정을 비활성화하면 모든 컨트롤러, 필터, 자동 구성이 등록되지 않습니다. (예: `ouroboros.enabled=false`)

> ⚠️ **중요**: springwolf.enabled=false 설정은 REST API만 사용하는 경우에도 필수입니다. 이 설정이 없으면 애플리케이션이 정상적으로 부팅되지 않을 수 있습니다.

### WebSocket 설정 (선택사항)

WebSocket/STOMP API 코드 스캔 기능을 사용할 때의 설정입니다. WebSocket 명세 작성 기능은 기본 의존성만으로 사용 가능합니다.

> ⚠️ **중요 사항**:
> - **명세 작성만 필요한 경우**: Springwolf 의존성을 추가하지 않고 `springwolf.enabled=false`로 설정하면 됩니다.
> - **코드 스캔이 필요한 경우**: Springwolf 의존성을 추가하고 Springwolf를 활성화해야 합니다.
> - **채널 주소**: 명세에 채널 주소를 작성할 때는 애플리케이션 destination prefix를 포함한 전체 경로를 입력해야 합니다. (예: /app/chat/send)
> - **어노테이션**: @MessageMapping과 @SendTo 어노테이션이 있는 메소드만 스캔됩니다.

#### 옵션 1: 명세 작성만 (Springwolf 비활성화)

```yaml
springwolf:
  enabled: false  # Springwolf 비활성화 (명세 작성만 사용)
```

#### 옵션 2: 코드 스캔 및 명세 비교 (Springwolf 활성화)

```yaml
springwolf:
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
    base-package: com.yourpackage  # @MessageMapping 스캔할 패키지 경로
```

## 3단계: 애플리케이션 실행

```bash
./gradlew bootRun
```

또는 IDE에서 Spring Boot 애플리케이션을 실행하세요.

## 4단계: 웹 UI 접속

브라우저에서 다음 주소로 접속하세요:

```
http://localhost:8080/ouroboros/
```

웹 UI에서 API 명세를 생성하고 관리할 수 있습니다.

## 5단계: 첫 번째 API 명세서 작성

### REST API 명세 작성

웹 UI에서 REST API 명세를 작성합니다:

1. 경로, HTTP 메서드, 요약 등 입력
2. 요청/응답 스키마 정의
3. 저장

저장하면 자동으로 Mock API가 생성되어 바로 테스트할 수 있습니다.

### WebSocket/STOMP API 명세 작성 (선택사항)

WebSocket/STOMP API 명세를 작성할 수 있습니다. AsyncAPI 3.0.0 표준을 지원합니다.

1. **Schema 생성**: "WebSocket" → "Schemas" 탭에서 메시지 페이로드용 스키마 생성
2. **Message 생성**: "WebSocket" → "Messages" 탭에서 스키마를 참조하는 메시지 정의
3. **Operation 생성**: "WebSocket" → "receive" 또는 "reply" 탭에서 채널 주소와 메시지 연결
4. **채널 주소 입력**: 전체 경로 포함 (예: /app/chat/send)

> **참고**: WebSocket 명세 작성만 필요하다면 Springwolf 의존성을 추가하지 않아도 됩니다. 코드 스캔 및 명세 비교 기능이 필요할 때만 Springwolf를 설정하세요.

## 6단계: Mock API 테스트

명세서의 내용대로 엔드포인트가 구현되지 않았거나 @ApiState의 progress가 completed가 아닌 경우, 해당 엔드포인트로 요청하면 자동으로 Mock 응답이 반환됩니다.

```bash
curl http://localhost:8080/api/users
```

## 7단계: Try 기능 사용하기

Try 기능은 API 요청의 실행 시간을 추적하고 기록합니다. 별도 설정 없이 기본으로 활성화되어 있으며, 메모리 기반 저장소를 사용해 즉시 결과를 확인할 수 있습니다.

### 웹 UI에서 확인

1. API 상세 화면에서 "API Try" 탭 선택
2. 요청 파라미터 입력 후 "RUN" 클릭
3. 결과 영역과 "TEST" 패널에서 실행 이력 확인

### 선택 사항: Method Tracing

메소드 수준까지 추적하려면 다음 설정을 추가합니다. (Try 기능 기본 사용에는 필요 없음)

```properties
ouroboros.method-tracing.enabled=true
ouroboros.method-tracing.allowed-packages=your.package
```

상세 설정은 [Try 기능](./guide/try-feature.md) 가이드와 `OUROBOROS_TRY_SETUP.md`를 참고하세요.

### WebSocket 명세서 Try 기능 사용 시 주의사항

> ⚠️ **중요**: WebSocket 명세서의 Try 기능을 사용하려면 메시지 브로커의 /queue prefix를 열어줘야 합니다.

메시지 브로커 설정에서 /queue prefix에 대한 접근 권한을 허용하지 않으면 WebSocket Try 기능이 정상적으로 동작하지 않을 수 있습니다.

## 다음 단계

- [기본 사용법](./guide/basic-usage.md) - API 명세 관리의 기본 워크플로우
- [API 명세서 작성](./guide/api-spec.md) - 상세한 명세서 작성 방법
- [Mock API](./guide/mock-api.md) - Mock 서버 사용법
- [Try 기능](./guide/try-feature.md) - 성능 추적 및 분석

## 참고: 명세 저장 위치

### REST API 명세

모든 REST 명세는 애플리케이션 루트 기준 `src/main/resources/ouroboros/rest/ourorest.yml` 파일 하나에 저장됩니다.

### WebSocket/STOMP API 명세

모든 WebSocket/STOMP 명세는 애플리케이션 루트 기준 `src/main/resources/ouroboros/websocket/ourowebsocket.yml` 파일 하나에 저장됩니다.
