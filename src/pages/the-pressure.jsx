import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import PageShell from '../components/PageShell';
import { getSupabaseClient } from '../lib/supabaseClient';
import { pressureSubmissions } from '../data/pressureSubmissions';

const formatDate = value => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toUpperCase();
};

const PressurePage = () => {
  const [metrics, setMetrics] = useState({ stories: null, events: null });

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const supabase = getSupabaseClient();
        const [storiesRes, eventsRes] = await Promise.all([
          supabase.from('stories').select('*', { count: 'exact', head: true }),
          supabase.from('tool_events').select('*', { count: 'exact', head: true }),
        ]);

        if (!active) return;

        setMetrics({
          stories: storiesRes.count ?? 0,
          events: eventsRes.count ?? 0,
        });
      } catch {
        if (!active) return;
        setMetrics({ stories: null, events: null });
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  const submissions = useMemo(
    () => [...pressureSubmissions].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );

  return (
    <PageShell
      title="The Pressure Record | Workers Toolkit"
      description="Where this record has traveled and what has been formally submitted."
      mainClassName="section-shell py-10"
    >
      <div className="mx-auto max-w-5xl space-y-10">
        <header className="space-y-4 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
          <p className="eyebrow">The Pressure Record</p>
          <h1 className="headline-md">Where this record has traveled.</h1>
          <p className="max-w-3xl text-lg italic text-[var(--text-secondary)]">
            Every submission here is public. Every institution listed has received the record.
            Nothing disappears.
          </p>
        </header>

        <section className="grid gap-4 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6 md:grid-cols-3">
          <div>
            <p className="font-mono text-3xl text-[var(--text-primary)]">{metrics.stories ?? '—'}</p>
            <p className="eyebrow mt-1">worker accounts in the record</p>
          </div>
          <div>
            <p className="font-mono text-3xl text-[var(--text-primary)]">{metrics.events ?? '—'}</p>
            <p className="eyebrow mt-1">tool events logged</p>
          </div>
          <div>
            <p className="font-mono text-3xl text-[var(--text-primary)]">{submissions.length}</p>
            <p className="eyebrow mt-1">formal submissions made</p>
          </div>
        </section>

        <section className="space-y-4">
          {submissions.length === 0 ? (
            <div className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
              <p className="text-[var(--text-secondary)]">
                No formal submissions have been logged yet. Add entries in{' '}
                <code className="font-mono text-[var(--text-primary)]">src/data/pressureSubmissions.js</code>{' '}
                as they happen.
              </p>
            </div>
          ) : (
            submissions.map(item => (
              <article key={`${item.date}-${item.institution}`} className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                  {formatDate(item.date)}
                </p>
                <h2 className="mt-2 text-2xl text-[var(--text-primary)]">{item.institution}</h2>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {item.summary} {item.pattern ? `Pattern: ${item.pattern}` : ''}
                </p>
                {item.link ? (
                  <Link
                    href={item.link}
                    className="mt-4 inline-flex font-mono text-xs uppercase tracking-wider text-[var(--accent)]"
                  >
                    View submission →
                  </Link>
                ) : null}
              </article>
            ))
          )}
        </section>
      </div>
    </PageShell>
  );
};

export default PressurePage;
