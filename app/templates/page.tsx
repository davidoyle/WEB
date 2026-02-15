import type { Metadata } from 'next';
import EmailTemplates from '@/components/sections/EmailTemplates';

export const metadata: Metadata = {
  title: "Email & Letter Templates | Worker's Toolkit",
  description: 'Copy-ready templates to challenge WorkSafeBC decisions and non-response.',
};

export default function TemplatesPage() {
  return <EmailTemplates />;
}
