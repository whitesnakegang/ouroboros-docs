import { Link } from 'react-router-dom';

export default function SpecificationApi() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Specification 관리</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI를 통해 API 명세서를 관리하는 방법입니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 UI에서 명세서 관리</h2>
        <p className="text-gray-700 mb-4">
          Ouroboros는 웹 UI를 통해 API 명세서를 직관적으로 관리할 수 있도록 설계되었습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세서 생성</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>웹 UI에서 "New API" 버튼 클릭</li>
          <li>경로, HTTP 메서드, 요약 입력</li>
          <li>요청 파라미터, 요청 본문, 응답 스키마 정의</li>
          <li>저장 버튼 클릭</li>
        </ol>
        <p className="text-gray-700 mt-3">
          저장하면 자동으로 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ourorest.yml</code> 파일에 반영됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세서 조회</h2>
        <p className="text-gray-700 mb-3">
          웹 UI의 사이드바에서 모든 API 명세서 목록을 확인할 수 있습니다. 각 명세서를 클릭하면 상세 내용을 볼 수 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세서 수정</h2>
        <p className="text-gray-700 mb-3">
          웹 UI에서 명세서를 클릭하여 수정할 수 있습니다. 수정 후 저장하면 파일에 반영됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세서 삭제</h2>
        <p className="text-gray-700 mb-3">
          웹 UI에서 명세서를 선택하고 삭제 버튼을 클릭하면 삭제됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">명세서 저장 위치</h2>
        <p className="text-gray-700 mb-3">
          모든 변경사항은 다음 파일에 저장됩니다:
        </p>
        <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto"><code>{`{프로젝트}/src/main/resources/ouroboros/rest/ourorest.yml`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 문서</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/guide/api-spec" className="text-primary hover:underline">API 명세서 작성 가이드</Link></li>
          <li><Link to="/guide/basic-usage" className="text-primary hover:underline">기본 사용법</Link></li>
        </ul>
      </section>
    </div>
  );
}
