'use client';

import { useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/model/user.store';

import { Title } from '@/shared/ui/kit/title';

export const Greeting = () => {
  const t = useTranslations('auth.tabs');
  const { user } = useUserStore();

  return (
    <Title size="2xl" as="h1" weight={500}>
      {t('welcome', {
        fallback: 'Welcome',
      })}
      , <br />{' '}
      <span className="text-[40px]">{user?.firstName ?? user?.username}</span>
    </Title>
  );
};
