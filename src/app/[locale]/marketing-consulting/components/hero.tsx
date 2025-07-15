'use client';

import { useTranslations } from 'next-intl';

import { ConsultingHero } from '@/features/consulting/ui/consulting-hero';

export const Hero = () => {
  const t = useTranslations('marketingConsulting.hero');

  return (
    <ConsultingHero
      type="marketing"
      imgUrl="/images/marketing-consulting/hero.jpg"
      title={t('title', { fallback: 'Marketing Consulting Services' })}
      description={t('description', {
        fallback: 'Let’s make your brand unignorable.',
      })}
      btnMeta={{
        label: t('button', { fallback: 'Talk to an Expert' }),
        url: '/contact',
      }}
    />
  );
};
