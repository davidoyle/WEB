'use client';

const docs = [
  {
    title: '10-Point Call to Action – What BC’s Injured Workers Need',
    file: 'call-to-action.pdf',
    description:
      'A blueprint for legislative reform that restores accountability and dignity for injured workers in British Columbia.',
  },
  {
    title: 'Write Your MLA – Injured Workers’ Action Toolkit',
    file: 'write-your-mla.pdf',
    description:
      'A concise guide to contacting your MLA, raising concerns effectively, and demanding action.',
  },
  {
    title: 'Public-Facing Template – Ready to Post and Share',
    file: 'public-facing-template.pdf',
    description:
      'A ready-to-post awareness template supporters can share to increase public pressure.',
  },
];

export default function ResourcesPage() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Resources</h1>
      <div className="space-y-10 text-left">
        {docs.map(doc => (
          <article
            key={doc.file}
            className="space-y-3 border-t border-gray-200 pt-8 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold leading-tight">{doc.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{doc.description}</p>
            <a
              href={`/api/download/${doc.file}`}
              className="inline-block text-lg font-medium text-blue-600 underline hover:text-blue-800"
            >
              Download PDF
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
