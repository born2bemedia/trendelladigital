import { LoginForm } from '@/core/auth/ui/login-form';

import { Greeting } from './components';

export default function LoginPage() {
  return (
    <section className="flex gap-6 max-md:flex-col">
      <Greeting />
      <LoginForm />
    </section>
  );
}
