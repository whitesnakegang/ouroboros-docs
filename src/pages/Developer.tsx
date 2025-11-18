import { Link } from 'react-router-dom';

export default function Developer() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Guide</h1>
      <p className="text-xl text-gray-600 mb-12">
        개발자를 위한 프로젝트 구조와 기여 가이드를 한곳에서 확인하세요.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">바로가기</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><Link to="/developer/project-structure" className="text-primary hover:underline">프로젝트 구조</Link> – 패키지 구성과 핵심 컴포넌트 설명</li>
          <li><Link to="/developer/contributing" className="text-primary hover:underline">기여 가이드</Link> – 개발 환경 설정과 PR 플로우</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">추가 자료</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://github.com/whitesnakegang/ouroboros" className="text-primary hover:underline" target="_blank" rel="noreferrer">GitHub 저장소</a> – 이슈 및 소스 코드</li>
          <li><a href="https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CONTRIBUTING.md" className="text-primary hover:underline" target="_blank" rel="noreferrer">기여 가이드</a> – 전체 기여 가이드 (한국어)</li>
          <li><a href="https://github.com/whitesnakegang/ouroboros/blob/develop/docs/ko/CODE_OF_CONDUCT.md" className="text-primary hover:underline" target="_blank" rel="noreferrer">행동 강령</a> – 커뮤니티 행동 강령 (한국어)</li>
        </ul>
      </section>
    </div>
  );
}



