const PageTOC = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <>
      <details className="mb-6 rounded-2xl border border-white/20 bg-white/5 p-4 lg:hidden">
        <summary className="cursor-pointer font-semibold text-foreground">Jump to…</summary>
        <ul className="mt-3 space-y-2">
          {items.map(item => (
            <li key={item.id}>
              <a className="text-sm text-muted hover:text-accent" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      <aside className="sticky top-24 hidden self-start lg:block">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
          <h2 className="eyebrow">On This Page</h2>
          <ul className="mt-3 space-y-2">
            {items.map(item => (
              <li key={item.id}>
                <a className="text-sm text-muted hover:text-accent" href={`#${item.id}`}>
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
