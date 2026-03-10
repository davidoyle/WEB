import PageShell from '../components/PageShell';
import WCATToolkit from '../sections/WCATToolkit';

const WCATPage = () => (
  <PageShell
    title="WCAT Precedent Armory"
    description="Searchable WCAT precedent armory with filters and copy-friendly phrases."
  >
    <WCATToolkit />
  </PageShell>
);

export default WCATPage;
