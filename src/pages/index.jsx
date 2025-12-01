import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import LandingSection from '../sections/Landing'

const quickLinks = [
  {
    href: '/start-here',
    title: 'Start Here',
    description: 'Figure out where you are in the process and pick your next 1–3 moves.',
  },
  {
    href: '/first-30-minutes',
    title: 'First 30 Minutes',
    description: 'Immediate steps after a WorkSafeBC decision so nothing slips.',
  },
  {
    href: '/documentation',
    title: 'Evidence & Documentation',
    description: 'Build the record that survives review and appeal.',
  },
  {
    href: '/pressure-points',
    title: 'Tactical Pressure Points',
    description: 'Targeted questions and leverage when you are being ignored.',
  },
  {
    href: '/templates',
    title: 'Email & Letter Templates',
    description: 'Copy-ready language to push back and escalate.',
  },
  {
    href: '/wcat',
    title: 'WCAT Precedent Armory',
    description: 'Searchable cases to mirror your situation.',
  },
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Worker&apos;s Toolkit</title>
        <meta name="description" content="Rapid response toolkit for workers handling urgent situations." />
      </Head>
      <Navigation />
      <main className="space-y-16 pb-16">
        <LandingSection />
        <section className="section-shell">
          <div className="mb-8 text-center">
            <h2 className="section-title">Pick the page you need</h2>
            <p className="section-lead">Each section now lives on its own page so you can focus without scrolling through it all.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-700">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
