import Link from 'next/link'

const LandingSection = () => (
  <section id="landing">
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="flex justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shield w-16 h-16 text-red-600"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wide text-red-700">Worker&apos;s Toolkit</p>
      <h1 className="text-5xl font-bold mb-3 text-gray-900">Worker&apos;s Toolkit</h1>
      <p className="mt-2 text-2xl font-semibold text-gray-900">
        A survival interface for injured workers in B.C. being delayed, ignored, or quietly cut off.
      </p>

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
