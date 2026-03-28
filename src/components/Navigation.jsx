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
    <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="eyebrow !text-[var(--text-primary)]">
          WORKERS TOOLKIT
        </Link>

        {!isSlim ? (
          <nav className="hidden items-center gap-2 md:flex" aria-label="Global">
            {mainLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <details className="relative" ref={moreMenuRef}>
              <summary className="nav-link list-none cursor-pointer">More ▾</summary>
              <div className="absolute right-0 mt-2 min-w-48 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-2">
                {moreLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      if (moreMenuRef.current) moreMenuRef.current.open = false;
                    }}
                    className="block px-3 py-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          </nav>
        ) : null}

        <div className="flex items-center gap-3">
          <Link href="/start-here" className="btn-primary">
            Start Here <span className="arrow-glyph">→</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className="rounded-sm border border-[var(--border-default)] p-2 text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-[var(--bg-primary)] px-6 py-8 md:hidden">
          <div className="mb-8 flex items-center justify-between">
            <span className="eyebrow !text-[var(--text-primary)]">MENU</span>
            <button
              type="button"
              className="rounded-sm border border-[var(--border-default)] p-2 text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Mobile global">
            {[...mainLinks, ...moreLinks].map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--text-primary)]"
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
