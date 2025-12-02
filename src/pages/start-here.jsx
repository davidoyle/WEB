import Head from 'next/head'
import Navigation from '../components/Navigation'
import HomeSection from '../sections/HomeSection'

const StartHerePage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Start Here | Worker's Toolkit</title>
      <meta name="description" content="Orient yourself and pick your next moves for WorkSafeBC battles." />
    </Head>
    <Navigation />
    <main className="py-8">
      <HomeSection />
    </main>
  </div>
)

export default StartHerePage
