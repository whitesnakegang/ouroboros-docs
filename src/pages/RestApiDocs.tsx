import { Link } from 'react-router-dom';

export default function RestApiDocs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">API 문서</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros는 REST API로 명세와 스키마를 제어할 수 있는 엔드포인트를 제공합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">REST API 명세 관리</h2>
        <p className="text-gray-700 mb-4">엔드포인트 요약입니다. 모든 응답은 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">GlobalApiResponse</code> 포맷으로 반환됩니다.</p>
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
                <td className="px-4 py-3 font-mono text-primary">POST</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs</td>
                <td className="px-4 py-3">REST API 명세 생성 (중복 path+method는 409 반환)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs</td>
                <td className="px-4 py-3">모든 명세 조회</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/{'{id}'}</td>
                <td className="px-4 py-3">ID로 명세 상세 조회</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">PUT</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/{'{id}'}</td>
                <td className="px-4 py-3">명세 업데이트 (필드별 부분 수정 지원)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">DELETE</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/{'{id}'}</td>
                <td className="px-4 py-3">명세 삭제 (경로 내 마지막 메서드이면 path도 삭제)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">POST</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/import</td>
                <td className="px-4 py-3">OpenAPI 3.1 YAML 파일 Import (중복 항목은 -import 접미사로 저장)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/export/yaml</td>
                <td className="px-4 py-3">현재 저장된 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ourorest.yml</code> 다운로드</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-3 text-sm">
          상세 제약과 예시는 <a href="https://github.com/whitesnakegang/ouroboros/tree/develop/backend/docs/endpoints" className="text-primary hover:underline" target="_blank" rel="noreferrer">backend/docs/endpoints</a> 문서에서 확인할 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">스키마 관리</h2>
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
                <td className="px-4 py-3 font-mono text-primary">POST</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/schemas</td>
                <td className="px-4 py-3">스키마 생성 (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">schemaName</code> 중복 시 409)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/schemas</td>
                <td className="px-4 py-3">스키마 전체 조회</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/schemas/{'{schemaName}'}</td>
                <td className="px-4 py-3">단일 스키마 조회</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">PUT</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/schemas/{'{schemaName}'}</td>
                <td className="px-4 py-3">스키마 수정 (제공된 필드만 교체)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">DELETE</td>
                <td className="px-4 py-3 font-mono">/ouro/rest-specs/schemas/{'{schemaName}'}</td>
                <td className="px-4 py-3">스키마 삭제</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-3 text-sm">
          스키마는 재사용 가능한 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">#/components/schemas</code> 항목으로 저장되며, 누락된 참조는 자동으로 placeholder가 생성됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">응답 포맷</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">성공 응답</h3>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`{
  "status": 200,
  "data": { ... },
  "message": "REST API specification created successfully",
  "error": null
}`}</code></pre>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">에러 응답</h3>
            <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`{
  "status": 409,
  "data": null,
  "message": "API specification already exists",
  "error": {
    "code": "DUPLICATE_API",
    "details": "An API specification with the same path and method already exists"
  }
}`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">API 명세서 확인 방법</h2>
        <p className="text-gray-700 mb-3">
          저장된 명세서는 다음 방법으로 확인할 수 있습니다:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 목록 조회 및 상세 보기</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">GET /ouro/rest-specs/export/yaml</code>로 다운로드</li>
          <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ourorest.yml</code> 파일 직접 확인</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 문서</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/guide/api-spec" className="text-primary hover:underline">API 명세서 작성 가이드</Link></li>
          <li><Link to="/guide/schema" className="text-primary hover:underline">Schema 관리 가이드</Link></li>
          <li><Link to="/guide/mock-api" className="text-primary hover:underline">Mock API 사용법</Link></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Try & 성능 추적 API</h2>
        <p className="text-gray-700 mb-4">웹 UI에서 Try 기능을 실행하면 아래 엔드포인트로 성능 데이터를 확인할 수 있습니다.</p>
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
                <td className="px-4 py-3">Try 요약 (상태, HTTP 코드, 총 소요 시간, span 수)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}/methods</td>
                <td className="px-4 py-3">메서드 실행 목록 (self duration 기준 내림차순, 페이징)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">GET</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}/trace</td>
                <td className="px-4 py-3">트레이스 트리 (부모/자식 스팬 구조)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">DELETE</td>
                <td className="px-4 py-3 font-mono">/ouro/tries/{'{'}tryId{'}'}/trace</td>
                <td className="px-4 py-3">trace 데이터 삭제 (저장소 자원 관리용, trace 없어도 200 반환)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-3 text-sm">
          Try 요청은 웹 UI에서 “Send” 버튼을 눌렀을 때 자동으로 기록되며, 기록된 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">tryId</code>는 응답 헤더 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">X-Ouroboros-Try-Id</code>에서 확인할 수 있습니다.
        </p>
      </section>
    </div>
  );
}
