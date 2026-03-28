const PageTOC = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <>
      <div className="sticky top-16 z-30 -mx-4 mb-6 overflow-x-auto border-y border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-2 sm:-mx-6 sm:px-6 lg:hidden">
        <ul className="flex min-w-max gap-2">
          {items.map(item => (
            <li key={item.id}>
              <a
                className="inline-flex whitespace-nowrap border border-[var(--border-default)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <aside className="sticky top-24 hidden self-start lg:block">
        <div className="border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
          <h2 className="eyebrow">On This Page</h2>
          <ul className="mt-3 space-y-2">
            {items.map(item => (
              <li key={item.id}>
                <a
                  className="group flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent)]"
                  href={`#${item.id}`}
                >
                  <span className="h-px w-4 bg-transparent transition group-hover:bg-[var(--accent)]" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default PageTOC;
