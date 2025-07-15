'use client';

import { useTranslations } from 'next-intl';

import { ConsultingReviews } from '@/features/consulting/ui/consulting-reviews';

export const Reviews = () => {
  const t = useTranslations('consultingReviews.marketing');

  const items = [
    {
      imgUrl: '/images/marketing-consulting/reviews/j-price.png',
      name: t('0.name', { fallback: 'Jordan Price' }),
      position: t('0.position', { fallback: 'Creator & Copy Strategist' }),
      review: t('0.review', {
        fallback: 'I stopped guessing — and started growing.',
      }),
      description: t('0.description', {
        fallback:
          'Trendella Digital helped me clarify my message, streamline my funnel, and finally connect with the clients I actually wanted.',
      }),
    },
    {
      imgUrl: '/images/marketing-consulting/reviews/e-navarro.png',
      name: t('1.name', { fallback: 'Eli Navarro' }),
      position: t('1.position', { fallback: 'Creative Copywriter' }),
      review: t('1.review', {
        fallback: 'They helped me find my voice — and turn it into sales.',
      }),
      description: t('1.description', {
        fallback:
          'My audience used to scroll past. Now they stop, read, and convert. The difference in clarity and confidence is unreal.',
      }),
    },
    {
      imgUrl: '/images/marketing-consulting/reviews/d-hale.png',
      name: t('2.name', { fallback: 'Devon Hale' }),
      position: t('2.position', { fallback: 'UX Consultant' }),
      review: t('2.review', {
        fallback: 'Every campaign feels like it has a purpose now.',
      }),
      description: t('2.description', {
        fallback:
          "They didn't just help with strategy — they taught me how to think about marketing like a business owner.",
      }),
    },
    {
      imgUrl: '/images/marketing-consulting/reviews/a-mercer.png',
      name: t('3.name', { fallback: 'Alina Mercer' }),
      position: t('3.position', { fallback: 'Coach & Founder' }),
      review: t('3.review', {
        fallback:
          'I finally feel like my brand has a direction — and a system that backs it up.',
      }),
      description: t('3.description', {
        fallback:
          'Their team brought structure to my chaos and turned sporadic content into consistent growth.',
      }),
    },
    {
      imgUrl: '/images/marketing-consulting/reviews/n-park.png',
      name: t('4.name', { fallback: 'Nina Park' }),
      position: t('4.position', { fallback: 'Co-Founder' }),
      review: t('4.review', {
        fallback: 'Our marketing finally has structure — not just ideas.',
      }),
      description: t('4.description', {
        fallback:
          "From funnel design to campaign rollout, everything we do now has purpose. We're seeing better engagement and qualified leads every week.",
      }),
    },
    {
      imgUrl: '/images/marketing-consulting/reviews/s-kim.png',
      name: t('5.name', { fallback: 'Sasha Kim' }),
      position: t('5.position', { fallback: 'Personal Brand Strategist' }),
      review: t('5.review', {
        fallback:
          'Before Trendella Digital, I was posting constantly with zero traction.',
      }),
      description: t('5.description', {
        fallback:
          'Now, I have a real system that brings in leads without burnout. My messaging finally clicks — and so do my results.',
      }),
    },
  ];

  return <ConsultingReviews items={items} />;
};
