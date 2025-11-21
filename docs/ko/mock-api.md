# Mock API

웹 UI에서 Mock 응답을 확인하고 활용하는 방법을 안내합니다.

## Mock 테스트

1. API 상세 화면에서 "API Try" 탭을 선택합니다.
2. 필요한 Path/Query/Header 값을 입력합니다.
3. Request Body가 있으면 예시 JSON을 수정한 뒤 "RUN" 버튼을 클릭합니다.
4. 우측 하단 "TEST" 패널에서 Mock 응답 본문과 헤더를 바로 확인할 수 있습니다.

![테스트 설정 화면](/images/test-setting-screen.png)
![테스트 응답 화면](/images/test-response-screen.png)

## 인증 설정

API 테스트 전에 인증 설정을 구성할 수 있습니다. "Authentication" 또는 "Auth" 버튼을 클릭하여 인증 정보를 입력하면 모든 테스트 요청에 자동으로 포함됩니다.

![인증 설정 워크플로우](/images/auth-workflow.png)

## 응답 확인

Testing Screen은 API를 테스트하고 Mock 및 실제 응답을 확인할 수 있으며, 메소드 수준의 성능 추적도 함께 제공합니다.

### 응답 보기

- **Mock Response**: 명세에서 생성된 Mock 데이터로 테스트(프론트엔드 개발에 유용)
- **Actual Response**: 실제 백엔드 구현으로 테스트
- **Side-by-Side Comparison**: Mock vs 실제 응답을 비교하여 구현 정확성 검증
- **Response Details**: 상태 코드, 헤더, 포맷팅된 응답 본문(JSON, XML 등) 확인

### 주요 기능

1. Schema에서 `x-ouroboros-mock` 값을 지정하면 Try 응답에 반영됩니다
2. Code Snippet 생성 기능으로 cURL, JavaScript, Python 등 다양한 언어의 코드 예시를 생성할 수 있습니다
3. Export 기능으로 API 문서를 Markdown 또는 OpenAPI YAML 형식으로 내보낼 수 있습니다

### Code Snippet 예시

```bash
# cURL
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

```javascript
// JavaScript (fetch)
fetch('http://localhost:8080/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

```python
# Python (requests)
import requests

response = requests.post(
    'http://localhost:8080/api/users',
    json={'name': 'John Doe', 'email': 'john@example.com'}
)
print(response.json())
```

## WebSocket Mock 테스트

WebSocket/STOMP API도 REST API와 동일하게 Mock 응답을 테스트할 수 있습니다.

1. WebSocket Operation 상세 화면에서 "API Try" 탭을 선택합니다.
2. 메시지 페이로드를 입력합니다 (Schema에서 정의한 Mock 표현식이 자동으로 채워집니다).
3. "RUN" 버튼을 클릭하면 WebSocket 메시지가 전송되고 Mock 응답을 확인할 수 있습니다.

> ⚠️ **중요**: WebSocket Try 기능을 사용하려면 메시지 브로커의 /queue prefix를 활성화해야 합니다.

```java
@Override
public void configureMessageBroker(MessageBrokerRegistry config) {
    // Enable /queue prefix (required)
    config.enableSimpleBroker("/queue", "/topic");
}
```

## 다음 단계

- [Try 기능](./try-feature.md) - 성능 추적 및 분석
- [구현 검증](./implementation-validation.md) - 명세와 구현 일치성 검증
- [Schema 관리](./schema.md) - Mock 데이터 커스터마이징
