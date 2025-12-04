const storageKey = 'wt-start-here-progress'

export const loadProgress = () => {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(storageKey)
    return raw ? JSON.parse(raw) : null
  } catch (err) {
    return null
  }
}

export const saveProgress = (progress) => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(progress))
  } catch (err) {
    /* ignore write errors */
  }
}

export const clearProgress = () => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(storageKey)
  } catch (err) {
    /* noop */
  }
}
