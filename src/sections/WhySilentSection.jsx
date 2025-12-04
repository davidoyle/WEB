import { whySilentPoints } from '../data/content'

const WhySilentSection = () => (
  <div className="section-shell" id="why-silent">
    <div className="mb-8 text-center">
      <h1 className="section-title">Why People Stay Silent</h1>
      <p className="section-lead">Silence is rational. It's also exactly what the system counts on.</p>
    </div>
    <div className="space-y-6">
      {whySilentPoints.map((point, index) => (
        <div key={index} className="card border-l-4 border-red-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h2>
          <p className="text-gray-700">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default WhySilentSection
