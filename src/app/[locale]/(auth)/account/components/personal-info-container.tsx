'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { EditUserForm } from '@/core/user/ui/edit-user-form';
import { UserInfo } from '@/core/user/ui/user-info';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PersonalInfoContainer = () => {
  const [isEdit, setIsEdit] = useState(false);

  const t = useTranslations('auth.personalInfo');

  return (
    <section className="flex w-1/2 flex-col gap-4 max-md:w-full">
      <header className="flex items-center justify-between gap-2">
        <Title size="3xl" weight={400}>
          {t('title', {
            fallback: 'Account Access',
          })}
        </Title>
        <button
          className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
          onClick={() => setIsEdit(!isEdit)}
        >
          <Text color="black" underline>
            {isEdit
              ? t('return', {
                  fallback: 'Return',
                })
              : t('edit', {
                  fallback: 'Edit',
                })}
          </Text>
        </button>
      </header>
      <section className="rounded-lg bg-[rgba(255,255,255,0.40)] p-6">
        {isEdit ? (
          <EditUserForm onSuccess={() => setIsEdit(false)} />
        ) : (
          <UserInfo />
        )}
      </section>
    </section>
  );
};
