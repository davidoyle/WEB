import Link from 'next/link';
import { useState } from 'react';
import { pressurePoints } from '../data/content';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently fail — clipboard may be blocked
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`shrink-0 rounded-md px-3 py-1 text-xs font-semibold transition ${
        copied
          ? 'bg-[var(--accent-confirm)] text-white'
          : 'border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
      }`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

const PressureCard = ({ point }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={`pressure-${point.id}`}
      className={`overflow-hidden rounded-xl border transition-all ${
        open
          ? 'border-[var(--accent)] bg-[var(--bg-secondary)] shadow-sm'
          : 'border-[var(--border-default)] bg-[var(--bg-secondary)] hover:border-[var(--border-strong)]'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0 space-y-1">
          <p className="text-base font-semibold text-[var(--text-primary)] leading-snug">{point.title}</p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{point.summary}</p>
        </div>
        <span
          className={`mt-0.5 shrink-0 text-sm font-medium ${
            open ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
          }`}
        >
          {open ? 'Close' : 'Tactics →'}
        </span>
      </button>

      {open && (
        <div className="border-t border-[var(--border-default)] px-5 py-5 space-y-6">

          {/* Two-col: what it looks like + your rights */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                What this looks like
              </p>
              <ul className="space-y-1">
                {point.examples.map(example => (
                  <li key={example} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Your rights
              </p>
              <ul className="space-y-1">
                {point.rights.map(right => (
                  <li key={right} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-confirm)]" aria-hidden="true" />
                    {right}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Questions to send */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              Questions to send in writing
            </p>
            <div className="space-y-2">
              {point.phrases.map(phrase => (
                <div
                  key={phrase}
                  className="flex items-start gap-3 rounded-lg border border-[var(--border-accent)] bg-blue-50/60 p-3"
                >
                  <p className="flex-1 font-mono text-sm leading-relaxed text-[var(--text-primary)]">
                    {phrase}
                  </p>
                  <CopyButton text={phrase} />
                </div>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <p className="text-sm text-[var(--text-muted)] border-t border-[var(--border-default)] pt-4">
            <span className="font-semibold text-[var(--text-secondary)]">Why it matters: </span>
            {point.whyItMatters}
          </p>
        </div>
      )}
    </div>
  );
};

const PressurePoints = () => (
  <div className="section-shell space-y-8 py-8" id="pressure">

    {/* Header */}
    <header className="max-w-2xl space-y-3">
      <p className="eyebrow">Tactics</p>
      <h1 className="headline-xl">When WorkSafeBC is running a play on you.</h1>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Eight patterns they use to delay, deny, and discredit. For each one: what it looks like, what your rights are, and exact questions to send in writing that they have to answer.
      </p>
    </header>

    {/* Cards */}
    <div className="space-y-3">
      {pressurePoints.map(point => (
        <PressureCard key={point.id} point={point} />
      ))}
    </div>

    {/* CTA */}
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] px-6 py-5 shadow-sm">
      <p className="text-sm font-semibold text-[var(--text-primary)]">
        Use these questions in FOIs, emails, MLA escalations, and WCAT appeals.
      </p>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">
        Copy the question, drop it in your next written communication, and you have a record.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/templates" className="btn-primary">
          Email Templates →
        </Link>
        <Link href="/wcat" className="btn-secondary">
          WCAT Precedents
        </Link>
        <Link href="/documentation" className="btn-secondary">
          Evidence Center
        </Link>
      </div>
    </div>
  </div>
);

export default PressurePoints;
