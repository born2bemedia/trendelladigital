'use client';

import { useTranslations } from 'next-intl';

import { ConsultingInfoBlock } from '@/features/consulting/ui/consulting-info-block';

export const Info = () => {
  const t = useTranslations('businessConsulting.info');

  return (
    <ConsultingInfoBlock
      type="business"
      title={t('title', {
        fallback: 'Structure That Works Harder Than You Do',
      })}
      subtitle={t('subtitle', {
        fallback: 'Wondering what comes',
      })}
      description={
        <>
          {t('description.0', {
            fallback:
              "You didn't build your expertise to stay stuck in burnout. Most business challenges are structural, not personal.",
          })}{' '}
          <br />
          <br />
          {t('description.1', {
            fallback:
              "We help you design systems that reduce friction, sharpen focus, and scale what already works — from business models to pricing and operations. Clarity isn't just a feeling — it drives results.",
          })}
        </>
      }
      list={{
        title: t('list.title', {
          fallback: 'We Build the Business Behind the Expertise',
        }),
        description: t('list.description', {
          fallback:
            'Strategy only matters if it changes what happens Monday morning. We work hands-on to design a business foundation that performs — not just looks polished on paper.',
        }),
        items: [
          t('list.items.0', {
            fallback:
              'A business model you can explain — and scale with confidence',
          }),
          t('list.items.1', {
            fallback: 'Offers that convert by solving real problems',
          }),
          t('list.items.2', {
            fallback: 'Revenue streams that are sustainable and strategic',
          }),
          t('list.items.3', {
            fallback: 'Pricing that reflects your value and supports growth',
          }),
          t('list.items.4', {
            fallback: 'Operations that save time, not drain it',
          }),
          t('list.items.5', {
            fallback: 'Systems that grow with you — not around you',
          }),
        ],
      }}
    />
  );
};
