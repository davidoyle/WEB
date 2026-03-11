import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import { screwedSituations } from '../data/content';

const moveTargets = {
  documentation: '/documentation',
  pressure: '/pressure-points',
  templates: '/templates',
  wcat: '/wcat',
  howtouse: '/how-to-use',
};

const Landing = ({ onStart, onNavigate }) => (
  <>
    <div className="grain-overlay" aria-hidden="true" />

    <section className="section-pinned bg-teal">
      <div className="image-tint" aria-hidden="true" />
      <div className="section-shell relative z-10 flex h-full flex-col justify-center py-20 text-foreground">
        <p className="eyebrow">Workers Toolkit · British Columbia</p>
        <h1 className="headline-xl mt-4 max-w-5xl">You&apos;re not the only one.</h1>
        <p className="body-text mt-6 max-w-3xl text-muted">
          Clear steps, strong records, and real leverage when WorkSafeBC isn&apos;t listening.
        </p>
        <p className="body-text mt-4 max-w-3xl text-muted">
          If you&apos;re injured and getting the runaround, this toolkit helps you understand what&apos;s
          happening, track what&apos;s been done to you, and build a record that actually changes
          decisions.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button type="button" onClick={onStart} className="btn-primary inline-flex items-center gap-2">
            Start Here
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('tellYourStory')}
            className="btn-secondary"
          >
            Tell Your Story (Anonymous, Safe)
          </button>
        </div>
      </div>
    </section>

    <section id="home-situations" className="section-flowing bg-paper py-20 text-text-dark lg:py-28">
      <div className="section-shell">
        <h2 className="headline-md">Where are you getting screwed?</h2>
        <p className="body-text mt-3 max-w-3xl text-text-dark-secondary">
          Pick the card that matches your situation. Don&apos;t read everything. Start where it hurts.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {screwedSituations.map(situation => (
            <article key={situation.title} className="card-light">
              <h3 className="headline-md !text-[30px]">{situation.title}</h3>
              <p className="body-text mt-3 text-text-dark-secondary">{situation.description}</p>

              <h4 className="eyebrow mt-6">Next Moves</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-dark-secondary">
                {situation.nextMoves.slice(0, 3).map(move => (
                  <li key={move.text}>
                    <Link className="font-semibold text-text-dark hover:text-accent" href={moveTargets[move.section] || '/start-here'}>
                      {move.text}
                    </Link>
                  </li>
                ))}
              </ul>

              {situation.relatedWCATCaseIds?.length ? (
                <p className="mt-4 text-sm font-semibold text-text-dark-secondary">
                  Recommended WCAT: <Link href="/wcat" className="text-text-dark hover:text-accent">{situation.relatedWCATCaseIds[0]}</Link>
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="home-next-moves" className="section-flowing bg-teal py-20 lg:py-24">
      <div className="section-shell">
        <h2 className="headline-md">What now?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link href="/templates" className="card text-foreground">
            Grab a template and send a controlled response.
          </Link>
          <Link href="/documentation" className="card text-foreground">
            Start your timeline, call log, and receipts folder.
          </Link>
          <Link href="/wcat" className="card text-foreground">
            Pull a WCAT strategy that matches your file.
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-2 text-muted">
          <Shield className="h-4 w-4" aria-hidden="true" />
          <p className="body-text">Independent and worker-first. Not funded by WorkSafeBC or government.</p>
        </div>
      </div>
    </section>
  </>
);

export default Landing;
