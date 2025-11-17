'use client';

import { useTranslations } from 'next-intl';

import { ImgHero } from '@/shared/ui/components/img-hero';

export const Hero = () => {
  const t = useTranslations('contactUs.hero');

  return (
    <ImgHero
      img={{
        alt: 'people',
        url: '/images/contact-us/hero.jpg',
      }}
      title={t('title', { fallback: 'Contact Us' })}
      description={`${t('description.0', { fallback: 'We’d love to hear from you.' })} ${t(
        'description.1',
        {
          fallback:
            'Fill out the form and we’ll be in touch to explore how we can help.',
        },
      )}`}
    />
  );
};
