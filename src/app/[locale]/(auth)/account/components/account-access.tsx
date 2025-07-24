'use client';

import { useTranslations } from 'next-intl';

import { ChangePasswordForm } from '@/features/change-password/ui/change-password';

import { Title } from '@/shared/ui/kit/title';

export const AccountAccess = () => {
  const t = useTranslations('auth.accountAccess');

  return (
    <section className="flex w-1/2 flex-col gap-4 max-md:w-full">
      <Title size="3xl" weight={400}>
        {t('title', {
          fallback: 'Account Access',
        })}
      </Title>
      <section className="rounded-lg bg-[rgba(255,255,255,0.40)] p-6">
        <ChangePasswordForm />
      </section>
    </section>
  );
};
