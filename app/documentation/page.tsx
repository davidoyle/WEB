import { documentationBuckets } from '@/data/content';

export default function DocumentationPage() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Evidence & Documentation
      </h1>
      <div className="space-y-8 text-left">
        {documentationBuckets.map(bucket => (
          <article
            key={bucket.title}
            className="space-y-3 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold">{bucket.title}</h2>
            <ul className="list-disc space-y-1 pl-6 text-gray-700">
              {bucket.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
