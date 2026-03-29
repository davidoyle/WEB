import { documentationPowerPoints } from '../data/content';

const WhyDocumentation = () => (
  <div className="section-shell" id="why-documentation">
    <div className="mb-8 text-center">
      <h1 className="section-title">Why Documentation is Power</h1>
      <p className="section-lead">It's not busywork. It's leverage.</p>
    </div>
    <div className="space-y-6">
      {documentationPowerPoints.map((point, index) => (
        <div key={index} className="card border-l-4 border-[var(--border-accent)]">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">{point.title}</h2>
          <p className="text-[var(--text-secondary)]">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhyDocumentation;
