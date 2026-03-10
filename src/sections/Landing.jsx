import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

const Landing = ({ onStart, onNavigate }) => {
  const subtitle =
    'Clear steps, strong records, and real leverage when WorkSafeBC isn’t listening.';
  const bodyCopy =
    'If you’re injured and getting the runaround, you’re not alone and you’re not crazy. This toolkit helps you understand what’s happening, track what’s been done to you, and build the kind of record that actually changes decisions.';

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />

      <section className="section-pinned bg-teal">
        <div className="image-tint" aria-hidden="true" />
        <div className="section-shell relative z-10 flex h-full flex-col justify-center py-20 text-foreground">
          <p className="eyebrow">Workers Toolkit · British Columbia</p>
          <h1 className="headline-xl mt-4 max-w-5xl">You&apos;re not the only one.</h1>
          <p className="body-text mt-6 max-w-3xl text-muted">{subtitle}</p>
          <p className="body-text mt-4 max-w-3xl text-muted">{bodyCopy}</p>
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

      <section className="section-flowing bg-paper py-20 text-text-dark lg:py-28">
        <div className="section-shell">
          <h2 className="headline-md">What you can do here</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-light">
              <h3 className="eyebrow">Core tools</h3>
              <ul className="body-text mt-4 list-inside list-disc space-y-2 text-text-dark-secondary">
                <li>Make sense of confusing letters and decisions, step by step.</li>
                <li>Track what they said and when they said it, in one place.</li>
                <li>Match your situation to real WCAT decisions where workers actually won.</li>
                <li>Build a record strong enough for appeals, oversight bodies, or the courts.</li>
              </ul>
            </div>
            <div className="card-light">
              <h3 className="eyebrow">Featured resources</h3>
              <div className="mt-4 space-y-4">
                <Link className="body-text block font-semibold text-text-dark hover:text-accent" href="/resources">
                  MLA pressure letter (PDF)
                </Link>
                <Link className="body-text block font-semibold text-text-dark hover:text-accent" href="/resources">
                  Call-to-action handout (PDF)
                </Link>
                <Link className="body-text block font-semibold text-text-dark hover:text-accent" href="/how-to-use">
                  How To Use This Toolkit
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-2 text-text-dark-secondary">
            <Shield className="h-4 w-4" aria-hidden="true" />
            <p className="body-text">Independent and worker-first. Not funded by WorkSafeBC or government.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
