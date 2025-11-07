export default function TryApi() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Try & 성능 추적 API</h1>
      <p className="text-xl text-gray-600 mb-12">
        Try 기능으로 생성된 요청을 REST API로 조회하고 분석하는 방법을 정리했습니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 흐름</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>웹 UI에서 “Try” 탭으로 요청을 실행합니다.</li>
          <li>응답 헤더 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try-Id</code>에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">tryId</code>를 확인합니다.</li>
          <li>아래 REST API를 호출해 성능 요약, 메서드 목록, 트레이스, 이슈 정보를 조회합니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">엔드포인트 요약</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Method</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Path</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}</td>
                <td className="px-4 py-3">Try 요약 (상태, HTTP 코드, 총 소요 시간, span 수, issue 수)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}/methods</td>
                <td className="px-4 py-3">메서드 실행 목록 (selfDuration 기준 내림차순, 페이지 & 사이즈 파라미터 지원)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}/trace</td>
                <td className="px-4 py-3">트레이스 트리 (부모/자식 스팬 구조와 총 소요 시간)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">예시</h2>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm"><code>{`GET /ouro/tries/{tryId}

{
  "status": 200,
  "data": {
    "tryId": "a2b4...",
    "traceId": "1b8f...",
    "status": "COMPLETED",
    "statusCode": 200,
    "totalDurationMs": 153,
    "spanCount": 12,
    "issueCount": 1
  }
}`}</code></pre>
        <p className="text-sm text-gray-600 mt-2">
          메서드 목록 API는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">page</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">size</code> 파라미터를 지원하며, 응답의 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">hasMore</code> 필드로 다음 페이지 여부를 확인할 수 있습니다.
        </p>
      </section>
    </div>
  );
}
