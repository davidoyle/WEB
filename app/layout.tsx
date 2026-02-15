import './globals.css';

import { ReactNode } from 'react';

export const metadata = {
  title: "Worker's Toolkit",
  description: 'Resources and tools for injured workers in British Columbia.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground">
        <header className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="text-2xl font-bold uppercase">Workers Toolkit</div>
            <ul className="flex gap-6 text-muted">
              <li>
                <a className="transition-colors hover:text-accent" href="/how-to-use">
                  How to use
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-accent" href="/stories">
                  Stories
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-accent" href="/tools">
                  Tools
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-accent" href="/precedents">
                  Precedents
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-accent" href="/submit">
                  Submit
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
