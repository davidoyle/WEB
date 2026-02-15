import type { Metadata } from 'next';
import HomeClientPage from '@/components/sections/HomeClientPage';

export const metadata: Metadata = {
  title: "Worker's Toolkit",
  description: 'Rapid response toolkit for workers handling urgent situations.',
};

export default function Page() {
  return <HomeClientPage />;
}
