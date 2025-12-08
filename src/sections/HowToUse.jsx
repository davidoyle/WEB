import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileText,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'

const situations = [
  {
    id: 'fresh-claim',
    title: 'New Injury / First Contact',
    description: 'You were just hurt or just opened a claim. You need a calm, fast starting point.',
    icon: Compass,
  },
  {
    id: 'bad-decision',
    title: 'Benefits Cut / Denied Treatment',
    description: 'A decision letter doesn\'t match reality. You need targeted pushback.',
    icon: ShieldCheck,
  },
  {
    id: 'ignored',
    title: 'Ignored / Mislabeled as “Behavioural”',
    description: 'You\'re being dismissed or gaslit. You need receipts and escalation.',
    icon: MapPin,
  },
  {
    id: 'appeal-stage',
    title: 'Already in Appeal Land (WCAT/ Review)',
    description: 'You\'re in formal review/appeal territory and need precedent and structure.',
    icon: Target,
  },
]

const moveSequence = [
  {
    id: 'evidence',
    title: 'Secure Your Evidence',
    detail: 'Lock down decisions, doctor reports, call logs, and a simple timeline so nothing gets “lost”.',
  },
  {
    id: 'violations',
    title: 'Identify Their Violations',
    detail: 'Spot the pressure points that match what they did: denial of treatment, gaslighting, fake “recovery”.',
  },
  {
    id: 'pressure',
    title: 'Send Targeted Pressure',
    detail: 'Use the templates to put the facts and violations into emails to WorkSafeBC, your MLA, or oversight bodies.',
  },
  {
    id: 'wins',
    title: 'Study the Wins (Optional)',
    detail: 'Scan WCAT wins that look like yours. Borrow the structure, phrases, and evidence they cared about.',
  },
]

const microTasks = [
  {
    id: 'call-log',
    title: 'Log a call',
    time: '10 min',
    description: 'Turn one recent call into a timestamped log entry.',
  },
  {
    id: 'email-template',
    title: 'Finish 1 email template',
    time: '15 min',
    description: 'Plug your facts and pressure point into a single email draft.',
  },
  {
    id: 'case-success',
    title: 'Read 1 case success',
    time: '20 min',
    description: 'Skim one WCAT win that matches you and note one thing to copy.',
  },
]

const boundaryLists = {
  gives: [
    'Clear entry points so you never have to “learn it all” first.',
    'Templates and phrasing that match the facts you already have.',
    'Evidence habits that turn chaos into a record you can use.',
  ],
  not: [
    'A doctor, lawyer, or crisis line.',
    'A replacement for your medical or legal advice.',
    'A promise that WorkSafeBC will suddenly play fair.',
  ],
}

