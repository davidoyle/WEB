import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const file = req.query.file;
  const safeFile = Array.isArray(file) ? file[0] : file;

  try {
    const filePath = path.join(process.cwd(), 'public/resources', safeFile);
    const buffer = await fs.readFile(filePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${safeFile}"`);
    return res.status(200).send(buffer);
  } catch {
    return res.status(404).json({ error: 'File not found' });
  }
}
