import Link from 'next/link';
import { useRouter } from 'next/router';

const labelMap = {
  'start-here': 'Start Here',
  'pressure-points': 'Tactics',
  templates: 'Templates',
  wcat: 'WCAT',
  documentation: 'Documentation',
  'tell-your-story': 'The Record',
  resources: 'Resources',
  about: 'About',
  stories: 'Stories',
  'how-to-use': 'How To Use',
  'first-30-minutes': 'First 30 Minutes',
  'worksafebc-forms-guide': 'Forms Guide',
  'why-silent': 'Why They Go Silent',
  'for-institutions': 'For Institutions',
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
    <nav aria-label="Breadcrumb" className="section-shell py-3">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[var(--text-muted)]">
        <li>
          <Link href="/" className="hover:text-[var(--text-secondary)]">
            Home
          </Link>
        </li>
        {crumbs.map(crumb => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span aria-hidden="true">•</span>
            <Link href={crumb.href} className="hover:text-[var(--text-secondary)]">
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
