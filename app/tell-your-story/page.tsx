import type { Metadata } from 'next';
import StoryFormClient from './StoryFormClient';

export const metadata: Metadata = {
  title: 'Tell Your Story',
  description: 'Securely share your WorkSafeBC experience.',
};

export default function TellYourStoryPage() {
  return <StoryFormClient />;
}
