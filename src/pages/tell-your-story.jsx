import PageShell from '../components/PageShell';
import TellYourStory from '../sections/TellYourStory';

const TellYourStoryPage = () => (
  <PageShell
    title="Tell Your Story"
    description="Securely share your WorkSafeBC experience to help build better tools for workers."
    mainClassName="section-shell py-8"
  >
    <TellYourStory />
  </PageShell>
);

export default TellYourStoryPage;
