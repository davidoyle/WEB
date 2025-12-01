import { useEffect, useMemo, useState } from 'react';
import { BookOpen, ChevronDown, Copy, Link2 } from 'lucide-react';
import BeforeYouDoAnything from '../components/BeforeYouDoAnything';
import { wcatCategories } from '../data/content';

const categories = Array.isArray(wcatCategories) ? wcatCategories : [];

const TAG_FAMILY_MAP = {
  // Medical evidence alignment
  'ignored-medical': 'Medical Evidence',
  'minimized-medical': 'Medical Evidence',
  'discounted-medical': 'Medical Evidence',
  imaging: 'Medical Evidence',
  diagnosis: 'Medical Evidence',
  'no-clear-diagnosis': 'Medical Evidence',
  'internal-condition': 'Medical Evidence',
  degenerative: 'Medical Evidence',
  'pre-existing': 'Medical Evidence',
  'treatment-requests': 'Medical Evidence',
  'weight-of-evidence': 'Medical Evidence',

  // Board MA vs treating provider
  'board-medical-advisor': 'Board MA override',
  'bma-vs-treating': 'Board MA override',
  'doctor-who-never-examined': 'Board MA override',

  // Return to work and accommodation
  'premature-rtw': 'Return-to-work disputes',
  'forced-rtw': 'Return-to-work disputes',
  'suitable-work': 'Return-to-work disputes',
  accommodation: 'Return-to-work disputes',
  'employment-decision': 'Return-to-work disputes',

  // Procedural fairness and natural justice
  'procedural-fairness': 'Procedural fairness',
  'natural-justice': 'Procedural fairness',
  'appeal-rights': 'Procedural fairness',
  reconsideration: 'Procedural fairness',
  reopening: 'Procedural fairness',
  'decision-status': 'Procedural fairness',
  jurisdiction: 'Procedural fairness',
  'oral-decisions': 'Procedural fairness',
  'new-matter': 'Procedural fairness',

  // Timeliness
  'late-filing': 'Timeliness / delay',
  timelines: 'Timeliness / delay',
  'special-circumstances': 'Timeliness / delay',

  // Causation and acceptability
  acceptability: 'Causation & acceptability',
  causation: 'Causation & acceptability',
  'course-of-employment': 'Causation & acceptability',
  'environmental-risk': 'Causation & acceptability',
  presumption: 'Causation & acceptability',
  commuting: 'Causation & acceptability',
  'travelling-worker': 'Causation & acceptability',
  'parking-lot': 'Causation & acceptability',
  'good-samaritan': 'Causation & acceptability',
  'injury-date': 'Causation & acceptability',
  'cumulative-trauma': 'Causation & acceptability',
  aggravation: 'Causation & acceptability',
  'consequential-injury': 'Causation & acceptability',
  'natural-progression': 'Causation & acceptability',

  // Assessment quality
  'assessment-injury': 'Assessment quality',
  apportionment: 'Assessment quality',
  guidelines: 'Assessment quality',
  policy: 'Assessment quality',
  factors: 'Assessment quality',

  // Credibility / consistency
  bullying: 'Credibility / consistency',
  communication: 'Credibility / consistency',

  // Psych / chronic pain
  'mental-health': 'Psych / chronic pain',
  'significant-stressor': 'Psych / chronic pain',
};

const TAG_FAMILY_BUCKETS = {
  'Medical Evidence': 'Medical Evidence',
  'Board MA override': 'Medical Evidence',
  'Return-to-work disputes': 'Return to Work',
  'Procedural fairness': 'Procedural Fairness',
  'Timeliness / delay': 'Timeliness / Delay',
  'Causation & acceptability': 'Causation',
  'Assessment quality': 'Assessment Quality',
  'Credibility / consistency': 'Credibility / Consistency',
  'Psych / chronic pain': 'Psych / Chronic Pain',
};

const getCaseFamilyBuckets = (issueTags = []) => {
  const families = new Set();

  issueTags.forEach((tag) => {
    const canonical = TAG_FAMILY_MAP[tag] || 'Other';
    const parentFamily = TAG_FAMILY_BUCKETS[canonical] || canonical;
    families.add(parentFamily);
  });

  return Array.from(families);
};

