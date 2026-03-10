import { useRouter } from 'next/router';
import PageShell from '../components/PageShell';
import Landing from '../sections/Landing';

const HomePage = () => {
  const router = useRouter();

  return (
    <PageShell
      title="Worker's Toolkit"
      description="Practical tools and precedent guidance for injured workers in British Columbia navigating WorkSafeBC."
      mainClassName=""
    >
      <Landing
        onStart={() => router.push('/start-here')}
        onNavigate={target => router.push(target === 'tellYourStory' ? '/tell-your-story' : '/')}
      />
    </PageShell>
  );
};

export default HomePage;
