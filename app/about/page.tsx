import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Worker's Toolkit",
  description:
    'Worker-led toolkit focused on WorkSafeBC, built to give injured workers structure, evidence, and language.',
};

export default function AboutPage() {
  return (
    <div className="space-y-8 py-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-gray-600">About Worker&apos;s Toolkit</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Who we are and why this exists
        </h1>
        <p className="max-w-3xl text-lg text-gray-700">
          Worker&apos;s Toolkit is a worker-led project focused on WorkSafeBC. Everything here is
          built to give injured workers the structure, evidence, and language to navigate a system
          that too often ignores them.
        </p>
      </header>
    </div>
  );
}
