import PageShell from '../components/PageShell';
import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../lib/supabaseClient';
import { wcatCases } from '../wcat';

const ForInstitutionsPage = () => {
  const [recordSummary, setRecordSummary] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const supabase = getSupabaseClient();
        const [storiesRes, eventsRes] = await Promise.all([
          supabase.from('stories').select('*', { count: 'exact', head: true }),
          supabase.from('tool_events').select('*', { count: 'exact', head: true }),
        ]);
        setRecordSummary({
          stories: storiesRes.count ?? 0,
          events: eventsRes.count ?? 0,
          wcat: wcatCases.length,
        });
      } catch {
        // no-op by design
      }
    };
    load();
  }, []);

  return (
    <PageShell
      title="For Institutions | Workers Toolkit"
      description="Independent record access for journalists, researchers, unions, and legal professionals."
      mainClassName="section-shell py-10"
    >
      <div className="max-w-4xl space-y-8">
        {recordSummary ? (
          <div className="grid grid-cols-1 gap-4 border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-3xl text-[var(--text-primary)]">{recordSummary.stories}</p>
              <p className="eyebrow mt-1">worker accounts</p>
            </div>
            <div>
              <p className="font-mono text-3xl text-[var(--text-primary)]">{recordSummary.wcat}</p>
              <p className="eyebrow mt-1">WCAT precedents</p>
            </div>
            <div>
              <p className="font-mono text-3xl text-[var(--text-primary)]">{recordSummary.events}</p>
              <p className="eyebrow mt-1">toolkit uses logged</p>
            </div>
          </div>
        ) : null}

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

      <section className="space-y-3 border border-[var(--border-accent)] bg-[var(--bg-secondary)] p-6">
        <p className="eyebrow">The Pressure Record</p>
        <p className="text-[var(--text-secondary)]">
          This record does not sit still. View where it has been submitted, to whom, and what
          pattern it documented.
        </p>
        <a href="/the-pressure" className="inline-flex font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
          View the pressure record →
        </a>
      </section>
    </div>
    </PageShell>
  );
};

export default ForInstitutionsPage;
