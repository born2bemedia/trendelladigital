'use client';

import { useTranslations } from 'next-intl';

import { getColumns } from '@/features/order/model/columns';
import type { Order } from '@/features/order/model/types';
import { OrderCard } from '@/features/order/ui/order-card';

import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OrderHistory = ({ orders }: { orders: Order[] }) => {
  const t = useTranslations('account.orderHistory');

  const columns = getColumns(t);

  return (
    <section className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-2">
        <Title size="4xl" weight={400}>
          {t('title', { fallback: 'My Order History' })}
        </Title>
        <Text color="ghost">
          {t('description', {
            fallback:
              'Track your past service requests, check payment status, and download invoices for your consulting packages.',
          })}
        </Text>
      </div>
      <div className="max-md:hidden">
        <Table<Order> data={orders} columns={columns} />
      </div>
      <div className="hidden flex-col rounded-lg bg-[rgba(255,255,255,0.40)] px-4 py-6 max-md:flex">
        {orders.map(order => (
          <OrderCard key={order.orderId} value={order} />
        ))}
      </div>
    </section>
  );
};
