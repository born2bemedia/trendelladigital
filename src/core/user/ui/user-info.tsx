'use client';

import { Text } from '@/shared/ui/kit/text';

import { useUserStore } from '../model/user.store';

export const UserInfo = () => {
  const { user } = useUserStore();

  return (
    <section className="flex flex-col gap-6">
      {[
        {
          label: 'First Name',
          value: user?.firstName,
          placeholder: 'First Name',
        },
        {
          label: 'Last Name',
          value: user?.lastName,
          placeholder: 'Last Name',
        },
        {
          label: 'Email',
          value: user?.email,
          placeholder: 'Email',
        },
        {
          label: 'Phone Number',
          value: user?.phone,
          placeholder: '000-000-0000',
        },
        {
          label: 'Street Address',
          value: user?.address,
          placeholder: 'Street Address',
        },
        {
          label: 'Apartment',
          value: user?.apartment,
          placeholder: 'Leave blank if not applicable.',
        },
        {
          label: 'City',
          value: user?.city,
          placeholder: "Where you're building from.",
        },
        {
          label: 'Country',
          value: user?.country,
          placeholder:
            "We work globally, but we like to know where you're based.",
        },
        {
          label: 'Postal Code',
          value: user?.zip,
          placeholder:
            'For accurate billing, receipts, and logistics if needed.',
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
