'use server';

import { cookies } from 'next/headers';

import type { Order } from '@/features/order/model/types';

export async function getUserOrders(): Promise<Order[]> {
  const cookieInst = await cookies();

  const user = cookieInst.get('user')?.value;
  const userID = JSON.parse(user ?? '').id;

  const res = await fetch(
    `${process.env.SERVER_URL}/api/orders?where[user.id][in]=${userID}&limit=50`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await res.json();

  return data.docs.map(
    (item: {
      orderNumber: string;
      items: {
        product_name: string;
      }[];
      createdAt: string;
      total: string;
      paymentMethod: string;
      status: string;
      invoice: string;
    }) => ({
      orderId: item.orderNumber,
      service: item.items.map(p => p.product_name).join(', '),
      date: item.createdAt,
      total: item.total,
      payment: item.paymentMethod,
      status: item.status,
      invoice: item.invoice,
    }),
  );
}
