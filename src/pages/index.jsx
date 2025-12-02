import Head from 'next/head'
import Navigation from '../components/Navigation'
import LandingSection from '../sections/Landing'

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
      </main>
    </>
  )
}
