import { Link } from 'react-router-dom';

export default function Guide() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">가이드</h1>
      <p className="text-xl text-gray-600 mb-12">
        Ouroboros 사용 가이드입니다.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/guide/basic-usage" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">기본 사용법</h2>
          <p className="text-gray-600">API 명세 관리의 기본 워크플로우를 알아봅니다.</p>
        </Link>

        <Link to="/guide/api-spec" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">API 명세서 작성</h2>
          <p className="text-gray-600">REST API 명세서를 작성하고 관리하는 방법을 알아봅니다.</p>
        </Link>

        <Link to="/guide/schema" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Schema 관리</h2>
          <p className="text-gray-600">재사용 가능한 Schema 컴포넌트를 관리하는 방법을 알아봅니다.</p>
        </Link>

        <Link to="/guide/mock-api" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mock API</h2>
          <p className="text-gray-600">자동 생성되는 Mock 서버를 사용하는 방법을 알아봅니다.</p>
        </Link>

        <Link to="/guide/openapi-extension" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">OpenAPI 확장</h2>
          <p className="text-gray-600">Ouroboros 커스텀 확장 필드를 사용하는 방법을 알아봅니다.</p>
        </Link>

        <Link to="/guide/try-feature" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Try 기능</h2>
          <p className="text-gray-600">API 성능 추적 및 분석 기능을 사용하는 방법을 알아봅니다.</p>
        </Link>

        <Link to="/guide/implementation-validation" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">구현 검증</h2>
          <p className="text-gray-600">명세서와 실제 구현의 일치성을 검증하는 방법을 알아봅니다.</p>
        </Link>
      </div>
    </div>
  );
} 