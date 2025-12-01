import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { wcatCategories } from '../data/content';

const PrecedentCard = ({ caseItem, isDefaultOpen }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className="border-l-4 border-indigo-500 pl-4">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="w-full text-left cursor-pointer"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{caseItem.caseNumber}</h3>
          {caseItem.year && <span className="text-sm text-gray-500 mt-1 md:mt-0">{caseItem.year}</span>}
        </div>
        <h4 className="font-semibold text-gray-800 mb-2">{caseItem.title}</h4>
      </button>
      {isOpen && (
        <div className="space-y-4 pb-6">
          {caseItem.description && <p className="text-gray-700 mb-4">{caseItem.description}</p>}

          {caseItem.strategyMoves && caseItem.strategyMoves.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-800 mb-2">Key Strategy Moves:</h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {caseItem.strategyMoves.map((move, moveIndex) => (
                  <li key={moveIndex}>{move}</li>
                ))}
              </ul>
            </div>
          )}

          {caseItem.portableStrategy && (
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h5 className="font-semibold text-blue-800 mb-2">Portable Strategy for Workers:</h5>
              <p className="text-blue-700">{caseItem.portableStrategy}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const WCATToolkit = () => (
  <div className="max-w-6xl mx-auto">
    <BeforeYouDoAnything />
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">WCAT Precedent Armory</h1>
      <p className="text-gray-600">Real cases where workers won. Steal their reasoning, structure, and language.</p>
    </div>
    <div className="space-y-8">
      {wcatCategories.map((category, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
          </div>
          <div className="space-y-6">
            {category.cases.map((caseItem, caseIndex) => (
              <PrecedentCard key={caseIndex} caseItem={caseItem} isDefaultOpen={caseIndex === 0} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WCATToolkit;
