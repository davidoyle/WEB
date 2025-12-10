import Head from 'next/head'
import Navigation from '../components/Navigation'

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>About Worker&apos;s Toolkit</title>
      <meta
        name="description"
        content="Worker-led toolkit focused on WorkSafeBC, built to give injured workers structure, evidence, and language."
      />
    </Head>
    <Navigation />
    <main className="section-shell py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-gray-600">About Worker&apos;s Toolkit</p>
        <h1 className="text-3xl font-bold text-gray-900">Who we are and why this exists</h1>
        <p className="max-w-3xl text-lg text-gray-700">
          Worker&apos;s Toolkit is a worker-led project focused on WorkSafeBC. Everything here is built to give injured workers the
          structure, evidence, and language to navigate a system that too often ignores them.
        </p>
      </header>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">What Worker&apos;s Toolkit is</h2>
        <p className="text-gray-700">
          A practical set of steps, scripts, and evidence tools so workers can document what&apos;s happening, challenge bad
          decisions, and stay organized when WorkSafeBC dodges responsibility.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">Who&apos;s behind it</h2>
        <p className="text-gray-700">
          Worker&apos;s Toolkit was started in 2025 by an injured worker in British Columbia and is being built with a small team of
          workers and allies. Direction comes from workers and advisors who have been through the system and want better tools to
          push back.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">How it&apos;s funded</h2>
        <p className="text-gray-700">
          This is a grassroots project in its early stages. It is not funded by WorkSafeBC, employers, or government.
        </p>
      </section>
    </main>
  </div>
)

export default AboutPage
