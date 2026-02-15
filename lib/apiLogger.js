function getHeader(headers, key) {
  if (!headers) return undefined;
  if (typeof headers.get === 'function') return headers.get(key) || undefined;
  return headers[key] || headers[key.toLowerCase()];
}

function buildRequestId(headers) {
  return getHeader(headers, 'x-request-id') || `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function logRequest(req) {
  const requestId = buildRequestId(req.headers);
  const method = req.method;
  const url = typeof req.url === 'string' ? req.url : req.nextUrl?.href;

  console.log(JSON.stringify({ level: 'info', message: 'api_request', requestId, method, url }));
  return requestId;
}

export function logResponse(requestId, statusCode, meta = {}) {
  console.log(
    JSON.stringify({ level: 'info', message: 'api_response', requestId, statusCode, ...meta })
  );
}

export function logError(requestId, error, meta = {}) {
  console.error(
    JSON.stringify({
      level: 'error',
      message: 'api_error',
      requestId,
      error: error?.message || error,
      stack: error?.stack,
      ...meta,
    })
  );
}
