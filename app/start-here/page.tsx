import Link from 'next/link';
import { screwedSituations } from '@/data/content';

export default function StartHerePage() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Where are you getting screwed?
      </h1>
      <div className="space-y-8 text-left">
        {screwedSituations.map(situation => (
          <article
            key={situation.id}
            className="space-y-3 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold">{situation.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{situation.description}</p>
            <ul className="list-disc space-y-1 pl-6 text-gray-700">
              {situation.priorities.slice(0, 3).map(priority => (
                <li key={priority}>{priority}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="text-lg">
        <Link href="/documentation" className="text-blue-600 underline hover:text-blue-800">
          Go to Evidence & Documentation
        </Link>
      </p>
    </section>
  );
}
