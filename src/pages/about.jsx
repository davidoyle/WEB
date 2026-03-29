import PageShell from '../components/PageShell';

const AboutPage = () => (
  <PageShell
    title="About Worker's Toolkit"
    description="Worker-led toolkit focused on WorkSafeBC, built to give injured workers structure, evidence, and language."
    mainClassName="section-shell py-10 space-y-8"
  >
    <header className="space-y-3">
      <p className="eyebrow">About Worker&apos;s Toolkit</p>
      <h1 className="headline-md">Who we are and why this exists</h1>
      <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
        Worker&apos;s Toolkit is a worker-led project focused on WorkSafeBC. Everything here is built
        to give injured workers the structure, evidence, and language to navigate a system that too
        often ignores them.
      </p>
    </header>

    <section className="card space-y-3">
      <h2 className="text-2xl font-semibold text-[var(--text-primary)]">What Worker&apos;s Toolkit is</h2>
      <p className="text-[var(--text-secondary)]">
        A practical set of steps, scripts, and evidence tools so workers can document what&apos;s
        happening, challenge bad decisions, and stay organized when WorkSafeBC dodges
        responsibility.
      </p>
    </section>

    <section className="card space-y-3">
      <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Who&apos;s behind it</h2>
      <p className="text-[var(--text-secondary)]">
        Worker&apos;s Toolkit was started in 2025 by an injured worker in British Columbia and is being
        built with a small team of workers and allies. Direction comes from workers and advisors
        who have been through the system and want better tools to push back.
      </p>
    </section>

    <section className="card space-y-3">
      <h2 className="text-2xl font-semibold text-[var(--text-primary)]">How it&apos;s funded</h2>
      <p className="text-[var(--text-secondary)]">
        This is a grassroots project in its early stages. It is not funded by WorkSafeBC, employers,
        or government.
      </p>
    </section>
  </PageShell>
);

export default AboutPage;
