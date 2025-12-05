import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ToneContext = createContext({
  tone: 'gentle',
  setTone: () => {},
  toggleTone: () => {},
})

const storageKey = 'wt-tone'

export const ToneProvider = ({ children }) => {
  const [tone, setTone] = useState('gentle')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(storageKey)
    if (stored === 'gentle' || stored === 'strong') {
      setTone(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(storageKey, tone)
  }, [tone])

  const toggleTone = () => setTone((prev) => (prev === 'gentle' ? 'strong' : 'gentle'))

  const value = useMemo(() => ({ tone, setTone, toggleTone }), [tone])

  return <ToneContext.Provider value={value}>{children}</ToneContext.Provider>
}

export const useTone = () => useContext(ToneContext)
