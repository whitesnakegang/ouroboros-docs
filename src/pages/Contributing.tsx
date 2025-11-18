export default function Contributing() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">컨트리뷰션 가이드</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 프로젝트에 기여하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">기여 방법</h2>
        <p className="text-gray-700 mb-3">
          Ouroboros는 다양한 형태의 기여를 환영합니다:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>🐛 <strong>버그 리포트</strong>: 발견한 버그를 알려주세요</li>
          <li>💡 <strong>기능 제안</strong>: 새로운 기능 아이디어를 제안해주세요</li>
          <li>📝 <strong>문서화</strong>: 오타 수정 및 문서 개선</li>
          <li>💻 <strong>코드 기여</strong>: 버그 수정 및 기능 구현</li>
          <li>🌐 <strong>번역</strong>: 문서 번역</li>
          <li>🧪 <strong>테스트</strong>: 테스트 케이스 작성 및 개선</li>
          <li>🎨 <strong>UI/UX</strong>: 프론트엔드 디자인 및 사용성 개선</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">개발 환경 설정</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">요구사항</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>백엔드:</strong> Java 17 이상, Gradle 8.14.3 이상 (Wrapper 포함), Spring Boot 3.5.7</li>
          <li><strong>프론트엔드:</strong> Node.js 18 이상, npm 또는 yarn</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">백엔드 설정</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`cd backend

# 빌드
./gradlew build

# 테스트 실행
./gradlew test

# 애플리케이션 실행
./gradlew bootRun

# 로컬 Maven 저장소에 퍼블리시 (테스트용)
./gradlew publishToMavenLocal`}</code></pre>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">프론트엔드 설정</h3>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`cd front

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 린트 확인
npm run lint`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">브랜치 전략</h2>
        <p className="text-gray-700 mb-3">
          Git Flow 전략을 사용합니다.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">브랜치</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">목적</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">베이스 브랜치</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">main</code></td>
                <td className="px-4 py-3">프로덕션 배포 브랜치</td>
                <td className="px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">develop</code></td>
                <td className="px-4 py-3">개발 통합 브랜치</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">main</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">feature/*</code></td>
                <td className="px-4 py-3">새 기능 개발</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">fix/*</code></td>
                <td className="px-4 py-3">버그 수정</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">hotfix/*</code></td>
                <td className="px-4 py-3">긴급 프로덕션 수정</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">main</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm"><code className="bg-gray-100 px-1.5 py-0.5 rounded">release/*</code></td>
                <td className="px-4 py-3">릴리스 준비</td>
                <td className="px-4 py-3"><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">커밋 메시지 규칙</h2>
        <p className="text-gray-700 mb-3">
          <strong>Conventional Commits</strong> 스타일을 따릅니다.
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto mb-4"><code>{`<type>: <short description>

[optional] body

[optional] footer`}</code></pre>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">타입</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">feat</code>: 새 기능</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">fix</code>: 버그 수정</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">docs</code>: 문서</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">style</code>: 코드 포맷팅 (로직 변경 없음)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">refactor</code>: 리팩토링</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">test</code>: 테스트 코드</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">chore</code>: 빌드, 패키지 관리 등</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">perf</code>: 성능 개선</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ci</code>: CI 설정</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">build</code>: 빌드 관련 파일</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">규칙</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Subject</strong>: 최대 50자, 첫 글자는 소문자, 마침표 없음</li>
          <li><strong>Body</strong>: 72자 단위 줄바꿈, <strong>무엇</strong>과 <strong>왜</strong>를 설명</li>
          <li><strong>Footer</strong>: Breaking changes, 이슈 참조</li>
          <li><strong>언어</strong>: 영어 또는 한국어 (일관성 유지)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">코드 스타일 가이드</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Java (백엔드)</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Google Java Style Guide</strong> 준수</li>
          <li><strong>Javadoc 필수</strong>: 모든 public 클래스, 메소드, 필드</li>
          <li><strong>주석 언어</strong>: 영어</li>
          <li><strong>package-info.java</strong>: 각 패키지마다 필수</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">TypeScript/React (프론트엔드)</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>ESLint</strong> 규칙 준수</li>
          <li><strong>Functional Components</strong> 사용</li>
          <li><strong>TypeScript Strict Mode</strong> 활성화</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pull Request 프로세스</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">PR 체크리스트</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code> 브랜치에서 최신 코드 Pull</li>
          <li>브랜치 명명 규칙 준수</li>
          <li>커밋 메시지 규칙 준수</li>
          <li>코드 스타일 가이드 준수</li>
          <li>새 코드에 대한 테스트 작성</li>
          <li>모든 테스트 통과</li>
          <li>Javadoc/JSDoc 작성</li>
          <li>문서 업데이트 (필요 시)</li>
          <li>린터 에러 없음</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">리뷰 프로세스</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>PR 생성</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code> 브랜치로 PR 생성</li>
          <li><strong>자동 검사</strong>: CI/CD가 빌드 및 테스트 자동 실행</li>
          <li><strong>코드 리뷰</strong>: 최소 1명의 maintainer 승인 필요</li>
          <li><strong>수정</strong>: 리뷰 피드백 반영</li>
          <li><strong>병합</strong>: 승인 후 maintainer가 병합</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">로컬 테스트</h2>
        <p className="text-gray-700 mb-3">
          변경사항을 로컬에서 테스트하려면:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`# 백엔드 빌드 및 로컬 Maven 저장소에 퍼블리시
cd backend
./gradlew publishToMavenLocal

# 테스트 프로젝트에서 사용
dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.3-SNAPSHOT'
}`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">추가 자료</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://github.com/whitesnakegang/ouroboros" className="text-primary hover:underline" target="_blank" rel="noreferrer">GitHub 저장소</a> – 소스 코드 및 이슈</li>
          <li><a href="https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CONTRIBUTING.md" className="text-primary hover:underline" target="_blank" rel="noreferrer">기여 가이드</a> – 전체 기여 가이드 (한국어)</li>
          <li><a href="https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CODE_OF_CONDUCT.md" className="text-primary hover:underline" target="_blank" rel="noreferrer">행동 강령</a> – 커뮤니티 행동 강령 (한국어)</li>
        </ul>
      </section>
    </div>
  );
}
