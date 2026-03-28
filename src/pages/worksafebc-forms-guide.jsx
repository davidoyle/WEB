import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WorksafeFormsGuideSection from '../sections/WorksafeFormsGuideSection';

const WorksafeFormsGuidePage = () => (
  <div className="min-h-screen bg-background">
    <Head>
      <title>WorkSafeBC Forms Guide | Workers Toolkit</title>
      <meta
        name="description"
        content="Exhaustive guide to WorkSafeBC forms, denial traps, and practical filing tips for workers in BC."
      />
    </Head>
    <Navigation />
    <main className="py-8">
      <WorksafeFormsGuideSection />
    </main>
    <Footer />
  </div>
);

export default WorksafeFormsGuidePage;
