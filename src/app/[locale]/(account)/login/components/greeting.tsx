'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Greeting = () => {
  const t = useTranslations('login.greeting');
  return (
    <section className="flex w-1/2 flex-col gap-4 p-4 max-md:w-full">
      <Title as="h1" weight={500} size="4xl">
        {t('title', {
          fallback: 'Welcome Back!',
        })}
      </Title>
      <Text color="dark">
        {t('description', {
          fallback:
            'Log in to pick up where you left off and keep building your business with intention.',
        })}
      </Text>
    </section>
  );
};
