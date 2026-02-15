import { wcatCases } from '@/data/wcat';

export default function WCATPage() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        WCAT Precedent Armory
      </h1>
      <p className="mx-auto max-w-prose text-lg leading-relaxed text-gray-700">
        Data-driven precedent library. Use these case summaries to support review and appeal
        writing.
      </p>
      <div className="space-y-8 text-left">
        {wcatCases.map(item => (
          <article
            key={item.id}
            className="space-y-3 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold">{item.citation}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{item.shortLabel}</p>
            <p className="text-gray-700">{item.fullLabel}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
