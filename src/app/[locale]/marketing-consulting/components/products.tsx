'use client';

import { useTranslations } from 'next-intl';

import { ConsultingProduct } from '@/features/consulting/ui/consulting-product';
import { ConsultingProductLayout } from '@/features/consulting/ui/consulting-product-layout';

export const Products = () => {
  const t = useTranslations('consultingProduct.marketing');

  const products = [
    {
      name: t('1.name', {
        fallback: 'Brand Messaging Strategy & Visual Identity Alignment',
      }),
      description: t('1.description', {
        fallback:
          'We clarify what your brand says, how it sounds, and why it stands out — across every touchpoint.',
      }),
      includes: [
        t('1.includes.0', { fallback: 'Brand voice & tone guide' }),
        t('1.includes.1', { fallback: 'Core messaging pillars' }),
        t('1.includes.2', {
          fallback: 'Tagline, elevator pitch & "about" rewrites',
        }),
        t('1.includes.3', { fallback: 'Visual direction alignment audit' }),
        t('1.includes.4', {
          fallback: 'Website copy & brand story refinement',
        }),
        t('1.includes.5', {
          fallback: 'Brand positioning in competitive landscape',
        }),
      ],
    },
    {
      name: t('2.name', {
        fallback: 'Strategic Funnel Mapping & Conversion Optimization',
      }),
      description: t('2.description', {
        fallback:
          'We design and refine your funnel for clarity, ease, and consistent conversion — from first click to paying client.',
      }),
      includes: [
        t('2.includes.0', {
          fallback: 'Funnel blueprint creation (opt-in to sale)',
        }),
        t('2.includes.1', {
          fallback: 'Entry point strategy (lead magnets, quizzes, etc.)',
        }),
        t('2.includes.2', {
          fallback: 'Conversion page audit + recommendations',
        }),
        t('2.includes.3', {
          fallback: 'Email sequence planning (nurture, sales, retention)',
        }),
        t('2.includes.4', {
          fallback: 'Performance tracking setup (click-through, open, CVR)',
        }),
        t('2.includes.5', {
          fallback: 'A/B testing plan and iteration schedule',
        }),
      ],
    },
    {
      name: t('3.name', {
        fallback: 'Content Marketing Ecosystems',
      }),
      description: t('3.description', {
        fallback:
          'We help you build a cohesive content system that creates demand and supports your funnel — with less effort.',
      }),
      includes: [
        t('3.includes.0', { fallback: 'Multi-channel content strategy' }),
        t('3.includes.1', {
          fallback: 'Evergreen vs. timely content planning',
        }),
        t('3.includes.2', { fallback: 'Repurposing & batching frameworks' }),
        t('3.includes.3', {
          fallback: 'Visual content brief for designers or video editors',
        }),
        t('3.includes.4', {
          fallback: 'Branded content templates & copy frameworks',
        }),
        t('3.includes.5', {
          fallback: 'Promotion workflows and publishing cadence',
        }),
      ],
    },
    {
      name: t('4.name', {
        fallback: 'Campaign Planning with Performance Analysis & Refinement',
      }),
      description: t('4.description', {
        fallback:
          'We map marketing campaigns that are built to convert — not just post for visibility.',
      }),
      includes: [
        t('4.includes.0', { fallback: '30–90 day campaign planning sessions' }),
        t('4.includes.1', { fallback: 'Launch & promotion calendars' }),
        t('4.includes.2', { fallback: 'KPI tracking dashboard setup' }),
        t('4.includes.3', { fallback: 'Post-campaign performance debrief' }),
        t('4.includes.4', { fallback: 'Optimization process with key levers' }),
        t('4.includes.5', { fallback: 'Cross-channel alignment checklist' }),
      ],
    },
    {
      name: t('5.name', {
        fallback: 'Target Audience Profiling & Niche Dominance Tactics',
      }),
      description: t('5.description', {
        fallback:
          'We help you define, segment, and lead your niche with confidence.',
      }),
      includes: [
        t('5.includes.0', {
          fallback: 'Customer research surveys & interviews',
        }),
        t('5.includes.1', { fallback: 'Audience segmentation map' }),
        t('5.includes.2', { fallback: 'Buyer journey design' }),
        t('5.includes.3', { fallback: 'Offer-audience fit evaluation' }),
        t('5.includes.4', { fallback: 'Market positioning analysis' }),
        t('5.includes.5', { fallback: 'Competitor messaging gap map' }),
      ],
    },
    {
      name: t('6.name', {
        fallback: 'Visibility Growth Strategies Across Owned & Earned Media',
      }),
      description: t('6.description', {
        fallback:
          'We expand your reach through organic and earned channels — sustainably and strategically.',
      }),
      includes: [
        t('6.includes.0', {
          fallback: 'Owned media channel strategy (blog, podcast, etc.)',
        }),
        t('6.includes.1', { fallback: 'Guest features & PR strategy outline' }),
        t('6.includes.2', { fallback: 'SEO-ready content plans' }),
        t('6.includes.3', {
          fallback: 'Social proof & authority asset planning',
        }),
        t('6.includes.4', {
          fallback: 'Referral and affiliate program planning',
        }),
        t('6.includes.5', { fallback: 'Strategic partnership pitch scripts' }),
      ],
    },
    {
      name: t('7.name', {
        fallback: 'Email Marketing Strategy & Automation Flows',
      }),
      description: t('7.description', {
        fallback:
          'Email remains one of the most powerful tools for nurturing, converting, and retaining clients — when done right.',
      }),
      includes: [
        t('7.includes.0', { fallback: 'List segmentation + audience tagging' }),
        t('7.includes.1', { fallback: 'Welcome & onboarding sequences' }),
        t('7.includes.2', { fallback: 'Sales & re-engagement sequences' }),
        t('7.includes.3', { fallback: 'Behavior-based automation triggers' }),
        t('7.includes.4', { fallback: 'Promotional broadcast templates' }),
        t('7.includes.5', {
          fallback: 'Deliverability audit and optimization',
        }),
      ],
    },
    {
      name: t('8.name', {
        fallback: 'Marketing Metrics & Analytics Setup',
      }),
      description: t('8.description', {
        fallback:
          'We ensure you track what matters and make decisions based on real data — not intuition.',
      }),
      includes: [
        t('8.includes.0', {
          fallback: 'KPI dashboard setup (GA, CRM, social)',
        }),
        t('8.includes.1', { fallback: 'Conversion tracking implementation' }),
        t('8.includes.2', { fallback: 'Lead source attribution mapping' }),
        t('8.includes.3', { fallback: 'Campaign-level reporting templates' }),
        t('8.includes.4', {
          fallback: 'Analytics training for non-tech teams',
        }),
        t('8.includes.5', { fallback: 'UTM strategy and naming conventions' }),
      ],
    },
    {
      name: t('9.name', {
        fallback: 'Value-Driven Social Media Strategy',
      }),
      description: t('9.description', {
        fallback:
          'We help you build a smart presence on social media that serves your goals — without chasing trends.',
      }),
      includes: [
        t('9.includes.0', {
          fallback: 'Platform-specific strategy by audience intent',
        }),
        t('9.includes.1', { fallback: 'Content buckets & post types' }),
        t('9.includes.2', { fallback: 'Engagement & DM flow frameworks' }),
        t('9.includes.3', { fallback: 'Hashtag and SEO strategy for reach' }),
        t('9.includes.4', { fallback: 'Post and story CTAs that convert' }),
        t('9.includes.5', {
          fallback: 'Analytics & performance review rhythm',
        }),
      ],
    },
    {
      name: t('10.name', {
        fallback: 'Lead Magnet & Opt-In Asset Creation',
      }),
      description: t('10.description', {
        fallback:
          'Your lead magnet is the first impression — we make it count.',
      }),
      includes: [
        t('10.includes.0', {
          fallback: 'Offer-aligned lead magnet concepting',
        }),
        t('10.includes.1', {
          fallback: 'Downloadable asset copy + design outline',
        }),
        t('10.includes.2', {
          fallback: 'Delivery system setup (landing page + email)',
        }),
        t('10.includes.3', { fallback: 'Thank-you page optimization' }),
        t('10.includes.4', { fallback: 'Traffic source matching' }),
        t('10.includes.5', { fallback: 'Follow-up sequence planning' }),
      ],
    },
  ];

  return (
    <ConsultingProductLayout type="marketing">
      {products.map(product => (
        <ConsultingProduct
          key={product.name}
          name={product.name}
          description={product.description}
          includes={product.includes}
        />
      ))}
    </ConsultingProductLayout>
  );
};
