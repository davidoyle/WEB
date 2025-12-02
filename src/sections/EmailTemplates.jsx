import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection'
import { emailTemplates } from '../data/content'

const EmailTemplates = () => (
  <div className="section-shell" id="templates">
    <BeforeYouDoAnythingSection />
    <div className="mb-8 text-center">
      <h1 className="section-title">Email & Letter Templates</h1>
      <p className="section-lead">Plug in your facts, swap in your voice, keep the structure.</p>
    </div>
    <div className="space-y-6">
      {emailTemplates.map((template, index) => (
        <div key={index} className="card border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{template.title}</h2>
          <p className="text-sm text-gray-500 mb-3">{template.to}</p>
          <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap font-mono text-sm text-gray-800">{template.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default EmailTemplates;
