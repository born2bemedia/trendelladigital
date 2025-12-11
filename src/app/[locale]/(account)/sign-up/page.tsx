import type { Metadata } from 'next';

import { SignUpForm } from '@/core/auth/ui/sign-up-form';

import { Greeting } from './components';

export const metadata: Metadata = {
  title: 'Create Your Idelaria Account',
  description:
    'Sign up to access consulting packages, schedule sessions, and move your business forward with clarity and structure.',
  robots: 'noindex',
  openGraph: {
    title: 'Create Your Idelaria Account',
    description:
      'Sign up to access consulting packages, schedule sessions, and move your business forward with clarity and structure.',
    images: ['https://idelaria.com/meta.jpg'],
  },
  twitter: {
    title: 'Create Your Idelaria Account',
    description:
      'Sign up to access consulting packages, schedule sessions, and move your business forward with clarity and structure.',
    images: ['https://idelaria.com/meta.jpg'],
  },
};

export default function SignUpPage() {
  return (
    <>
      <Greeting />
      <SignUpForm />
    </>
  );
}
