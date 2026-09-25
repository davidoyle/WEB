const BeforeYouDoAnythingSection = () => (
  <div className="callout">
    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-urgent)]">
      Before you do anything
    </p>
    <h2 className="mt-2 text-lg font-bold text-[var(--text-primary)]">
      Do not contact WorkSafeBC until you have read this.
    </h2>
    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--text-secondary)]">
      <li>Don&apos;t call just to &ldquo;talk it through&rdquo; with no notes.</li>
      <li>Don&apos;t agree to anything on the phone you don&apos;t understand.</li>
      <li>Don&apos;t send a rage email you can&apos;t walk back.</li>
    </ul>
    <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">Do this first:</p>
    <ol className="list-decimal space-y-1 pl-5 text-sm text-[var(--text-secondary)]">
      <li>Save a copy of whatever they sent (photo, screenshot, PDF).</li>
      <li>Write the date, what they decided, and how it hits you (lost income, treatment, job).</li>
      <li>
        Take 10 minutes on this site to figure out what kind of problem it is — ignored evidence,
        contradictory decisions, retaliation, &ldquo;our records show,&rdquo; etc.
      </li>
    </ol>
    <p className="mt-3 text-sm text-[var(--text-secondary)]">
      You&apos;re not overreacting. You&apos;re buying time to respond with strategy, not just pain.
    </p>
  </div>
);

export default BeforeYouDoAnythingSection;