const HowToUse = () => {
  const [activeSection, setActiveSection] = useState('step-1')
  const [openMoveId, setOpenMoveId] = useState(null)
  const [completedTasks, setCompletedTasks] = useState([])

  const sectionIds = useMemo(
    () => ['hero', 'step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'closing'],
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  const toggleMove = (id) => {
    setOpenMoveId((current) => (current === id ? null : id))
  }

  const markTaskDone = (id) => {
    setCompletedTasks((current) => (current.includes(id) ? current : [...current, id]))
  }

  return (
    <div className="bg-gray-50" id="how-to-use">
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50" id="hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08)_0,_transparent_40%)]" aria-hidden="true" />
        <div className="section-shell relative flex flex-col items-center space-y-6 py-14 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-700">
            <span className="rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-sky-100">Movement onboarding edition</span>
            <span className="rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-emerald-100">Calm, guided steps</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 md:text-5xl">How To Use This Toolkit</h1>
          <p className="max-w-3xl text-lg text-gray-700 md:text-xl">
            This isn&apos;t paperwork. This is how we fight back. Pick your path, move in sequence, and keep your nervous system calm while you do it.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="#step-1"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Start Here: Find Your Situation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-sm text-gray-600">Move one section at a time. The progress rail updates as you scroll.</p>
          </div>
        </div>
      </div>

      <div className="section-shell relative py-12 lg:flex lg:gap-10">
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-28 space-y-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Progress</p>
            <div className="h-px bg-gradient-to-r from-emerald-200 via-sky-200 to-emerald-200" aria-hidden="true" />
            <ol className="space-y-2 text-sm text-gray-700">
              {sectionIds.filter((id) => id.startsWith('step')).map((id, index) => {
                const isActive = activeSection === id
                return (
                  <li key={id} className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                        isActive
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 bg-gray-50 text-gray-600'
                      }`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <a
                      href={`#${id}`}
                      className={`transition hover:text-gray-900 ${isActive ? 'font-semibold text-gray-900' : ''}`}
                    >
                      {`Step ${index + 1}`}
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        </aside>

        <div className="flex-1 space-y-10">
          <section id="step-1" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Step 1</p>
              <h2 className="text-3xl font-bold text-gray-900">Find Yourself In the Fight</h2>
              <p className="text-gray-700">Pick the path that fits. Each card drops you directly into the right onboarding flow.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {situations.map(({ id, title, description, icon: Icon }) => (
                <Link
                  key={id}
                  href={`/start-here?situation=${id}`}
                  className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 ring-1 ring-emerald-100">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                      <p className="text-sm text-gray-700">{description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                        Jump in
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section
            id="step-2"
            className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-8 shadow-sm ring-1 ring-emerald-100"
          >
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Step 2</p>
              <h2 className="text-3xl font-bold text-gray-900">Don&apos;t Take On the Whole System</h2>
              <p className="text-gray-700">Permission to go narrow. Drop what you don&apos;t need so the fight stays winnable.</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-red-100">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-red-500" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-900">Don&apos;t</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Memorize the entire Workers Compensation Act.</li>
                  <li>Read every single template or WCAT case.</li>
                  <li>Stay up all night trying to master the whole system.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-200">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-900">Do</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Use only the pages tied to your situation.</li>
                  <li>Copy the phrasing that fits your facts.</li>
                  <li>Move one or two steps ahead, not ten.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="step-3" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Step 3</p>
              <h2 className="text-3xl font-bold text-gray-900">Your First Four Moves (Proven to Work)</h2>
              <p className="text-gray-700">Follow this sequence. Each card expands for the how-to when you need it.</p>
            </div>
            <div className="mt-8 space-y-4">
              {moveSequence.map((move, index) => {
                const isOpen = openMoveId === move.id
                return (
                  <div
                    key={move.id}
                    className="rounded-2xl border border-gray-200 bg-gradient-to-r from-white via-sky-50 to-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMove(move.id)}
                      className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-base font-bold text-white shadow-sm">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{move.title}</h3>
                          <p className="text-sm text-gray-700">Tap to see how.</p>
                        </div>
                      </div>
                      <ArrowRight
                        className={`h-5 w-5 text-emerald-700 transition ${isOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen ? (
                      <div className="border-t border-gray-100 px-5 py-4 text-gray-800">{move.detail}</div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </section>

          <section
            id="step-4"
            className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8 shadow-sm ring-1 ring-emerald-100"
          >
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Step 4</p>
              <h2 className="text-3xl font-bold text-gray-900">Tiny Actions Win Wars</h2>
              <p className="text-gray-700">Pick one micro-task. Done is better than heroic.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {microTasks.map((task) => {
                const isDone = completedTasks.includes(task.id)
                return (
                  <div
                    key={task.id}
                    className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{task.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{task.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => markTaskDone(task.id)}
                      className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                        isDone
                          ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : <FileText className="h-4 w-4" aria-hidden="true" />}
                      Do this now
                    </button>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="step-5" className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Step 5</p>
              <h2 className="text-3xl font-bold text-gray-900">You&apos;re Not Alone In This System</h2>
              <p className="text-gray-700">Know what this toolkit gives you and what it doesn&apos;t replace. We fight together.</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-sm ring-1 ring-emerald-100">
                <div className="mb-3 flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-900">What This Toolkit Gives You</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {boundaryLists.gives.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-sm ring-1 ring-gray-200">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-900">What This Toolkit Doesn&apos;t Replace</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {boundaryLists.not.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-5 w-5 text-sky-600" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="closing" className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-sky-700 p-10 text-white shadow-sm">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold">You Know Where You Are. Now Move the System.</h2>
              <p className="text-lg text-emerald-50">
                Your fight is personal. Our fight is collective. Move forward — we move with you.
              </p>
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#step-4"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-emerald-800 shadow-lg shadow-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                >
                  Start My First Action
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/stories"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                >
                  See How Others Won
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="fixed inset-x-4 bottom-4 z-30 flex justify-center lg:hidden">
        <a
          href="#step-1"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-300 transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Start Here: Find Your Situation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

export default HowToUse
