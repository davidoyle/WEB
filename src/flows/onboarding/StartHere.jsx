import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'
import ProgressBar from '../../components/ProgressBar'
import FeedbackButton from '../../components/FeedbackButton'
import ToneToggle from '../../components/ToneToggle'
import { screwedSituations } from '../../data/content'
import NextSteps from './NextSteps'
import SituationSelector from './SituationSelector'
import { clearProgress, loadProgress, saveProgress } from '../../utils/progressStorage'
import { useTone } from '../../context/ToneContext'

const steps = ['Pick your situation', 'Confirm what matters', 'Move to action']

const normalizeSituation = (situations) =>
  situations.map((situation, index) => ({
    ...situation,
    id: situation.id || `situation-${index}`,
    gentleDescription:
      situation.gentleDescription ||
      situation.description?.replace("You're", 'You are').replace("You've", 'You have'),
  }))

const StartHere = () => {
  const router = useRouter()
  const { tone } = useTone()
  const normalizedSituations = useMemo(() => normalizeSituation(screwedSituations), [])
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    const stored = loadProgress()
    if (stored?.situationId) {
      setSelectedId(stored.situationId)
      setCurrentStep(stored.step || 1)
    }
  }, [])

  useEffect(() => {
    if (!router.isReady) return
    const stepFromQuery = Number(router.query.step)
    const situationFromQuery = router.query.situation
    if (stepFromQuery && !Number.isNaN(stepFromQuery)) {
      setCurrentStep(Math.min(steps.length, Math.max(1, stepFromQuery)))
    }
    if (situationFromQuery) {
      setSelectedId(situationFromQuery)
    }
  }, [router.isReady, router.query.step, router.query.situation])

  useEffect(() => {
    saveProgress({ step: currentStep, situationId: selectedId })
    if (!router.isReady) return
    const query = { ...router.query }
    if (currentStep) query.step = currentStep
    if (selectedId) query.situation = selectedId
    router.replace({ pathname: '/start-here', query }, undefined, { shallow: true })
  }, [currentStep, selectedId, router])

  const selectedSituation = normalizedSituations.find((s) => s.id === selectedId)

  const handleSelect = (id) => {
    setSelectedId(id)
    setCurrentStep((prev) => (prev < 2 ? 2 : prev))
  }

  const handleNext = () => {
    if (!selectedId) return
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleReset = () => {
    setSelectedId(null)
    setCurrentStep(1)
    clearProgress()
    router.replace({ pathname: '/start-here' }, undefined, { shallow: true })
  }

  const heroText = tone === 'gentle' ? 'Let’s figure out where you are.' : 'Where are you getting screwed?'

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Start Here | Worker's Toolkit</title>
        <meta name="description" content="Guided onboarding to match your situation and next steps." />
      </Head>
      <Navigation />
      <main className="section-shell space-y-8 py-10" aria-labelledby="start-here-heading">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Start Here</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 id="start-here-heading" className="text-3xl font-bold text-gray-900 md:text-4xl">
                {heroText}
              </h1>
              <p className="max-w-3xl text-gray-700">
                Answer one question, see only what matters, and keep your progress saved locally. Use the Back/Next buttons or
                your browser history—your spot is saved.
              </p>
            </div>
            <ToneToggle />
          </div>
          <ProgressBar currentStep={currentStep} steps={steps} />
        </header>

        <section aria-label="Situation selector" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Which situation matches you?</h2>
            <p className="text-sm text-gray-700">Use arrow keys to move, Enter/Space to select.</p>
          </div>
          <div className="mt-4">
            <SituationSelector situations={normalizedSituations} selectedId={selectedId} onSelect={handleSelect} />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Back
            </button>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Reset journey
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedId}
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
                aria-disabled={!selectedId}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {selectedSituation && currentStep >= 2 ? (
          <section aria-label="Next steps" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <NextSteps situation={selectedSituation} onReset={handleReset} />
          </section>
        ) : null}

        <FeedbackButton />
      </main>
    </div>
  )
}

export default StartHere
