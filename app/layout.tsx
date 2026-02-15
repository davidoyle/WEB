import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workers Toolkit',
  description: 'Resources for injured workers',
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/start-here', label: 'Start Here' },
  { href: '/resources', label: 'Resources' },
  { href: '/wcat', label: 'WCAT Armory' },
  { href: '/tell-your-story', label: 'Tell Your Story' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <header className="w-full border-b border-gray-200">
          <nav className="mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 px-6 py-6 text-sm">
            {links.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-700">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center space-y-12 px-6 py-24 text-center md:space-y-16 md:py-32">
          {children}
        </main>
      </body>
    </html>
  );
}
