export default function Contributing() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">컨트리뷰션 가이드</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 프로젝트에 기여하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">브랜치 전략</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Main Branch</strong>: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">develop</code> (not main)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">feature/*</code> - 새로운 기능 (develop에서 브랜치)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">fix/*</code> - 버그 수정 (develop에서 브랜치)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">hotfix/*</code> - 긴급 프로덕션 수정 (main에서 브랜치)</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">release/*</code> - 릴리스 준비 (develop에서 브랜치)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">커밋 컨벤션</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`<type>: <description under 50 chars>

Optional body explaining what and why`}</code></pre>
        <p className="text-gray-700 mt-3 mb-3">
          Types: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">feat</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">fix</code>, 
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">docs</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">style</code>, 
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">refactor</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">test</code>, 
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">chore</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">perf</code>, 
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ci</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">build</code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">코드 스타일</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>주석은 영어로 작성</li>
          <li>작업 완료 후 package-info 작성</li>
          <li>Javadoc 주석 항상 작성</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">로컬 테스트</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`# 라이브러리 빌드
./gradlew build

# 로컬 Maven 저장소에 퍼블리시
./gradlew publishToMavenLocal

# 테스트 프로젝트에서 사용
dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.0'
}`}</code></pre>
      </section>
    </div>
  );
}
