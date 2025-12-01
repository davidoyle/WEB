import Link from 'next/link'
import { Shield } from 'lucide-react'

const LandingSection = () => (
  <section className="section-shell" id="landing">
    <div className="text-center mb-12">
      <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Worker&apos;s Toolkit
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Evidence, strategy, and leverage for injured workers in B.C. getting stonewalled by WorkSafeBC.
      </p>
    </div>

    <div className="space-y-6 text-gray-800">
      <p>
        This isn&apos;t a therapy site. It&apos;s a map, a weapons locker, and a receipts folder for
        workers who are being slow-rolled, gaslit, or quietly cut off.
      </p>
      <ul className="space-y-2 list-disc list-inside">
        <li>Track what they said and when they said it.</li>
        <li>Match your situation to real WCAT decisions where workers actually won.</li>
        <li>Build a record strong enough for appeals, oversight bodies, or the courts.</li>
      </ul>
    </div>

    <div className="mt-10 flex flex-col items-center gap-4">
      <Link
        href="#start-here"
        className="w-full md:w-auto rounded-lg bg-red-600 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-red-700"
      >
        Start with the map
      </Link>

      <Link
        href="/stories"
        className="w-full md:w-auto rounded-lg border border-gray-800 px-8 py-3 text-gray-900 transition hover:bg-gray-900 hover:text-white"
      >
        Tell your story (anonymous)
      </Link>
    </div>
  </section>
);

export default LandingSection
