const ProgressBar = ({ currentStep = 1, steps = [] }) => {
  const totalSteps = steps.length || 1
  const progressPercent = Math.min(100, Math.max(0, ((currentStep - 1) / (totalSteps - 1 || 1)) * 100))

  return (
    <div className="w-full" aria-label="Onboarding progress">
      <div className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-700">
        <span>Step {currentStep} of {totalSteps}</span>
        <span className="text-gray-500">{steps[currentStep - 1]}</span>
      </div>
      <div className="relative h-3 rounded-full bg-gray-200" role="progressbar" aria-valuemin={1} aria-valuemax={totalSteps} aria-valuenow={currentStep}>
        <div
          className="h-3 rounded-full bg-gradient-to-r from-red-500 to-amber-500 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <ol className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600" aria-label="Progress steps">
        {steps.map((step, index) => {
          const isActive = index + 1 === currentStep
          return (
            <li
              key={step}
              className={`rounded-full px-3 py-1 ${isActive ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {index + 1}. {step}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default ProgressBar
