import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection';
import { first30MinutesSteps } from '../data/content';

const First30MinutesSection = () => (
  <div className="section-shell" id="first-30">
    <BeforeYouDoAnythingSection />
    <div className="mb-8 text-center">
      <h1 className="section-title">The First 30 Minutes After WorkSafeBC Bullshit</h1>
      <p className="section-lead">
        You just opened a letter or portal message and your stomach dropped. Don't let this moment
        disappear.
      </p>
    </div>
    <div className="space-y-6">
      {first30MinutesSteps.map((step, index) => (
        <div key={index} className="card border-l-4 border-[var(--border-accent)]">
          <div className="flex items-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--bg-tertiary)]">
              <span className="text-lg font-bold text-[var(--accent)]">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{step.title}</h3>
              <p className="text-[var(--text-secondary)] mb-3">{step.description}</p>
              {step.donts && (
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-[2px] p-3 mb-3">
                  <p className="font-semibold text-[var(--accent-urgent)]">Do not:</p>
                  <ul className="list-disc pl-5 text-[var(--accent-urgent)] space-y-1">
                    {step.donts.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {step.actions && (
                <ul className="list-disc pl-5 text-[var(--text-secondary)] space-y-1 mb-3">
                  {step.actions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              )}
              {step.template && (
                <div className="bg-[var(--bg-secondary)] rounded-[2px] p-3 font-mono text-sm text-[var(--text-secondary)] whitespace-pre-line">
                  {step.template}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default First30MinutesSection;
