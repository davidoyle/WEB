import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const mainLinks = [
  { href: '/start-here', label: 'My Situation' },
  { href: '/pressure-points', label: 'Tactics' },
  { href: '/wcat', label: 'WCAT' },
  { href: '/templates', label: 'Templates' },
  { href: '/tell-your-story', label: 'The Record' },
];

const moreLinks = [
  { href: '/worksafebc-forms-guide', label: 'Forms Guide' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/for-institutions', label: 'For Institutions' },
  { href: '/the-pressure', label: 'Pressure Record' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSlim, setIsSlim] = useState(false);
  const moreMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsSlim(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-[var(--bg-secondary)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
          Workers Toolkit
        </Link>

        {!isSlim ? (
          <nav className="hidden items-center gap-1 md:flex" aria-label="Global">
            {mainLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <details className="relative" ref={moreMenuRef}>
              <summary className="nav-link list-none cursor-pointer select-none">More ▾</summary>
              <div className="absolute right-0 mt-1 min-w-48 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-1 shadow-md">
                {moreLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      if (moreMenuRef.current) moreMenuRef.current.open = false;
                    }}
                    className="block rounded-md px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          </nav>
        ) : null}

        <div className="flex items-center gap-3">
          <Link href="/start-here" className="btn-primary text-sm">
            Start Here <span className="arrow-glyph">→</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className="rounded-md border border-[var(--border-default)] p-2 text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-[var(--bg-secondary)] px-6 py-6 md:hidden">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Workers Toolkit</span>
            <button
              type="button"
              className="rounded-md border border-[var(--border-default)] p-2 text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Mobile global">
            {[...mainLinks, ...moreLinks].map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-[var(--border-default)] bg-[var(--bg-tertiary)] px-4 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
