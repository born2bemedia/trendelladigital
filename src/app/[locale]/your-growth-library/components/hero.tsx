'use client';

import { useTranslations } from 'next-intl';

import { ImgHero } from '@/shared/ui/components/img-hero';

export const Hero = () => {
  const t = useTranslations('yourGrowthLibrary.hero');

  return (
    <ImgHero
      img={{
        alt: 'people',
        url: '/images/your-growth-library/hero.jpg',
      }}
      title={t('title', { fallback: 'Your Growth Library' })}
      description={t('description', {
        fallback:
          'Explore practical insights, proven strategies, and honest lessons from the field, designed to help you build with clarity.',
      })}
    />
  );
};
