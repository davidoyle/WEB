import Head from 'next/head'
import Navigation from '../components/Navigation'
import PressurePoints from '../sections/PressurePoints'

const PressurePointsPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Tactical Pressure Points | Worker's Toolkit</title>
      <meta name="description" content="Targeted questions and leverage to push back on WorkSafeBC." />
    </Head>
    <Navigation />
    <main className="py-8">
      <PressurePoints />
    </main>
  </div>
)

export default PressurePointsPage
