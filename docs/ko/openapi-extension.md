# OpenAPI 확장

Ouroboros 커스텀 확장 필드와 자동 보정 규칙을 정리했습니다.

## Operation-level 확장

### x-ouroboros-id
API 명세 고유 식별자 (UUID)

```yaml
paths:
  /api/users:
    get:
      x-ouroboros-id: "550e8400-e29b-41d4-a716-446655440000"
```

### x-ouroboros-progress
개발 진행 상태 (mock | completed)

```yaml
paths:
  /api/users:
    get:
      x-ouroboros-progress: mock  # 또는 completed
```

- `mock`: Mock 응답만 제공 중
- `completed`: 실제 구현이 완료된 엔드포인트

### x-ouroboros-tag
개발 태그 (none | implementing | bugfix)

```yaml
paths:
  /api/users:
    get:
      x-ouroboros-tag: implementing  # 또는 none, bugfix
```

- `none`: 특별한 태그 없음
- `implementing`: 현재 구현 중
- `bugfix`: 버그 수정 중

### x-ouroboros-diff
명세와 구현의 차이 (none | request | response | endpoint | both)

```yaml
paths:
  /api/users:
    get:
      x-ouroboros-diff: none  # 또는 request, response, endpoint, both
```

- **none**: 차이가 없음
- **request**: 요청 파라미터, 헤더, 본문 스키마에 차이가 있음
- **response**: 응답 상태 코드, 헤더, 본문 스키마에 차이가 있음
- **endpoint**: 경로 및 메서드가 명세와 구현 간 일치하지 않음
- **both**: 요청과 응답 모두 차이가 있음

> **참고**: 명세를 수정하면 x-ouroboros-diff가 자동으로 none으로 재설정됩니다.

## Schema-level 확장

### x-ouroboros-mock
DataFaker 표현식 (예: `{{name.fullName}}`)

```yaml
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          x-ouroboros-mock: "{{random.uuid}}"
        name:
          type: string
          x-ouroboros-mock: "{{name.fullName}}"
        email:
          type: string
          x-ouroboros-mock: "{{internet.emailAddress}}"
        age:
          type: integer
          x-ouroboros-mock: "{{number.numberBetween '18' '80'}}"
```

### x-ouroboros-orders
필드 순서 배열

```yaml
components:
  schemas:
    User:
      type: object
      x-ouroboros-orders: ["id", "name", "email", "age"]
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
        age:
          type: integer
```

## 자동 보정

> **참고**: Ouroboros는 검증 중에 누락된 Ouroboros 확장 필드를 자동으로 추가하고 명세를 보강합니다.

### 자동 추가되는 필드

1. **x-ouroboros-id**: 명세가 생성될 때 자동으로 UUID가 할당됩니다.
2. **x-ouroboros-progress**: 기본값은 `mock`으로 설정됩니다.
3. **x-ouroboros-tag**: 기본값은 `none`으로 설정됩니다.
4. **x-ouroboros-diff**: 기본값은 `none`으로 설정됩니다.

### 예시

명세를 작성할 때:

```yaml
paths:
  /api/users:
    get:
      summary: Get all users
      responses:
        '200':
          description: OK
```

Ouroboros가 자동으로 보강한 결과:

```yaml
paths:
  /api/users:
    get:
      x-ouroboros-id: "550e8400-e29b-41d4-a716-446655440000"
      x-ouroboros-progress: mock
      x-ouroboros-tag: none
      x-ouroboros-diff: none
      summary: Get all users
      responses:
        '200':
          description: OK
```

## DataFaker 표현식 예시

### 기본 타입

```yaml
# 문자열
x-ouroboros-mock: "{{name.fullName}}"
x-ouroboros-mock: "{{address.city}}"
x-ouroboros-mock: "{{company.name}}"

# 숫자
x-ouroboros-mock: "{{number.randomDigit}}"
x-ouroboros-mock: "{{number.numberBetween '1' '100'}}"

# 날짜
x-ouroboros-mock: "{{date.past '365' 'DAYS'}}"
x-ouroboros-mock: "{{date.birthday}}"

# Boolean
x-ouroboros-mock: "{{bool.bool}}"
```

### 인터넷 관련

```yaml
x-ouroboros-mock: "{{internet.emailAddress}}"
x-ouroboros-mock: "{{internet.url}}"
x-ouroboros-mock: "{{internet.ipV4Address}}"
x-ouroboros-mock: "{{internet.uuid}}"
```

### 비즈니스 데이터

```yaml
x-ouroboros-mock: "{{phoneNumber.cellPhone}}"
x-ouroboros-mock: "{{commerce.productName}}"
x-ouroboros-mock: "{{commerce.price}}"
x-ouroboros-mock: "{{lorem.sentence}}"
```

더 많은 DataFaker 표현식은 [DataFaker 공식 문서](https://www.datafaker.net/documentation/getting-started/)를 참고하세요.

## 다음 단계

- [Schema 관리](./schema.md) - Mock 표현식 활용하기
- [Mock API](./mock-api.md) - Mock 데이터 테스트
- [구현 검증](./implementation-validation.md) - 차이 확인 및 동기화
