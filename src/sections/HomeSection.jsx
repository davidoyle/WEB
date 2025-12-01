import Link from 'next/link'
import { ExternalLink, MapPin } from 'lucide-react'
import { screwedSituations } from '../data/content'
import { wcatCases } from '../wcat'
import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection'

const wcatCaseLookup = Object.fromEntries(
  (wcatCases || []).map((caseItem) => [caseItem.id || caseItem.caseNumber, caseItem]),
)

const moveTargets = {
  documentation: '#documentation',
  pressure: '#pressure',
  templates: '#templates',
  wcat: '/wcat',
  howtouse: '#how-to-use',
}

const HomeSection = () => (
  <div className="section-shell" id="start-here">
    <BeforeYouDoAnythingSection />
    <div className="mb-12 text-center">
      <h1 className="section-title">Start Here: Where Are You Getting Screwed?</h1>
      <p className="section-lead">
        This isn&apos;t a therapy site. It&apos;s a map, a weapons locker, and a receipts folder for injured workers in British
        Columbia who are getting run in circles by WorkSafeBC.
      </p>
    </div>
    <div className="space-y-8">
      <div className="card border-blue-200 bg-blue-50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">You do not need to know the law.</h2>
        <p className="text-gray-700 mb-4">You just need to know:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Where you are in the process</li>
          <li>What your next 1–3 moves are</li>
          <li>What to send, and to who</li>
        </ul>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {screwedSituations.map((situation, index) => (
          <div key={index} className="card hover:shadow-lg transition-shadow">
            <div className="mb-4 flex items-start">
              <div className="mr-4 rounded-lg bg-blue-100 p-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{situation.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{situation.description}</p>
            <div className="mb-4">
              <h4 className="mb-2 font-bold text-gray-900">What this usually looks like:</h4>
              <ul className="list-disc space-y-1 pl-5 text-gray-700">
                {situation.indicators.map((indicator, i) => (
                  <li key={i}>{indicator}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="mb-2 font-bold text-gray-900">Your priorities now:</h4>
              <ul className="list-disc space-y-1 pl-5 text-gray-700">
                {situation.priorities.map((priority, i) => (
                  <li key={i}>{priority}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h4 className="mb-2 font-semibold text-gray-900">Your next moves:</h4>
              <ul className="space-y-1">
                {situation.nextMoves.map((move, i) => {
                  const href = moveTargets[move.section] || '#start-here'
                  return (
                    <li key={i} className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <Link href={href}>{move.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            {situation.relatedWCATCaseIds?.length ? (
              <div className="card mt-4 border-gray-200 bg-white p-4 shadow-none">
                <h4 className="mb-2 font-semibold text-gray-900">Recommended WCAT decisions</h4>
                <ul className="space-y-2">
                  {situation.relatedWCATCaseIds.map((caseId) => {
                    const wcatCase = wcatCaseLookup[caseId]
                    return (
                      <li
                        key={caseId}
                        className="flex flex-col gap-2 rounded-md border border-gray-200 bg-gray-50 p-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{wcatCase?.shortLabel || wcatCase?.title || caseId}</p>
                          <p className="text-xs text-gray-600">{wcatCase?.citation || wcatCase?.caseNumber}</p>
                        </div>
                        <Link className="text-sm font-semibold text-blue-600 hover:underline" href={`/wcat#${caseId}`}>
                          View in Armory
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <section className="card bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
        <h2 className="text-center text-2xl font-bold text-gray-900">What This Site Actually Does For You</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600">This site will not:</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-800">
              <li>Magically win your case</li>
              <li>Replace legal advice when you can get it</li>
              <li>Talk you out of being angry (you&apos;re allowed to be)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600">This site will help you:</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-800">
              <li>Build a record that survives Review and WCAT</li>
              <li>Translate rage into targeted, written questions</li>
              <li>Spot patterns in how WorkSafeBC dodges responsibility</li>
              <li>Find WCAT cases that mirror your mess</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default HomeSection
