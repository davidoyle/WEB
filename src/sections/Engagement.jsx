import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { engagementPoints } from '../data/content';

const Engagement = () => (
  <div className="max-w-4xl mx-auto">
    <BeforeYouDoAnything />
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">What Happens When You Engage</h1>
      <p className="text-gray-600">Not engaging is a strategy. But it has costs.</p>
    </div>
    <div className="space-y-6">
      {engagementPoints.map((point, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h2>
          <p className="text-gray-700">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Engagement;
