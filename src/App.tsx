import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuickStart from './pages/QuickStart';
import Guide from './pages/Guide';
import BasicUsage from './pages/BasicUsage';
import ApiSpec from './pages/ApiSpec';
import Schema from './pages/Schema';
import MockApi from './pages/MockApi';
import OpenApiExtension from './pages/OpenApiExtension';
import TryFeature from './pages/TryFeature';
import ImplementationValidation from './pages/ImplementationValidation';
import RestApiDocs from './pages/RestApiDocs';
import SpecificationApi from './pages/SpecificationApi';
import SchemaApi from './pages/SchemaApi';
import ProjectStructure from './pages/ProjectStructure';
import Contributing from './pages/Contributing';
import Developer from './pages/Developer';
import TryApi from './pages/TryApi';

function App() {
  // .env 파일이 있으면 개발환경 (basename 없음)
  // .env 파일이 없으면 배포환경 (package.json의 homepage 경로 사용)
  const hasEnvFile = String(import.meta.env.VITE_HAS_ENV_FILE) === 'true';
  const homepage = import.meta.env.VITE_HOMEPAGE || '';
  const basename = hasEnvFile 
    ? undefined 
    : (homepage ? new URL(homepage).pathname : undefined);
  
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/basic-usage" element={<BasicUsage />} />
          <Route path="/guide/api-spec" element={<ApiSpec />} />
          <Route path="/guide/schema" element={<Schema />} />
          <Route path="/guide/mock-api" element={<MockApi />} />
          <Route path="/guide/openapi-extension" element={<OpenApiExtension />} />
          <Route path="/guide/try-feature" element={<TryFeature />} />
          <Route path="/guide/implementation-validation" element={<ImplementationValidation />} />
          <Route path="/api" element={<RestApiDocs />} />
          <Route path="/api/specification" element={<SpecificationApi />} />
          <Route path="/api/schema" element={<SchemaApi />} />
          <Route path="/api/try" element={<TryApi />} />
          <Route path="/developer/project-structure" element={<ProjectStructure />} />
          <Route path="/developer/contributing" element={<Contributing />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
