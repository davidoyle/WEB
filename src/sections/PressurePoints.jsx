import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { pressurePoints } from '../data/content';

const PressurePoints = () => (
  <div className="max-w-4xl mx-auto">
    <BeforeYouDoAnything />
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Tactical Strategy: Pressure Points</h1>
      <p className="text-gray-600">Pick the pattern that matches what's happening to you and hit back with their own rules.</p>
    </div>
    <div className="space-y-6">
      {pressurePoints.map((point, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h2>
          <p className="text-gray-700 mb-4">{point.description}</p>
          {point.whatYoureEntitled && (
            <div className="bg-indigo-50 p-4 rounded-lg mb-3">
              <h3 className="font-semibold text-indigo-800 mb-2">You're entitled to:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {point.whatYoureEntitled.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Phrases to use:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {point.phrases.map((phrase, i) => (
                <li key={i} className="bg-white p-3 rounded border">{phrase}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PressurePoints;
