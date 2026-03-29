import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import ProgressBar from '../../components/ProgressBar';
import FeedbackButton from '../../components/FeedbackButton';
import Footer from '../../components/Footer';
import { screwedSituations } from '../../data/content';
import NextSteps from './NextSteps';
import SituationSelector from './SituationSelector';
import { clearProgress, loadProgress, saveProgress } from '../../utils/progressStorage';
import { getSupabaseClient } from '../../lib/supabaseClient';

const steps = ['Pick your situation', 'Commit to documentation', 'Add your voice', 'Move to action'];

const normalizeSituation = situations =>
  situations.map((situation, index) => ({
    ...situation,
    id: situation.id || `situation-${index}`,
  }));

const StartHere = () => {
  const router = useRouter();
  const normalizedSituations = useMemo(() => normalizeSituation(screwedSituations), []);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [committed, setCommitted] = useState(false);
  const [declared, setDeclared] = useState(false);
  const [declarationText, setDeclarationText] = useState('');
  const [declarationError, setDeclarationError] = useState('');
  const [declarationSaving, setDeclarationSaving] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const stored = loadProgress();
    if (stored?.situationId) {
      setSelectedId(stored.situationId);
      setCurrentStep(stored.step || 1);
      setCommitted(Boolean(stored.committed));
      setDeclared(Boolean(stored.declared));
    }
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    const stepFromQuery = Number(router.query.step);
    const situationFromQuery = router.query.situation;
    if (stepFromQuery && !Number.isNaN(stepFromQuery)) {
      setCurrentStep(Math.min(steps.length, Math.max(1, stepFromQuery)));
    }
    if (situationFromQuery) {
      setSelectedId(situationFromQuery);
      setCurrentStep(prev => Math.max(prev, 2));
    }
  }, [router.isReady, router.query.step, router.query.situation]);

  useEffect(() => {
    saveProgress({ step: currentStep, situationId: selectedId, committed, declared });
    if (!router.isReady) return;
    const query = { ...router.query };
    if (currentStep) query.step = currentStep;
    if (selectedId) query.situation = selectedId;
    router.replace({ pathname: '/start-here', query }, undefined, { shallow: true });
  }, [currentStep, selectedId, committed, declared, router]);

  const selectedSituation = normalizedSituations.find(s => s.id === selectedId);

  const fireUsageCounter = () => {
    try {
      const supabase = getSupabaseClient();
      supabase.rpc('increment_toolkit_usage').then(() => {}).catch(() => {});
      supabase
        .from('tool_events')
        .insert({
          event_type: 'start_here_committed',
          metadata: { situationId: selectedId },
        })
        .then(() => {})
        .catch(() => {});
    } catch {
      // fail silently by design
    }
  };

  const logChecklistComplete = (situationId, stepIndex) => {
    try {
      const supabase = getSupabaseClient();
      supabase
        .from('tool_events')
        .insert({
          event_type: 'checklist_completed',
          metadata: { situationId, stepIndex },
        })
        .then(() => {})
        .catch(() => {});
    } catch {
      // fail silently
    }
  };

  const proceedFromDeclaration = () => {
    setDeclared(true);
    setCurrentStep(3);
    setDeclarationText('');
    setDeclarationError('');
  };

  const handleDeclarationSubmit = async () => {
    const trimmed = declarationText.trim();
    if (!trimmed) {
      setDeclarationError('Add one sentence, or skip for now.');
      return;
    }

    setDeclarationSaving(true);
    setDeclarationError('');

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from('declarations').insert({ text: trimmed });
      if (error) throw error;

      supabase
        .from('tool_events')
        .insert({
          event_type: 'declaration_added',
          metadata: { situationId: selectedId },
        })
        .then(() => {})
        .catch(() => {});

      proceedFromDeclaration();
    } catch {
      setDeclarationError('Could not save right now. You can skip and keep moving.');
    } finally {
      setDeclarationSaving(false);
    }
  };

  const handleSelect = id => {
    setSelectedId(id);
    setCurrentStep(prev => (prev < 2 ? 2 : prev));
  };

  const handleNext = () => {
    if (!selectedId) return;
    setCurrentStep(prev => {
      const next = Math.min(prev + 1, steps.length);
      if (next !== prev) {
        setToast(true);
        setTimeout(() => setToast(false), 2000);
        if (next === 4 && selectedId) {
          logChecklistComplete(selectedId, 4);
        }
      }
      return next;
    });
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setSelectedId(null);
    setCurrentStep(1);
    setCommitted(false);
    setDeclared(false);
    setDeclarationText('');
    setDeclarationError('');
    clearProgress();
    router.replace({ pathname: '/start-here' }, undefined, { shallow: true });
  };

  const showGate = selectedSituation && currentStep >= 2 && !committed;
  const showDeclaration = selectedSituation && committed && !declared && currentStep === 3;

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Start Here | Workers Toolkit</title>
        <meta
          name="description"
          content="Guided onboarding to match your situation and next steps."
        />
      </Head>
      <Navigation />

      {showGate ? (
        <main className="section-shell flex min-h-[calc(100vh-64px)] items-center py-10" aria-labelledby="commitment-gate">
          <section className="mx-auto w-full max-w-3xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-8">
            <h1 id="commitment-gate" className="headline-md mb-4 !text-5xl">
              Before we go further.
            </h1>
            <p className="body-text">
              This toolkit works. But only if you document everything — every call, every letter,
              every delay, every excuse they give you.
            </p>
            <p className="body-text mt-4">
              The system counts on exhaustion. Documentation is how you outlast it. Are you ready to
              start building your record?
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                className="btn-primary w-full justify-center"
                onClick={() => {
                  setCommitted(true);
                  setCurrentStep(3);
                  fireUsageCounter();
                }}
              >
                Yes. I&apos;m building my record <span className="arrow-glyph">→</span>
              </button>
              <button
                type="button"
                className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                onClick={() => router.push('/how-to-use')}
              >
                I need more time
              </button>
            </div>
          </section>
        </main>
      ) : showDeclaration ? (
        <main className="section-shell flex min-h-[calc(100vh-64px)] items-center py-10" aria-labelledby="declaration-prompt">
          <section className="mx-auto w-full max-w-3xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-8">
            <p className="eyebrow mb-3">One optional step</p>
            <h1 id="declaration-prompt" className="headline-md !text-4xl">
              Add your voice to the record.
            </h1>
            <p className="body-text mt-4">
              One sentence. Anonymous. It takes 30 seconds and it stays. You can skip this — but
              this is what changes things.
            </p>
            <label htmlFor="declaration" className="sr-only">
              What WorkSafeBC did to me was
            </label>
            <input
              id="declaration"
              type="text"
              value={declarationText}
              onChange={event => {
                setDeclarationText(event.target.value);
                if (declarationError) setDeclarationError('');
              }}
              placeholder="What WorkSafeBC did to me was..."
              className="mt-6 w-full border border-[var(--border-default)] bg-[var(--bg-tertiary)] px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
              maxLength={280}
            />
            {declarationError ? (
              <p className="mt-3 text-sm text-[var(--accent-urgent)]">{declarationError}</p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                className="btn-primary w-full justify-center"
                onClick={handleDeclarationSubmit}
                disabled={declarationSaving}
              >
                {declarationSaving ? 'Saving...' : 'Add this to the record'}{' '}
                <span className="arrow-glyph">→</span>
              </button>
              <button
                type="button"
                className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                onClick={proceedFromDeclaration}
              >
                Skip for now
              </button>
            </div>
          </section>
        </main>
      ) : (
        <main className="section-shell space-y-8 py-10" aria-labelledby="start-here-heading">
          <header className="space-y-3">
            <p className="eyebrow">Start Here</p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 id="start-here-heading" className="headline-md !text-5xl">
                  Where are you getting screwed?
                </h1>
                <p className="max-w-3xl text-[var(--text-secondary)]">
                  Pick one situation, commit to building your record, and move with structure.
                </p>
              </div>
            </div>
            <ProgressBar currentStep={currentStep} steps={steps} />
          </header>

          <section
            aria-label="Situation selector"
            className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-[var(--font-display)] text-2xl text-[var(--text-primary)]">
                Which situation matches you?
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Use arrow keys to move, Enter/Space to select.
              </p>
            </div>
            <div className="mt-4">
              <SituationSelector
                situations={normalizedSituations}
                selectedId={selectedId}
                onSelect={handleSelect}
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center justify-center border border-[var(--border-default)] px-4 py-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] transition hover:border-[var(--border-accent)]"
              >
                Back
              </button>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="border border-[var(--border-default)] px-4 py-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] transition hover:border-[var(--border-accent)]"
                >
                  Reset journey
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!selectedId}
                  className="btn-primary"
                  aria-disabled={!selectedId}
                >
                  Next <span className="arrow-glyph">→</span>
                </button>
              </div>
            </div>
          </section>

          {selectedSituation && currentStep >= 3 ? (
            <section
              aria-label="Next steps"
              className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6"
            >
              <NextSteps situation={selectedSituation} onReset={handleReset} />
            </section>
          ) : null}

          {toast ? (
            <div className="fixed bottom-4 right-4 z-50 border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--text-primary)]">
              Progress saved
            </div>
          ) : null}

          <FeedbackButton />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default StartHere;
