import Head from 'next/head'
import Navigation from '../components/Navigation'
import EmailTemplates from '../sections/EmailTemplates'

const TemplatesPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Email & Letter Templates | Worker's Toolkit</title>
      <meta name="description" content="Copy-ready templates to challenge WorkSafeBC decisions and non-response." />
    </Head>
    <Navigation />
    <main className="py-8">
      <EmailTemplates />
    </main>
  </div>
)

export default TemplatesPage
