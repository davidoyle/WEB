import Link from 'next/link'

const LandingSection = () => (
  <section className="section-shell" id="landing">
    <div className="max-w-3xl mx-auto text-center px-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-red-700">Worker&apos;s Toolkit</p>
      <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        A survival interface for injured workers in B.C. being delayed, ignored, or quietly cut off.
      </h1>

      <p className="mt-6 text-lg text-gray-800">
        This isn&apos;t a therapy site. It&apos;s a map, a weapons locker, and a receipts folder for workers who are being slow-rolled,
        gaslit, or quietly cut off.
      </p>

      <div className="mt-6 space-y-2 text-gray-900">
        <p>Track what they said and when they said it.</p>
        <p>Match your situation to real WCAT decisions where workers actually won.</p>
        <p>Build a record strong enough for appeals, oversight bodies, or the courts.</p>
      </div>

      <div className="text-center mt-6">
        <Link
          href="/start-here"
          className="inline-block rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-red-700"
        >
          Start Here: Where Are You Getting Screwed?
        </Link>
      </div>

      <p className="text-center text-gray-600 mt-4">
        What’s happening to you isn’t normal. Start here and turn it into a record.
      </p>

      <div className="text-center mt-8">
        <Link
          href="/tell-your-story"
          className="inline-block border border-gray-500 px-7 py-3 rounded-md text-base font-semibold hover:bg-gray-50 transition"
        >
          Tell your story (anonymous)
        </Link>
        <p className="mt-2 text-xs text-gray-500">
          This feeds the Systemic Case File — the pattern the system can&apos;t ignore.
        </p>
      </div>
    </div>
  </section>
)

export default LandingSection
