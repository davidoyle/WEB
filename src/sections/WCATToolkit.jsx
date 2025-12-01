import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { wcatCategories } from '../data/content';

const categories = Array.isArray(wcatCategories) ? wcatCategories : [];

const CaseCard = ({ wcatCase, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const headerLabel = wcatCase.shortLabel || wcatCase.caseNumber || wcatCase.title;
  const headerCitation = wcatCase.citation || wcatCase.year;
  const summary = wcatCase.summary || wcatCase.description;
  const panelCare = wcatCase.panelCare || wcatCase.strategyMoves;
  const useItWhen = wcatCase.useItWhen || wcatCase.portableStrategy;

  return (
    <article className="border border-gray-200 rounded-lg bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div>
          <h3 className="font-semibold text-gray-900">{headerLabel}</h3>
          {headerCitation && <p className="text-xs text-gray-500 mt-0.5">{headerCitation}</p>}
        </div>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4">
          {summary && <p className="text-gray-700 mb-3">{summary}</p>}

          {panelCare && panelCare.length > 0 && (
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-800 mb-1">What the panel cared about:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {panelCare.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {useItWhen && (
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Use this when: </span>
              {useItWhen}
            </p>
          )}
        </div>
      )}
    </article>
  );
};

const WCATToolkit = () => {
  const totalCases = useMemo(
    () => categories.reduce((sum, category) => sum + (category.cases?.length || 0), 0),
    [],
  );

  useEffect(() => {
    // Helps ensure the rendered count matches the source data during manual verification.
    // eslint-disable-next-line no-console
    console.log('WCAT categories loaded:', categories.length, 'cases:', totalCases);
  }, [totalCases]);

  return (
    <div className="max-w-6xl mx-auto">
      <BeforeYouDoAnything />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">WCAT Precedent Armory</h1>
        <p className="text-gray-600">Real cases where workers won. Steal their reasoning, structure, and language.</p>
        <p className="text-sm text-gray-500 mt-2">
          Showing {categories.length} categories with {totalCases} precedent examples pulled directly from the data library.
        </p>
      </div>
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={category.title ?? index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="space-y-3">
              {category.cases?.map((caseItem, caseIndex) => (
                <CaseCard
                  key={caseItem.caseNumber ?? caseIndex}
                  wcatCase={caseItem}
                  defaultOpen={caseIndex === 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCATToolkit;
