export default function Schema() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Schema 관리</h1>
      <p className="text-xl text-gray-600 mb-12">
        웹 UI에서 재사용 가능한 데이터 모델(Schema)을 작성하고 활용하는 방법을 소개합니다.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 생성</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>좌측 사이드바에서 “Schemas”를 선택합니다.</li>
          <li>“New Schema” 버튼을 눌러 이름과 설명을 입력합니다.</li>
          <li>Properties 영역에서 필드를 추가하고 타입, 필수 여부, Mock 값을 설정합니다.</li>
          <li>저장을 누르면 Schema가 등록되고, API 작성 시 바로 참조할 수 있습니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schema 관리</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>목록에서 Schema를 선택하면 오른쪽 패널에서 상세 정보를 수정할 수 있습니다.</li>
          <li>필요 시 “Duplicate”로 비슷한 구조를 복제하거나 “Delete”로 삭제 가능합니다.</li>
          <li>Schema 이름은 API에서 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$ref</code> 선택 목록에 바로 표시됩니다.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mock 데이터</h2>
        <p className="text-gray-700 mb-3">
          각 필드는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-ouroboros-mock</code>에 기본값을 지정할 수 있으며, Try 패널에서 Mock 응답을 확인할 때 사용됩니다.
          예: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{$internet.emailAddress}}'}</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">{'{{$random.uuid}}'}</code>
        </p>
      </section>
    </div>
  );
}
