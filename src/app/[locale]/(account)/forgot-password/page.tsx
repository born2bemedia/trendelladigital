import type { Metadata } from 'next';

import { ResetPasswordForm } from '@/features/reset-password/ui/reset-password-form';

import { Greeting } from './components';

export const metadata: Metadata = {
  title: 'Reset Your Signalor Password',
  robots: 'noindex',
  openGraph: {
    title: 'Reset Your Signalor Password',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Create Your Signalor Account',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <>
      <Greeting />
      <ResetPasswordForm token={token} />
    </>
  );
}
