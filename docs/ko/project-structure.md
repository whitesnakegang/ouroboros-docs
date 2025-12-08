# 프로젝트 구조

Ouroboros 프로젝트의 구조를 설명합니다.

## 전체 구조

Ouroboros는 **backend** (Spring Boot 라이브러리)와 **front** (React 웹 UI)로 구성되어 있습니다.

```
ouroboros/
├── backend/                    # Spring Boot 라이브러리
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── io/github/whitesnakegang/ouroboros/
│   │   │   │       ├── annotation/       # 어노테이션 (@ApiState 등)
│   │   │   │       ├── config/          # 자동 구성 클래스
│   │   │   │       ├── controller/      # REST 컨트롤러
│   │   │   │       ├── domain/          # 도메인 모델
│   │   │   │       ├── filter/          # 필터 (Mock 서버 등)
│   │   │   │       ├── parser/          # YAML 파서
│   │   │   │       ├── service/         # 비즈니스 로직
│   │   │   │       ├── util/            # 유틸리티
│   │   │   │       └── websocket/       # WebSocket 지원
│   │   │   └── resources/
│   │   │       ├── META-INF/
│   │   │       │   └── spring.factories  # 자동 구성 등록
│   │   │       └── static/              # 웹 UI 정적 파일
│   │   └── test/                        # 테스트 코드
│   ├── build.gradle                     # Gradle 빌드 파일
│   └── README.md
│
├── front/                      # React 웹 UI
│   ├── src/
│   │   ├── components/        # React 컴포넌트
│   │   ├── pages/            # 페이지 컴포넌트
│   │   ├── hooks/            # 커스텀 훅
│   │   ├── services/         # API 서비스
│   │   ├── types/            # TypeScript 타입
│   │   ├── utils/            # 유틸리티 함수
│   │   └── App.tsx           # 메인 앱 컴포넌트
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── docs/                      # 문서
    ├── api/                  # API 문서
    ├── ko/                   # 한국어 문서
    └── en/                   # 영어 문서
```

## 백엔드 패키지 구조

### annotation/
API 상태 관리를 위한 어노테이션 정의

```java
io.github.whitesnakegang.ouroboros.annotation/
├── ApiState.java           # API 진행 상태 어노테이션
├── ApiProgress.java        # 진행 상태 enum
└── ApiTag.java             # API 태그 enum
```

### config/
Spring Boot 자동 구성 클래스

```java
io.github.whitesnakegang.ouroboros.config/
├── OuroborosAutoConfiguration.java      # 메인 자동 구성
├── RestApiConfiguration.java            # REST API 설정
├── WebSocketConfiguration.java          # WebSocket 설정
├── MockServerConfiguration.java         # Mock 서버 설정
└── TryFeatureConfiguration.java         # Try 기능 설정
```

### controller/
REST API 엔드포인트 컨트롤러

```java
io.github.whitesnakegang.ouroboros.controller/
├── ApiSpecController.java              # API 명세 CRUD
├── SchemaController.java                # Schema 관리
├── TryController.java                   # Try 기능 API
└── WebSocketSpecController.java        # WebSocket 명세 CRUD
```

### domain/
도메인 모델 및 엔티티

```java
io.github.whitesnakegang.ouroboros.domain/
├── ApiSpec.java                         # API 명세 모델
├── Schema.java                          # Schema 모델
├── TryResult.java                       # Try 결과 모델
└── ValidationResult.java                # 검증 결과 모델
```

### filter/
HTTP 필터 및 인터셉터

```java
io.github.whitesnakegang.ouroboros.filter/
├── OuroborosMockFilter.java            # Mock 서버 필터
├── TryFeatureFilter.java                # Try 기능 필터
└── ValidationFilter.java                # 검증 필터
```

### parser/
YAML 파서 및 변환기

```java
io.github.whitesnakegang.ouroboros.parser/
├── RestApiYamlParser.java              # OpenAPI YAML 파서
├── AsyncApiYamlParser.java             # AsyncAPI YAML 파서
└── SchemaParser.java                   # Schema 파서
```

### service/
비즈니스 로직 서비스

```java
io.github.whitesnakegang.ouroboros.service/
├── global/
│   ├── OuroApiSpecManager.java          # 명세서 캐시 관리
│   ├── OuroProtocolHandler.java         # 프로토콜 처리 전략
│   └── SpecSyncPipeline.java           # 명세 동기화 파이프라인
├── rest/
│   ├── RestApiSpecService.java          # REST API 명세 서비스
│   └── ApiStateGlobalMethodFilter.java  # @ApiState 필터링
└── websocket/
    ├── WebSocketSpecService.java        # WebSocket 명세 서비스
    └── OuroWebSocketHandler.java        # WebSocket 핸들러
```

