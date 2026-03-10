import Head from 'next/head';
import Navigation from '../components/Navigation';
import WorksafeFormsGuideSection from '../sections/WorksafeFormsGuideSection';

const WorksafeFormsGuidePage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>WorkSafeBC Forms Guide | Worker&apos;s Toolkit</title>
      <meta
        name="description"
        content="Exhaustive guide to WorkSafeBC forms, denial traps, and practical filing tips for workers in BC."
      />
    </Head>
    <Navigation />
    <main className="py-8">
      <WorksafeFormsGuideSection />
    </main>
  </div>
);

export default WorksafeFormsGuidePage;
