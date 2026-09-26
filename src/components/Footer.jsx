import Link from 'next/link';

const Footer = () => (
  <footer className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)] py-10">
    <div className="section-shell">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[var(--text-primary)]">Workers Toolkit</p>
          <p className="text-sm text-[var(--text-muted)]">
            Independent. Not funded by WorkSafeBC, government, or any insurer.
          </p>
        </div>
        <nav className="space-y-2" aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Tools</p>
          <ul className="space-y-1">
            {[
              { href: '/start-here', label: 'My Situation' },
              { href: '/pressure-points', label: 'Tactics' },
              { href: '/wcat', label: 'WCAT Precedents' },
              { href: '/templates', label: 'Templates' },
              { href: '/tell-your-story', label: 'The Record' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="space-y-2" aria-label="Footer secondary navigation">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">More</p>
          <ul className="space-y-1">
            {[
              { href: '/documentation', label: 'Documentation' },
              { href: '/first-30-minutes', label: 'First 30 Minutes' },
              { href: '/resources', label: 'Resources' },
              { href: '/about', label: 'About' },
              { href: '/for-institutions', label: 'For Institutions' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 border-t border-[var(--border-default)] pt-6">
        <p className="text-xs text-[var(--text-muted)] max-w-2xl">
          Built by one injured BC worker. Every tactic, every template, every precedent was built to change what happens to thousands of workers every year in British Columbia.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
