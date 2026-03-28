import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { screwedSituations } from '../data/content';
import { wcatCases } from '../wcat';
import { getSupabaseClient } from '../lib/supabaseClient';

const foundingStatement =
  'This is an independent record. It belongs to no government body, no insurer, no law firm. It exists because one injured worker built it, and because what happened to them happens to thousands of people every year in British Columbia. Everything here — every tactic, every template, every precedent, every story — was built to change that.';

const Landing = () => {
  const [selectedSituation, setSelectedSituation] = useState('');
  const [counterState, setCounterState] = useState({ loading: true, visible: true, usage: null, stories: null });
  const [recordItems, setRecordItems] = useState([]);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const supabase = getSupabaseClient();
        const [countRes, storiesRes, usageRes] = await Promise.all([
          supabase.from('stories').select('*', { count: 'exact', head: true }).eq('public_permission', true),
          supabase
            .from('stories')
            .select('id, postal_code, issue_tags, story, created_at')
            .eq('public_permission', true)
            .order('created_at', { ascending: false })
            .limit(6),
          supabase.from('site_metrics').select('start_here_visits').eq('id', 1).single(),
        ]);

        if (!active) return;
        if (countRes.error || storiesRes.error || usageRes.error) throw new Error('metrics unavailable');

        setCounterState({
          loading: false,
          visible: true,
          usage: usageRes.data?.start_here_visits ?? null,
          stories: countRes.count ?? null,
        });
        setRecordItems(storiesRes.data || []);
      } catch {
        if (!active) return;
        setCounterState({ loading: false, visible: false, usage: null, stories: null });
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  const situationOptions = useMemo(() => screwedSituations.slice(0, 5), []);

  return (
    <>
      <section className="min-h-screen border-b border-[var(--border-default)] bg-background">
        <div className="section-shell flex min-h-screen items-center py-16">
          <div className="hero-reveal max-w-4xl space-y-6">
            <h1 className="headline-xl max-w-3xl">They&apos;re counting on you to give up.</h1>
            <p className="font-mono text-[0.8rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              Workers Toolkit — Independent · Worker-built · BC
            </p>

            {counterState.visible ? (
              <div className="grid gap-2 font-mono text-sm text-[var(--text-secondary)]">
                {counterState.loading ? (
                  <>
                    <div className="h-5 w-64 animate-pulse bg-[var(--bg-tertiary)]" />
                    <div className="h-5 w-64 animate-pulse bg-[var(--bg-tertiary)]" />
                    <div className="h-5 w-64 animate-pulse bg-[var(--bg-tertiary)]" />
                  </>
                ) : (
                  <>
                    {counterState.usage !== null ? (
                      <p>{counterState.usage} workers have used this toolkit</p>
                    ) : null}
                    {counterState.stories !== null && counterState.stories >= 10 ? (
                      <p>{counterState.stories} stories in the record</p>
                    ) : null}
                    <p>{wcatCases.length} WCAT precedents available</p>
                  </>
                )}
              </div>
            ) : null}

            <div className="space-y-3 border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                Where are you in your claim?
              </p>
              <div className="space-y-2">
                {situationOptions.map(option => (
                  <label
                    key={option.id}
                    className="flex min-h-[52px] cursor-pointer items-center gap-3 border border-[var(--border-default)] bg-[var(--bg-tertiary)] px-4 py-3"
                  >
                    <input
                      type="radio"
                      name="home-situation"
                      value={option.id}
                      checked={selectedSituation === option.id}
                      onChange={() => setSelectedSituation(option.id)}
                      className="h-4 w-4"
                    />
                    <span className="text-[var(--text-secondary)]">{option.title}</span>
                  </label>
                ))}
              </div>
              <Link
                href={selectedSituation ? `/start-here?situation=${selectedSituation}` : '/start-here'}
                className={`btn-primary ${!selectedSituation ? 'pointer-events-none opacity-60' : ''}`}
              >
                I&apos;m fighting this <span className="arrow-glyph">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] py-16">
        <div className="section-shell space-y-6">
          <h2 className="headline-md">From the record</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {recordItems.map(item => (
              <article key={item.id} className="border border-[var(--border-default)] border-l-[var(--border-strong)] bg-[var(--bg-secondary)] p-4">
                <p className="font-mono text-[0.72rem] uppercase tracking-wider text-[var(--text-muted)]">
                  Worker #{String(item.id).padStart(4, '0')} · {item.postal_code || 'BC'} ·{' '}
                  {item.issue_tags?.[0] || 'claim'}
                </p>
                <p className="mt-3 italic text-[var(--text-secondary)]">
                  “{(item.story || '').slice(0, 180)}{item.story?.length > 180 ? '…' : ''}”
                </p>
                <Link
                  href="/tell-your-story"
                  className="mt-3 inline-flex font-mono text-[0.7rem] uppercase tracking-wider text-[var(--accent)]"
                >
                  View record →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-default)] bg-background py-16">
        <div className="section-shell max-w-3xl text-center">
          <p className="body-text text-[var(--text-secondary)]">
            This is not a law firm. It is not funded by any government body or insurer. It is an
            independent record, built by one injured BC worker, growing because it needs to.
          </p>
          <p className="founding-statement mt-6 text-left">{foundingStatement}</p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="section-shell border border-[var(--border-default)] p-6">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            For journalists · researchers · unions · legal professionals
          </p>
          <p className="mt-3 max-w-3xl text-[var(--text-secondary)]">
            This site maintains an independent record of WorkSafeBC claim patterns, WCAT precedents,
            and worker testimony. The full record is available.
          </p>
          <Link href="/for-institutions" className="mt-4 inline-flex font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
            Contact and access →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Landing;
