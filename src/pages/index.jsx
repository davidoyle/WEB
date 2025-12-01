import Head from 'next/head'
import Navigation from '../components/Navigation'
import LandingSection from '../sections/Landing'
import HomeSection from '../sections/HomeSection'
import First30MinutesSection from '../sections/First30MinutesSection'
import DocumentationSection from '../sections/Documentation'
import PressurePoints from '../sections/PressurePoints'
import EmailTemplates from '../sections/EmailTemplates'
import WhyDocumentation from '../sections/WhyDocumentation'
import WhySilentSection from '../sections/WhySilentSection'
import Engagement from '../sections/Engagement'
import HowToUse from '../sections/HowToUse'

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
        <HomeSection />
        <First30MinutesSection />
        <DocumentationSection />
        <PressurePoints />
        <EmailTemplates />
        <WhyDocumentation />
        <WhySilentSection />
        <Engagement />
        <HowToUse />
      </main>
    </>
  )
}
