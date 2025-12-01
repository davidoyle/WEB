import Head from 'next/head'
import Navigation from '../components/Navigation'
import HowToUse from '../sections/HowToUse'

const HowToUsePage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>How To Use This Toolkit | Worker's Toolkit</title>
      <meta name="description" content="Step-by-step instructions for using the Worker’s Toolkit effectively." />
    </Head>
    <Navigation />
    <main className="py-8">
      <HowToUse />
    </main>
  </div>
)

export default HowToUsePage
