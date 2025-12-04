import { Sparkles } from 'lucide-react'
import { useTone } from '../context/ToneContext'

const ToneToggle = () => {
  const { tone, toggleTone } = useTone()

  const label = tone === 'gentle' ? 'Gentle mode on' : 'Advocacy voice'

  return (
    <button
      type="button"
      onClick={toggleTone}
      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      aria-pressed={tone === 'gentle'}
      aria-label={`${label} toggle`}
    >
      <Sparkles className={`mr-2 h-4 w-4 transition-transform ${tone === 'gentle' ? 'rotate-12 text-amber-600' : 'text-red-600'}`} aria-hidden="true" />
      {tone === 'gentle' ? 'Gentle mode' : 'Strong mode'}
    </button>
  )
}

export default ToneToggle
