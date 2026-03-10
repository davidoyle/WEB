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
    mainClassName=""
  >
    <section className="section-flowing bg-paper py-20 text-text-dark lg:py-28">
      <div className="section-shell max-w-4xl space-y-6">
        <h1 className="headline-md">Advocacy Resources</h1>
        <p className="body-text text-text-dark-secondary">
          Download practical documents built to help workers push back, document harm, and organize
          pressure for change.
        </p>
        <ul className="space-y-3">
          {docs.map(doc => (
            <li
              key={doc.file}
              className="flex flex-col gap-3 rounded-[20px] border border-primary/15 bg-white/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span>{doc.title}</span>
              <a className="btn-dark inline-flex w-fit" href={`/api/download/${doc.file}`}>
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </PageShell>
);

export default ResourcesPage;
