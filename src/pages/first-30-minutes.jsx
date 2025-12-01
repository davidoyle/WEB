import Head from 'next/head'
import Navigation from '../components/Navigation'
import First30MinutesSection from '../sections/First30MinutesSection'

const FirstThirtyMinutesPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>First 30 Minutes | Worker's Toolkit</title>
      <meta name="description" content="Immediate steps to take after a bad WorkSafeBC decision or injury." />
    </Head>
    <Navigation />
    <main className="py-8">
      <First30MinutesSection />
    </main>
  </div>
)

export default FirstThirtyMinutesPage
