import type { Metadata } from 'next';

import { getTermsAndConditions } from '@/features/policies/api/get-terms-and-conditions';
import { PolicyDisplay } from '@/features/policies/ui/policy';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Trendella Digital',
  description:
    'Read our terms of service outlining how we work, what you can expect, and how your data and engagement are handled.',
  robots: 'noindex',
  openGraph: {
    title: 'Terms & Conditions | Trendella Digital',
    description:
      'Read our terms of service outlining how we work, what you can expect, and how your data and engagement are handled.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Terms & Conditions | Trendella Digital',
    description:
      'Read our terms of service outlining how we work, what you can expect, and how your data and engagement are handled.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default async function TermsAndConditions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const termsAndConditions = await getTermsAndConditions({
    locale,
  });

  return <PolicyDisplay value={termsAndConditions} />;
}
