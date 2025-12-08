import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  reassuranceChecklist,
  silenceCostLists,
  socialProofConfig,
  speakingImpactFlow,
  whySilenceFeelsSaferCards,
  whySilentPoints
} from '../data/content'
import { supabase } from '../../utils/supabase'

const WhySilentSection = () => {
  const [storyCounts, setStoryCounts] = useState({
    current: socialProofConfig.current,
    target: socialProofConfig.target
  })
  const [loadingStories, setLoadingStories] = useState(Boolean(supabase))

  useEffect(() => {
    let isActive = true

    const fetchStoryCount = async () => {
      if (!supabase) return
      const { count, error } = await supabase.from('stories').select('id', { count: 'exact', head: true })
      if (!isActive) return
      if (error || count === null) {
        setLoadingStories(false)
        return
      }
      setStoryCounts((prev) => ({ ...prev, current: count }))
      setLoadingStories(false)
    }

    fetchStoryCount()

    return () => {
      isActive = false
    }
  }, [])

  const filledSlots = Math.min(storyCounts.current, storyCounts.target)
  const slots = Array.from({ length: storyCounts.target }, (_, index) => index < filledSlots)

  return (
    <div id="why-silent" className="scroll-smooth">
      <section className="bg-white">
        <div className="section-shell min-h-[60vh] py-16 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Why people stay silent</p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">The Cost of Silence</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-700">
            WorkSafeBC counts on exhaustion and confusion. This page shows why silence feels safer, what it costs, and how your story shifts the system.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#action-section"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              Share Your Experience
            </a>
            <a
              href="#why-silence-feels-safer"
              className="text-base font-semibold text-red-700 underline-offset-4 hover:underline"
            >
              Learn more first
            </a>
          </div>
        </div>
      </section>

      <section id="why-silence-feels-safer" className="bg-gray-100 py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">Why Silence Feels Safer</h2>
            <p className="section-lead">You're not imagining it. The system is built to make quiet compliance look like the only rational choice.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whySilenceFeelsSaferCards.map((card, index) => (
              <div key={index} className="card h-full">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-2xl" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-gray-700 whitespace-pre-line">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">What Silence Costs</h2>
            <p className="section-lead">Silence protects their process and erases your evidence. Speaking up rewrites the record.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card border-l-4 border-amber-500 bg-amber-50">
              <h3 className="text-xl font-bold text-gray-900">What They Gain From Your Silence</h3>
              <ul className="mt-4 space-y-3 text-gray-800 list-disc list-inside">
                {silenceCostLists.theyGain.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card border-l-4 border-blue-500 bg-blue-50">
              <h3 className="text-xl font-bold text-gray-900">What You Lose By Staying Silent</h3>
              <ul className="mt-4 space-y-3 text-gray-800 list-disc list-inside">
                {silenceCostLists.youLose.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">Your Story Forces Change</h2>
            <p className="section-lead">Each time you record it, it connects to a bigger system response.</p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center justify-center rounded-full bg-white px-8 py-6 text-lg font-bold text-gray-900 shadow-md">
              Your Story
            </div>
            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
              {speakingImpactFlow.map((step, index) => (
                <div key={index} className="card h-full border border-gray-200 bg-white">
                  <div className="mb-2 text-sm font-semibold text-red-600">→ {step.title}</div>
                  <div className="text-gray-800">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">You Stay in Control</h2>
            <p className="section-lead">Your record moves at your pace—no surprises, no forced disclosures.</p>
          </div>
          <div className="card bg-gradient-to-r from-green-50 to-blue-50">
            <ul className="space-y-4 text-gray-800">
              {reassuranceChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-700">Privacy policy and data handling details are available before you submit anything.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">Every Story Fills the Grid</h2>
            <p className="section-lead">You're not alone. Each record makes the pattern harder to ignore.</p>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-5xl font-bold text-gray-900">{filledSlots}</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">of {storyCounts.target} stories logged</p>
              <p className="mt-4 max-w-md text-gray-800">{socialProofConfig.quote}</p>
              {loadingStories ? <p className="mt-2 text-sm text-gray-600">Updating live count…</p> : null}
            </div>
            <div className="w-full max-w-3xl">
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-10" aria-label="Signups grid">
                {slots.map((filled, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-full ${filled ? 'bg-blue-600' : 'bg-gray-200'} transition`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600">Each filled circle is a worker who spoke up. Anonymous spots stay anonymous by default.</p>
            </div>
          </div>
        </div>
      </section>

      {/*
        Original long-form reasons preserved for reference only. Keeping the section hidden so content stays accessible internally without showing on the public page.
      */}
      <section className="bg-white py-16 hidden">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="section-title">Why People Stay Silent — and Why It Matters</h2>
            <p className="section-lead">Full original wording below is intentionally hidden from public view.</p>
          </div>
          <div className="space-y-6">
            {whySilentPoints.map((point, index) => (
              <div key={index} className="card border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-700 whitespace-pre-line">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="action-section" className="bg-gray-900 py-12 text-white">
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready to add your story?</h2>
            <p className="text-gray-200">Share your experience or see how others fought back. Either move pushes the pattern into the open.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/tell-your-story"
              className="inline-flex items-center justify-center rounded-lg bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-600"
            >
              Share Your Experience
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              See How Others Fought Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhySilentSection
