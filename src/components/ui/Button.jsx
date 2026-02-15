const cn = (...classes) => classes.filter(Boolean).join(' ');

const Button = ({ className = '', children, ...props }) => (
  <button
    className={cn(
      'inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-card transition-colors duration-200 hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
