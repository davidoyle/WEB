'use client';

import { useRouter } from 'next/navigation';
import LandingSection from '@/components/sections/Landing';

export default function HomeClientPage() {
  const router = useRouter();

  return (
    <div className="space-y-16 pb-16">
      <LandingSection
        onStart={() => {
          router.push('/start-here');
        }}
        onNavigate={(target: string) => {
          if (target === 'tellYourStory') router.push('/tell-your-story');
        }}
      />
    </div>
  );
}
