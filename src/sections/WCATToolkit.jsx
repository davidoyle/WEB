import { useEffect, useMemo, useState } from 'react'
import { BookOpen, ChevronDown } from 'lucide-react'
import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection'
import { wcatCases } from '../wcat'

const deriveTagFamilies = (tags) => {
  if (!Array.isArray(tags)) return []

  const normalized = tags
    .map((tag) => (typeof tag === 'string' ? tag.trim() : String(tag ?? '').trim()))
    .filter(Boolean)

  return Array.from(new Set(normalized))
}

const getCaseId = (caseItem, fallback) =>
  caseItem?.id || caseItem?.caseNumber?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || fallback?.toString()

const groupCategories = (cases) => {
  const grouped = new Map()
  cases.forEach((caseItem) => {
    const categoryTitle = caseItem.category || 'Other'
    if (!grouped.has(categoryTitle)) grouped.set(categoryTitle, [])
    grouped.get(categoryTitle).push(caseItem)
  })
  return Array.from(grouped.entries()).map(([title, items]) => ({ title, cases: items }))
}

const WCATToolkit = () => {
  const cases = Array.isArray(wcatCases) ? wcatCases : []
  const categories = useMemo(() => groupCategories(cases), [cases])
  const [expandedCases, setExpandedCases] = useState(() =>
    categories.map((category) => (category.cases?.length ? 0 : -1)),
  )
  const [query, setQuery] = useState('')
  const [selectedBodyPart, setSelectedBodyPart] = useState(null)
  const [selectedTag, setSelectedTag] = useState(null)

  useEffect(() => {
    setExpandedCases(categories.map((category) => (category.cases?.length ? 0 : -1)))
  }, [categories])

  const totalCases = useMemo(
    () => categories.reduce((sum, category) => sum + (category.cases?.length || 0), 0),
    [categories],
  )

  const toggleCase = (categoryIndex, caseIndex) => {
    setExpandedCases((prev) =>
      prev.map((expanded, idx) => {
        if (idx !== categoryIndex) return expanded
        return expanded === caseIndex ? -1 : caseIndex
      }),
    )
  }

  useEffect(() => {
    // Helps ensure the rendered count matches the source data during manual verification.
    // eslint-disable-next-line no-console
    console.log('WCAT categories loaded:', categories.length, 'cases:', totalCases)
  }, [categories.length, totalCases])

  const allBodyParts = useMemo(() => {
    const values = new Set()
    categories.forEach((category) => {
      category.cases?.forEach((c) => {
        if (c.bodyPart) values.add(c.bodyPart)
      })
    })
    return Array.from(values).sort()
  }, [categories])

  const allIssueTags = useMemo(() => {
    const tags = new Set()
    categories.forEach((category) => {
      category.cases?.forEach((c) => deriveTagFamilies(c.issueTags).forEach((family) => tags.add(family)))
    })
    return Array.from(tags).sort()
  }, [categories])

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const normalizedTag = selectedTag?.trim().toLowerCase()

    return categories
      .map((category) => {
        const filteredCases = category.cases?.filter((caseItem) => {
          const caseFamilies = deriveTagFamilies(caseItem.issueTags)
          const matchesTag = !normalizedTag || caseFamilies.some((family) => family.toLowerCase().includes(normalizedTag))
          const matchesBody = !selectedBodyPart || caseItem.bodyPart === selectedBodyPart
          const haystack = [caseItem.shortLabel, caseItem.title, caseItem.whenToUse, caseItem.facts, caseItem.description]
            .filter(Boolean)
            .join(' ')
            .toLowerCase()
          const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery)
          return matchesTag && matchesBody && matchesQuery
        })
        return { ...category, cases: filteredCases }
      })
      .filter((category) => category.cases?.length)
  }, [categories, query, selectedBodyPart, selectedTag])

  const filteredTotalCases = useMemo(
    () => filteredCategories.reduce((sum, category) => sum + (category.cases?.length || 0), 0),
    [filteredCategories],
  )

  return (
    <div className="section-shell">
      <BeforeYouDoAnythingSection />
      <div className="mb-8 text-center">
        <h1 className="section-title">WCAT Precedent Armory</h1>
        <p className="text-gray-600">Real cases where workers won. Steal their reasoning, structure, and language.</p>
        <p className="mt-2 text-sm text-gray-500">
          Showing {filteredTotalCases} of {totalCases} cases across {filteredCategories.length} categories.
        </p>
      </div>

      <div className="filter-panel">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="filter-label">
            Search by keywords
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cases"
              className="filter-input"
            />
          </label>
          <label className="filter-label">
            Filter by body part
            <select
              value={selectedBodyPart || ''}
              onChange={(e) => setSelectedBodyPart(e.target.value || null)}
              className="filter-input"
            >
              <option value="">All body parts</option>
              {allBodyParts.map((part) => (
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
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="filter-input"
            >
              <option value="">All tags</option>
              {allIssueTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="space-y-8">
        {filteredCategories.map((category, index) => (
          <div key={category.title ?? index} className="card">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-lg bg-indigo-100 p-3">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="space-y-6">
              {category.cases?.map((caseItem, caseIndex) => {
                const isExpanded = expandedCases[index] === caseIndex
                const caseId = getCaseId(caseItem, `${index}-${caseIndex}`)

                return (
                  <div key={caseItem.caseNumber ?? caseId} className="border-l-4 border-indigo-500 pl-4" id={caseId}>
                    <button
                      type="button"
                      onClick={() => toggleCase(index, caseIndex)}
                      className="mb-3 flex w-full items-start justify-between text-left"
                    >
                      <div>
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-start">
                          <h3 className="text-xl font-bold text-gray-900">{caseItem.caseNumber}</h3>
                          <span className="text-sm text-gray-500">{caseItem.year}</span>
                        </div>
                        <h4 className="font-semibold text-gray-800">{caseItem.title || caseItem.fullLabel}</h4>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-5 w-5 text-gray-500 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="space-y-4">
                        <p className="text-gray-700">{caseItem.description || caseItem.fullLabel}</p>
                        <div className="rounded-lg bg-gray-50 p-4">
                          <h5 className="mb-2 font-semibold text-indigo-800">Key Strategy Moves:</h5>
                          <ul className="list-disc space-y-1 pl-5 text-gray-700">
                            {caseItem.strategyMoves?.map((move, moveIndex) => (
                              <li key={moveIndex}>{move}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-4">
                          <h5 className="mb-2 font-semibold text-blue-800">Portable Strategy for Workers:</h5>
                          <p className="text-blue-700">{caseItem.portableStrategy || caseItem.howToUse?.join(' ')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WCATToolkit
