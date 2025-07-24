'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/model/user.store';

import { cookies } from '@/shared/lib/utils/cookies';
import { Title } from '@/shared/ui/kit/title';

export const Greeting = () => {
  const t = useTranslations('auth.tabs');
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const storedUser = cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
  }, [setUser]);

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
