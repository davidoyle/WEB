const cn = (...classes) => classes.filter(Boolean).join(' ');

const Card = ({ as: Component = 'div', className = '', children, ...props }) => (
  <Component
    className={cn('rounded-lg border border-border bg-card p-6 shadow-card', className)}
    {...props}
  >
    {children}
  </Component>
);

export default Card;
