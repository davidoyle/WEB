import { Shield } from 'lucide-react';

const Landing = ({ onStart, onNavigate }) => (
  <section className="max-w-4xl mx-auto px-4 py-12">
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

      {/* FIXED BOX — className instead of class */}
      <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-lg font-bold">
            !
          </span>
          <h3 className="ml-3 text-lg font-semibold text-gray-900">Why This Matters</h3>
        </div>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>Track what they said and when they said it.</li>
          <li>Match your situation to real WCAT decisions where workers actually won.</li>
          <li>Build a record strong enough for appeals, oversight bodies, or the courts.</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={onStart}
          className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-sm transition"
        >
          Start Here, Where Are You Getting Screwed?
        </button>

        <button
          type="button"
          onClick={() => onNavigate && onNavigate('tellYourStory')}
          className="w-full md:w-auto border border-gray-800 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition"
        >
          Tell your story (anonymous)
        </button>
      </div>
    </div>
  </section>
);

export default Landing;
