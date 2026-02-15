import { logRequest, logResponse } from '@/lib/apiLogger';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const requestId = logRequest(request);
  logResponse(requestId, 200, { ok: true });
  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function HEAD(request) {
  const requestId = logRequest(request);
  logResponse(requestId, 200, { ok: true });
  return new NextResponse(null, { status: 200 });
}
