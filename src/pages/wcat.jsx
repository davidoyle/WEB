import PageShell from '../components/PageShell';
import WCATToolkit from '../sections/WCATToolkit';

const tocItems = [
  { id: 'wcat-title', label: 'Armory Overview' },
  { id: 'wcat-filters', label: 'Search & Filters' },
  { id: 'wcat-categories', label: 'Case Categories' },
];

const WCATPage = () => (
  <PageShell
    title="WCAT Precedent Armory"
    description="Searchable WCAT precedent armory with filters and copy-friendly phrases."
    tocItems={tocItems}
  >
    <WCATToolkit />
  </PageShell>
);

export default WCATPage;
