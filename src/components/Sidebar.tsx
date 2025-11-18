import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  titleKey: string;
  path: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    titleKey: 'sidebar.gettingStarted',
    path: '/',
  },
  {
    titleKey: 'sidebar.quickStart',
    path: '/quick-start',
  },
  {
    titleKey: 'sidebar.guide',
    path: '/guide',
    children: [
      { titleKey: 'sidebar.basicUsage', path: '/guide/basic-usage' },
      { titleKey: 'sidebar.apiSpec', path: '/guide/api-spec' },
      { titleKey: 'sidebar.schema', path: '/guide/schema' },
      { titleKey: 'sidebar.mockApi', path: '/guide/mock-api' },
      { titleKey: 'sidebar.openapiExtension', path: '/guide/openapi-extension' },
      { titleKey: 'sidebar.tryFeature', path: '/guide/try-feature' },
      { titleKey: 'sidebar.implementationValidation', path: '/guide/implementation-validation' },
      { titleKey: 'sidebar.knownIssues', path: '/guide/known-issues' },
    ],
  },
  {
    titleKey: 'sidebar.developerGuide',
    path: '/developer',
    children: [
      { titleKey: 'sidebar.projectStructure', path: '/developer/project-structure' },
      { titleKey: 'sidebar.contributing', path: '/developer/contributing' },
    ],
  },
];

interface SidebarItemProps {
  item: MenuItem;
  level?: number;
}

function SidebarItem({ item, level = 0 }: SidebarItemProps) {
  const location = useLocation();
  const { t } = useTranslation();
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
        {t(item.titleKey)}
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
    <aside className="w-[280px] h-[calc(100vh-60px)] bg-gray-50 border-r border-gray-200 overflow-y-auto sticky top-[60px]">
      <nav className="py-4">
        {menuItems.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </nav>
    </aside>
  );
} 