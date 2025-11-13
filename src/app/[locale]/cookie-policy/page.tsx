import type { Metadata } from 'next';

import { getCookiePolicy } from '@/features/policies/api/get-cookie-policy';
import { PolicyDisplay } from '@/features/policies/ui/policy';

export const metadata: Metadata = {
  title: 'Cookie Policy | Signalor',
  description:
    'Understand how we use cookies to enhance your browsing experience and support site performance.',
  robots: 'noindex',
  openGraph: {
    title: 'Cookie Policy | Signalor',
    description:
      'Understand how we use cookies to enhance your browsing experience and support site performance.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Cookie Policy | Signalor',
    description:
      'Understand how we use cookies to enhance your browsing experience and support site performance.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default async function CookiePolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const cookiePolicy = await getCookiePolicy({
    locale,
  });

  return <PolicyDisplay value={cookiePolicy} navSticky />;
}
