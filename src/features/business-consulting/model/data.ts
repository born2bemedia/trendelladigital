import type { useTranslations } from 'next-intl';

export const getBusinessConsulting = (
  t: ReturnType<typeof useTranslations>,
) => ({
  name: t('name', { fallback: 'Business Consulting' }),
  subtitle: t('subtitle', {
    fallback: 'Build Your Business with Expert Support',
  }),
  excerpt: t('excerpt', {
    fallback:
      'We help you create a practical, profitable business around your ideas and abilities.',
  }),
  description: t('description', {
    fallback:
      "Whether you're just starting or ready to level up, our business consulting gives you clarity, confidence, and traction.",
  }),
  label: t('label', {
    fallback: 'Ready to build a business that works for you?',
  }),
  buttonLabel: t('buttonLabel', {
    fallback: 'Explore Business Consulting',
  }),
  includeLabel: t('includeLabel', { fallback: 'Services include:' }),
  includes: [
    t('includes.0', {
      fallback: 'Business model design & scalable monetization strategy',
    }),
    t('includes.1', {
      fallback: 'Sales strategy development with lead-generation systems',
    }),
    t('includes.2', {
      fallback: 'High-converting offer architecture & pricing systems',
    }),
    t('includes.3', {
      fallback: 'Operational workflows & automation for solo founders',
    }),
    t('includes.4', {
      fallback: 'Personalized revenue roadmap with milestones & metrics',
    }),
    t('includes.5', {
      fallback: 'Strategic decision-making support & business diagnostics',
    }),
  ],
});
