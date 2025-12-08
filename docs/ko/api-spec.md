# API 명세서 작성

Ouroboros 웹 UI에서 REST API 명세를 작성하고 관리하는 방법을 안내합니다.

## 새 API 추가

1. 좌측 사이드바에서 "APIs"를 선택한 뒤 "New API" 버튼을 누릅니다.
2. Path, Method, Summary, Description을 입력합니다.
3. Parameters, Request Body, Responses 영역에서 필요한 항목을 추가하거나 Schema를 연결합니다.
4. 오른쪽 상단 "Save" 버튼을 눌러 명세를 저장하면 Mock 엔드포인트가 즉시 생성됩니다.

## 명세 수정 및 관리

API Detail Page는 각 API 명세에 대한 포괄적인 정보를 제공합니다. 요청/응답 스키마, 파라미터, 메타데이터 등 모든 정보가 탭으로 구성되어 있어 쉽게 탐색할 수 있습니다.

### 주요 기능

- **Overview Tab**: 경로, 메서드, 요약, 설명, 태그를 포함한 완전한 API 명세 확인
- **Request Tab**: 요청 파라미터, 헤더, 쿼리 파라미터, 요청 본문 스키마 구성
- **Response Tab**: 다양한 상태 코드(200, 201, 400, 404 등)에 대한 응답 스키마 정의
- **API Try Tab**: API 테스트 실행 및 응답 확인
- **Validation Tab**: 검증 상태 및 명세와 구현 간 불일치 확인
- **Code Snippets**: cURL, JavaScript, Python 등 다양한 언어의 코드 예시 생성
- **Export**: Markdown 또는 OpenAPI YAML 형식으로 API 문서 내보내기

### 빠른 작업

1. 페이지에서 직접 API 세부 정보 편집
2. 요청/응답 본문에 재사용 가능한 스키마 참조
3. 개발 진행 상태 및 태그 설정
4. 검증 상태 확인 및 변경사항 적용

## Import / Export

상단 메뉴의 "Import YAML", "Export YAML" 버튼으로 OpenAPI 3.1 YAML 파일을 가져오거나 내보낼 수 있습니다. 기존 명세가 있는 상태에서 Import하면 UI가 자동으로 병합 결과를 안내합니다.

## 명세 편집기

Specification Editor는 직관적인 폼 기반 편집기를 통해 API 명세를 생성하고 편집할 수 있습니다. 편집기는 API의 모든 측면을 정의하는 단계별 워크플로우를 제공합니다.

### 편집기 섹션

#### Basic Information
경로, HTTP 메서드(GET, POST, PUT, DELETE 등), 요약, 설명 정의

#### Request Configuration
1. 경로 파라미터, 쿼리 파라미터, 헤더 추가
2. 요청 본문 스키마 정의(기존 스키마 참조 또는 인라인 생성)
3. 콘텐츠 타입 설정(application/json, application/xml 등)

#### Response Configuration
1. 각 상태 코드에 대한 응답 정의 추가
2. 응답 헤더 및 본문 스키마 정의
3. 응답 콘텐츠 타입 설정

#### Metadata
개발 진행 상태(mock/completed), 태그(none/implementing/bugfix), 검증 상태 설정

### 기능

1. `{ref: "SchemaName"}`를 사용하여 재사용 가능한 스키마 참조
2. 스키마 이름 및 필드 경로에 대한 자동 완성
3. OpenAPI 3.1.0 준수 여부 실시간 검증
4. 생성된 OpenAPI 명세 미리보기

## WebSocket/STOMP API 명세 작성

Ouroboros는 AsyncAPI 3.0.0 표준을 지원하여 WebSocket/STOMP API 명세를 작성하고 관리할 수 있습니다.

### WebSocket 명세 작성 절차

1. **Schema 생성**: "WebSocket" → "Schemas" 탭에서 메시지 페이로드용 스키마 생성
2. **Message 생성**: "WebSocket" → "Messages" 탭에서 스키마를 참조하는 메시지 정의
3. **Operation 생성**: "WebSocket" → "receive" 또는 "reply" 탭에서 채널 주소와 메시지 연결
4. **채널 주소 입력**: 애플리케이션 destination prefix를 포함한 전체 경로 입력 (예: /app/chat/send)

### ⚠️ 중요 사항

1. **채널 주소**: 명세에 채널 주소를 작성할 때는 애플리케이션 destination prefix를 포함한 전체 경로를 입력해야 합니다.
2. **어노테이션**: @MessageMapping과 @SendTo 어노테이션이 있는 메소드만 코드 스캔됩니다.
3. **명세 저장 위치**: 모든 WebSocket/STOMP 명세는 `src/main/resources/ouroboros/websocket/ourowebsocket.yml` 파일에 저장됩니다.

## 다음 단계

- [Schema 관리](./schema.md) - 재사용 가능한 Schema 컴포넌트 관리
- [Mock API](./mock-api.md) - Mock 서버 사용법
- [구현 검증](./implementation-validation.md) - 명세와 구현 일치성 검증
