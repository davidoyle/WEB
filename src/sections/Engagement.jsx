import { engagementPoints } from '../data/content'

const Engagement = () => (
  <div className="section-shell" id="engagement">
    <div className="mb-8 text-center">
      <h1 className="section-title">What Happens When You Engage</h1>
      <p className="section-lead">Not engaging is a strategy. But it has costs.</p>
    </div>
    <div className="space-y-6">
      {engagementPoints.map((point, index) => (
        <div key={index} className="card border-l-4 border-blue-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h2>
          <p className="text-gray-700">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Engagement
