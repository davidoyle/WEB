import { CheckCircle, FileText } from 'lucide-react'
import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection'
import { documentationBuckets } from '../data/content'

const DocumentationSection = () => (
  <div className="section-shell" id="documentation">
    <BeforeYouDoAnythingSection />
    <div className="mb-8 text-center">
      <h1 className="section-title">Evidence & Documentation Center</h1>
      <p className="section-lead">"If it isn't documented, they'll swear it never happened."</p>
    </div>
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">You don't need fancy software to start. You need:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>A folder</li>
          <li>A notebook (or notes app)</li>
          <li>A simple system you actually use</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {documentationBuckets.map((bucket, index) => (
          <div key={index} className="card">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{bucket.title}</h3>
            </div>
            <ul className="space-y-2">
              {bucket.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Start: Do These 3 Things Today</h3>
        <ol className="list-decimal pl-5 space-y-2 text-blue-800">
          <li>Make a "Claim" folder (on your computer or in a physical box). Put every WorkSafeBC letter and medical note you can find into it.</li>
          <li>Start a simple timeline. Write down 5–10 key dates: Injury, First doctor visit, First acceptance/denial letter, Any big changes (benefits stopped, employer issues).</li>
          <li>Start a call log with your next phone call. Even if it's just a note in your phone: Date, Who, What you asked, What they said.</li>
        </ol>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Call Log Template</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Who</th>
                  <th className="p-2 text-left">What I asked</th>
                  <th className="p-2 text-left">What they said</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">Oct 7, 2025</td>
                  <td className="p-2">[Case Manager Name]</td>
                  <td className="p-2">Why wage loss was stopped while my GP still has me off work</td>
                  <td className="p-2">"We rely on our internal medical advisors; if you disagree you can request Review."</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-4">File Naming Convention</h3>
          <div className="space-y-2">
            <div className="bg-green-50 p-3 rounded">
              <code className="text-green-800">2025-05-12_GP_Report_Dr-Smith.pdf</code>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <code className="text-green-800">2025-06-30_WorkSafe_Decision_Stop-Wage-Loss.pdf</code>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <code className="text-green-800">2025-07-15_Physio_Report_Clinic-Name.pdf</code>
            </div>
            <p className="text-gray-600 mt-3">
              Basic idea: <code className="bg-gray-100 px-2 py-1 rounded">YYYY-MM-DD + Source + ShortDescription</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DocumentationSection
