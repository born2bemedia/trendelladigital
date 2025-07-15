'use client';

import { useTranslations } from 'next-intl';

import { ConsultingBookStrategy } from '@/features/consulting/ui/consulting-book-strategy';

export const Book = () => {
  const t = useTranslations('consultingBookStrategy.marketing');

  return (
    <ConsultingBookStrategy
      title={t('title', {
        fallback: 'Ready to Market With Clarity and Confidence?',
      })}
      description={t('description', {
        fallback:
          'Let’s build a marketing engine that speaks clearly, sells naturally, and scales sustainably — all without sacrificing your voice.',
      })}
    />
  );
};
