import type { Metadata } from 'next';

import { getRefundPolicy } from '@/features/policies/api/get-refund-policy';
import { PolicyDisplay } from '@/features/policies/ui/policy';

export const metadata: Metadata = {
  title: 'Refund Policy | Idelaria',
  description:
    'Read our refund policy to understand how requests and cancellations are handled with transparency.',
  robots: 'noindex',
  openGraph: {
    title: 'Refund Policy | Idelaria',
    description:
      'Read our refund policy to understand how requests and cancellations are handled with transparency.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Refund Policy | Idelaria',
    description:
      'Read our refund policy to understand how requests and cancellations are handled with transparency.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default async function RefundPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const refundPolicy = await getRefundPolicy({
    locale,
  });

  return <PolicyDisplay value={refundPolicy} navSticky />;
}
