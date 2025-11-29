import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { emailTemplates } from '../data/content';

const EmailTemplates = () => (
  <div className="max-w-4xl mx-auto">
    <BeforeYouDoAnything />
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Email & Letter Templates</h1>
      <p className="text-gray-600">Plug in your facts, swap in your voice, keep the structure.</p>
    </div>
    <div className="space-y-6">
      {emailTemplates.map((template, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{template.title}</h2>
          <p className="text-sm text-gray-500 mb-3">{template.to}</p>
          <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap font-mono text-sm text-gray-800">{template.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default EmailTemplates;
