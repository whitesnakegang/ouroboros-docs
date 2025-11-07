import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={logo} alt="Ouroboros" className="h-24 w-24" />
          <h1 className="text-5xl font-bold text-gray-900">
            <span className="text-primary">Ouroboros</span>
          </h1>
        </div>
        <p className="text-xl text-gray-600 mb-8">
          OpenAPI 3.1.0 기반 REST API 명세 관리 및 Mock 서버 라이브러리
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/quick-start"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            빠른 시작
          </Link>
          <a
            href="https://github.com/whitesnakegang/ouroboros"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">주요 기능</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">API 명세 관리</h3>
            <p className="text-gray-600">
              OpenAPI 3.1.0 표준을 준수하는 REST API 명세를 생성, 관리하고 실제 구현과 동기화합니다.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">자동 Mock 서버</h3>
            <p className="text-gray-600">
              명세 작성 즉시 Mock API가 생성되어 프론트엔드 개발이 백엔드를 기다릴 필요가 없습니다.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">구현 검증</h3>
            <p className="text-gray-600">
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">@ApiState</code> 어노테이션으로 명세와 구현의 일치성을 자동 검증합니다.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Try 기능</h3>
            <p className="text-gray-600">
              OpenTelemetry 기반 성능 추적 및 분석으로 API 실행을 추적하고 성능 이슈를 자동으로 감지합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">빠른 시작</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. 의존성 추가</h3>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm mb-4"><code>{`dependencies {
    implementation 'io.github.whitesnakegang:ouroboros:1.0.0'
    implementation 'org.springframework.boot:spring-boot-starter-web'
}`}</code></pre>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. 애플리케이션 실행</h3>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm mb-4"><code>{`./gradlew bootRun`}</code></pre>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. 웹 UI 접속</h3>
          <p className="text-gray-700 mb-4">
            브라우저에서 <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">http://localhost:8080/ouroboros/</code> 으로 접속하세요.
          </p>
          
          <Link
            to="/quick-start"
            className="inline-block text-primary hover:underline font-medium"
          >
            더 자세한 시작 가이드 보기 →
          </Link>
        </div>
      </section>
    </div>
  );
} 