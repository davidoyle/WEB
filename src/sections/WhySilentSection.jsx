import { whySilentPoints } from '../data/content'

const WhySilentSection = () => (
  <div className="section-shell" id="why-silent">
    <div className="mb-8 text-center">
      <h1 className="section-title">The Cost of Silence</h1>
      <p className="section-lead">Speaking up isn&rsquo;t a rant. It&rsquo;s leverage the system can&rsquo;t control.</p>
    </div>
    <div className="space-y-6">
      {whySilentPoints.map((point, index) => (
        <div key={index} className="card border-l-4 border-red-500">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h2>
          <div className="space-y-3 text-gray-700">
            {point.sections ? (
              point.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-2">
                  {section.heading ? (
                    <p className="font-semibold text-gray-900">{section.heading}</p>
                  ) : null}
                  {section.note ? (
                    <p className="text-sm text-gray-600">{section.note}</p>
                  ) : null}
                  {section.type === 'list' ? (
                    <ul className="list-disc space-y-1 pl-5">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.type === 'text' ? <p>{section.content}</p> : null}
                </div>
              ))
            ) : (
              <p>{point.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default WhySilentSection
