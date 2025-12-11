import type { Metadata } from 'next';

import { getPrivacyPolicy } from '@/features/policies/api/get-privacy-policy';
import { PolicyDisplay } from '@/features/policies/ui/policy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Idelaria',
  description:
    'Learn how we collect, use, and protect your data when you use our services or interact with our site.',
  robots: 'noindex',
  openGraph: {
    title: 'Privacy Policy | Idelaria',
    description:
      'Learn how we collect, use, and protect your data when you use our services or interact with our site.',
    images: ['https://idelaria.com/meta.jpg'],
  },
  twitter: {
    title: 'Privacy Policy | Idelaria',
    description:
      'Learn how we collect, use, and protect your data when you use our services or interact with our site.',
    images: ['https://idelaria.com/meta.jpg'],
  },
};

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const privacyPolicy = await getPrivacyPolicy({
    locale,
  });

  return <PolicyDisplay value={privacyPolicy} navSticky />;
}
