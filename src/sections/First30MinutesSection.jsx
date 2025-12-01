import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection'
import { first30MinutesSteps } from '../data/content'

const First30MinutesSection = () => (
  <div className="section-shell" id="first-30">
    <BeforeYouDoAnythingSection />
    <div className="mb-8 text-center">
      <h1 className="section-title">The First 30 Minutes After WorkSafeBC Bullshit</h1>
      <p className="section-lead">You just opened a letter or portal message and your stomach dropped. Don't let this moment disappear.</p>
    </div>
    <div className="space-y-6">
      {first30MinutesSteps.map((step, index) => (
        <div key={index} className="card border-l-4 border-blue-500">
          <div className="flex items-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
              <span className="text-lg font-bold text-blue-800">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700 mb-3">{step.description}</p>
              {step.donts && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                  <p className="font-semibold text-red-800">Do not:</p>
                  <ul className="list-disc pl-5 text-red-700 space-y-1">
                    {step.donts.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {step.actions && (
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                  {step.actions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              )}
              {step.template && (
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-800 whitespace-pre-line">{step.template}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default First30MinutesSection
