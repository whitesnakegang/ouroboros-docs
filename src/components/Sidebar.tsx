import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  title: string;
  path: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: '시작하기',
    path: '/',
  },
  {
    title: 'Quick Start',
    path: '/quick-start',
  },
  {
    title: '가이드',
    path: '/guide',
    children: [
      { title: '기본 사용법', path: '/guide/basic-usage' },
      { title: 'API 명세서 작성', path: '/guide/api-spec' },
      { title: 'Schema 관리', path: '/guide/schema' },
      { title: 'Mock API', path: '/guide/mock-api' },
      { title: 'OpenAPI 확장', path: '/guide/openapi-extension' },
      { title: 'Try 기능', path: '/guide/try-feature' },
      { title: '구현 검증', path: '/guide/implementation-validation' },
    ],
  },
  {
    title: 'API 문서',
    path: '/api',
    children: [
      { title: 'REST API 개요', path: '/api' },
      { title: 'Specification 관리', path: '/api/specification' },
      { title: 'Schema 관리', path: '/api/schema' },
      { title: 'Try & 성능 추적', path: '/api/try' },
    ],
  },
  {
    title: '개발자 가이드',
    path: '/developer',
    children: [
      { title: '프로젝트 구조', path: '/developer/project-structure' },
      { title: '컨트리뷰션', path: '/developer/contributing' },
    ],
  },
];

interface SidebarItemProps {
  item: MenuItem;
  level?: number;
}

function SidebarItem({ item, level = 0 }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={level > 0 ? 'ml-4' : ''}>
      <Link
        to={item.path}
        className={`block px-4 py-2 text-sm transition-colors ${
          isActive
            ? 'bg-primary text-white font-medium'
            : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
        }`}
      >
        {item.title}
      </Link>
      {hasChildren && (
        <div className="mt-1">
          {item.children!.map((child) => (
            <SidebarItem key={child.path} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[280px] min-h-[calc(100vh-60px)] bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <nav className="py-4">
        {menuItems.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </nav>
    </aside>
  );
} 