'use client';

import { useTranslations } from 'next-intl';

import { ConsultingProduct } from '@/features/consulting/ui/consulting-product';
import { ConsultingProductLayout } from '@/features/consulting/ui/consulting-product-layout';

export const Products = () => {
  const t = useTranslations('consultingProduct.business');

  const products = [
    {
      name: t('0.name', {
        fallback: 'Business Model Design & Scalable Monetization Strategy',
      }),
      description: t('0.description', {
        fallback:
          'We help you design a lean, profitable business model that reflects your expertise and growth goals. Together, we map scalable revenue channels built for long-term traction — not short-term spikes.',
      }),
      includes: [
        t('0.includes.0', { fallback: 'Business model audit & refinement' }),
        t('0.includes.1', {
          fallback: 'Offer suite mapping (core, upsell, downsell)',
        }),
        t('0.includes.2', {
          fallback: 'Income stream planning (active + passive)',
        }),
        t('0.includes.3', {
          fallback: 'Service-to-product evolution strategy',
        }),
        t('0.includes.4', { fallback: 'Market positioning & gap analysis' }),
        t('0.includes.5', { fallback: 'Monetization path by business stage' }),
      ],
    },
    {
      name: t('1.name', {
        fallback: 'Sales Strategy Development with Lead-Generation Systems',
      }),
      description: t('1.description', {
        fallback:
          'We build a proactive sales structure that generates and qualifies leads systematically. No more chasing — just a reliable path from first contact to close.',
      }),
      includes: [
        t('1.includes.0', { fallback: 'Lead capture & qualification flows' }),
        t('1.includes.1', { fallback: 'High-converting sales page strategy' }),
        t('1.includes.2', {
          fallback: 'Discovery call scripts & booking funnel',
        }),
        t('1.includes.3', { fallback: 'Sales pipeline setup (simple CRM)' }),
        t('1.includes.4', {
          fallback: 'Follow-up workflows & email sequences',
        }),
        t('1.includes.5', { fallback: 'Warm lead reactivation campaigns' }),
      ],
    },
    {
      name: t('2.name', {
        fallback: 'High-Converting Offer Architecture & Pricing Systems',
      }),
      description: t('2.description', {
        fallback:
          'We refine or build offers that solve real problems, speak directly to your market, and drive consistent sales. Pricing strategies are built to reflect both your value and your business capacity.',
      }),
      includes: [
        t('2.includes.0', { fallback: 'Signature offer development' }),
        t('2.includes.1', { fallback: 'Tiered offer ladder creation' }),
        t('2.includes.2', {
          fallback: 'Pricing recalibration with margin strategy',
        }),
        t('2.includes.3', {
          fallback: 'Offer promise clarity & value framing',
        }),
        t('2.includes.4', {
          fallback: 'Naming, structure, and inclusions optimization',
        }),
        t('2.includes.5', { fallback: 'Offer-market fit validation process' }),
      ],
    },
    {
      name: t('3.name', {
        fallback: 'Operational Workflows & Automation for Solo Founders',
      }),
      description: t('3.description', {
        fallback:
          'We streamline backend processes to reduce friction and reclaim your time. Automations are tailored to fit your business model — not generic tools that create more work.',
      }),
      includes: [
        t('3.includes.0', { fallback: 'Client onboarding automation' }),
        t('3.includes.1', { fallback: 'Delivery & fulfillment workflows' }),
        t('3.includes.2', { fallback: 'Scheduling + email automation setup' }),
        t('3.includes.3', { fallback: 'Internal SOP documentation' }),
        t('3.includes.4', { fallback: 'Lead and sales tracking system' }),
        t('3.includes.5', { fallback: 'Admin task streamlining & delegation' }),
      ],
    },
    {
      name: t('4.name', {
        fallback: 'Personalized Revenue Roadmap with Milestones & Metrics',
      }),
      description: t('4.description', {
        fallback:
          'You get a data-informed roadmap that connects your goals to practical, trackable execution. Every milestone is tied to specific outcomes, timelines, and performance metrics.',
      }),
      includes: [
        t('4.includes.0', { fallback: '90-day strategic growth plans' }),
        t('4.includes.1', { fallback: 'KPI selection & dashboard setup' }),
        t('4.includes.2', {
          fallback: 'Revenue forecasting by offer + traffic',
        }),
        t('4.includes.3', { fallback: 'Weekly milestone checklists' }),
        t('4.includes.4', { fallback: 'Progress tracking & review system' }),
        t('4.includes.5', { fallback: 'Launch and revenue pacing framework' }),
      ],
    },
    {
      name: t('5.name', {
        fallback: 'Strategic Decision-Making Support & Business Diagnostics',
      }),
      description: t('5.description', {
        fallback:
          "You'll gain visibility into what's working, what's draining you, and where to double down. Every decision is grounded in real business analysis — not assumption or guesswork.",
      }),
      includes: [
        t('5.includes.0', { fallback: 'Full business health diagnostics' }),
        t('5.includes.1', {
          fallback: 'Performance audit (offers, content, traffic)',
        }),
        t('5.includes.2', {
          fallback: 'Workflow + system inefficiency mapping',
        }),
        t('5.includes.3', {
          fallback: 'Decision-making prioritization frameworks',
        }),
        t('5.includes.4', { fallback: 'Monthly/quarterly strategy reviews' }),
        t('5.includes.5', { fallback: 'Bottleneck + leverage point analysis' }),
      ],
    },
    {
      name: t('6.name', {
        fallback: 'Founder Positioning & Personal Brand Strategy',
      }),
      description: t('6.description', {
        fallback:
          'We help you clarify your voice, message, and visibility as a founder — so your personal brand becomes a growth asset, not an afterthought. This work aligns your presence with your business goals and audience expectations.',
      }),
      includes: [
        t('6.includes.0', { fallback: 'Personal brand audit & positioning' }),
        t('6.includes.1', {
          fallback: 'Bio, tagline, and founder story refinement',
        }),
        t('6.includes.2', {
          fallback: 'Visibility strategy (podcasts, interviews, features)',
        }),
        t('6.includes.3', { fallback: 'Authority-building content strategy' }),
        t('6.includes.4', { fallback: 'Founder page structure & narrative' }),
        t('6.includes.5', {
          fallback: 'Messaging guide for speaking, media & outreach',
        }),
      ],
    },
    {
      name: t('7.name', {
        fallback: 'Client Experience & Retention Systems',
      }),
      description: t('7.description', {
        fallback:
          "Client success isn't just a deliverable — it's a growth engine. We help you create experiences that generate repeat business, referrals, and meaningful transformation.",
      }),
      includes: [
        t('7.includes.0', {
          fallback: 'Client onboarding + offboarding flows',
        }),
        t('7.includes.1', {
          fallback: 'Feedback collection & testimonial prompts',
        }),
        t('7.includes.2', {
          fallback: 'Retention tracking & re-engagement strategy',
        }),
        t('7.includes.3', { fallback: 'Internal delivery quality standards' }),
        t('7.includes.4', { fallback: 'Milestone-based delivery roadmap' }),
        t('7.includes.5', {
          fallback: 'Client portal or central communication setup',
        }),
      ],
    },
    {
      name: t('8.name', {
        fallback: 'Capacity Planning & Team Structure Design',
      }),
      description: t('8.description', {
        fallback:
          "Scaling isn't about doing more — it's about building right. We map the people, tools, and roles that support your growth while protecting your time and energy.",
      }),
      includes: [
        t('8.includes.0', { fallback: 'Current bandwidth & time audit' }),
        t('8.includes.1', { fallback: 'Scalable delivery structure planning' }),
        t('8.includes.2', {
          fallback: 'Role design for part-time or freelance help',
        }),
        t('8.includes.3', { fallback: 'Hiring plan for support roles' }),
        t('8.includes.4', {
          fallback: 'SOP handoff systems & delegation workflows',
        }),
        t('8.includes.5', { fallback: 'Capacity forecasting models' }),
      ],
    },
    {
      name: t('9.name', {
        fallback: 'Offer Launch Strategy & Execution Support',
      }),
      description: t('9.description', {
        fallback:
          "Whether it's your first or fifth offer, we guide the launch with precision. From pre-launch prep to post-launch optimization, we make sure nothing falls through the cracks.",
      }),
      includes: [
        t('9.includes.0', {
          fallback: 'Launch plan with key dates & deliverables',
        }),
        t('9.includes.1', {
          fallback: 'Pre-launch runway content + list warming',
        }),
        t('9.includes.2', { fallback: 'Email & content sequence mapping' }),
        t('9.includes.3', {
          fallback: 'Sales page + conversion asset checklist',
        }),
        t('9.includes.4', { fallback: 'Debrief and KPI analysis template' }),
        t('9.includes.5', {
          fallback: 'Post-launch refinement & retention plan',
        }),
      ],
    },
  ];

  return (
    <ConsultingProductLayout type="business">
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
