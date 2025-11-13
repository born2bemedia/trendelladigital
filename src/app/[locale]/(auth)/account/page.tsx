import type { Metadata } from 'next';

import { getUserOrders } from '@/features/order/api/get-user-orders';

import { AccountContainer } from './components';

export const metadata: Metadata = {
  title: 'Account | Signalor',
  robots: 'noindex',
  openGraph: {
    title: 'Account | Signalor',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Account | Signalor',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default async function AccountPage() {
  const orders = await getUserOrders();

  return <AccountContainer orders={orders} />;
}
