import type { useTranslations } from 'next-intl';

export const getMarketingConsulting = (
  t: ReturnType<typeof useTranslations>,
) => ({
  name: t('name', { fallback: 'Marketing Consulting' }),
  subtitle: t('subtitle', {
    fallback: 'Market Yourself Like a Brand. Sell Like a Pro.',
  }),
  excerpt: t('excerpt', {
    fallback:
      'Effective marketing doesn’t start with posting. It starts with positioning, strategy, and the right systems behind it.',
  }),
  description: t('description', {
    fallback:
      'For creators, coaches, freelancers, and experts who are ready to go from “posting” to profiting.',
  }),
  label: t('label', { fallback: 'Tired of marketing that doesn’t work?' }),
  buttonLabel: t('buttonLabel', {
    fallback: 'Discover Marketing Consulting',
  }),
  includeLabel: t('includeLabel', { fallback: 'We help with:' }),
  includes: [
    t('includes.0', {
      fallback: 'Brand messaging strategy & visual identity alignment',
    }),
    t('includes.1', {
      fallback: 'Campaign planning with performance analysis & refinement',
    }),
    t('includes.2', {
      fallback: 'Content marketing ecosystems (email, social, video, funnels)',
    }),
    t('includes.3', {
      fallback: 'Visibility growth strategies across owned & earned media',
    }),
    t('includes.4', {
      fallback: 'Target audience profiling & niche dominance tactics',
    }),
    t('includes.5', {
      fallback: 'Strategic funnel mapping & conversion optimization',
    }),
  ],
});

export const getMarketingConsultingDetailed = () => ({
  description: 'Marketing systems that build demand, and deliver results.',
  includes: [
    'Sharpening brand messaging and visual identity for instant resonance',
    'Building full-funnel ecosystems across content, email, and social media',
    'Pinpointing your ideal audience and carving out niche authority',
    'Mapping out funnel strategy — from lead generation to paid conversion',
    'Planning campaigns with built-in performance optimization loops',
    'Scaling visibility across owned, earned, and leveraged platforms',
  ],
});
