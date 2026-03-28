import PageShell from '../components/PageShell';

const ForInstitutionsPage = () => (
  <PageShell
    title="For Institutions | Workers Toolkit"
    description="Independent record access for journalists, researchers, unions, and legal professionals."
    mainClassName="section-shell py-10"
  >
    <div className="max-w-4xl space-y-8">
      <p className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
        For journalists · researchers · unions · legal professionals
      </p>
      <h1 className="headline-md !text-5xl">The record is available.</h1>
      <p className="body-text">
        Workers Toolkit maintains an independent archive of WorkSafeBC claim experiences, WCAT
        precedent analysis, and worker testimony in British Columbia.
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)]">
        <li>— Worker-built and worker-led</li>
        <li>— Independent of WorkSafeBC, any government body, and any insurer</li>
        <li>
          — Available to journalists, researchers, unions, and legal professionals for non-commercial
          use
        </li>
      </ul>

      <section className="space-y-2 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
        <h2 className="font-[var(--font-display)] text-2xl">What the record contains</h2>
        <p className="text-[var(--text-secondary)]">
          Structured worker submissions, tagged claim patterns, and linked tactical/precedent
          resources.
        </p>
      </section>

      <section className="space-y-2 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
        <h2 className="font-[var(--font-display)] text-2xl">How to request access or partnership</h2>
        <p className="text-[var(--text-secondary)]">
          Email <a href="mailto:record@workerstoolkit.ca" className="text-[var(--accent)]">record@workerstoolkit.ca</a> with your role, intended use, and timeline.
        </p>
      </section>

      <section className="space-y-2 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
        <h2 className="font-[var(--font-display)] text-2xl">Funding and sustainability</h2>
        <p className="text-[var(--text-secondary)]">
          We collaborate with unions, law societies, and public-interest legal groups who want a
          durable, independent reform instrument.
        </p>
      </section>
    </div>
  </PageShell>
);

export default ForInstitutionsPage;
