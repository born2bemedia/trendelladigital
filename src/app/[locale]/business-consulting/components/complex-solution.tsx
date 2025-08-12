'use client';

import { useTranslations } from 'next-intl';

import { ConsultingComplexSolution } from '@/features/consulting/ui/consulting-complex-solution';

export const ComplexSolution = () => {
  const t = useTranslations('consultingComplexSolution.business');

  return (
    <ConsultingComplexSolution
      type="business"
      solutions={{
        cheap: {
          name: t('cheap.name', { fallback: 'Essentials' }),
          description: t('cheap.description', {
            fallback:
              'Clarity and structure to get you unstuck and into motion.',
          }),
          bestFor: [
            t('cheap.bestFor.0', { fallback: 'early-stage founders' }),
            t('cheap.bestFor.1', { fallback: 'solo service providers' }),
            t('cheap.bestFor.2', { fallback: 'post-pivot rebuilds.' }),
          ],
          includes: [
            t('cheap.includes.0', {
              fallback: '1:1 diagnostic strategy session (90 mins)',
            }),
            t('cheap.includes.1', {
              fallback: 'Tools & templates to support execution',
            }),
            t('cheap.includes.2', {
              fallback: 'Offer & pricing architecture review',
            }),
            t('cheap.includes.3', {
              fallback: '1 follow-up support session (60 mins)',
            }),
            t('cheap.includes.4', {
              fallback: '30-day personalized action plan',
            }),
            t('cheap.includes.5', {
              fallback: 'Private feedback channel (Slack/email)',
            }),
          ],
          price: 5950,
        },
        moderate: {
          name: t('moderate.name', { fallback: 'Growth Partner' }),
          description: t('moderate.description', {
            fallback:
              'A hands-on consulting track with structure, strategy, and momentum.',
          }),
          bestFor: [
            t('moderate.bestFor.0', { fallback: 'consultants' }),
            t('moderate.bestFor.1', { fallback: 'coaches' }),
            t('moderate.bestFor.2', {
              fallback: 'and creators refining or relaunching.',
            }),
          ],
          includes: [
            t('moderate.includes.0', {
              fallback: 'Strategy blueprint & business model redesign',
            }),
            t('moderate.includes.1', {
              fallback: 'Revenue roadmap with custom KPI tracking',
            }),
            t('moderate.includes.2', {
              fallback: 'Offer suite + pricing strategy implementation',
            }),
            t('moderate.includes.3', {
              fallback: 'Funnel and sales audit + optimization guidance',
            }),
            t('moderate.includes.4', {
              fallback: '4 biweekly 1:1 consulting calls (60 mins)',
            }),
            t('moderate.includes.5', {
              fallback: 'Email + Slack access for support between sessions',
            }),
          ],
          price: 11340,
        },
        expensive: {
          name: t('expensive.name', { fallback: 'Founder Lab (Full Build)' }),
          description: t('expensive.description', {
            fallback:
              'Bespoke, end-to-end consulting designed to transform your business from the inside out.',
          }),
          bestFor: [
            t('expensive.bestFor.0', {
              fallback: 'founders scaling operations',
            }),
            t('expensive.bestFor.1', { fallback: 'teams' }),
            t('expensive.bestFor.2', {
              fallback: 'or programs — and ready for custom infrastructure.',
            }),
          ],
          includes: [
            t('expensive.includes.0', {
              fallback: 'Full business diagnostic & founder profile assessment',
            }),
            t('expensive.includes.1', {
              fallback: 'Operational systems, automation, and SOP builds',
            }),
            t('expensive.includes.2', {
              fallback: 'Custom strategy & monetization blueprint',
            }),
            t('expensive.includes.3', {
              fallback: 'Team/capacity plan + hiring roadmap',
            }),
            t('expensive.includes.4', {
              fallback: '8 x 1:1 working sessions (weekly or biweekly)',
            }),
            t('expensive.includes.5', {
              fallback: 'Client experience and retention system design',
            }),
            t('expensive.includes.6', {
              fallback: 'Offer development + launch support',
            }),
            t('expensive.includes.7', {
              fallback: 'Full KPI dashboard + review cadence',
            }),
          ],
          price: 20510,
        },
      }}
    />
  );
};
