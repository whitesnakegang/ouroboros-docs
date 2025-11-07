

export default function TryFeature() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Try 기능</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 API 실행을 시뮬레이션하고 성능 정보를 확인하는 방법을 안내합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Try 탭 사용법</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>API 상세 화면에서 “Try” 탭을 선택합니다.</li>
          <li>경로 변수, Query, Header, Body 값을 입력합니다.</li>
          <li>“Send” 버튼을 클릭하면 Mock 응답과 소요 시간이 표시됩니다.</li>
          <li>결과 영역에서 “Copy cURL” 또는 JSON 응답 복사 버튼으로 쉽게 공유할 수 있습니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">성능 기록 조회</h2>
        <p className="text-gray-700 mb-3">
          Try 모드로 실행한 요청은 우측 상단 “History” 버튼에서 확인할 수 있습니다. 각 요청을 선택하면 응답 시간, 상태 코드, Mock 데이터가 함께 표시됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">추가 자료</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://ouroboros.co.kr" className="text-primary hover:underline" target="_blank" rel="noreferrer">공식 문서</a>에서 Try 기능 가이드를 확인하세요.</li>
          <li>환경 설정이 필요한 경우 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">OUROBOROS_TRY_SETUP.md</code> 문서를 참고할 수 있습니다.</li>
        </ul>
      </section>
    </div>
  );
}
