import { useMemo, useRef, useState } from 'react'

import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection'
import { pressurePoints } from '../data/content'

const PressurePoints = () => {
  const [openPoints, setOpenPoints] = useState([])
  const cardRefs = useRef({})

  const isOpen = (id) => openPoints.includes(id)

  const handleToggle = (id) => {
    setOpenPoints((prev) => {
      const alreadyOpen = prev.includes(id)
      const updated = alreadyOpen ? prev.filter((item) => item !== id) : [...prev, id]

      setTimeout(() => {
        const element = cardRefs.current[id]
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 50)

      return updated
    })
  }

  const gridItems = useMemo(
    () =>
      pressurePoints.map((point) => ({
        id: point.id,
        icon: point.icon,
        label: point.label,
        title: point.title
      })),
    []
  )

  return (
    <div className="section-shell" id="pressure">
      <BeforeYouDoAnythingSection />
      <div className="mb-10 text-center">
        <h1 className="section-title">Tactical Strategy: Pressure Points</h1>
        <p className="section-lead">Pick the pattern that matches your experience — and push back with their rules.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">Pattern Selector</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {gridItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleToggle(item.id)}
              className={`flex items-center justify-between rounded-lg border bg-white px-4 py-3 text-left shadow-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isOpen(item.id) ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.title}</p>
                </div>
              </div>
              <span className="text-sm text-indigo-600">{isOpen(item.id) ? 'Selected' : 'Tap to open'}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {pressurePoints.map((point) => (
          <div
            key={point.id}
            ref={(el) => {
              cardRefs.current[point.id] = el
            }}
            className={`overflow-hidden rounded-xl border bg-white shadow-sm transition ${
              isOpen(point.id) ? 'border-indigo-500' : 'border-gray-200'
            }`}
          >
            <button
              type="button"
              onClick={() => handleToggle(point.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl" aria-hidden>
                  {point.icon}
                </span>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{point.title}</p>
                  <p className="text-sm text-gray-700">If this is happening to you…</p>
                </div>
              </div>
              <span className={`text-sm ${isOpen(point.id) ? 'text-indigo-600' : 'text-gray-500'}`}>
                {isOpen(point.id) ? 'Hide' : 'Expand'}
              </span>
            </button>

            {isOpen(point.id) && (
              <div className="border-t border-gray-100 bg-gray-50 px-5 py-4">
                <p className="mb-4 text-gray-800">{point.summary}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Quick cues</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {point.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Your rights to cite</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {point.rights.map((right, index) => (
                        <li key={index}>{right}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-lg border border-indigo-100 p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-indigo-800 mb-2">Power questions to send</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    {point.phrases.map((phrase, index) => (
                      <li key={index} className="bg-indigo-50 border border-indigo-100 rounded p-3 text-sm md:text-base">
                        {phrase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm font-semibold text-gray-900">Why it matters</p>
                  <p className="text-sm text-gray-700 md:text-right">{point.whyItMatters}</p>
                </div>

                <div className="mt-3 text-right">
                  <a className="text-sm font-semibold text-indigo-600 hover:text-indigo-700" href="#pressure-cta">
                    Jump to templates for this issue →
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        id="pressure-cta"
        className="mt-8 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="text-base font-semibold text-gray-900">Use these questions directly in FOIs, emails, MLA escalations, and WCAT appeals.</p>
          <p className="text-sm text-gray-700">Pick the templates you need and drop them into your next message.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/templates"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
          >
            Email Templates
          </a>
          <a
            href="/documentation"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:border-indigo-500"
          >
            FOI Tools
          </a>
          <a
            href="/wcat"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:border-indigo-500"
          >
            WCAT Precedent Armory
          </a>
        </div>
      </div>
    </div>
  )
}

export default PressurePoints
