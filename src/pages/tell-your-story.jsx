import PageShell from '../components/PageShell';
import TellYourStory from '../sections/TellYourStory';

const TellYourStoryPage = () => (
  <PageShell
    title="The Record | Workers Toolkit"
    description="An independent archive of WorkSafeBC claim experiences in British Columbia."
    mainClassName=""
  >
    <TellYourStory />
  </PageShell>
);

export default TellYourStoryPage;
