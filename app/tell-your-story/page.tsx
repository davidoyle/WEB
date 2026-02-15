import type { Metadata } from 'next';
import TellYourStory from '@/components/sections/TellYourStory';

export const metadata: Metadata = {
  title: 'Tell Your Story',
  description: 'Securely share your WorkSafeBC experience to help build better tools for workers.',
};

export default function TellYourStoryPage() {
  return <TellYourStory />;
}
