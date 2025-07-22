import type { useTranslations } from 'next-intl';

import type { Position } from './types';

export const getOpenPositions = (
  t: ReturnType<typeof useTranslations>,
): Position[] => [
  {
    id: 'marketing-strategist',
    title: t('marketingStrategist.title', {
      fallback: 'Marketing Strategist',
    }),
    subtitle: t('marketingStrategist.subtitle', {
      fallback: '(Part-Time or Contract)',
    }),
    description: [
      t('marketingStrategist.description.0', {
        fallback:
          'This role is ideal for someone who thrives on both creative storytelling and strategic systems. As a Marketing Strategist, you’ll collaborate directly with our founder and clients to design marketing frameworks that drive visibility, demand, and results, without resorting to burnout tactics or noise.',
      }),
      t('marketingStrategist.description.1', {
        fallback:
          'You’ll be responsible for building full-funnel strategies, positioning offers, and creating content plans that support long-term growth, not just short-term clicks. You’ll also support in refining client messaging, auditing marketing assets, and occasionally jumping into client sessions or Loom feedback rounds to help guide execution.',
      }),
    ],
    fitSkills: [
      t('marketingStrategist.fitSkills.0', {
        fallback:
          'Love helping people simplify their message and amplify their reach',
      }),
      t('marketingStrategist.fitSkills.1', {
        fallback:
          'Have experience with service-based businesses or creator brands',
      }),
      t('marketingStrategist.fitSkills.2', {
        fallback: 'Understand how content, email, and funnels work together',
      }),
      t('marketingStrategist.fitSkills.3', {
        fallback:
          'Can speak both strategy and execution, and know when each is needed',
      }),
      t('marketingStrategist.fitSkills.4', {
        fallback: 'Know how to guide, not just tell',
      }),
      t('marketingStrategist.fitSkills.5', {
        fallback:
          'Enjoy contributing to something that’s growing — and growing fast',
      }),
    ],
    niceToHave: [
      t('marketingStrategist.niceToHave.0', {
        fallback: 'Experience with tools like ConvertKit, Notion, and Airtable',
      }),
      t('marketingStrategist.niceToHave.1', {
        fallback: 'Past work with small brands, coaches, or freelancers',
      }),
      t('marketingStrategist.niceToHave.2', {
        fallback:
          'Familiarity with storytelling frameworks or digital copywriting',
      }),
    ],
    estimatedTime: t('marketingStrategist.estimatedTime', {
      fallback: '8–15 hours/week',
    }),
    compensation: t('marketingStrategist.compensation', {
      fallback: 'Project-based or retainer, depending on fit',
    }),
    location: t('marketingStrategist.location', {
      fallback: 'Remote',
    }),
    responsibilities: [
      t('marketingStrategist.responsibilities.0', {
        fallback: 'Auditing and refining existing brand messaging',
      }),
      t('marketingStrategist.responsibilities.1', {
        fallback: 'Mapping full-funnel content strategies (organic & email)',
      }),
      t('marketingStrategist.responsibilities.2', {
        fallback: 'Developing audience profiles and content themes',
      }),
      t('marketingStrategist.responsibilities.3', {
        fallback: 'Advising on conversion-optimized offers and CTAs',
      }),
      t('marketingStrategist.responsibilities.4', {
        fallback:
          'Collaborating with the founder on positioning pivots or launches',
      }),
      t('marketingStrategist.responsibilities.5', {
        fallback:
          'Providing insights and analysis based on campaign performance',
      }),
      t('marketingStrategist.responsibilities.6', {
        fallback:
          'Translating business goals into actionable marketing workflows',
      }),
    ],
    quote: t('marketingStrategist.quote', {
      fallback: 'Hold the thread.  Keep the flow.  Deliver the experience.',
    }),
  },
  {
    id: 'operations-systems-consultant',
    title: t('operationsSystemsConsultant.title', {
      fallback: 'Operations & Systems Consultant',
    }),
    subtitle: t('operationsSystemsConsultant.subtitle', {
      fallback: '(Part-Time or Contract)',
    }),
    description: [
      t('operationsSystemsConsultant.description.0', {
        fallback:
          'As an Operations & Systems Consultant, you’ll work behind the scenes to help solo founders streamline their workflows, automate repetitive tasks, and build the systems they need to support growth without the overwhelm. You’ll take high-level goals and transform them into transparent, well-documented processes that clients can rely on.',
      }),
      t('operationsSystemsConsultant.description.1', {
        fallback:
          'This is a blend of systems thinking, operational mapping, and client collaboration. You’re not just solving problems — you’re creating ease, structure, and the ability to scale.',
      }),
    ],
    quote: t('operationsSystemsConsultant.quote', {
      fallback: 'Turn chaos into clarity for growing personal brands.',
    }),
    fitSkills: [
      t('operationsSystemsConsultant.fitSkills.0', {
        fallback: 'Think in systems and enjoy turning complexity into order',
      }),
      t('operationsSystemsConsultant.fitSkills.1', {
        fallback: 'Can translate messy notes into structured workflows',
      }),
      t('operationsSystemsConsultant.fitSkills.2', {
        fallback:
          'Have experience working with solo founders, creators, or consultants',
      }),
      t('operationsSystemsConsultant.fitSkills.3', {
        fallback: 'Are tech-comfortable and quick to learn new tools',
      }),
      t('operationsSystemsConsultant.fitSkills.4', {
        fallback: 'Enjoy helping others move faster, with less friction',
      }),
    ],
    niceToHave: [
      t('operationsSystemsConsultant.niceToHave.0', {
        fallback: 'Experience with automation tools (Zapier, Make, etc.)',
      }),
      t('operationsSystemsConsultant.niceToHave.1', {
        fallback: 'Familiarity with service-based business models',
      }),
      t('operationsSystemsConsultant.niceToHave.2', {
        fallback: 'Ability to create simple Loom walkthroughs for clients',
      }),
    ],
    estimatedTime: t('operationsSystemsConsultant.estimatedTime', {
      fallback: '10–20 hours/months',
    }),
    compensation: t('operationsSystemsConsultant.compensation', {
      fallback: 'Retainer or hourly',
    }),
    location: t('operationsSystemsConsultant.location', {
      fallback: 'Remote (Flexible hours)',
    }),
    responsibilities: [
      t('operationsSystemsConsultant.responsibilities.0', {
        fallback: 'Auditing and optimizing internal client workflows',
      }),
      t('operationsSystemsConsultant.responsibilities.1', {
        fallback: 'Mapping out scalable SOPs, automations, and CRM processes',
      }),
      t('operationsSystemsConsultant.responsibilities.2', {
        fallback:
          'Recommending and implementing tools (e.g., Airtable, Notion, Zapier)',
      }),
      t('operationsSystemsConsultant.responsibilities.3', {
        fallback:
          'Assisting clients with backend setup (booking systems, pipelines, forms)',
      }),
      t('operationsSystemsConsultant.responsibilities.4', {
        fallback:
          'Creating dashboards and visibility tools for progress tracking',
      }),
      t('operationsSystemsConsultant.responsibilities.5', {
        fallback:
          'Collaborating with the team to ensure systems align with the strategy',
      }),
    ],
  },
  {
    id: 'client-success-lead',
    title: t('clientSuccessLead.title', {
      fallback: 'Client Success Lead',
    }),
    quote: t('clientSuccessLead.quote', {
      fallback: 'Hold the thread. Keep the flow. Deliver the experience.',
    }),
    description: [
      t('clientSuccessLead.description.0', {
        fallback:
          'This role focuses on client experience and operational oversight. As our Client Success Lead, you’ll be the connective tissue between our clients, consultants, and internal projects. You’ll ensure that everyone has what they need, deadlines remain visible, and communication stays clear and respectful.',
      }),
      t('clientSuccessLead.description.1', {
        fallback:
          'You’re not just managing logistics — you’re upholding a standard of excellence and care. You’ll anticipate needs, handle details, and maintain momentum across multiple client journeys.',
      }),
    ],
    fitSkills: [
      t('clientSuccessLead.fitSkills.0', {
        fallback: 'Love creating structure and clarity in moving environments',
      }),
      t('clientSuccessLead.fitSkills.1', {
        fallback: 'Are highly organized and proactive with follow-through',
      }),
      t('clientSuccessLead.fitSkills.2', {
        fallback: 'Communicate with warmth, precision, and professionalism',
      }),
      t('clientSuccessLead.fitSkills.3', {
        fallback:
          'Enjoy being in a hybrid role between people, processes, and problem-solving',
      }),
      t('clientSuccessLead.fitSkills.4', {
        fallback:
          'Can manage multiple client journeys without dropping the thread',
      }),
    ],
    niceToHave: [
      t('clientSuccessLead.niceToHave.0', {
        fallback: 'Experience with CRMs, Notion, or task management tools',
      }),
      t('clientSuccessLead.niceToHave.1', {
        fallback:
          'Familiarity with coaching, consulting, or service-based businesses',
      }),
      t('clientSuccessLead.niceToHave.2', {
        fallback: 'A knack for writing clear, friendly emails and updates',
      }),
    ],
    estimatedTime: t('clientSuccessLead.estimatedTime', {
      fallback: '10–12 hours/week',
    }),
    compensation: t('clientSuccessLead.compensation', {
      fallback: 'Retainer',
    }),
    location: t('clientSuccessLead.location', {
      fallback: 'Remote',
    }),
    responsibilities: [
      t('clientSuccessLead.responsibilities.0', {
        fallback:
          'Managing project timelines, session schedules, and deliverables',
      }),
      t('clientSuccessLead.responsibilities.1', {
        fallback:
          'Acting as the first point of contact for client communication',
      }),
      t('clientSuccessLead.responsibilities.2', {
        fallback: 'Gathering session notes, resources, and client inputs',
      }),
      t('clientSuccessLead.responsibilities.3', {
        fallback: 'Tracking progress and surfacing any red flags',
      }),
      t('clientSuccessLead.responsibilities.4', {
        fallback:
          'Supporting the founder with light admin and project coordination',
      }),
      t('clientSuccessLead.responsibilities.5', {
        fallback:
          'Ensuring a smooth and professional experience from onboarding to offboarding',
      }),
    ],
  },
];
