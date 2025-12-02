import Head from 'next/head'
import Navigation from '../components/Navigation'
import DocumentationSection from '../sections/Documentation'

const DocumentationPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Evidence & Documentation | Worker's Toolkit</title>
      <meta name="description" content="Centralize the records and evidence you need for WorkSafeBC fights." />
    </Head>
    <Navigation />
    <main className="py-8">
      <DocumentationSection />
    </main>
  </div>
)

export default DocumentationPage
