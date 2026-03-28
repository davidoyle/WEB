import { Download } from 'lucide-react';

const ChecklistDownloadButton = ({
  file = '/templates/start-here-checklist.pdf',
  label = 'Download checklist',
}) => (
  <a
    href={file}
    download
    className="inline-flex items-center gap-2 border border-[var(--border-default)] px-4 py-2 font-mono text-[0.72rem] uppercase tracking-wider text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
  >
    <Download className="h-4 w-4" aria-hidden="true" /> {label}
  </a>
);

export default ChecklistDownloadButton;
