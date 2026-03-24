'use server';

import sgMail from '@sendgrid/mail';

import type { User } from '@/core/user/model/types';

import { requestFormBody } from '@/features/email-letters/request-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY, SERVER_URL } from '@/shared/config/env';

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
  try {
    if (!SERVER_URL) {
      throw new Error('SERVER_URL is not configured');
    }

    const orderNumber = String(Date.now());
    sgMail.setApiKey(SENDGRID_API_KEY);

    const res = await fetch(`${SERVER_URL}/api/orders`, {
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

    const data = await res.json();

    if (!res.ok) {
      console.error('Order API error:', data);
      return data;
    }

    const recipientEmail = user?.email || billing.email;

    if (recipientEmail) {
      try {
        await sgMail.send({
          to: recipientEmail,
          from: FROM_EMAIL,
          subject: "Your Order Has Been Received — Here's What's Next",
          html: requestFormBody({
            username: user?.firstName || billing.firstName || 'User',
          }),
        });
      } catch (error) {
        console.error('Failed to send order confirmation email:', error);
      }
    }

    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Failed to create order:', error);

    return {
      message,
      success: false,
    };
  }
};
