import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import LandingSection from '../sections/Landing'

export default function HomePage() {
  const router = useRouter()

  const handleStart = () => {
    router.push('/start-here')
  }

  const handleNavigate = (target) => {
    if (target === 'tellYourStory') {
      router.push('/tell-your-story')
    }
  }

  return (
    <>
      <Head>
        <title>Worker&apos;s Toolkit</title>
        <meta
          name="description"
          content="Rapid response toolkit for workers handling urgent situations."
        />
      </Head>
      <Navigation />
      <main className="space-y-16 pb-16">
        <LandingSection onStart={handleStart} onNavigate={handleNavigate} />
      </main>
    </>
  )
}
