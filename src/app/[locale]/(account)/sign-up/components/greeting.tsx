'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Greeting = () => {
  const t = useTranslations('signUp.greeting');

  return (
    <section className="sticky top-4 flex w-1/2 flex-col gap-4 self-start p-4 max-md:relative max-md:w-full">
      <Title as="h1" weight={500} size="4xl">
        {t('title', {
          fallback: 'Create Account',
        })}
      </Title>
      <Text color="dark">
        {t('description.0', {
          fallback: 'Join Trendella Digital  to unlock your dashboard, ',
        })}{' '}
        <br />
        {t('description.1', {
          fallback: 'book sessions, and start building with intention.',
        })}
      </Text>
    </section>
  );
};
