const foundingStatement =
  'This is an independent record. It belongs to no government body, no insurer, no law firm. It exists because one injured worker built it, and because what happened to them happens to thousands of people every year in British Columbia. Everything here — every tactic, every template, every precedent, every story — was built to change that.';

const Footer = () => (
  <footer className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)] py-8">
    <div className="section-shell space-y-4">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-secondary)]">
        Not funded by WorkSafeBC or government.
      </p>
      <p className="founding-statement">{foundingStatement}</p>
    </div>
  </footer>
);

export default Footer;
