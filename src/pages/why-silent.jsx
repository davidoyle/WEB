import Head from 'next/head'
import Navigation from '../components/Navigation'
import WhySilentSection from '../sections/WhySilentSection'

const WhySilentPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Why They Go Silent | Worker's Toolkit</title>
      <meta name="description" content="Understand why WorkSafeBC and employers ignore you and how to respond." />
    </Head>
    <Navigation />
    <main className="py-8">
      <WhySilentSection />
    </main>
  </div>
)

export default WhySilentPage
