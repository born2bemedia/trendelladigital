'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import { useUserStore } from '../model/user.store';

export const UserInfo = () => {
  const t = useTranslations('user.userInfo');
  const { user } = useUserStore();

  return (
    <section className="flex flex-col gap-6">
      {[
        {
          label: t('firstName', {
            fallback: 'First Name',
          }),
          value: user?.firstName,
          placeholder: t('firstName', {
            fallback: 'First Name',
          }),
        },
        {
          label: t('lastName', {
            fallback: 'Last Name',
          }),
          value: user?.lastName,
          placeholder: t('lastName', {
            fallback: 'Last Name',
          }),
        },
        {
          label: t('email', {
            fallback: 'Email',
          }),
          value: user?.email,
          placeholder: t('email', {
            fallback: 'Email',
          }),
        },
        {
          label: t('phone.1', {
            fallback: 'Phone Number',
          }),
          value: user?.phone,
          placeholder: '000-000-0000',
        },
        {
          label: t('address.1', {
            fallback: 'Street Address',
          }),
          value: user?.address,
          placeholder: t('address.0', {
            fallback: 'Street Address',
          }),
        },
        {
          label: t('apartment.1', {
            fallback: 'Apartment',
          }),
          value: user?.apartment,
          placeholder: t('apartment.0', {
            fallback: 'Leave blank if not applicable.',
          }),
        },
        {
          label: t('city.1', {
            fallback: 'City',
          }),
          value: user?.city,
          placeholder: t('city.0', {
            fallback: "Where you're building from.",
          }),
        },
        {
          label: t('country.1', {
            fallback: 'Country',
          }),
          value: user?.country,
          placeholder: t('country.0', {
            fallback:
              "We work globally, but we like to know where you're based.",
          }),
        },
        {
          label: t('zip.1', {
            fallback: 'Postal Code',
          }),
          value: user?.zip,
          placeholder: t('zip.0', {
            fallback:
              'For accurate billing, receipts, and logistics if needed.',
          }),
        },
      ].map(field => (
        <KeyLabel
          key={field.label}
          label={field.label}
          value={
            field.value && field.value !== '' ? field.value : field.placeholder
          }
        />
      ))}
    </section>
  );
};

const KeyLabel = ({ label, value }: { label: string; value: string }) => (
  <section className="flex flex-col gap-2">
    <span className="opacity-50">
      <Text color="black">{label}</Text>
    </span>
    <Text color="black" size="2xl">
      {value}
    </Text>
  </section>
);
