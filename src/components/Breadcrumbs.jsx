import Link from 'next/link';
import { useRouter } from 'next/router';

const labelMap = {
  'start-here': 'Start Here',
  'pressure-points': 'Tactical Strategy',
  templates: 'Templates',
  wcat: 'WCAT Armory',
  documentation: 'Documentation',
  'tell-your-story': 'Tell Your Story',
  resources: 'Resources',
  about: 'About',
  stories: 'Stories',
  'how-to-use': 'How To Use',
  'first-30-minutes': 'First 30 Minutes',
  'worksafebc-forms-guide': 'Forms Guide',
  'why-silent': 'The Cost of Silence',
};

const Breadcrumbs = () => {
  const { asPath } = useRouter();
  const path = asPath.split('?')[0];

  if (path === '/') return null;

  const segments = path.split('/').filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    return { href, label: labelMap[segment] || segment };
  });

  return (
    <nav aria-label="Breadcrumb" className="section-shell py-3 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
        </li>
        {crumbs.map(crumb => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span aria-hidden="true">&gt;</span>
            <Link href={crumb.href} className="hover:text-accent">
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
