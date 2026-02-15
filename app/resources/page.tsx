'use client';

import { ArrowRight } from 'lucide-react';
import { track } from '@vercel/analytics';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const docs = [
  {
    title: '10-Point Call to Action – What BC’s Injured Workers Need',
    file: 'call-to-action.pdf',
    event: 'download_call_to_action',
    description:
      'A blueprint for legislative reform that would restore balance, accountability, and dignity for injured workers in British Columbia.',
  },
  {
    title: 'Write Your MLA – Injured Workers’ Action Toolkit',
    file: 'write-your-mla.pdf',
    event: 'download_write_your_mla_toolkit',
    description:
      'A concise guide to contacting your MLA, raising concerns effectively, and demanding action on WorkSafeBC oversight failures.',
  },
  {
    title: 'Public-Facing Template – Ready to Post and Share',
    file: 'public-facing-template.pdf',
    event: 'download_public_facing_template',
    description:
      'A ready-to-post public awareness and pressure template that any supporter can share, broad enough for universal use and structured for tagging MLAs, MPs, and media.',
  },
];

export default function ResourcesPage() {
  return (
    <section className="space-y-12 py-12">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Advocacy Resources
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted">
          Download actionable documents designed to help you advocate for your rights and push for
          badly needed reforms to WorkSafeBC.
        </p>
      </header>

      <hr className="my-8 border-border" />

      <section className="grid gap-6 md:grid-cols-2">
        {docs.map(doc => (
          <Card
            as="article"
            key={doc.file}
            className="space-y-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">{doc.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{doc.description}</p>
            </div>

            <Button
              onClick={() => {
                track(doc.event);
                window.location.href = `/api/download/${doc.file}`;
              }}
            >
              Download PDF <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Card>
        ))}
      </section>
    </section>
  );
}
