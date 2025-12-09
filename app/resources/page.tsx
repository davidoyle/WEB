"use client";

import { track } from "@vercel/analytics";

const docs = [
  {
    title: "10-Point Call to Action – What BC’s Injured Workers Need",
    file: "call-to-action.pdf",
    event: "download_call_to_action",
    description:
      "A blueprint for legislative reform that would restore balance, accountability, and dignity for injured workers in British Columbia.",
  },
  {
    title: "Write Your MLA – Injured Workers’ Action Toolkit",
    file: "write-your-mla.pdf",
    event: "download_write_your_mla_toolkit",
    description:
      "A concise guide to contacting your MLA, raising concerns effectively, and demanding action on WorkSafeBC oversight failures.",
  },
  {
    title: "Public-Facing Template – Ready to Post and Share",
    file: "public-facing-template.pdf",
    event: "download_public_facing_template",
    description:
      "A ready-to-post public awareness and pressure template that any supporter can share, broad enough for universal use and structured for tagging MLAs, MPs, and media.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Advocacy Resources
        </h1>
        <p className="text-gray-700 text-lg">
          Download actionable documents designed to help you advocate for your
          rights and push for badly needed reforms to WorkSafeBC.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {docs.map((doc) => (
          <article
            key={doc.file}
            className="border rounded-xl p-6 space-y-4 shadow-sm transition hover:shadow-md bg-white"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{doc.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {doc.description}
              </p>
            </div>

            <button
              onClick={() => {
                track(doc.event);
                window.location.href = `/api/download/${doc.file}`;
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Download PDF
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
