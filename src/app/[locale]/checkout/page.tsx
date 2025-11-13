import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { CheckoutForm } from '@/features/checkout/ui/form';

export const metadata: Metadata = {
  title: 'Checkout | Confirm Your Signalor Order',
  description:
    'Review your order details, complete payment, and get ready to build your business with clarity and structure.',
  robots: 'noindex',
  openGraph: {
    title: 'Checkout | Confirm Your Signalor Order',
    description:
      'Review your order details, complete payment, and get ready to build your business with clarity and structure.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Checkout | Confirm Your Signalor Order',
    description:
      'Review your order details, complete payment, and get ready to build your business with clarity and structure.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default async function CheckoutPage() {
  const storedUser = (await cookies()).get('user');
  const user = storedUser ? JSON.parse(storedUser.value) : undefined;

  return (
    <main className="mx-4 mt-4 flex flex-col gap-10 bg-white px-[60px] pt-[104px] pb-[120px] max-md:px-4 max-md:pb-[80px]">
      <CheckoutForm user={user} />
    </main>
  );
}
