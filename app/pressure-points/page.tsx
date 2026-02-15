import { pressurePoints } from '@/data/content';

export default function PressurePointsPage() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Pressure Points
      </h1>
      <div className="space-y-8 text-left">
        {pressurePoints.map(point => (
          <article
            key={point.id}
            className="space-y-3 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold">{point.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{point.summary}</p>
            <ul className="list-disc space-y-1 pl-6 text-gray-700">
              {point.phrases.slice(0, 2).map(phrase => (
                <li key={phrase}>{phrase}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
