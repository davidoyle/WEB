const cn = (...classes) => classes.filter(Boolean).join(' ');

const variants = {
  primary:
    'bg-[var(--accent)] text-white border border-transparent hover:bg-[var(--accent-hover)]',
  ghost:
    'bg-transparent text-[var(--accent)] border-[1.5px] border-[var(--border-accent)] hover:bg-[rgba(37,99,235,0.05)] hover:border-[var(--accent)]',
};

const Button = ({ className = '', variant = 'primary', children, ...props }) => (
  <button
    className={cn(
      'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50',
      variants[variant] || variants.primary,
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
