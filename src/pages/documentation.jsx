import PageShell from '../components/PageShell';
import DocumentationSection from '../sections/Documentation';

const tocItems = [
  { id: 'docs-title', label: 'Documentation Overview' },
  { id: 'docs-buckets', label: 'What to Track' },
  { id: 'docs-quick-start', label: 'Quick Start' },
  { id: 'docs-templates', label: 'Log & File Naming' },
];

const DocumentationPage = () => (
  <PageShell
    title="Evidence & Documentation | Worker's Toolkit"
    description="A practical documentation system for WorkSafeBC claims, reviews, and appeals."
    tocItems={tocItems}
  >
    <DocumentationSection />
  </PageShell>
);

export default DocumentationPage;
