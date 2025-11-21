# Schema 관리

웹 UI에서 재사용 가능한 데이터 모델(Schema)을 작성하고 활용하는 방법을 소개합니다.

## Schema 생성 및 사용

1. 좌측 사이드바에서 "Schemas"를 선택합니다.
2. "New Schema" 버튼을 눌러 이름과 설명을 입력합니다.
3. Properties 영역에서 필드를 추가하고 타입, 필수 여부, Mock 값을 설정합니다.
4. 저장을 누르면 Schema가 등록되고, API 작성 시 바로 참조할 수 있습니다.

![Schema 생성 및 사용 워크플로우](/images/schema-workflow.png)

## Schema 관리

1. 목록에서 Schema를 선택하면 오른쪽 패널에서 상세 정보를 수정할 수 있습니다.
2. 필요 시 "Duplicate"로 비슷한 구조를 복제하거나 "Delete"로 삭제 가능합니다.
3. Schema 이름은 API에서 $ref 선택 목록에 바로 표시됩니다.

## Mock 데이터

각 필드는 `x-ouroboros-mock`에 DataFaker 문법을 사용하여 Mock 표현식을 지정할 수 있으며, Try 패널에서 Mock 응답을 확인할 때 사용됩니다.

### 예시

- `{{random.uuid}}` - UUID 생성
- `{{name.fullName}}` - 전체 이름 생성
- `{{internet.emailAddress}}` - 이메일 주소 생성

**참고**: DataFaker 문법을 사용하면 실제와 유사한 Mock 데이터를 자동으로 생성할 수 있습니다.

### Schema 예제

```json
{
  "name": "User",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "x-ouroboros-mock": "{{random.uuid}}"
    },
    "name": {
      "type": "string",
      "x-ouroboros-mock": "{{name.fullName}}"
    },
    "email": {
      "type": "string",
      "x-ouroboros-mock": "{{internet.emailAddress}}"
    },
    "age": {
      "type": "integer",
      "x-ouroboros-mock": "{{number.numberBetween '18' '80'}}"
    }
  },
  "required": ["id", "name", "email"]
}
```

## WebSocket용 Schema 및 Message

WebSocket/STOMP API 명세 작성을 위해 별도의 Schema와 Message를 정의할 수 있습니다.

### WebSocket Schema

"WebSocket" → "Schemas" 탭에서 WebSocket 메시지 페이로드용 스키마를 생성합니다. REST API용 Schema와 동일하게 필드와 타입을 정의할 수 있으며, DataFaker 문법도 사용 가능합니다.

### Message 생성

"WebSocket" → "Messages" 탭에서 앞서 생성한 Schema를 참조하는 Message를 정의합니다. Message는 WebSocket Operation에서 사용됩니다.

> **참고**: WebSocket용 Schema와 Message는 REST API용 Schema와 독립적으로 관리되며, WebSocket 명세는 `ourowebsocket.yml` 파일에 저장됩니다.

## 다음 단계

- [API 명세서 작성](./api-spec.md) - Schema를 활용한 API 명세 작성
- [Mock API](./mock-api.md) - Mock 데이터 테스트
- [OpenAPI 확장](./openapi-extension.md) - 커스텀 확장 필드 사용법
