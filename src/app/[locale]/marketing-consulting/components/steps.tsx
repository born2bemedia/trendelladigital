'use client';

import { useTranslations } from 'next-intl';

import { ConsultingSteps } from '@/features/consulting/ui/consulting-steps';

export const Steps = () => {
  const t = useTranslations('consultingSteps.marketing');

  const values = [
    {
      title: t('values.0.title'),
      description: t('values.0.description'),
    },
    {
      title: t('values.1.title'),
      description: t('values.1.description'),
    },
    {
      title: t('values.2.title'),
      description: t('values.2.description'),
    },
    {
      title: t('values.3.title'),
      description: t('values.3.description'),
    },
  ];

  return <ConsultingSteps title={t('title')} values={values} />;
};
