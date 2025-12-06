# 컨트리뷰션 가이드

Ouroboros 프로젝트에 기여하는 방법을 안내합니다.

> **참고**: Conventional Commits 스타일을 따릅니다.

## 기여 방법

Ouroboros는 다양한 형태의 기여를 환영합니다:

- 🐛 **버그 리포트**: 발견한 버그를 알려주세요
- 💡 **기능 제안**: 새로운 기능 아이디어를 제안해주세요
- 📝 **문서화**: 오타 수정 및 문서 개선
- 💻 **코드 기여**: 버그 수정 및 기능 구현
- 🌐 **번역**: 문서 번역
- 🧪 **테스트**: 테스트 케이스 작성 및 개선
- 🎨 **UI/UX**: 프론트엔드 디자인 및 사용성 개선

## 개발 환경 설정

### 요구사항

- **백엔드**: Java 17 이상, Gradle 8.14.3 이상 (Wrapper 포함), Spring Boot 3.5.7
- **프론트엔드**: Node.js 18 이상, npm 또는 yarn

### 백엔드 설정

```bash
cd backend

# 빌드
./gradlew build

# 테스트 실행
./gradlew test

# 애플리케이션 실행
./gradlew bootRun

# 로컬 Maven 저장소에 퍼블리시 (테스트용)
./gradlew publishToMavenLocal
```

### 프론트엔드 설정

```bash
cd front

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 린트 확인
npm run lint
```

## 브랜치 전략

Git Flow 전략을 사용합니다.

| 브랜치 | 목적 | 베이스 브랜치 |
|--------|------|---------------|
| `main` | 프로덕션 배포 브랜치 | - |
| `develop` | 개발 통합 브랜치 | `main` |
| `feature/*` | 새 기능 개발 | `develop` |
| `fix/*` | 버그 수정 | `develop` |
| `hotfix/*` | 긴급 프로덕션 수정 | `main` |
| `release/*` | 릴리스 준비 | `develop` |

### 브랜치 명명 규칙

```bash
# 새 기능
feature/add-websocket-support
feature/improve-validation

# 버그 수정
fix/resolve-swagger-conflict
fix/lombok-annotation-processor

# 핫픽스
hotfix/critical-security-patch

# 릴리스
release/1.0.5
```

## 커밋 메시지 규칙

Conventional Commits 스타일을 따릅니다.

### 타입

- `feat`: 새 기능
- `fix`: 버그 수정
- `docs`: 문서
- `style`: 코드 포맷팅 (로직 변경 없음)
- `refactor`: 리팩토링
- `test`: 테스트 코드
- `chore`: 빌드, 패키지 관리 등
- `perf`: 성능 개선
- `ci`: CI 설정
- `build`: 빌드 관련 파일

### 규칙

- **Subject**: 최대 50자, 첫 글자는 소문자, 마침표 없음
- **Body**: 72자 단위 줄바꿈, 무엇과 왜를 설명
- **Footer**: Breaking changes, 이슈 참조
- **언어**: 영어 또는 한국어 (일관성 유지)

### 예시

```
feat: add WebSocket code scanning feature

Implement AsyncAPI 3.0.0 support for WebSocket/STOMP API specification
management. This allows developers to manage WebSocket APIs alongside
REST APIs in a unified interface.

Closes #123
```

```
fix: resolve Swagger UI conflict

Upgrade minimum springdoc-openapi version to 2.8.13 to prevent
bean configuration conflicts with Ouroboros.

Fixes #456
```

## 코드 스타일 가이드

### Java (백엔드)

1. **Google Java Style Guide 준수**
2. **Javadoc 필수**: 모든 public 클래스, 메소드, 필드
3. **주석 언어**: 영어
4. **package-info.java**: 각 패키지마다 필수

```java
/**
 * Manages API specifications and synchronizes them with implementations.
 *
 * <p>This service handles CRUD operations for API specifications and
 * performs validation against actual controller implementations.
 *
 * @author Ouroboros Team
 * @since 1.0.0
 */
public class ApiSpecService {

    /**
     * Creates a new API specification.
     *
     * @param spec the API specification to create
     * @return the created API specification with generated ID
     * @throws DuplicateSpecException if specification already exists
     */
    public ApiSpec createSpec(ApiSpec spec) {
        // implementation
    }
}
```

### TypeScript/React (프론트엔드)

1. **ESLint 규칙 준수**
2. **Functional Components 사용**
3. **TypeScript Strict Mode 활성화**

```typescript
import { FC } from 'react';

interface UserProps {
  name: string;
  email: string;
}

/**
 * Displays user information
 */
export const UserComponent: FC<UserProps> = ({ name, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
```

## Pull Request 프로세스

### PR 체크리스트

- [ ] develop 브랜치에서 최신 코드 Pull
- [ ] 브랜치 명명 규칙 준수
- [ ] 커밋 메시지 규칙 준수
- [ ] 코드 스타일 가이드 준수
- [ ] 새 코드에 대한 테스트 작성
- [ ] 모든 테스트 통과
- [ ] Javadoc/JSDoc 작성
- [ ] 문서 업데이트 (필요 시)
- [ ] 린터 에러 없음

### 리뷰 프로세스

1. **PR 생성**: develop 브랜치로 PR 생성
2. **자동 검사**: CI/CD가 빌드 및 테스트 자동 실행
3. **코드 리뷰**: 최소 1명의 maintainer 승인 필요
4. **수정**: 리뷰 피드백 반영
5. **병합**: 승인 후 maintainer가 병합

### PR 템플릿

```markdown
## 변경 사항
<!-- 이 PR에서 변경한 내용을 설명하세요 -->

## 관련 이슈
<!-- 관련 이슈 번호를 링크하세요 -->
Closes #

## 테스트
<!-- 어떻게 테스트했는지 설명하세요 -->

## 스크린샷
<!-- UI 변경이 있는 경우 스크린샷 추가 -->

## 체크리스트
- [ ] 테스트 추가/업데이트
- [ ] 문서 업데이트
- [ ] 린터 통과
- [ ] 빌드 성공
```

## 로컬 테스트

변경사항을 로컬에서 테스트하려면:

```bash
# 백엔드 빌드 및 로컬 Maven 저장소에 퍼블리시
cd backend
./gradlew publishToMavenLocal

# 테스트 프로젝트에서 사용
dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.6-SNAPSHOT'
}
```

## 추가 자료

- [GitHub 저장소](https://github.com/whitesnakegang/ouroboros) – 소스 코드 및 이슈
- [기여 가이드](https://github.com/whitesnakegang/ouroboros/blob/main/CONTRIBUTING_KR.md) – 전체 기여 가이드 (한국어)
- [행동 강령](https://github.com/whitesnakegang/ouroboros/blob/main/CODE_OF_CONDUCT_KR.md) – 커뮤니티 행동 강령 (한국어)

## 도움이 필요하신가요?

- [GitHub Discussions](https://github.com/whitesnakegang/ouroboros/discussions)에서 질문하세요
- [Discord](https://discord.gg/ouroboros)에 참여하세요
- [이메일](mailto:ouroboros@whitesnakegang.io)로 문의하세요

감사합니다! 🎉