const getCaseId = (caseItem, fallback) =>
  caseItem?.id ||
  caseItem?.caseNumber?.toLowerCase().replace(/[^a-z0-9]+/g, '-') ||
  fallback?.toString();

const WCATToolkit = () => {
  const createInitialExpanded = () => {
    const initial = {};
    categories.forEach((category) => {
      const firstCase = category.cases?.[0];
      const firstCaseId = getCaseId(firstCase);
      if (firstCaseId) {
        initial[firstCaseId] = true;
      }
    });
    return initial;
  };

  const [expandedCases, setExpandedCases] = useState(createInitialExpanded);
  const [tagQuery, setTagQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [query, setQuery] = useState('');
  const [copiedLinkId, setCopiedLinkId] = useState(null);
  const [copiedPhraseId, setCopiedPhraseId] = useState(null);

  const totalCases = useMemo(
    () => categories.reduce((sum, category) => sum + (category.cases?.length || 0), 0),
    [],
  );

  const toggleCase = (caseId) => {
    if (!caseId) return;
    setExpandedCases((prev) => ({
      ...prev,
      [caseId]: !prev[caseId],
    }));
  };

  const handleCopyLink = (caseId) => {
    if (!caseId || typeof window === 'undefined' || !navigator?.clipboard) return;
    const url = `${window.location.origin}${window.location.pathname}#${caseId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLinkId(caseId);
      setTimeout(() => setCopiedLinkId(null), 1500);
    });
  };

  const handleCopyPhrase = (phraseId, phrase) => {
    if (typeof navigator === 'undefined' || !navigator?.clipboard) return;
    navigator.clipboard.writeText(phrase).then(() => {
      setCopiedPhraseId(phraseId);
      setTimeout(() => setCopiedPhraseId(null), 1500);
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setExpandedCases((prev) => ({ ...prev, [hash]: true }));
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  useEffect(() => {
    // Helps ensure the rendered count matches the source data during manual verification.
    // eslint-disable-next-line no-console
    console.log('WCAT categories loaded:', categories.length, 'cases:', totalCases);
  }, [totalCases]);

  const allBodyParts = useMemo(() => {
    const parts = new Set();
    categories.forEach((cat) => {
      cat.cases?.forEach((c) => {
        if (c?.bodyPart) parts.add(String(c.bodyPart));
      });
    });
    return Array.from(parts).sort();
  }, []);

  const allIssueTags = useMemo(() => {
    const families = new Set();
    categories.forEach((cat) => {
      cat.cases?.forEach((c) => {
        getCaseFamilyBuckets(c?.issueTags).forEach((family) => families.add(family));
      });
    });
    return Array.from(families).sort();
  }, []);

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedTag = selectedTag?.trim().toLowerCase();

    return categories
      .map((category) => {
        const filteredCases = category.cases?.filter((caseItem) => {
          const caseFamilies = getCaseFamilyBuckets(caseItem.issueTags);
          const matchesTag =
            !normalizedTag || caseFamilies.some((family) => family.toLowerCase().includes(normalizedTag));
          const matchesBody = !selectedBodyPart || caseItem.bodyPart === selectedBodyPart;
          const haystack = [
            caseItem.shortLabel,
            caseItem.title,
            caseItem.whenToUse,
            caseItem.facts,
            caseItem.description,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
          return matchesTag && matchesBody && matchesQuery;
        });
        return { ...category, cases: filteredCases };
      })
      .filter((category) => category.cases?.length);
  }, [query, selectedBodyPart, selectedTag]);

  const filteredTotalCases = useMemo(
    () => filteredCategories.reduce((sum, category) => sum + (category.cases?.length || 0), 0),
    [filteredCategories],
  );

  return (
    <div className="max-w-6xl mx-auto">
      <BeforeYouDoAnything />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">WCAT Precedent Armory</h1>
        <p className="text-gray-600">Real cases where workers won. Steal their reasoning, structure, and language.</p>
        <p className="text-sm text-gray-500 mt-2">
          Showing {filteredTotalCases} of {totalCases} cases across {filteredCategories.length} categories.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 mb-8">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="flex flex-col text-sm font-semibold text-gray-700">
            Search by keywords
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cases"
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-gray-700">
            Filter by body part
            <select
              value={selectedBodyPart || ''}
              onChange={(e) => setSelectedBodyPart(e.target.value || null)}
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none"
            >
              <option value="">All body parts</option>
              {allBodyParts.map((part) => (
                <option key={part} value={part}>
                  {part}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-sm font-semibold text-gray-700">
            Filter tag families
            <input
              type="text"
              value={tagQuery}
              onChange={(e) => {
                const value = e.target.value;
                setTagQuery(value);
                setSelectedTag(value ? value : null);
              }}
              placeholder="Type to narrow (e.g., medical)"
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none"
            />
          </label>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {allIssueTags
            .filter((family) => family.toLowerCase().includes(tagQuery.trim().toLowerCase()))
            .map((family) => (
              <button
                key={family}
                type="button"
                onClick={() => {
                  setTagQuery(family);
                  setSelectedTag((prev) => (prev === family ? null : family));
                }}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  family === selectedTag
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                }`}
              >
                {family}
              </button>
            ))}
        </div>
      </div>

      <div className="space-y-8">
        {filteredCategories.map((category, index) => (
          <div key={category.title ?? index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="space-y-6">
              {category.cases?.map((caseItem, caseIndex) => {
                const caseId = getCaseId(caseItem, `${index}-${caseIndex}`);
                const isExpanded = expandedCases[caseId];
                const caseFamilies = getCaseFamilyBuckets(caseItem.issueTags);

                return (
                  <article
                    id={caseId}
                    key={caseId}
                    className="border-l-4 border-indigo-500 pl-4"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <button
                        type="button"
                        onClick={() => toggleCase(caseId)}
                        className="w-full flex items-start justify-between text-left"
                      >
                        <div className="w-full">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xl font-bold text-gray-900">
                              {caseItem.citation || caseItem.caseNumber}
                            </h3>
                            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                              {caseItem.year}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-800">{caseItem.shortLabel || caseItem.title}</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {caseItem.bodyPart && (
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200">
                                {caseItem.bodyPart}
                              </span>
                            )}
                            {caseFamilies.map((family) => (
                              <span
                                key={family}
                                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200"
                              >
                                {family}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 mt-1 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopyLink(caseId)}
                        className="flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                      >
                        <Link2 className="w-4 h-4" />
                        {copiedLinkId === caseId ? 'Copied!' : 'Copy link'}
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="space-y-4">
                        <p className="text-gray-700">{caseItem.description || caseItem.facts}</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-indigo-800 mb-2">Key Strategy Moves:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {caseItem.strategyMoves?.map((move, moveIndex) => (
                              <li key={moveIndex}>{move}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-800 mb-2">Portable Strategy for Workers:</h5>
                          <p className="text-blue-700">{caseItem.portableStrategy || caseItem.howToUse}</p>
                        </div>
                        {caseItem.phrasesToSteal?.length ? (
                          <div className="bg-emerald-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-emerald-800 mb-2">Phrases you can steal</h5>
                            <ul className="space-y-2">
                              {caseItem.phrasesToSteal.map((phrase, phraseIndex) => {
                                const phraseId = `${caseId}-${phraseIndex}`;
                                return (
                                  <li
                                    key={phraseId}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-gray-800"
                                  >
                                    <span>{phrase}</span>
                                    <button
                                      type="button"
                                      onClick={() => handleCopyPhrase(phraseId, phrase)}
                                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                                    >
                                      <Copy className="w-4 h-4" />
                                      {copiedPhraseId === phraseId ? 'Copied!' : 'Copy'}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null}
                        {caseItem.decisionLink ? (
                          <a
                            className="text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                            href={caseItem.decisionLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Read full decision
                          </a>
                        ) : null}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCATToolkit;
