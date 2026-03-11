import PageShell from '../components/PageShell';
import EmailTemplates from '../sections/EmailTemplates';

const tocItems = [
  { id: 'templates-title', label: 'Template Overview' },
  { id: 'template-library', label: 'Template Library' },
  { id: 'how-to-send', label: 'How to Send' },
];

const TemplatesPage = () => (
  <PageShell
    title="Email & Letter Templates | Worker's Toolkit"
    description="Copy-ready templates for escalation and appeals."
    tocItems={tocItems}
  >
    <EmailTemplates />
  </PageShell>
);

export default TemplatesPage;
