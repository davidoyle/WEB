import PageShell from '../components/PageShell';

const docs = [
  {
    title: '10-Point Call to Action – What BC’s Injured Workers Need',
    file: 'call-to-action.pdf',
  },
  {
    title: 'Write Your MLA – Injured Workers’ Action Toolkit',
    file: 'write-your-mla.pdf',
  },
  {
    title: 'Public-Facing Template – Ready to Post and Share',
    file: 'public-facing-template.pdf',
  },
];

const ResourcesPage = () => (
  <PageShell
    title="Advocacy Resources | Worker's Toolkit"
    description="Download practical documents for injured workers to organize pressure and advocacy."
  >
    <section className="mx-auto max-w-4xl space-y-6 px-6 py-12 text-gray-900">
      <h1 className="text-3xl font-bold md:text-4xl">Advocacy Resources</h1>
      <p className="text-gray-700">
        Download practical documents built to help workers push back, document harm, and organize
        pressure for change.
      </p>
      <ul className="space-y-3">
        {docs.map(doc => (
          <li
            key={doc.file}
            className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>{doc.title}</span>
            <a
              className="inline-flex w-fit rounded-full bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
              href={`/api/download/${doc.file}`}
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </section>
  </PageShell>
);

export default ResourcesPage;
