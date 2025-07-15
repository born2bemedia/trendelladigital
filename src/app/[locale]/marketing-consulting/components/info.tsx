'use client';

import { useTranslations } from 'next-intl';

import { ConsultingInfoBlock } from '@/features/consulting/ui/consulting-info-block';

export const Info = () => {
  const t = useTranslations('marketingConsulting.info');

  return (
    <ConsultingInfoBlock
      type="marketing"
      title={t('title', {
        fallback: 'Visibility Is Only Half The Story, Conversion Is the Rest',
      })}
      description={
        <>
          {t('description.0', {
            fallback:
              "You're already doing the work — now let's make sure the right people see it, value it, and act. We help you build a strategy-first marketing system that drives attention and action.",
          })}{' '}
          <br />
          <br />
          {t('description.1', {
            fallback:
              'When your message is clear, your audience knows exactly why they need you — and what to do next.',
          })}{' '}
          <br />
          <br />
          {t('description.2', {
            fallback:
              'Together, we create the clarity and structure to deliver that message consistently, without relying on constant posting or burnout.',
          })}{' '}
          <br />
          <br />
          {t('description.3', {
            fallback:
              'No noise. No guesswork. Just marketing that performs — and compounds over time.',
          })}
        </>
      }
      subtitle={t('subtitle', {
        fallback: 'Interested in how we turn strategy into action?',
      })}
      list={{
        title: t('list.title', {
          fallback: 'We Build the Marketing Engine Behind the Brand',
        }),
        description: t('list.description', {
          fallback:
            'Effective marketing starts with purpose. We partner with you to build a strategy-led foundation that drives visibility, qualifies leads, and builds trust that converts.',
        }),
        items: [
          t('list.items.0', {
            fallback: 'Messaging that resonates — and stands out',
          }),
          t('list.items.1', {
            fallback: 'A funnel that moves people from interest to action',
          }),
          t('list.items.2', {
            fallback:
              'Positioning that highlights your strengths and attracts the right clients',
          }),
          t('list.items.3', {
            fallback: 'Content frameworks that save time and create demand',
          }),
          t('list.items.4', {
            fallback: 'Campaigns built to convert, not just fill a calendar',
          }),
          t('list.items.5', {
            fallback: 'A lead-gen system that runs without chasing trends',
          }),
        ],
      }}
    />
  );
};
