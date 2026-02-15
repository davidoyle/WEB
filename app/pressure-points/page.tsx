import type { Metadata } from 'next';
import PressurePoints from '@/components/sections/PressurePoints';

export const metadata: Metadata = {
  title: "Tactical Pressure Points | Worker's Toolkit",
  description: 'Targeted questions and leverage to push back on WorkSafeBC.',
};

export default function PressurePointsPage() {
  return <PressurePoints />;
}
