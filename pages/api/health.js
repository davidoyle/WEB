import { logRequest, logResponse } from '@/lib/apiLogger'

export const runtime = 'nodejs'

export default function handler(req, res) {
  const requestId = logRequest(req)

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    logResponse(requestId, 405, { error: 'Method not allowed' })
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  logResponse(requestId, 200, { ok: true })
  return res.status(200).json({ ok: true })
}
