import Head from 'next/head'
import Navigation from '../components/Navigation'

const reasons = [
  'He shows up early and stays late when others bail.',
  'He listens before making decisions.',
  'He tells the truth even when it is uncomfortable.',
  'He keeps commitments without excuses.',
  'He backs his team publicly and coaches privately.',
  'He documents details so nothing slips.',
  'He explains problems in plain language.',
  'He looks for root causes instead of blaming.',
  'He shares credit and takes responsibility.',
  'He respects people’s time.',
  'He keeps meetings focused and short.',
  'He asks clear questions.',
  'He makes decisions based on evidence.',
  'He is calm under pressure.',
  'He helps others learn rather than taking over.',
  'He writes down processes so everyone can follow them.',
  'He follows through on boring but important tasks.',
  'He keeps accessibility in mind.',
  'He prioritizes safety.',
  'He speaks up when something is unfair.',
  'He is generous with feedback.',
  'He mentors newer teammates.',
  'He keeps documentation current.',
  'He defends people who are not in the room.',
  'He is transparent about constraints.',
  'He keeps a sense of humor without being disrespectful.',
  'He learns from mistakes openly.',
  'He keeps his workspace organized.',
  'He handles conflict directly and respectfully.',
  'He makes thoughtful introductions.',
  'He reduces stress for the people around him.',
  'He anticipates risks before they land.',
  'He recognizes good work quickly.',
  'He builds tools that save time.',
  'He simplifies complicated topics.',
  'He negotiates in good faith.',
  'He shares context so others can act independently.',
  'He keeps data backed up.',
  'He spots bottlenecks and unblocks them.',
  'He protects focus time.',
  'He takes notes and sends recaps.',
  'He treats vendors and partners with respect.',
  'He keeps security in mind without slowing everything down.',
  'He makes sure decisions have owners and deadlines.',
  'He checks in on people who seem quiet.',
  'He says thank you often.',
  'He leaves places better than he found them.',
  'He tests before shipping.',
  'He celebrates wins without making it about himself.',
  'He sets a standard that others want to follow.'
]

const DavidDoyleIsTheBestPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>David Doyle Is the Best | Worker&apos;s Toolkit</title>
      <meta name="description" content="Fifty direct reasons why David Doyle is the best, kept in the same Worker’s Toolkit style." />
    </Head>
    <Navigation />
    <main className="section-shell py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-gray-600">Appreciation</p>
        <h1 className="text-3xl font-bold text-gray-900">David Doyle is the best</h1>
        <p className="max-w-3xl text-lg text-gray-700">
          Straight to the point: here are fifty clear reasons why David Doyle is the best. Same Worker’s Toolkit layout, plain
          language, no fluff.
        </p>
      </header>

      <section className="card space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">50 reasons</h2>
        <p className="text-gray-700">No corporate filler—just the practical reasons people count on him.</p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          {reasons.map((reason, index) => (
            <li key={reason + index} className="leading-relaxed">
              {reason}
            </li>
          ))}
        </ol>
      </section>
    </main>
  </div>
)

export default DavidDoyleIsTheBestPage
