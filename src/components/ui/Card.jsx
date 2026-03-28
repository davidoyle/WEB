const cn = (...classes) => classes.filter(Boolean).join(' ');

const Card = ({ as: Component = 'div', className = '', leftRule = false, children, ...props }) => (
  <Component
    className={cn(
      'border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6 rounded-[2px]',
      leftRule ? 'border-l-2 border-l-[var(--border-strong)]' : '',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export default Card;
