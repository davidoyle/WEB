import Link from 'next/link'
import { Shield } from 'lucide-react'

const LandingSection = () => (
  <section className="section-shell" id="landing">
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Shield className="h-14 w-14 text-red-600" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-red-700">Worker&apos;s Toolkit</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              A survival interface for injured workers in B.C. being delayed, ignored, or quietly cut off.
            </h1>
          </div>
        </div>

        <p className="text-lg text-gray-800">
          This isn&apos;t a therapy site. It&apos;s a map, a weapons locker, and a receipts folder for workers who are being slow-
          rolled, gaslit, or quietly cut off.
        </p>

        <div className="space-y-2 text-gray-900">
          <p>Track what they said and when they said it.</p>
          <p>Match your situation to real WCAT decisions where workers actually won.</p>
          <p>Build a record strong enough for appeals, oversight bodies, or the courts.</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/start-here"
            className="w-full rounded-lg bg-red-600 px-8 py-3 text-center text-lg font-semibold text-white shadow-sm transition hover:bg-red-700 md:w-fit"
          >
            Start Here: Where Are You Getting Screwed?
          </Link>
          <p className="text-base text-gray-800">What&apos;s happening to you isn&apos;t normal. Start here and turn it into a record.</p>
        </div>
      </div>

      <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900">Tell your story (anonymous)</h2>
          <p className="text-gray-700">This feeds the Systemic Case File — the pattern the system doesn&apos;t want to see.</p>
        </div>
        <Link
          href="/tell-your-story"
          className="inline-flex w-full items-center justify-center rounded-lg border border-gray-900 px-6 py-3 text-gray-900 transition hover:bg-gray-900 hover:text-white"
        >
          Go to the anonymous form
        </Link>
      </div>
    </div>
  </section>
)

export default LandingSection
