import { AlertTriangle } from 'lucide-react'

const BeforeYouDoAnythingSection = () => (
  <div className="callout">
    <div className="flex items-start">
      <AlertTriangle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
      <div>
        <h2 className="text-xl font-bold text-red-800 mb-2">Before You Do Anything Else</h2>
        <ul className="list-disc space-y-1 pl-5 text-red-700">
          <li>Don&apos;t call just to "talk it through" with no notes.</li>
          <li>Don&apos;t agree to anything on the phone you don&apos;t understand.</li>
          <li>Don&apos;t send a rage email you can&apos;t walk back.</li>
        </ul>
        <p className="mt-3 font-semibold">Do this first:</p>
        <ol className="list-decimal space-y-1 pl-5 text-red-700">
          <li>Save a copy of whatever they sent (photo, screenshot, PDF).</li>
          <li>Write the date, what they decided, and how it hits you (lost income, treatment, job).</li>
          <li>
            Take 10 minutes on this site to figure out what kind of bullshit it is – ignored evidence, contradictory decisions,
            retaliation, "our records show," etc.
          </li>
        </ol>
        <p className="mt-3 text-red-700">
          You&apos;re not overreacting. You&apos;re buying yourself time to respond with strategy, not just pain.
        </p>
      </div>
    </div>
  </div>
)

export default BeforeYouDoAnythingSection
