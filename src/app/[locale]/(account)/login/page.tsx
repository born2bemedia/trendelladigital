import type { Metadata } from 'next';

import { LoginForm } from '@/core/auth/ui/login-form';

import { Greeting } from './components';

export const metadata: Metadata = {
  title: 'Log In to Your Trendella Digital Account',
  description:
    'Access your dashboard, manage services, and keep building your business with focus and intention.',
  robots: 'noindex',
  openGraph: {
    title: 'Log In to Your Trendella Digital Account',
    description:
      'Access your dashboard, manage services, and keep building your business with focus and intention.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Log In to Your Trendella Digital Account',
    description:
      'Access your dashboard, manage services, and keep building your business with focus and intention.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function LoginPage() {
  return (
    <>
      <Greeting />
      <LoginForm />
    </>
  );
}
