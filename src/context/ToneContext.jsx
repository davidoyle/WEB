"use client"

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ToneContext = createContext({
  tone: 'strong',
  setTone: () => {},
  toggleTone: () => {},
})

const storageKey = 'wt-tone'

export const ToneProvider = ({ children }) => {
  const [tone, setTone] = useState('strong')

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(storageKey, 'strong')
  }, [])

  const toggleTone = () => setTone('strong')

  const value = useMemo(() => ({ tone, setTone, toggleTone }), [tone])

  return <ToneContext.Provider value={value}>{children}</ToneContext.Provider>
}

export const useTone = () => useContext(ToneContext)
