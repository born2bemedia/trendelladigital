'use client';

import { useTranslations } from 'next-intl';

import { ConsultingBookStrategy } from '@/features/consulting/ui/consulting-book-strategy';

export const Book = () => {
  const t = useTranslations('consultingBookStrategy.business');

  return (
    <ConsultingBookStrategy
      title={t('title', { fallback: 'Ready to Build with Confidence?' })}
      description={t('description', {
        fallback:
          'Let’s co-design the systems that move your business forward — clearly, efficiently, and on your terms.',
      })}
    />
  );
};
