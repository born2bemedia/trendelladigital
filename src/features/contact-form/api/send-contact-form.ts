'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { ContactForm } from '../model/schema';

export async function sendContactForm(data: ContactForm) {
  try {
    const {
      fullName,
      budgetRange,
      companyName,
      companyWebsite,
      currentBusinessStage,
      email,
      industryOrNiche,
      message,
      phone,
      service,
    } = data;

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Contact Request`,
      html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${fullName}}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business:</strong> ${companyName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Budget Range:</strong> ${budgetRange}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Company Website:</strong> ${companyWebsite}</p>
      <p><strong>Current Business Stage:</strong> ${currentBusinessStage}</p>
      <p><strong>Industry or Niche:</strong> ${industryOrNiche}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    await sgMail.send(msg);

    return { message: 'Fund access request sent successfully.', success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return {
      message: 'Failed to send fund access request.',
      error: errorMessage,
      success: false,
    };
  }
}
