const cn = (...classes) => classes.filter(Boolean).join(' ');

const variants = {
  primary:
    'bg-[var(--accent)] text-[#12110f] border border-transparent hover:bg-[var(--accent-hover)]',
  ghost:
    'bg-transparent text-[var(--accent)] border border-[var(--border-accent)] hover:border-[var(--accent)]',
};

const Button = ({ className = '', variant = 'primary', children, ...props }) => (
  <button
    className={cn(
      'inline-flex items-center justify-center rounded-[2px] px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition disabled:cursor-not-allowed disabled:opacity-50',
      variants[variant] || variants.primary,
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
