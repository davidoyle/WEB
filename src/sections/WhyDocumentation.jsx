import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection'
import { documentationPowerPoints } from '../data/content'

const WhyDocumentation = () => (
  <div className="section-shell" id="why-documentation">
    <BeforeYouDoAnythingSection />
    <div className="mb-8 text-center">
      <h1 className="section-title">Why Documentation is Power</h1>
      <p className="section-lead">It's not busywork. It's leverage.</p>
    </div>
    <div className="space-y-6">
      {documentationPowerPoints.map((point, index) => (
        <div key={index} className="card border-l-4 border-yellow-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h2>
          <p className="text-gray-700">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhyDocumentation;
