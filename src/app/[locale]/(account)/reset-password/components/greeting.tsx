'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Greeting = () => {
  const t = useTranslations('resetPassword.greeting');
  return (
    <section className="sticky top-4 flex w-1/2 flex-col gap-4 self-start p-4 max-md:relative max-md:w-full">
      <Title as="h1" weight={500} size="4xl">
        {t('title', {
          fallback: 'Lost Access? No worries.',
        })}
      </Title>
      <Text color="dark">
        {t('description', {
          fallback:
            'Share your email or username and we’ll send you a reset link.',
        })}
      </Text>
    </section>
  );
};
