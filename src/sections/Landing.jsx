import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { screwedSituations } from '../data/content';
import { wcatCases } from '../wcat';
import { getSupabaseClient } from '../lib/supabaseClient';

const tools = [
  { href: '/start-here', label: 'My Situation', desc: 'Find your next move' },
  { href: '/pressure-points', label: 'Tactics', desc: 'When they ignore you' },
  { href: '/wcat', label: 'WCAT Precedents', desc: 'Legal cases that apply' },
  { href: '/templates', label: 'Templates', desc: 'Letters that work' },
  { href: '/documentation', label: 'Evidence', desc: 'Build your record' },
];

const Landing = () => {
  const [selectedSituation, setSelectedSituation] = useState('');
  const [counterState, setCounterState] = useState({ loading: true, visible: true, usage: null, stories: null });
  const [recordItems, setRecordItems] = useState([]);
  const [declarations, setDeclarations] = useState([]);
  const [activeDeclaration, setActiveDeclaration] = useState(0);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const supabase = getSupabaseClient();
        const [countRes, storiesRes, usageRes, declarationsRes] = await Promise.all([
          supabase.from('stories').select('*', { count: 'exact', head: true }).eq('public_permission', true),
          supabase
            .from('stories')
            .select('id, postal_code, issue_tags, story, created_at')
            .eq('public_permission', true)
            .order('created_at', { ascending: false })
            .limit(4),
          supabase.from('site_metrics').select('start_here_visits').eq('id', 1).single(),
          supabase.from('declarations').select('id, text, created_at').order('created_at', { ascending: false }).limit(20),
        ]);

        if (!active) return;
        if (countRes.error || storiesRes.error || usageRes.error || declarationsRes.error) throw new Error('metrics unavailable');

        setCounterState({
          loading: false,
          visible: true,
          usage: usageRes.data?.start_here_visits ?? null,
          stories: countRes.count ?? null,
        });
        setRecordItems(storiesRes.data || []);
        setDeclarations((declarationsRes.data || []).filter(item => item.text));
      } catch {
        if (!active) return;
        setCounterState({ loading: false, visible: false, usage: null, stories: null });
      }
    };

    load();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (declarations.length < 3) return undefined;

    const timer = window.setInterval(() => {
      setActiveDeclaration(current => (current + 1) % declarations.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [declarations]);

  const situationOptions = useMemo(() => screwedSituations.slice(0, 5), []);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--border-default)] bg-background">
        <div className="section-shell py-12 md:py-16 lg:py-20">
          <div className="hero-reveal grid gap-10 md:grid-cols-2 md:gap-16 lg:items-start">

            {/* Left: headline + context */}
            <div className="space-y-5">
              <p className="eyebrow">Workers Toolkit · British Columbia · Independent</p>
              <h1 className="headline-xl">
                They&apos;re counting on you to give up.
              </h1>
              <p className="text-[var(--text-secondary)] text-[1.0625rem] leading-relaxed max-w-md">
                This toolkit is built to help BC injured workers fight back — with strategy, templates, precedents, and a place to record what happened.
              </p>

              {counterState.visible ? (
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--text-muted)]">
                  {counterState.loading ? (
                    <>
                      <div className="h-4 w-40 animate-pulse rounded bg-[var(--bg-tertiary)]" />
                      <div className="h-4 w-32 animate-pulse rounded bg-[var(--bg-tertiary)]" />
                    </>
                  ) : (
                    <>
                      {counterState.usage !== null ? (
                        <span>{counterState.usage.toLocaleString()} workers used this</span>
                      ) : null}
                      {counterState.stories !== null && counterState.stories >= 10 ? (
                        <span>{counterState.stories} stories in the record</span>
                      ) : null}
                      <span>{wcatCases.length} WCAT precedents</span>
                    </>
                  )}
                </div>
              ) : null}

              {/* Tools grid */}
              <div className="pt-2">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Where to start
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {tools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group flex flex-col gap-0.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-3 hover:border-[var(--accent)] hover:shadow-sm transition-all"
                    >
                      <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                        {tool.label}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">{tool.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: situation picker */}
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5 shadow-sm">
              <p className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
                Where are you in your claim?
              </p>
              <div className="space-y-2">
                {situationOptions.map(option => (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-all ${
                      selectedSituation === option.id
                        ? 'border-[var(--accent)] bg-blue-50'
                        : 'border-[var(--border-default)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="home-situation"
                      value={option.id}
                      checked={selectedSituation === option.id}
                      onChange={() => setSelectedSituation(option.id)}
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-sm font-medium text-[var(--text-primary)]">{option.title}</span>
                  </label>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href={selectedSituation ? `/start-here?situation=${selectedSituation}` : '/start-here'}
                  className={`btn-primary w-full justify-center ${!selectedSituation ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  {selectedSituation ? 'Show me what to do' : 'Pick a situation above'}{' '}
                  {selectedSituation ? <span className="arrow-glyph">→</span> : null}
                </Link>
                <p className="mt-3 text-center text-xs text-[var(--text-muted)]">
                  Not sure?{' '}
                  <Link href="/start-here" className="text-[var(--accent)] hover:underline">
                    Walk through it step by step
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worker voices */}
      {declarations.length >= 3 ? (
        <section className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] py-8">
          <div className="section-shell max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              From workers using this site
            </p>
            <blockquote className="text-[1.0625rem] leading-relaxed text-[var(--text-secondary)]">
              &ldquo;{declarations[activeDeclaration]?.text}&rdquo;
            </blockquote>
          </div>
        </section>
      ) : null}

      {/* Stories */}
      {recordItems.length > 0 ? (
        <section className="border-b border-[var(--border-default)] bg-background py-12">
          <div className="section-shell space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="section-title">From the record</h2>
              <Link
                href="/tell-your-story"
                className="text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Add your story →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {recordItems.map(item => (
                <article
                  key={item.id}
                  className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-wider text-[var(--text-muted)]">
                    Worker #{String(item.id).padStart(4, '0')} · {item.postal_code || 'BC'} ·{' '}
                    {item.issue_tags?.[0] || 'claim'}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    &ldquo;{(item.story || '').slice(0, 200)}{item.story?.length > 200 ? '…' : ''}&rdquo;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* About */}
      <section className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] py-10">
        <div className="section-shell max-w-2xl">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            This is not a law firm. It is not funded by any government body or insurer. It is an independent record, built by one injured BC worker, growing because it needs to.
          </p>
        </div>
      </section>

      {/* For institutions */}
      <section className="bg-background py-10">
        <div className="section-shell">
          <div className="rounded-lg border border-[var(--border-default)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              For journalists · researchers · unions · legal professionals
            </p>
            <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
              This site maintains an independent record of WorkSafeBC claim patterns, WCAT precedents, and worker testimony. The full record is available.
            </p>
            <Link
              href="/for-institutions"
              className="mt-3 inline-flex text-sm font-medium text-[var(--accent)] hover:underline"
            >
              Contact and access →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
