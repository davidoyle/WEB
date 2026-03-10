import PageShell from '../components/PageShell';
import EmailTemplates from '../sections/EmailTemplates';

const TemplatesPage = () => (
  <PageShell
    title="Email & Letter Templates | Worker's Toolkit"
    description="Copy-ready templates to challenge WorkSafeBC decisions and non-response."
  >
    <EmailTemplates />
  </PageShell>
);

export default TemplatesPage;
