# Ouroboros

**OpenAPI 3.1.0 기반 REST API 명세 관리 및 Mock 서버 라이브러리**

![Ouroboros 전체 UI](/images/scrennshots/complete-gui.png)

## 주요 기능

### API 명세 관리
OpenAPI 3.1.0 표준을 준수하는 REST API 명세를 생성, 관리하고 실제 구현과 동기화합니다.

### 자동 Mock 서버
명세 작성 즉시 Mock API가 생성되어 프론트엔드 개발이 백엔드를 기다릴 필요가 없습니다.

### 구현 검증
@ApiState 어노테이션으로 명세와 구현의 일치성을 자동 검증합니다.

### Try 기능
OpenTelemetry 기반 성능 추적 및 분석으로 API 실행을 추적하고 성능 이슈를 자동으로 감지합니다.

### WebSocket/STOMP API 관리
AsyncAPI 3.0.0 표준을 지원하는 WebSocket/STOMP API 명세 관리 및 코드 스캔 기능을 제공합니다.

## 빠른 시작

> **주의**: Ouroboros는 Spring Boot 3.5.7 이하 버전만 지원합니다. Spring Boot 4.0.0에서는 작동하지 않습니다. 자세한 내용은 [알려진 버그](./known-issues.md)를 참고하세요.

### 1. 의존성 추가

> ⚠️ **1.0.2 버전은 에러가 발생하므로 사용하지 마세요. 반드시 1.0.6 버전을 사용해주세요.**

```gradle
dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.6'
}
```

### 2. 설정 (application.yml)

```yaml
ouroboros:
  enabled: true  # 기본값: true
  server:
    url: http://localhost:8080
    description: Local Development Server

# Springwolf 설정 (필수)
# REST API만 사용하거나 WebSocket 코드 스캔이 필요 없는 경우 false로 설정해야 정상 부팅됩니다
springwolf:
  enabled: false  # WebSocket 코드 스캔 미사용 시 필수
```

> ⚠️ **중요**: springwolf.enabled=false 설정은 REST API만 사용하는 경우에도 필수입니다. 이 설정이 없으면 애플리케이션이 정상적으로 부팅되지 않을 수 있습니다.

### 3. 애플리케이션 실행

```bash
./gradlew bootRun
```

### 4. 웹 UI 접속

브라우저에서 http://localhost:8080/ouroboros/ 으로 접속하세요.

[더 자세한 시작 가이드 보기 →](./quick-start.md)

## 링크

- [GitHub](https://github.com/whitesnakegang/ouroboros)
- [Quick Start](./quick-start.md)
- [가이드](./guide/basic-usage.md)
