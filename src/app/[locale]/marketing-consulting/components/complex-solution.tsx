'use client';

import { useTranslations } from 'next-intl';

import { ConsultingComplexSolution } from '@/features/consulting/ui/consulting-complex-solution';

export const ComplexSolution = () => {
  const t = useTranslations('consultingComplexSolution.marketing');

  return (
    <ConsultingComplexSolution
      type="marketing"
      solutions={{
        cheap: {
          name: t('cheap.name', { fallback: 'Clarity Intensive' }),
          description: t('cheap.description', {
            fallback:
              'Get your positioning, messaging, and marketing structure in sync.',
          }),
          bestFor: [
            t('cheap.bestFor.0', { fallback: 'personal brands' }),
            t('cheap.bestFor.1', { fallback: 'freelancers' }),
            t('cheap.bestFor.2', {
              fallback: 'or creators looking to align and simplify.',
            }),
          ],
          includes: [
            t('cheap.includes.0', {
              fallback: '90-min messaging & positioning strategy session',
            }),
            t('cheap.includes.1', {
              fallback: '1 follow-up support session (60 mins)',
            }),
            t('cheap.includes.2', {
              fallback: 'Brand & funnel audit with action summary',
            }),
            t('cheap.includes.3', {
              fallback: 'Content & CTA framework templates',
            }),
            t('cheap.includes.4', {
              fallback: '30-day marketing plan tailored to one core offer',
            }),
            t('cheap.includes.5', {
              fallback: 'Email access for 7 days post-session',
            }),
          ],
          price: 5600,
        },
        moderate: {
          name: t('moderate.name', { fallback: 'Growth Engine' }),
          description: t('moderate.description', {
            fallback:
              'A hands-on engagement to build (or rebuild) your marketing system for traction.',
          }),
          bestFor: [
            t('moderate.bestFor.0', { fallback: 'coaches' }),
            t('moderate.bestFor.1', { fallback: 'service providers' }),
            t('moderate.bestFor.2', {
              fallback: 'consultants ready for full-funnel strategy.',
            }),
          ],
          includes: [
            t('moderate.includes.0', {
              fallback: 'Funnel mapping & conversion optimization',
            }),
            t('moderate.includes.1', {
              fallback: 'Campaign planning & KPI dashboard setup',
            }),
            t('moderate.includes.2', {
              fallback: 'Core messaging + content ecosystem setup',
            }),
            t('moderate.includes.3', {
              fallback: 'Email + Slack support between calls',
            }),
            t('moderate.includes.4', {
              fallback: '4 x 1:1 implementation sessions (biweekly)',
            }),
            t('moderate.includes.5', {
              fallback: '90-day funnel content & campaign roadmap',
            }),
          ],
          price: 10010,
        },
        expensive: {
          name: t('expensive.name', {
            fallback: 'Full Visibility Accelerator',
          }),
          description: t('expensive.description', {
            fallback:
              'A fully tailored system for marketing that scales with you — and works while you sleep.',
          }),
          bestFor: [
            t('expensive.bestFor.0', {
              fallback: 'experts launching a signature offer',
            }),
            t('expensive.bestFor.1', { fallback: 'growing teams' }),
            t('expensive.bestFor.2', {
              fallback: 'or scaling visibility.',
            }),
          ],
          includes: [
            t('expensive.includes.0', {
              fallback:
                'Full marketing audit (messaging, content, funnels, data)',
            }),
            t('expensive.includes.1', {
              fallback: 'Content calendar, channel strategy & SEO plan',
            }),
            t('expensive.includes.2', {
              fallback: 'Strategic campaign design & lead magnet optimization',
            }),
            t('expensive.includes.3', {
              fallback: 'Visibility & PR strategy roadmap',
            }),
            t('expensive.includes.4', {
              fallback: '8 x consulting sessions over 8–10 weeks',
            }),
            t('expensive.includes.5', {
              fallback: 'Email automation build + evergreen funnel blueprint',
            }),
            t('expensive.includes.6', {
              fallback: 'Performance dashboards & testing frameworks',
            }),
          ],
          price: 16450,
        },
      }}
    />
  );
};
