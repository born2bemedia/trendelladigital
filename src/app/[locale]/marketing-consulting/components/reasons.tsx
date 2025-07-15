'use client';

import { useTranslations } from 'next-intl';

import { ConsultingReasons } from '@/features/consulting/ui/consulting-reasons';

export const Reasons = () => {
  const t = useTranslations('consultingReasons.marketing');

  const values = [
    {
      title: t('0.title'),
      description: t('0.description'),
    },
    {
      title: t('1.title'),
      description: t('1.description'),
    },
    {
      title: t('2.title'),
      description: t('2.description'),
    },
    {
      title: t('3.title'),
      description: t('3.description'),
    },
  ];

  return <ConsultingReasons values={values} />;
};
