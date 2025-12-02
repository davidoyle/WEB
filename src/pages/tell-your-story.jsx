import Head from 'next/head'
import Navigation from '../components/Navigation'
import TellYourStory from '../sections/TellYourStory'

const TellYourStoryPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Tell Your Story</title>
      <meta name="description" content="Securely share your WorkSafeBC experience to help build better tools for workers." />
    </Head>
    <Navigation />
    <main className="section-shell py-8">
      <TellYourStory />
    </main>
  </div>
)

export default TellYourStoryPage
