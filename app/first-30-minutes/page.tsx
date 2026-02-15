import { first30MinutesSteps } from '@/data/content';

export default function FirstThirtyMinutesPage() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        First 30 Minutes
      </h1>
      <div className="space-y-8 text-left">
        {first30MinutesSteps.map(step => (
          <article
            key={step.title}
            className="space-y-3 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold">{step.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
