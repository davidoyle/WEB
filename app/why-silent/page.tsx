import type { Metadata } from 'next';
import WhySilentSection from '@/components/sections/WhySilentSection';

export const metadata: Metadata = {
  title: "Why They Go Silent | Worker's Toolkit",
  description: 'Understand why WorkSafeBC and employers ignore you and how to respond.',
};

export default function WhySilentPage() {
  return <WhySilentSection />;
}
