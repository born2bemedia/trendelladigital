'use client';

import { useTranslations } from 'next-intl';

import { Title } from '@/shared/ui/kit/title';

import type { Group } from '../model/types';
import { GroupCard } from './card';

export const GroupList = ({
  groups,
  type,
}: {
  groups: Group[];
  type: 'marketing' | 'business';
}) => {
  const t = useTranslations('plansAndPricing.groups');

  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] pt-10 pb-[60px] max-md:px-4 max-md:pb-4">
      <Title color="black">
        {type === 'marketing'
          ? t('marketingTitle', { fallback: 'Marketing Consulting Pricing' })
          : t('businessTitle', { fallback: 'Business Consulting Pricing' })}
      </Title>
      <section className="flex flex-col gap-10">
        {groups.map(group => (
          <GroupCard key={group.id} {...group} />
        ))}
      </section>
    </section>
  );
};
