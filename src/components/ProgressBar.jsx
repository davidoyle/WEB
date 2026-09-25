const ProgressBar = ({ currentStep = 1, steps = [] }) => {
  const totalSteps = steps.length || 1;
  const progressPercent = Math.min(
    100,
    Math.max(0, ((currentStep - 1) / (totalSteps - 1 || 1)) * 100)
  );

  return (
    <div className="w-full" aria-label="Onboarding progress">
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-[var(--text-secondary)]">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{steps[currentStep - 1]}</span>
      </div>
      <div
        className="relative h-2 bg-[var(--bg-tertiary)]"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-valuenow={currentStep}
      >
        <div className="h-2 bg-[var(--accent)] transition-all" style={{ width: `${progressPercent}%` }} />
      </div>
      <ol className="mt-3 flex flex-wrap gap-2" aria-label="Progress steps">
        {steps.map((step, index) => {
          const isActive = index + 1 === currentStep;
          return (
            <li
              key={step}
              className={`rounded-full border px-3 py-1 text-[0.72rem] font-medium ${isActive ? 'border-[var(--accent)] bg-blue-50 text-[var(--accent)]' : 'border-[var(--border-default)] text-[var(--text-muted)]'}`}
            >
              {index + 1}. {step}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ProgressBar;
