'use client';

import { useTranslations } from 'next-intl';

import { ConsultingReviews } from '@/features/consulting/ui/consulting-reviews';

export const Reviews = () => {
  const t = useTranslations('consultingReviews.business');

  const items = [
    {
      imgUrl: '/images/business-consulting/reviews/a-ruiz.png',
      name: t('0.name', { fallback: 'Ana Ruiz' }),
      position: t('0.position', { fallback: 'Founder' }),
      review: t('0.review', {
        fallback:
          'I finally feel in control of my business — not buried by it.',
      }),
      description: t('0.description', {
        fallback:
          "Working with Idelaria gave me the structure, clarity, and momentum I didn't know I was missing.",
      }),
    },
    /*{
      imgUrl: '/images/business-consulting/reviews/m-dean.png',
      name: t('1.name', { fallback: 'Marcus Dean' }),
      position: t('1.position', { fallback: 'Consultant & Strategist' }),
      review: t('1.review', {
        fallback:
          'From scattered ideas to a real, profitable offer — in 6 weeks.',
      }),
      description: t('1.description', {
        fallback:
          "Their process is sharp, personalized, and actually works. It's consulting that gets results, not confusion.",
      }),
    },
    {
      imgUrl: '/images/business-consulting/reviews/leila-k.png',
      name: t('2.name', { fallback: 'Leila K.' }),
      position: t('2.position', { fallback: 'CEO' }),
      review: t('2.review', {
        fallback: "They helped me build systems I didn't even know I needed.",
      }),
      description: t('2.description', {
        fallback:
          'Everything now runs smoother — and I finally have time to lead, not just react.',
      }),
    },*/
    {
      imgUrl: '/images/business-consulting/reviews/r-mehta.png',
      name: t('3.name', { fallback: 'Ravi Mehta' }),
      position: t('3.position', { fallback: 'Solo Founder, Tech Consult Co.' }),
      review: t('3.review', {
        fallback: "They didn't just give me advice — they helped me build.",
      }),
      description: t('3.description', {
        fallback:
          'From backend automation to refining my client journey, every part of my business now runs cleaner and more profitably.',
      }),
    },
    {
      imgUrl: '/images/business-consulting/reviews/j-carter.png',
      name: t('4.name', { fallback: 'James Carter' }),
      position: t('4.position', { fallback: 'Founder' }),
      review: t('4.review', {
        fallback: 'I knew I had potential — but no idea how to scale it.',
      }),
      description: t('4.description', {
        fallback:
          'Idelaria helped me turn what I do into a real business model, with offers, pricing, and systems that finally make sense.',
      }),
    },
    {
      imgUrl: '/images/business-consulting/reviews/d-moore.png',
      name: t('5.name', { fallback: 'Danielle Moore' }),
      position: t('5.position', { fallback: 'Coach & Educator' }),
      review: t('5.review', { fallback: 'The clarity was almost immediate.' }),
      description: t('5.description', {
        fallback:
          'I came in overwhelmed and second-guessing everything. Within weeks, I had a roadmap, momentum, and decisions I could stand behind.',
      }),
    },
  ];

  return <ConsultingReviews items={items} />;
};
