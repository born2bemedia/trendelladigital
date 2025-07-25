'use server';

import type { User } from '@/core/user/model/types';

import type { CheckoutForm } from '../model/schemas';

export const sendOrder = async ({
  billing,
  products,
  user,
  totalPrice,
}: {
  billing: CheckoutForm;
  products: { name: string; quantity: number; price: number }[];
  user?: User;
  totalPrice: number;
}) => {
  const orderNumber = String(Date.now());

  const res = await fetch(`${process.env.SERVER_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      orderNumber,
      items: products.map(item => ({
        product_name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      billingAddress: billing,
      total: totalPrice,
    }),
  });

  return await res.json();
};
