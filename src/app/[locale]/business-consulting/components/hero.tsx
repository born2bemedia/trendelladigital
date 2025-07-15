'use client';

import { useTranslations } from 'next-intl';

import { ConsultingHero } from '@/features/consulting/ui/consulting-hero';

export const Hero = () => {
  const t = useTranslations('businessConsulting.hero');

  return (
    <ConsultingHero
      type="business"
      imgUrl="/images/business-consulting/hero.jpg"
      title={t('title', { fallback: 'Business Consulting Services' })}
      description={t('description', {
        fallback: 'Let’s design, refine, and elevate your business — together.',
      })}
      btnMeta={{
        label: t('button', { fallback: 'Talk to an Expert' }),
        url: '/contact',
      }}
    />
  );
};
