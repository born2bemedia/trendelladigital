'use client';

import { SignUpForm } from '@/core/auth/ui/sign-up-form';

import { Greeting } from './components';

export default function SignUpPage() {
  return (
    <>
      <Greeting />
      <SignUpForm />
    </>
  );
}
