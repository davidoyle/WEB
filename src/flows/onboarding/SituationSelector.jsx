import { useEffect, useMemo, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const SituationSelector = ({ situations, selectedId, onSelect }) => {
  const buttonRefs = useRef([]);
  const [keyboardIndex, setKeyboardIndex] = useState(0);

  const selectedIndex = useMemo(
    () => situations.findIndex(s => s.id === selectedId),
    [situations, selectedId]
  );

  useEffect(() => {
    if (selectedIndex >= 0) setKeyboardIndex(selectedIndex);
  }, [selectedIndex]);

  const handleKeyDown = event => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home') {
      setKeyboardIndex(0);
      onSelect(situations[0].id);
      buttonRefs.current[0]?.focus();
      return;
    }
    if (event.key === 'End') {
      const last = situations.length - 1;
      setKeyboardIndex(last);
      onSelect(situations[last].id);
      buttonRefs.current[last]?.focus();
      return;
    }
    setKeyboardIndex(prev => {
      const nextIndex =
        event.key === 'ArrowDown'
          ? Math.min(situations.length - 1, prev + 1)
          : Math.max(0, prev - 1);
      onSelect(situations[nextIndex].id);
      buttonRefs.current[nextIndex]?.focus();
      return nextIndex;
    });
  };

  return (
    <div className="space-y-4">
      {situations.map((situation, index) => {
        const isSelected = situation.id === selectedId;
        const tabIndex = isSelected || (!selectedId && index === 0) ? 0 : -1;
        return (
          <button
            key={situation.id}
            type="button"
            onKeyDown={handleKeyDown}
            onClick={() => onSelect(situation.id)}
            className={`flex min-h-[52px] w-full flex-col border bg-[var(--bg-secondary)] p-4 text-left transition focus:outline-none focus:ring-1 focus:ring-[var(--border-accent)] ${isSelected ? 'border-[var(--border-accent)]' : 'border-[var(--border-default)] hover:border-[var(--border-strong)]'}`}
            aria-pressed={isSelected}
            aria-label={`Situation: ${situation.title}`}
            tabIndex={tabIndex}
            ref={el => {
              buttonRefs.current[index] = el;
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center border ${isSelected ? 'border-[var(--border-accent)] text-[var(--accent)]' : 'border-[var(--border-default)] text-[var(--text-secondary)]'}`}
                >
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-[var(--font-display)] text-xl text-[var(--text-primary)]">{situation.title}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{situation.description}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center border px-3 py-1 font-mono text-[0.66rem] uppercase tracking-wider ${isSelected ? 'border-[var(--border-accent)] text-[var(--accent)]' : 'border-[var(--border-default)] text-[var(--text-muted)]'}`}
              >
                {isSelected ? 'Selected' : 'Pick'}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SituationSelector;
