# 기본 사용법

Ouroboros 웹 UI에서 명세를 작성하고 활용하는 기본 흐름을 안내합니다.

## 전체 워크플로우

### Step 1: 재사용 가능한 Schema 정의

1. 웹 UI에서 "Schemas" 탭으로 이동합니다
2. 스키마 폼을 작성합니다:
   - **Name**: 예: User
   - **Type**: object
   - **속성 추가** (예: id, name, email)
   - **DataFaker 문법을 사용하여 Mock 표현식 설정** (예: `{{random.uuid}}`, `{{name.fullName}}`)
   - **필수 필드 지정**
3. "Save" 버튼을 클릭합니다

### Step 2: API 명세 생성

1. "APIs" 탭으로 이동합니다
2. "New API" 버튼을 클릭합니다
3. API 폼을 작성합니다:
   - **Path**: 예: `/api/users`
   - **Method**: 예: POST
   - **Summary**: 예: Create user
   - **Request Body**: 앞서 생성한 Schema 참조
   - **Response (201)**: Schema 참조
   - **Progress**: mock
4. "Save" 버튼을 클릭합니다 - Mock API가 즉시 생성됩니다!

### Step 3: Mock API 테스트

Mock API는 지정된 경로에서 즉시 사용 가능합니다:

```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

### Step 4: 구현 및 검증 (백엔드 개발자)

컨트롤러에 @ApiState 어노테이션을 추가합니다:

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping
    @ApiState(progress = ApiProgress.COMPLETED)
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // 실제 구현
        return ResponseEntity.status(201).body(user);
    }
}
```

> ⚠️ **중요**: @ApiState 어노테이션이 붙은 컨트롤러 메서드만 코드 스캔에 포함됩니다. 이 어노테이션이 없는 메서드는 스캔되지 않으며 명세와의 검증도 수행되지 않습니다.

**참고**: 애플리케이션 시작 시, Ouroboros는 @ApiState 어노테이션이 붙은 모든 메서드에 대해 자동으로 구현을 명세와 검증합니다.

### Step 5: 상태 업데이트

1. 웹 UI에서 API를 선택합니다
2. Progress를 mock에서 completed로 변경합니다
3. "Save" 버튼을 클릭합니다

## 웹 UI 개요

Ouroboros는 직관적인 웹 기반 인터페이스를 제공합니다. 모든 작업은 코드 작성 없이 GUI를 통해 수행할 수 있습니다.

인터페이스는 세 가지 주요 영역으로 구성됩니다: 사이드바(탐색), 메인 콘텐츠 영역(명세 보기 및 편집), 액션 패널(테스트 및 검증).

### 주요 영역

1. **왼쪽 사이드바**: 모든 API 엔드포인트, 스키마, WebSocket 작업 탐색
2. **메인 콘텐츠 영역**: API 명세, 스키마, 메시지 보기 및 편집
3. **액션 패널**: API 테스트, 검증 결과 확인, 성능 분석

### 상태 배지

사이드바는 상태 배지와 함께 모든 API 엔드포인트를 표시하여 개발 상태를 한눈에 확인할 수 있습니다:

- 🟢 **Completed**: API가 완전히 구현되고 테스트됨
- 🟡 **Implementing**: API가 현재 개발 중
- 🔴 **Mock**: API가 명세로만 존재 (아직 구현되지 않음)
- 🟠 **Bugfix**: API가 버그 수정 중

### 주요 기능

1. **Schemas 탭**: 스키마를 작성하고 필수 필드를 지정할 수 있습니다
2. **APIs 탭**: Path, Method 입력 후 Request Body, Response, Headers를 폼으로 설정합니다
3. **Import/Export**: 우측 상단 "Import YAML", "Export YAML" 버튼으로 OpenAPI 파일을 가져오거나 내보냅니다
4. **API Try 패널**: API 상세 화면의 "API Try" 탭에서 파라미터를 입력한 뒤 "RUN" 버튼으로 Mock 응답을 바로 확인합니다
5. **인증 설정**: "Try/Test" 탭에서 "Authentication" 또는 "Auth" 버튼을 클릭하여 인증 값을 설정하면 모든 테스트 요청에 자동으로 포함됩니다

## 다음 단계

- [API 명세서 작성](./api-spec.md) – UI에서 엔드포인트를 작성하는 방법
- [Schema 관리](./schema.md) – 재사용 모델 등록
- [Mock API](./mock-api.md) – Try 패널로 테스트하기
