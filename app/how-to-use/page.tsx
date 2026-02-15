import type { Metadata } from 'next';
import HowToUse from '@/components/sections/HowToUse';

export const metadata: Metadata = {
  title: "How To Use This Toolkit | Worker's Toolkit",
  description: 'Step-by-step instructions for using the Worker’s Toolkit effectively.',
};

export default function HowToUsePage() {
  return <HowToUse />;
}
