'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import FeedbackButton from '@/components/FeedbackButton';
import ToneToggle from '@/components/ToneToggle';
import { screwedSituations } from '@/data/content';
import NextSteps from './NextSteps';
import SituationSelector from './SituationSelector';
import { clearProgress, loadProgress, saveProgress } from '@/lib/utils/progressStorage';
import { useTone } from '@/context/ToneContext';

const steps = ['Pick your situation', 'Confirm what matters', 'Move to action'];

const normalizeSituation = situations =>
  situations.map((situation, index) => ({
    ...situation,
    id: situation.id || `situation-${index}`,
    gentleDescription:
      situation.gentleDescription ||
      situation.description?.replace("You're", 'You are').replace("You've", 'You have'),
  }));

const StartHere = () => {
  const router = useRouter();
  const { tone } = useTone();
  const normalizedSituations = useMemo(() => normalizeSituation(screwedSituations), []);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const stored = loadProgress();
    if (stored?.situationId) {
      setSelectedId(stored.situationId);
      setCurrentStep(stored.step || 1);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const stepFromQuery = Number(params.get('step'));
    const situationFromQuery = params.get('situation');
    if (stepFromQuery && !Number.isNaN(stepFromQuery)) {
      setCurrentStep(Math.min(steps.length, Math.max(1, stepFromQuery)));
    }
    if (situationFromQuery) {
      setSelectedId(situationFromQuery);
    }
  }, []);

  useEffect(() => {
    saveProgress({ step: currentStep, situationId: selectedId });
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    params.set('step', String(currentStep));
    if (selectedId) {
      params.set('situation', selectedId);
    } else {
      params.delete('situation');
    }
    window.history.replaceState({}, '', `/start-here?${params.toString()}`);
  }, [currentStep, selectedId]);

  const selectedSituation = normalizedSituations.find(s => s.id === selectedId);
  const heroText =
    tone === 'gentle' ? 'Let’s figure out where you are.' : 'Where are you getting screwed?';

  return (
    <main className="space-y-8 py-10" aria-labelledby="start-here-heading">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Start Here</p>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1
              id="start-here-heading"
              className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
            >
              {heroText}
            </h1>
            <p className="max-w-3xl text-gray-700">
              Answer one question, see only what matters, and keep your progress saved locally.
            </p>
          </div>
          <ToneToggle />
        </div>
        <ProgressBar currentStep={currentStep} steps={steps} />
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SituationSelector
          situations={normalizedSituations}
          selectedId={selectedId}
          onSelect={id => {
            setSelectedId(id);
            setCurrentStep(prev => (prev < 2 ? 2 : prev));
          }}
        />
      </section>

      {selectedSituation && currentStep >= 2 ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <NextSteps
            situation={selectedSituation}
            onReset={() => {
              setSelectedId(null);
              setCurrentStep(1);
              clearProgress();
              router.replace('/start-here');
            }}
          />
        </section>
      ) : null}

      <FeedbackButton />
    </main>
  );
};

export default StartHere;
