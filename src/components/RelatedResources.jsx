import Link from 'next/link';

const routeRelated = {
  '/pressure-points': [
    { href: '/templates', label: 'Grab a template that matches your pressure move' },
    { href: '/documentation', label: 'Lock down your evidence before you send anything' },
    { href: '/wcat', label: 'Find WCAT decisions that support your position' },
  ],
  '/templates': [
    { href: '/pressure-points', label: 'Pick the pressure tactic this template supports' },
    { href: '/documentation', label: 'Prep documents so your template hits harder' },
    { href: '/wcat', label: 'Pull strategy language from WCAT Armory' },
  ],
  '/wcat': [
    { href: '/templates', label: 'Use templates to cite cases in writing' },
    { href: '/documentation', label: 'Build the evidence package behind your argument' },
    { href: '/pressure-points', label: 'Pair precedent with a tactical pressure move' },
  ],
  '/documentation': [
    { href: '/templates', label: 'Use templates after your records are organized' },
    { href: '/pressure-points', label: 'Escalate strategically with documented facts' },
    { href: '/wcat', label: 'Match your file pattern to winning WCAT decisions' },
  ],
  '/start-here': [
    { href: '/pressure-points', label: 'Pick your pressure strategy' },
    { href: '/documentation', label: 'Start your evidence system today' },
    { href: '/templates', label: 'Send your first controlled message' },
  ],
};

const RelatedResources = ({ route }) => {
  const links = routeRelated[route];
  if (!links?.length) return null;

  return (
    <section className="section-shell py-10">
      <div className="rounded-[28px] border border-white/20 bg-white/5 p-6">
        <h2 className="headline-md">Related Shit You Might Need</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="card block text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedResources;
