import type { Metadata } from 'next';
import WCATToolkit from '@/components/sections/WCATToolkit';

export const metadata: Metadata = {
  title: 'WCAT Precedent Armory',
  description: 'Searchable WCAT precedent armory with filters and copy-friendly phrases.',
};

export default function WCATPage() {
  return <WCATToolkit />;
}
