import { useState } from 'react';

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => (
  <div className={`border-b border-[var(--border-default)] ${isOpen ? 'border-l-2 border-l-[var(--accent)]' : ''}`} key={id}>
    <button
      type="button"
      onClick={() => onToggle(id)}
      className="flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--border-accent)]"
      aria-expanded={isOpen}
      aria-controls={`${id}-content`}
    >
      <span className="font-[var(--font-display)] text-lg text-[var(--text-primary)]">{title}</span>
      <span className="font-mono text-sm text-[var(--text-secondary)]">{isOpen ? '↓' : '→'}</span>
    </button>
    <div
      id={`${id}-content`}
      role="region"
      className={`overflow-hidden transition-all duration-200 ease-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
    >
      <div className="bg-[var(--bg-tertiary)] px-4 pb-4 text-[var(--text-secondary)]">{content}</div>
    </div>
  </div>
);

const Accordion = ({ items = [] }) => {
  const [openId, setOpenId] = useState(items[0]?.id);

  const handleToggle = id => {
    setOpenId(current => (current === id ? null : id));
  };

  return (
    <div className="border border-[var(--border-default)] bg-[var(--bg-secondary)]" role="tablist">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          {...item}
          isOpen={openId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
