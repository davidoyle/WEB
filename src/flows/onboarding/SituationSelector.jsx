import { useEffect, useMemo, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import { useTone } from '../../context/ToneContext'

const SituationSelector = ({ situations, selectedId, onSelect }) => {
  const { tone } = useTone()
  const buttonRefs = useRef([])
  const [keyboardIndex, setKeyboardIndex] = useState(0)

  const selectedIndex = useMemo(() => situations.findIndex((s) => s.id === selectedId), [situations, selectedId])

  useEffect(() => {
    if (selectedIndex >= 0) {
      setKeyboardIndex(selectedIndex)
    }
  }, [selectedIndex])

  const handleKeyDown = (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    if (event.key === 'Home') {
      setKeyboardIndex(0)
      onSelect(situations[0].id)
      buttonRefs.current[0]?.focus()
      return
    }
    if (event.key === 'End') {
      const last = situations.length - 1
      setKeyboardIndex(last)
      onSelect(situations[last].id)
      buttonRefs.current[last]?.focus()
      return
    }
    setKeyboardIndex((prev) => {
      const nextIndex = event.key === 'ArrowDown' ? Math.min(situations.length - 1, prev + 1) : Math.max(0, prev - 1)
      onSelect(situations[nextIndex].id)
      buttonRefs.current[nextIndex]?.focus()
      return nextIndex
    })
  }

  return (
    <div className="space-y-4">
      {situations.map((situation, index) => {
        const isSelected = situation.id === selectedId
        const description = tone === 'gentle' ? situation.gentleDescription || situation.description : situation.description
        const tabIndex = isSelected || (!selectedId && index === 0) ? 0 : -1
        return (
          <button
            key={situation.id}
            type="button"
            onKeyDown={handleKeyDown}
            onClick={() => onSelect(situation.id)}
            className={`flex w-full flex-col rounded-xl border bg-white p-4 text-left shadow-sm transition focus:outline-none focus:ring-2 focus:ring-red-500 ${isSelected ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-200 hover:border-gray-300'}`}
            aria-pressed={isSelected}
            aria-label={`Situation: ${situation.title}`}
            tabIndex={tabIndex}
            ref={(el) => {
              buttonRefs.current[index] = el
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${isSelected ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{situation.title}</p>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              </div>
              <span className={`ml-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${isSelected ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {isSelected ? 'Selected' : 'Pick this'}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs" aria-hidden="true">
              {situation.indicators.slice(0, 3).map((indicator) => (
                <span key={indicator} className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                  {indicator}
                </span>
              ))}
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default SituationSelector
