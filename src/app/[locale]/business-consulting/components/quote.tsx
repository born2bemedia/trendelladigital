'use client';

import { useTranslations } from 'next-intl';

import { ConsultingQuote } from '@/features/consulting/ui/consulting-quote';

export const Quote = () => {
  const t = useTranslations('businessConsulting.quote');

  return (
    <ConsultingQuote
      type="business"
      value={t('value', {
        fallback:
          'We’ve seen too many brilliant people burn out inside messy, overcomplicated businesses. Our job is to change that — with systems that support how you lead, not how others say you should. We treat every client’s business like our own — no fluff, no filler, just strategy that performs. Your time is valuable, and your growth deserves more than recycled advice.',
      })}
      who={t('who', {
        fallback: 'CEO, Trendella Digital',
      })}
    />
  );
};
