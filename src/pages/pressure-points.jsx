import PageShell from '../components/PageShell';
import PressurePoints from '../sections/PressurePoints';

const tocItems = [
  { id: 'pressure-title', label: 'Overview' },
  { id: 'pattern-selector', label: 'Pattern Selector' },
  { id: 'pressure-cards', label: 'Pressure Tactics' },
];

const PressurePointsPage = () => (
  <PageShell
    title="Tactical Pressure Points | Worker's Toolkit"
    description="Targeted questions and leverage to push back on WorkSafeBC."
    tocItems={tocItems}
  >
    <PressurePoints />
  </PageShell>
);

export default PressurePointsPage;
