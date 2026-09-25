import { Download } from 'lucide-react';

const ChecklistDownloadButton = ({
  file = '/templates/start-here-checklist.pdf',
  label = 'Download checklist',
}) => (
  <a
    href={file}
    download
    className="inline-flex items-center gap-2 rounded-md border border-[var(--border-default)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
  >
    <Download className="h-4 w-4" aria-hidden="true" /> {label}
  </a>
);

export default ChecklistDownloadButton;
