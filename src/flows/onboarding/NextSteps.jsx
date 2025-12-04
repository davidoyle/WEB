import Link from 'next/link'
import { ExternalLink, ListCheck, RefreshCw } from 'lucide-react'
import Accordion from '../../components/Accordion'
import ChecklistDownloadButton from '../../components/ChecklistDownloadButton'
import ToneToggle from '../../components/ToneToggle'
import { useTone } from '../../context/ToneContext'

const moveTargets = {
  documentation: '/documentation',
  pressure: '/pressure-points',
  templates: '/templates',
  wcat: '/wcat',
  howtouse: '/how-to-use',
}

const templateBySection = {
  documentation: '/templates/start-here-checklist.pdf',
  pressure: '/templates/escalation-checklist.pdf',
  templates: '/templates/appeal-template.pdf',
  wcat: '/templates/appeal-template.pdf',
}

const NextSteps = ({ situation, onReset }) => {
  const { tone } = useTone()
  if (!situation) return null

  const longSections = [
    {
      id: 'indicators',
      title: 'What this usually looks like',
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {situation.indicators.map((indicator) => (
            <li key={indicator}>{indicator}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'priorities',
      title: tone === 'gentle' ? 'What to focus on first' : 'Your priorities right now',
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {situation.priorities.map((priority) => (
            <li key={priority}>{priority}</li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-600">You picked</p>
            <h2 className="text-2xl font-bold text-gray-900">{situation.title}</h2>
            <p className="text-gray-700">{tone === 'gentle' ? situation.gentleDescription || situation.description : situation.description}</p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <ToneToggle />
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" /> Reset journey
            </button>
          </div>
        </div>
      </div>

      <Accordion items={longSections} />

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <ListCheck className="h-5 w-5 text-red-600" aria-hidden="true" />
          <h3 className="text-xl font-semibold text-gray-900">Your next moves</h3>
        </div>
        <p className="text-sm text-gray-700">
          These links match what you selected. Save them, download the checklist, and move to action.
        </p>
        <ul className="mt-4 space-y-3">
          {situation.nextMoves.map((move) => {
            const href = moveTargets[move.section] || '/start-here'
            const file = move.template || templateBySection[move.section] || '/templates/start-here-checklist.pdf'
            return (
              <li key={move.text} className="flex flex-col gap-1 rounded-lg bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <ExternalLink className="mt-1 h-4 w-4 text-blue-600" aria-hidden="true" />
                  <div>
                    <Link href={href} className="text-base font-semibold text-blue-700 underline-offset-4 hover:underline">
                      {move.text}
                    </Link>
                    {move.note ? <p className="text-sm text-gray-700">{move.note}</p> : null}
                  </div>
                </div>
                <ChecklistDownloadButton file={file} label="Download checklist" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NextSteps
