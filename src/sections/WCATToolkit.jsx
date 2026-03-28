import { useMemo, useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection';
import { wcatCases } from '../wcat';
import { getSupabaseClient } from '../lib/supabaseClient';

const deriveTagFamilies = tags => {
  if (!Array.isArray(tags)) return [];

  const normalized = tags
    .map(tag => (typeof tag === 'string' ? tag.trim() : String(tag ?? '').trim()))
    .filter(Boolean);

  return Array.from(new Set(normalized));
};

const getCaseId = (caseItem, fallback) =>
  caseItem?.id ||
  caseItem?.caseNumber?.toLowerCase().replace(/[^a-z0-9]+/g, '-') ||
  fallback?.toString();

const groupCategories = cases => {
  const grouped = new Map();
  cases.forEach(caseItem => {
    const categoryTitle = caseItem.category || 'Other';
    if (!grouped.has(categoryTitle)) grouped.set(categoryTitle, []);
    grouped.get(categoryTitle).push(caseItem);
  });
  return Array.from(grouped.entries()).map(([title, items]) => ({ title, cases: items }));
};

const WCATToolkit = () => {
  const categories = useMemo(() => groupCategories(Array.isArray(wcatCases) ? wcatCases : []), []);
  const [expandedCases, setExpandedCases] = useState(() =>
    categories.map(category => (category.cases?.length ? 0 : -1))
  );
  const [query, setQuery] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const totalCases = useMemo(
    () => categories.reduce((sum, category) => sum + (category.cases?.length || 0), 0),
    [categories]
  );

  const toggleCase = (categoryIndex, caseIndex) => {
    const selectedCase = categories?.[categoryIndex]?.cases?.[caseIndex];
    if (selectedCase) {
      try {
        const supabase = getSupabaseClient();
        supabase
          .from('tool_events')
          .insert({
            event_type: 'wcat_cited',
            metadata: {
              wcatId: selectedCase.id || null,
              caseNumber: selectedCase.caseNumber || selectedCase.citation || null,
            },
          })
          .then(() => {})
          .catch(() => {});
      } catch {}
    }

    setExpandedCases(prev =>
      prev.map((expanded, idx) => {
        if (idx !== categoryIndex) return expanded;
        return expanded === caseIndex ? -1 : caseIndex;
      })
    );
  };

  const allBodyParts = useMemo(() => {
    const values = new Set();
    categories.forEach(category => {
      category.cases?.forEach(c => {
        if (c.bodyPart) values.add(c.bodyPart);
      });
    });
    return Array.from(values).sort();
  }, [categories]);

  const allIssueTags = useMemo(() => {
    const tags = new Set();
    categories.forEach(category => {
      category.cases?.forEach(c =>
        deriveTagFamilies(c.issueTags).forEach(family => tags.add(family))
      );
    });
    return Array.from(tags).sort();
  }, [categories]);

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedTag = selectedTag?.trim().toLowerCase();

    return categories
      .map(category => {
        const filteredCases = category.cases?.filter(caseItem => {
          const caseFamilies = deriveTagFamilies(caseItem.issueTags);
          const matchesTag =
            !normalizedTag ||
            caseFamilies.some(family => family.toLowerCase().includes(normalizedTag));
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
      .filter(category => category.cases?.length);
  }, [categories, query, selectedBodyPart, selectedTag]);

  const filteredTotalCases = useMemo(
    () => filteredCategories.reduce((sum, category) => sum + (category.cases?.length || 0), 0),
    [filteredCategories]
  );

  return (
    <div className="section-shell">
      <BeforeYouDoAnythingSection />
      <div className="mb-8">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
          WCAT precedent archive
        </p>
        <h1 id="wcat-title" className="section-title mt-2">
          WCAT Precedent Armory
        </h1>
        <p className="body-text italic">
          “These are real decisions made by real adjudicators. They are binding precedent.
          WorkSafeBC knows them. Now you do too.”
        </p>
        <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-wider text-[var(--text-muted)]">
          Showing {filteredTotalCases} of {totalCases} cases across {filteredCategories.length}{' '}
          categories.
        </p>
      </div>

      <div id="wcat-filters" className="filter-panel">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="filter-label">
            Search by keywords
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by keyword, injury type, or outcome..."
              className="filter-input"
            />
          </label>
          <label className="filter-label">
            Filter by body part
            <select
              value={selectedBodyPart || ''}
              onChange={e => setSelectedBodyPart(e.target.value || null)}
              className="filter-input"
            >
              <option value="">All body parts</option>
              {allBodyParts.map(part => (
                <option key={part} value={part}>
                  {part}
                </option>
              ))}
            </select>
          </label>
          <label className="filter-label">
            Filter by tag
            <select
              value={selectedTag || ''}
              onChange={e => setSelectedTag(e.target.value || null)}
              className="filter-input"
            >
              <option value="">All tags</option>
              {allIssueTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div id="wcat-categories" className="space-y-8">
        {filteredCategories.map((category, index) => (
          <div key={category.title ?? index} className="card">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-lg bg-indigo-100 p-3">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
            </div>
            <div className="space-y-6">
              {category.cases?.map((caseItem, caseIndex) => {
                const isExpanded = expandedCases[index] === caseIndex;
                const caseId = getCaseId(caseItem, `${index}-${caseIndex}`);

                return (
                    <div key={caseItem.caseNumber ?? caseId} className="border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-4" id={caseId}>
                    <button
                      type="button"
                      onClick={() => toggleCase(index, caseIndex)}
                      className="mb-3 flex w-full items-start justify-between text-left"
                    >
                      <div>
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-start">
                          <h3 className="text-xl font-bold text-foreground">{caseItem.caseNumber}</h3>
                          <span className="text-sm text-foreground/70">{caseItem.year}</span>
                        </div>
                        <h4 className="font-semibold text-foreground/90">
                          {caseItem.title || caseItem.fullLabel}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-5 w-5 text-foreground/70 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="space-y-4">
                        <p className="text-foreground/85">
                          {caseItem.description || caseItem.fullLabel}
                        </p>
                        <div className="rounded-lg bg-white/5 p-4">
                          <h5 className="mb-2 font-semibold text-indigo-200">
                            Key Strategy Moves:
                          </h5>
                          <ul className="list-disc space-y-1 pl-5 text-foreground/85">
                            {caseItem.strategyMoves?.map((move, moveIndex) => (
                              <li key={moveIndex}>{move}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-lg bg-blue-500/10 p-4">
                          <h5 className="mb-2 font-semibold text-blue-200">
                            Portable Strategy for Workers:
                          </h5>
                          <p className="text-blue-100">
                            {caseItem.portableStrategy || caseItem.howToUse?.join(' ')}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
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
