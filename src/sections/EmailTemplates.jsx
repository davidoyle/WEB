import { useState } from 'react';
import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection';
import { emailTemplates } from '../data/content';
import ChecklistDownloadButton from '../components/ChecklistDownloadButton';
import { getSupabaseClient } from '../lib/supabaseClient';

const EmailTemplates = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyTemplate = async (content, index) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      setCopiedIndex(null);
    }
  };

  const logTemplateCopy = templateTitle => {
    try {
      const supabase = getSupabaseClient();
      supabase
        .from('tool_events')
        .insert({
          event_type: 'template_copied',
          metadata: { templateTitle },
        })
        .then(() => {})
        .catch(() => {});
    } catch {}
  };

  return (
    <div className="section-shell" id="templates">
      <BeforeYouDoAnythingSection />
      <div className="mb-8 text-center">
        <h1 id="templates-title" className="section-title">Email &amp; Letter Templates</h1>
        <p className="section-lead">Plug in your facts, swap in your voice, keep the structure.</p>
      </div>
      <div className="space-y-6">
        {emailTemplates.map((template, index) => (
          <div key={index} className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">{template.title}</h2>
            <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-wider text-[var(--text-muted)]">{template.to}</p>
            <p className="mt-4 text-[var(--text-secondary)]">
              What this letter does: establishes a written record, asks direct questions, and forces a
              written response that can be cited later.
            </p>
            <div className="mt-4 border border-[var(--border-default)] border-l-2 border-l-[var(--accent)] bg-[var(--bg-tertiary)] p-4">
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    copyTemplate(template.content, index);
                    logTemplateCopy(template.title);
                  }}
                  className="font-mono text-[0.7rem] uppercase tracking-wider text-[var(--accent)] hover:text-[var(--accent-hover)]"
                >
                  {copiedIndex === index ? 'Copied' : 'Copy →'}
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-[0.9rem] text-[var(--text-secondary)]">
                {template.content}
              </pre>
            </div>
            <div className="mt-4">
              <ChecklistDownloadButton file="/templates/appeal-template.pdf" label="Download template" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailTemplates;
