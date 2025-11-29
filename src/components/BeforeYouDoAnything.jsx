import { AlertTriangle } from 'lucide-react';

const BeforeYouDoAnything = () => (
  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
    <div className="flex items-start">
      <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
      <div>
        <h2 className="text-xl font-bold text-red-800 mb-2">Before You Do Anything Else</h2>
        <ul className="list-disc pl-5 space-y-1 text-red-700">
          <li>Don't call just to "talk it through" with no notes.</li>
          <li>Don't agree to anything on the phone you don't understand.</li>
          <li>Don't send a rage email you can't walk back.</li>
        </ul>
        <p className="mt-3 font-semibold">Do this first:</p>
        <ol className="list-decimal pl-5 space-y-1 text-red-700">
          <li>Save a copy of whatever they sent (photo, screenshot, PDF).</li>
          <li>Write the date, what they decided, and how it hits you (lost income, treatment, job).</li>
          <li>
            Take 10 minutes on this site to figure out what kind of bullshit it is – ignored evidence, contradictory decisions,
            retaliation, "our records show," etc.
          </li>
        </ol>
        <p className="mt-3 text-red-700">
          You're not overreacting. You're buying yourself time to respond with strategy, not just pain.
        </p>
      </div>
    </div>
  </div>
);

export default BeforeYouDoAnything;
