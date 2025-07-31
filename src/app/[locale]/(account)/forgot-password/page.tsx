import type { Metadata } from 'next';

import { ResetPasswordForm } from '@/features/reset-password/ui/reset-password-form';

import { Greeting } from './components';

export const metadata: Metadata = {
  title: 'Reset Your Trendella Digital Password',
  robots: 'noindex',
  openGraph: {
    title: 'Reset Your Trendella Digital Password',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Create Your Trendella Digital Account',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function ResetPasswordPage() {
  return (
    <>
      <Greeting />
      <ResetPasswordForm />
    </>
  );
}
