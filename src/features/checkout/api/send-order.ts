'use server';

import sgMail from '@sendgrid/mail';

import type { User } from '@/core/user/model/types';

import { requestFormBody } from '@/features/email-letters/request-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

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
  sgMail.setApiKey(SENDGRID_API_KEY);

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

  const userMsg = {
    to: user?.email,
    from: FROM_EMAIL,
    subject: "Your Order Has Been Received — Here's What’s Next",
    html: requestFormBody({ username: user?.firstName ?? 'User' }),
  };

  await sgMail.send(userMsg);

  return await res.json();
};
