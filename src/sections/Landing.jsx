import Link from 'next/link'
import { Shield, ShieldCheck } from 'lucide-react'

const Landing = ({ onStart, onNavigate }) => {
  const subtitle = 'Clear steps, strong records, and real leverage when WorkSafeBC isn’t listening.'
  const bodyCopy = 'If you’re injured and getting the runaround, you’re not alone and you’re not crazy. This toolkit helps you understand what’s happening, track what’s been done to you, and build the kind of record that actually changes decisions.'

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-12 text-center">
          <Shield className="mx-auto mb-6 h-16 w-16 text-blue-600" aria-hidden="true" />
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Worker&apos;s Toolkit</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">{subtitle}</p>
        </div>

        <div className="space-y-6 text-gray-800 text-base md:text-lg">
          <p>{bodyCopy}</p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="mb-4 flex items-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700" aria-hidden="true">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">What You Can Do Here</h3>
            </div>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Make sense of confusing letters and decisions, step by step.</li>
              <li>Track what they said and when they said it, in one place.</li>
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
              Start Here: What’s Happening To You?
            </button>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate('tellYourStory')}
              className="w-full rounded-lg border border-gray-800 px-8 py-3 text-center font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 md:w-auto"
            >
              Tell Your Story (Anonymous, Safe)
            </button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 z-30">
        <Link
          href="/how-to-use"
          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-300 transition hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          How To Use This Toolkit
          <Shield className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </>
  )
}

export default Landing
