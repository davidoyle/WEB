import Link from 'next/link';
import { ExternalLink, ListCheck, RefreshCw } from 'lucide-react';
import Accordion from '../../components/Accordion';
import ChecklistDownloadButton from '../../components/ChecklistDownloadButton';

const moveTargets = {
  documentation: '/documentation',
  pressure: '/pressure-points',
  templates: '/templates',
  wcat: '/wcat',
  howtouse: '/how-to-use',
};

const templateBySection = {
  documentation: '/templates/start-here-checklist.pdf',
  pressure: '/templates/escalation-checklist.pdf',
  templates: '/templates/appeal-template.pdf',
  wcat: '/templates/appeal-template.pdf',
};

const NextSteps = ({ situation, onReset }) => {
  if (!situation) return null;

  const longSections = [
    {
      id: 'indicators',
      title: 'What this usually looks like',
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {situation.indicators.map(indicator => (
            <li key={indicator}>{indicator}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'priorities',
      title: 'Your priorities right now',
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {situation.priorities.map(priority => (
            <li key={priority}>{priority}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow">You picked</p>
            <h2 className="headline-md !text-3xl">{situation.title}</h2>
            <p className="text-[var(--text-secondary)]">{situation.description}</p>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 border border-[var(--border-default)] px-3 py-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" /> Reset journey
          </button>
        </div>
      </div>

      <Accordion items={longSections} />

      <div className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
        <div className="mb-4 flex items-center gap-2">
          <ListCheck className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
          <h3 className="font-[var(--font-display)] text-2xl text-[var(--text-primary)]">Your next moves</h3>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          These links match what you selected. Save them, download the checklist, and move to action.
        </p>
        <ul className="mt-4 space-y-3">
          {situation.nextMoves.map(move => {
            const href = moveTargets[move.section] || '/start-here';
            const file =
              move.template ||
              templateBySection[move.section] ||
              '/templates/start-here-checklist.pdf';
            return (
              <li
                key={move.text}
                className="flex flex-col gap-2 border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <ExternalLink className="mt-1 h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  <div>
                    <Link
                      href={href}
                      className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      {move.text}
                    </Link>
                    {move.note ? <p className="text-sm text-[var(--text-secondary)]">{move.note}</p> : null}
                  </div>
                </div>
                <ChecklistDownloadButton file={file} label="Download checklist" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NextSteps;
