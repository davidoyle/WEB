import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  reassuranceChecklist,
  silenceCostLists,
  socialProofConfig,
  speakingImpactFlow,
  whySilenceFeelsSaferCards,
} from '../data/content';
import { getSupabaseClient } from '../lib/supabaseClient';

const WhySilentSection = () => {
  const [liveCount, setLiveCount] = useState(socialProofConfig.current);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const supabase = getSupabaseClient();
        const { count } = await supabase
          .from('stories')
          .select('*', { count: 'exact', head: true })
          .eq('public_permission', true);

        if (active && count !== null) {
          setLiveCount(count);
        }
      } catch {
        // no-op by design
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  const filledSlots = Math.min(liveCount, socialProofConfig.target);
  const slots = Array.from({ length: socialProofConfig.target }, (_, index) => index < filledSlots);

  return (
    <div id="why-silent" className="scroll-smooth">
      <section className="border-b border-[var(--border-default)] bg-background">
        <div className="section-shell min-h-[60vh] py-16 flex flex-col items-center justify-center text-center">
          <p className="eyebrow !text-[var(--accent)]">Why people stay silent</p>
          <h1 className="mt-3 headline-md sm:!text-5xl">The Cost of Silence</h1>
          <p className="mt-4 max-w-3xl section-lead">
            WorkSafeBC counts on exhaustion and confusion. This page shows why silence feels safer,
            what it costs, and how your story shifts the system.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#action-section" className="btn-primary">
              Share Your Experience <span className="arrow-glyph">→</span>
            </a>
            <a
              href="#why-silence-feels-safer"
              className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              Learn more first
            </a>
          </div>
        </div>
      </section>

      <section id="why-silence-feels-safer" className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">Why Silence Feels Safer</h2>
            <p className="section-lead">
              You&apos;re not imagining it. The system is built to make quiet compliance look like the
              only rational choice.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whySilenceFeelsSaferCards.map((card, index) => (
              <div key={index} className="card h-full">
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-[2px] bg-[var(--bg-tertiary)] text-2xl"
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{card.title}</h3>
                <p className="mt-3 text-[var(--text-secondary)] whitespace-pre-line">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-default)] bg-background py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">What Silence Costs</h2>
            <p className="section-lead">
              Silence protects their process and erases your evidence. Speaking up rewrites the
              record.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card border-l-4 border-l-[var(--accent)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">What They Gain From Your Silence</h3>
              <ul className="mt-4 space-y-3 text-[var(--text-secondary)] list-disc list-inside">
                {silenceCostLists.theyGain.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card border-l-4 border-l-[var(--accent-urgent)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">What You Lose By Staying Silent</h3>
              <ul className="mt-4 space-y-3 text-[var(--text-secondary)] list-disc list-inside">
                {silenceCostLists.youLose.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">Your Story Forces Change</h2>
            <p className="section-lead">Each time you record it, it connects to a bigger system response.</p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center justify-center border border-[var(--border-default)] bg-[var(--bg-tertiary)] px-8 py-6 text-lg font-bold text-[var(--text-primary)]">
              Your Story
            </div>
            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
              {speakingImpactFlow.map((step, index) => (
                <div key={index} className="card h-full border border-[var(--border-default)] bg-[var(--bg-secondary)]">
                  <div className="mb-2 text-sm font-semibold font-mono uppercase tracking-wider text-[var(--accent)]">→ {step.title}</div>
                  <div className="text-[var(--text-secondary)]">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-default)] bg-background py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">You Stay in Control</h2>
            <p className="section-lead">Your record moves at your pace—no surprises, no forced disclosures.</p>
          </div>
          <div className="card bg-[var(--bg-secondary)]">
            <ul className="space-y-4 text-[var(--text-secondary)]">
              {reassuranceChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-[2px] border border-[var(--border-default)] bg-[var(--bg-tertiary)] text-[var(--accent-confirm)]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              Privacy policy and data handling details are available before you submit anything.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">Every Story Fills the Grid</h2>
            <p className="section-lead">
              You&apos;re not alone. Each record makes the pattern harder to ignore.
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-5xl font-bold text-[var(--text-primary)]">{filledSlots}</div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                of {socialProofConfig.target} stories logged
              </p>
              <p className="mt-4 max-w-md text-[var(--text-secondary)]">{socialProofConfig.quote}</p>
            </div>
            <div className="w-full max-w-3xl">
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-10" aria-label="Signups grid">
                {slots.map((filled, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-[2px] ${filled ? 'bg-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'} transition`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Each filled square is a worker who spoke up. Anonymous spots stay anonymous by
                default.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="action-section" className="bg-[var(--bg-primary)] py-12 text-[var(--text-primary)]">
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready to add your story?</h2>
            <p className="text-[var(--text-secondary)]">
              Share your experience or see how others fought back. Either move pushes the pattern
              into the open.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/tell-your-story" className="btn-primary">
              Share Your Experience <span className="arrow-glyph">→</span>
            </Link>
            <Link href="/start-here" className="btn-secondary justify-center">
              Start building your record <span className="arrow-glyph">→</span>
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center justify-center border border-[var(--border-default)] px-5 py-3 font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] transition hover:bg-[var(--bg-tertiary)]"
            >
              See How Others Fought Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhySilentSection;
