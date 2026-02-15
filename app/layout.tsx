import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/Navigation';
import { ToneProvider } from '@/context/ToneContext';
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
      <body>
        <ToneProvider>
          <Navigation />
          <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">{children}</main>
        </ToneProvider>
        <Analytics />
      </body>
    </html>
  );
}
