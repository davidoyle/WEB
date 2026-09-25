import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import FeedbackModal from './FeedbackModal';

const FeedbackButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-sm font-medium text-[var(--text-secondary)] shadow-md transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
        aria-label="Give feedback"
      >
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        Was this helpful?
      </button>
      <FeedbackModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default FeedbackButton;
