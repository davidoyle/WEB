import type { Metadata } from 'next';
import First30MinutesSection from '@/components/sections/First30MinutesSection';

export const metadata: Metadata = {
  title: "First 30 Minutes | Worker's Toolkit",
  description: 'Immediate steps to take after a bad WorkSafeBC decision or injury.',
};

export default function FirstThirtyMinutesPage() {
  return <First30MinutesSection />;
}
