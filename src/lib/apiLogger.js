function buildRequestId(headers) {
  return headers['x-request-id'] || `${Date.now()}-${Math.floor(Math.random() * 10000)}`
}

export function logRequest(req) {
  const requestId = buildRequestId(req.headers || {})
  const { method, url } = req

  // eslint-disable-next-line no-console
  console.log(
    JSON.stringify({
      level: 'info',
      message: 'api_request',
      requestId,
      method,
      url,
    })
  )

  return requestId
}

export function logResponse(requestId, statusCode, meta = {}) {
  // eslint-disable-next-line no-console
  console.log(
    JSON.stringify({
      level: 'info',
      message: 'api_response',
      requestId,
      statusCode,
      ...meta,
    })
  )
}

export function logError(requestId, error, meta = {}) {
  // eslint-disable-next-line no-console
  console.error(
    JSON.stringify({
      level: 'error',
      message: 'api_error',
      requestId,
      error: error?.message || error,
      stack: error?.stack,
      ...meta,
    })
  )
}
