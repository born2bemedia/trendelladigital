'use client';

import { useTranslations } from 'next-intl';

import { ImgHero } from '@/shared/ui/components/img-hero';

export const Hero = () => {
  const t = useTranslations('plansAndPricing.hero');

  return (
    <ImgHero
      img={{
        alt: 'people',
        url: '/images/pricing/hero.jpg',
      }}
      title={t('title', { fallback: 'Plans & Pricing' })}
      description={t('description', {
        fallback:
          'Explore detailed packages, services, and investment levels, all designed to meet you where you are and move you where you want to go. We break down every offer so you know exactly what you’re getting, how it works, and what outcomes to expect. Still not sure what’s the right fit?',
      })}
      button={{
        label: t('button', { fallback: 'Contact Us' }),
        url: '/contact-us',
      }}
    />
  );
};
