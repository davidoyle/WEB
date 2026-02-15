'use client';

import { track } from '@vercel/analytics';

const docs = [
  {
    title: '10-Point Call to Action – What BC’s Injured Workers Need',
    file: 'call-to-action.pdf',
    event: 'download_call_to_action',
  },
  {
    title: 'Write Your MLA – Injured Workers’ Action Toolkit',
    file: 'write-your-mla.pdf',
    event: 'download_write_your_mla_toolkit',
  },
  {
    title: 'Public-Facing Template – Ready to Post and Share',
    file: 'public-facing-template.pdf',
    event: 'download_public_facing_template',
  },
];

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6 px-6 py-12 text-foreground">
      <h1 className="text-3xl font-bold md:text-4xl">Advocacy Resources</h1>
      <p className="text-muted">
        Download practical documents built to help workers push back, document harm, and organize
        pressure for change.
      </p>
      <ul className="space-y-3">
        {docs.map(doc => (
          <li
            key={doc.file}
            className="flex items-center justify-between rounded-lg border border-muted/50 bg-background/70 px-4 py-3"
          >
            <span>{doc.title}</span>
            <button
              className="rounded-full bg-accent px-4 py-2 font-semibold text-background hover:bg-yellow-600"
              onClick={() => {
                track(doc.event);
                window.location.href = `/api/download/${doc.file}`;
              }}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
