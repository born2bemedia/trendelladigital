'use server';

import sgMail from '@sendgrid/mail';

import { requestFormBody } from '@/features/email-letters/request-form-body';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { RequestForm } from '../model/schemas';

export async function sendRequest(
  data: RequestForm & { type: 'marketing' | 'business' },
) {
  try {
    const { fullName, business, type, email, phoneNumber, message } = data;

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New ${type} Request`,
      html: `
      <h2>New ${type} Request</h2>
      <p><strong>Name:</strong> ${fullName}}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business:</strong> ${business}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    const userMsg = {
      to: email,
      from: FROM_EMAIL,
      subject: "Your Order Has Been Received — Here's What’s Next",
      html: requestFormBody({ username: fullName }),
    };

    await sgMail.send(msg);
    await sgMail.send(userMsg);

    return { message: 'Fund access request sent successfully.' };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return {
      message: 'Failed to send fund access request.',
      error: errorMessage,
    };
  }
}
