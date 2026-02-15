import type { Metadata } from 'next';
import StartHere from '@/components/flows/onboarding/StartHere';

export const metadata: Metadata = {
  title: "Start Here | Worker's Toolkit",
  description: 'Guided onboarding to match your situation and next steps.',
};

export default function StartHerePage() {
  return <StartHere />;
}