## 프론트엔드 구조

### components/
재사용 가능한 UI 컴포넌트

```
src/components/
├── layout/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
├── common/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   └── CodeEditor.tsx
├── api/
│   ├── ApiList.tsx
│   ├── ApiDetail.tsx
│   └── ApiForm.tsx
└── schema/
    ├── SchemaList.tsx
    ├── SchemaDetail.tsx
    └── SchemaForm.tsx
```

### pages/
페이지 레벨 컴포넌트

```
src/pages/
├── Home.tsx                    # 홈 페이지
├── ApiListPage.tsx            # API 목록
├── ApiDetailPage.tsx          # API 상세
├── SchemaListPage.tsx         # Schema 목록
├── SchemaDetailPage.tsx       # Schema 상세
└── SettingsPage.tsx           # 설정
```

### services/
API 통신 서비스

```
src/services/
├── apiService.ts              # API 명세 API
├── schemaService.ts           # Schema API
├── tryService.ts              # Try 기능 API
└── validationService.ts       # 검증 API
```

## 핵심 컴포넌트

### Global

#### OuroApiSpecManager
명세서 캐시의 단일 소스 (중앙 캐시)

```java
@Component
public class OuroApiSpecManager {
    private final Map<String, ApiSpec> specCache = new ConcurrentHashMap<>();

    public ApiSpec getSpec(String id) { /* ... */ }
    public void updateSpec(String id, ApiSpec spec) { /* ... */ }
}
```

#### OuroProtocolHandler
프로토콜 전략 패턴 (REST, WebSocket 지원)

```java
@Component
public class OuroProtocolHandler {
    public void handleRequest(Protocol protocol, Request request) { /* ... */ }
}
```

#### SpecSyncPipeline
명세서 동기화 파이프라인

```java
@Component
public class SpecSyncPipeline {
    public void sync() { /* ... */ }
}
```

### REST

#### RestApiYamlParser
OpenAPI 3.1.0 YAML 파싱

```java
@Component
public class RestApiYamlParser {
    public ApiSpec parse(String yaml) { /* ... */ }
}
```

#### RestApiSpecService
REST API 명세 CRUD 서비스

```java
@Service
public class RestApiSpecService {
    public ApiSpec createSpec(ApiSpec spec) { /* ... */ }
    public ApiSpec updateSpec(String id, ApiSpec spec) { /* ... */ }
}
```

#### OuroborosMockFilter
Mock 서버 필터

```java
@Component
public class OuroborosMockFilter implements Filter {
    @Override
    public void doFilter(/* ... */) { /* ... */ }
}
```

#### ApiStateGlobalMethodFilter
@ApiState 메소드 필터링

```java
@Component
public class ApiStateGlobalMethodFilter {
    public List<Method> filterMethods() { /* ... */ }
}
```

### WebSocket

#### AsyncApiYamlParser
AsyncAPI 3.0.0 YAML 파싱

```java
@Component
public class AsyncApiYamlParser {
    public WebSocketSpec parse(String yaml) { /* ... */ }
}
```

#### WebSocketSpecService
WebSocket 명세 CRUD 서비스

```java
@Service
public class WebSocketSpecService {
    public WebSocketSpec createSpec(WebSocketSpec spec) { /* ... */ }
}
```

#### OuroWebSocketHandler
WebSocket 프로토콜 핸들러

```java
@Component
public class OuroWebSocketHandler {
    public void handleMessage(Message message) { /* ... */ }
}
```

## 데이터 저장

모든 API 명세서는 다음 위치에 단일 파일로 저장됩니다:

### REST API 명세
```
src/main/resources/ouroboros/rest/ourorest.yml
```

### WebSocket/STOMP API 명세
```
src/main/resources/ouroboros/websocket/ourowebsocket.yml
```

## 빌드 및 배포

### 백엔드 빌드

```bash
cd backend
./gradlew build
./gradlew publishToMavenLocal  # 로컬 테스트용
./gradlew publish              # Maven Central 배포
```

### 프론트엔드 빌드

```bash
cd front
npm run build

# 빌드 결과는 backend/src/main/resources/static에 복사됨
```

## 다음 단계

- [Contributing](./contributing.md) - 프로젝트 기여 방법
- [Quick Start](../quick-start.md) - 빠른 시작 가이드
