'use client';

import Link from 'next/link';
import { Shield, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';

const Landing = ({ onStart, onNavigate }) => {
  const subtitle =
    'Clear steps, strong records, and real leverage when WorkSafeBC isn’t listening.';
  const bodyCopy =
    'If you’re injured and getting the runaround, you’re not alone and you’re not crazy. This toolkit helps you understand what’s happening, track what’s been done to you, and build the kind of record that actually changes decisions.';

  return (
    <>
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-12 pt-20">
        <div className="mb-12 space-y-4 text-center">
          <Shield className="mx-auto h-16 w-16 text-primary" aria-hidden="true" />
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Worker&apos;s Toolkit
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">{subtitle}</p>
        </div>

        <div className="space-y-8 text-base text-foreground md:text-lg">
          <p>{bodyCopy}</p>

          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-primary"
                aria-hidden="true"
              >
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h3 className="ml-3 text-lg font-semibold text-foreground">What You Can Do Here</h3>
            </div>
            <ul className="list-inside list-disc space-y-2 text-muted">
              <li>Make sense of confusing letters and decisions, step by step.</li>
              <li>Track what they said and when they said it, in one place.</li>
              <li>Match your situation to real WCAT decisions where workers actually won.</li>
              <li>Build a record strong enough for appeals, oversight bodies, or the courts.</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button type="button" onClick={onStart} className="w-full px-8 py-3 md:w-auto">
              Start Here: What’s Happening To You?
            </Button>

            <Button
              type="button"
              onClick={() => onNavigate && onNavigate('tellYourStory')}
              className="w-full border border-border bg-card px-8 py-3 text-foreground hover:bg-slate-100 md:w-auto"
            >
              Tell Your Story (Anonymous, Safe)
            </Button>
          </div>

          <div className="mt-12 space-y-10 border-t border-border pt-8 text-sm text-muted">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">Who’s building this</h3>
              <p>
                Worker’s Toolkit was started in 2025 by an injured worker in B.C. and is being built
                with a small team of workers and allies.
              </p>
              <p className="font-semibold text-foreground">We are:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <span className="font-semibold">Independent</span> – not funded by WorkSafeBC,
                  employers, or government.
                </li>
                <li>
                  <span className="font-semibold">Worker-first</span> – everything here is built to
                  help injured workers understand the system and push back.
                </li>
                <li>
                  <span className="font-semibold">Evidence-obsessed</span> – the toolkit is shaped
                  by real claim files, FOI records, and legal decisions.
                </li>
              </ul>
              <p>
                The goal is simple: give workers enough structure, language, and evidence tools that
                they’re not facing this system alone.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Featured tools you can use right now
              </h3>
              <p>Concrete tools you can download and start using immediately.</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources" className="font-semibold text-primary hover:underline">
                    MLA pressure letter (PDF)
                  </Link>
                  <p className="text-muted">
                    A ready-to-edit letter you can send to your MLA when WorkSafeBC isn’t doing its
                    job.
                  </p>
                </li>
                <li>
                  <Link href="/resources" className="font-semibold text-primary hover:underline">
                    Call-to-action handout (PDF)
                  </Link>
                  <p className="text-muted">
                    A one-pager you can share with family, friends, and allies so they understand
                    what’s happening and how to help.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 z-30">
        <Link
          href="/how-to-use"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          How To Use This Toolkit
          <Shield className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
};

export default Landing;
