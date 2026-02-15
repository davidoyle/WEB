import { emailTemplates } from '@/data/content';

export default function TemplatesPage() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Email & Letter Templates
      </h1>
      <div className="space-y-8 text-left">
        {emailTemplates.map(template => (
          <article
            key={template.title}
            className="space-y-3 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold">{template.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {template.to}
            </p>
            <details>
              <summary className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                Show template text
              </summary>
              <pre className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                {template.content}
              </pre>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
