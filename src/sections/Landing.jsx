import { Shield } from 'lucide-react'
import { useTone } from '../context/ToneContext'

const Landing = ({ onStart, onNavigate }) => {
  const { tone } = useTone()
  const heroText = tone === 'gentle'
    ? 'Evidence, strategy, and templates to keep your WorkSafeBC claim on track.'
    : 'Evidence, strategy, and leverage for injured workers in B.C. getting stonewalled by WorkSafeBC.'
  const ctaText = tone === 'gentle' ? 'Let’s figure out where you are.' : 'Start here. Where are you getting screwed?'

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 text-center">
        <Shield className="mx-auto mb-6 h-16 w-16 text-red-600" aria-hidden="true" />
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Worker&apos;s Toolkit</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-700">{heroText}</p>
      </div>

      <div className="space-y-6 text-gray-800 text-base md:text-lg">
        <p>
          This isn&apos;t a therapy site. It&apos;s a map, a weapons locker, and a receipts folder for workers who are being slow-rolled,
          gaslit, or quietly cut off.
        </p>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 font-bold text-white" aria-hidden="true">
              !
            </span>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Why This Matters</h3>
          </div>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>Track what they said and when they said it.</li>
            <li>Match your situation to real WCAT decisions where workers actually won.</li>
            <li>Build a record strong enough for appeals, oversight bodies, or the courts.</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={onStart}
            className="w-full rounded-lg bg-red-600 px-8 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 md:w-auto"
          >
            {ctaText}
          </button>

          <button
            type="button"
            onClick={() => onNavigate && onNavigate('tellYourStory')}
            className="w-full rounded-lg border border-gray-800 px-8 py-3 text-center font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 md:w-auto"
          >
            Tell your story (anonymous)
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing
