import { ExternalLink, MapPin } from 'lucide-react';
import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { screwedSituations, wcatCategories } from '../data/content';

const wcatCaseLookup = Object.fromEntries(
  (wcatCategories || []).flatMap((category) =>
    (category.cases || []).map((caseItem) => [caseItem.id || caseItem.caseNumber, caseItem]),
  ),
);

const Landing = ({ onNavigate }) => (
  <div className="max-w-4xl mx-auto">
    <BeforeYouDoAnything />
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Here: Where Are You Getting Screwed?</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        This isn't a therapy site. It's a map, a weapons locker, and a receipts folder for injured workers in British Columbia
        who are getting run in circles by WorkSafeBC.
      </p>
    </div>
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">You do not need to know the law.</h2>
        <p className="text-gray-700 mb-4">You just need to know:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Where you are in the process</li>
          <li>What your next 1–3 moves are</li>
          <li>What to send, and to who</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {screwedSituations.map((situation, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{situation.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{situation.description}</p>
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-2">What this usually looks like:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {situation.indicators.map((indicator, i) => (
                  <li key={i}>{indicator}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-2">Your priorities now:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {situation.priorities.map((priority, i) => (
                  <li key={i}>{priority}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Your next moves:</h4>
              <ul className="space-y-1">
                {situation.nextMoves.map((move, i) => (
                  <li
                    key={i}
                    className="text-blue-600 flex items-center cursor-pointer hover:underline"
                    onClick={() => onNavigate(move.section)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {move.text}
                  </li>
                ))}
              </ul>
            </div>
            {situation.relatedWCATCaseIds?.length ? (
              <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recommended WCAT decisions</h4>
                <ul className="space-y-2">
                  {situation.relatedWCATCaseIds.map((caseId) => {
                    const wcatCase = wcatCaseLookup[caseId];
                    return (
                      <li
                        key={caseId}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-gray-50 border border-gray-200 rounded-md p-3"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {wcatCase?.shortLabel || wcatCase?.title || caseId}
                          </p>
                          <p className="text-xs text-gray-600">{wcatCase?.citation || wcatCase?.caseNumber}</p>
                        </div>
                        <a
                          className="text-sm font-semibold text-blue-600 hover:underline"
                          href={`/wcat#${caseId}`}
                        >
                          View in Armory
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <section className="mt-12">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-sm">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            What This Site Actually Does For You
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                This site will not:
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-800">
                <li>Magically win your case</li>
                <li>Replace legal advice when you can get it</li>
                <li>Talk you out of being angry (you&apos;re allowed to be)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                This site will:
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-800">
                <li>Show you where the system is weak</li>
                <li>Help you turn your story into evidence</li>
                <li>
                  Give you ready-made language and templates to hit WorkSafeBC,
                  employers, and politicians in ways they can&apos;t just
                  hand-wave away
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-blue-100 pt-6 text-center">
            <p className="text-sm font-medium text-gray-900">
              Your next step, right now:
            </p>
            <ol className="mt-3 list-decimal list-inside text-left max-w-md mx-auto space-y-1 text-sm leading-relaxed text-gray-800">
              <li>Pick the box that feels most like you</li>
              <li>Click through to the tools it points to</li>
              <li>Steal everything you find useful</li>
              <li>Put it in writing and send it</li>
            </ol>
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-gray-700">
              Every email, every log entry, every uploaded document is another
              brick in a wall of proof. And institutions have a hard time
              walking through walls.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Landing;
