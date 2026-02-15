import Link from 'next/link';

export default function Home() {
  return (
    <section className="space-y-10">
      <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
        Workers Toolkit
      </h1>
      <p className="mx-auto max-w-prose text-xl leading-relaxed text-gray-700 md:text-2xl">
        Resources and support for injured workers in British Columbia dealing with WorkSafeBC,
        appeals, documentation, and accountability pressure.
      </p>
      <div className="space-y-4 text-lg">
        <p>
          <Link
            href="/start-here"
            className="font-medium text-blue-600 underline hover:text-blue-800"
          >
            Start Here
          </Link>
        </p>
        <p>
          <Link
            href="/resources"
            className="font-medium text-blue-600 underline hover:text-blue-800"
          >
            View Resources
          </Link>
        </p>
      </div>
    </section>
  );
}
