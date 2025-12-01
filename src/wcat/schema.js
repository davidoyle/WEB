export const wcatCaseSchema = {
  id: '',
  shortLabel: '',
  fullLabel: '',
  keyPoints: [],
  facts: [],
  howToUse: [],
  citation: '',
  category: '',
}

export function validateCase(caseObj) {
  const required = Object.keys(wcatCaseSchema)
  const missing = required.filter((key) => !(key in caseObj))

  if (missing.length > 0) {
    console.warn('WCAT case missing fields:', missing, caseObj)
  }
}
