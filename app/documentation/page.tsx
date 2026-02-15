import type { Metadata } from 'next';
import DocumentationSection from '@/components/sections/Documentation';

export const metadata: Metadata = {
  title: "Evidence & Documentation | Worker's Toolkit",
  description: 'Centralize the records and evidence you need for WorkSafeBC fights.',
};

export default function DocumentationPage() {
  return <DocumentationSection />;
}
