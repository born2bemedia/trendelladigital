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

export const getBusinessConsultingDetailed = () => ({
  description:
    'Strategic business architecture for experts who are ready to scale.',
  includes: [
    'Structuring a business model that’s sustainable, lean, and scalable',
    'Designing premium offers that are irresistible and deliver real value',
    'Crafting a personalized revenue roadmap with clear milestones',
    'Engineering monetization systems that support predictable incomes',
    'Streamlining backend workflows and automations for solo operators',
    'Running diagnostics to identify inefficiencies and strategic gaps',
  ],
});
