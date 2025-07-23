'use client';

import type { Order } from '@/features/order/model/types';

import { OrderHistory } from './order-history';

export const AccountContainer = ({ orders }: { orders: Order[] }) => {
  return (
    <section className="flex flex-1 rounded-lg bg-[rgba(209,183,188,0.30)] px-6 py-10">
      <OrderHistory orders={orders} />
    </section>
  );
};
