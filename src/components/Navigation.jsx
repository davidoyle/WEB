'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/pressure-points', label: 'Tactical Strategy' },
  { href: '/worksafebc-forms-guide', label: 'Forms Guide' },
  { href: '/resources', label: 'Resources' },
  { href: '/templates', label: 'Templates' },
  { href: '/wcat', label: 'WCAT Armory' },
  { href: '/documentation', label: 'Documentation' },
  { href: '/tell-your-story', label: 'Tell Your Story' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-red-300/30 bg-red-700 text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="eyebrow !text-white">
          WORKER&apos;S TOOLKIT
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Global">
          {mainLinks.map(link => (
            <Link key={link.href} href={link.href} className="nav-link !text-white hover:!bg-red-600">
              {link.label}
            </Link>
          ))}
          <Link href="/start-here" className="btn-secondary !border-white/60 !text-white">
            My Situation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="rounded-md p-2 text-white hover:bg-red-600 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-red-800 px-6 py-8 md:hidden">
          <div className="mb-8 flex items-center justify-between">
            <span className="eyebrow !text-white">MENU</span>
            <button
              type="button"
              className="rounded-md p-2 text-white hover:bg-red-700"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Mobile global">
            {mainLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-red-700 px-4 py-3 text-lg font-semibold text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start-here"
              onClick={() => setIsOpen(false)}
              className="rounded-xl border border-white/50 px-4 py-3 text-lg font-semibold text-white"
            >
              My Situation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
