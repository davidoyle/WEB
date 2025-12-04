export default function handler(req, res) {
  console.log('HIT /api/story', req.method);

  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ ok: false, error: 'Method not allowed', method: req.method });
  }

  return res.status(200).json({
    ok: true,
    message: 'Minimal /api/story handler reached',
    method: req.method,
  });
}
