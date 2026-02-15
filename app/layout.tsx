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
      <body className="bg-gray-50">
        <ToneProvider>
          <Navigation />
          <main className="mx-auto flex w-full max-w-4xl flex-1 space-y-12 px-4 py-12 sm:px-6 md:space-y-16 md:py-16 lg:px-8">
            {children}
          </main>
        </ToneProvider>
        <Analytics />
      </body>
    </html>
  );
}
