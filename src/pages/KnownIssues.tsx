export default function KnownIssues() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">알려진 버그</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 사용 시 주의해야 할 알려진 이슈와 해결 방법을 정리합니다.
      </p>

      <section className="mb-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h2 className="text-2xl font-bold text-red-900 mb-3">Swagger UI와의 충돌</h2>
          <p className="text-gray-800 mb-4">
            <strong>문제:</strong> Swagger UI (springdoc-openapi)가 프로젝트에 설치되어 있으면 Ouroboros와 충돌이 발생할 수 있습니다.
          </p>
          <p className="text-gray-800 mb-4">
            <strong>증상:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
            <li>애플리케이션 시작 시 에러 발생</li>
            <li>OpenAPI 스키마 파싱 오류</li>
            <li>웹 UI 접속 불가</li>
          </ul>
          <p className="text-gray-800 mb-4">
            <strong>원인:</strong> Swagger UI와 Ouroboros가 모두 OpenAPI 스키마를 처리하려고 할 때 경로 충돌이나 빈 설정 충돌이 발생합니다. 특히 <code className="bg-red-100 px-1.5 py-0.5 rounded text-sm">springdoc-openapi-starter-webmvc-ui</code> 버전이 <strong>2.8.13 미만</strong> (예: 2.2.0)인 경우 호환성 문제가 발생합니다.
          </p>
          <div className="bg-white border border-red-200 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">해결 방법</h3>
            <p className="text-gray-700 mb-3">
              다음 중 하나의 방법을 선택하세요:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
              <li>
                <strong>springdoc-openapi 버전 업그레이드 (권장):</strong>
                <p className="text-sm text-gray-700 mb-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">springdoc-openapi-starter-webmvc-ui</code>를 <strong>2.8.13 이상</strong>으로 업그레이드하세요.
                </p>
                <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mt-2"><code>{`// Gradle
implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.13'

// Maven
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.8.13</version>
</dependency>`}</code></pre>
              </li>
              <li>
                <strong>Swagger UI 비활성화:</strong>
                <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mt-2"><code>{`# application.yml
springdoc:
  api-docs:
    enabled: false
  swagger-ui:
    enabled: false`}</code></pre>
              </li>
              <li>
                <strong>Ouroboros 비활성화:</strong>
                <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm mt-2"><code>{`# application.yml
ouroboros:
  enabled: false`}</code></pre>
                <p className="text-sm text-gray-600 mt-2">이 경우 Ouroboros의 모든 기능이 비활성화됩니다.</p>
              </li>
              <li>
                <strong>의존성 제거:</strong>
                <p className="text-sm text-gray-700 mt-2">
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">springdoc-openapi-ui</code> 또는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">springfox-boot-starter</code> 의존성을 제거하세요.
                </p>
              </li>
            </ol>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-800">
              <strong>참고:</strong> Ouroboros는 자체 웹 UI를 제공하므로 Swagger UI와 함께 사용할 필요가 없습니다. 
              Ouroboros의 웹 UI에서 API 명세를 관리하고 Mock 서버를 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">버그 리포트</h2>
        <p className="text-gray-700 mb-4">
          다른 버그를 발견하셨거나 개선 사항이 있으시면 GitHub Issues에 리포트해 주세요.
        </p>
        <a
          href="https://github.com/whitesnakegang/ouroboros/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          GitHub Issues 열기
        </a>
      </section>
    </div>
  );
}

