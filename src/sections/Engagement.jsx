import { engagementPoints } from '../data/content';

const Engagement = () => (
  <div className="section-shell" id="engagement">
    <div className="mb-8 text-center">
      <h1 className="section-title">What Happens When You Engage</h1>
      <p className="section-lead">Not engaging is a strategy. But it has costs.</p>
    </div>
    <div className="space-y-6">
      {engagementPoints.map((point, index) => (
        <div key={index} className="card border-l-4 border-[var(--border-accent)]">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">{point.title}</h2>
          <p className="text-[var(--text-secondary)]">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Engagement;
