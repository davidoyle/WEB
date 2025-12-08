import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import { ToneProvider } from "@/context/ToneContext";
import { ReactNode } from "react";

export const metadata = {
  title: "Worker's Toolkit",
  description: "Resources and tools for injured workers in British Columbia.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToneProvider>
          <Navigation />
          {children}
        </ToneProvider>
        <Analytics />
      </body>
    </html>
  );
}
