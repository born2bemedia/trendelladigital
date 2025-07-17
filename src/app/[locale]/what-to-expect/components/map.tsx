'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Map = () => {
  const t = useTranslations('whatToExpect.map');

  const steps = [
    {
      title: t('0.title', { fallback: "Let's Unpack the Vision" }),
      description: t('0.description', {
        fallback:
          'We begin with a no-strings-attached strategy session — a genuine conversation, not a sales pitch.',
      }),
      listLabel: t('0.listLabel', { fallback: 'Together, we explore:' }),
      list: [
        t('0.list.0', { fallback: "What you've built so far" }),
        t('0.list.1', { fallback: "What's slowing you down" }),
        t('0.list.2', { fallback: 'What success looks like for you' }),
      ],
      whatYouGet: t('0.whatYouGet', {
        fallback:
          'A sharper view of your business and your most significant opportunities — whether we work together or not.',
      }),
    },
    {
      title: t('1.title', { fallback: "The Plan You Didn't Know You Needed" }),
      description: t('1.description', {
        fallback:
          "You'll receive a personalized roadmap tailored to your current business, capacity, and goals — not a recycled checklist.",
      }),
      listLabel: t('1.listLabel', { fallback: 'Included:' }),
      list: [
        t('1.list.0', { fallback: 'A streamlined strategy for growth' }),
        t('1.list.1', { fallback: 'Your following 90-day priorities' }),
        t('1.list.2', {
          fallback: "The tools, methods, and mindset you'll need",
        }),
      ],
      whatYouGet: t('1.whatYouGet', {
        fallback:
          'Direction, clarity, and a step-by-step game plan that feels doable and exciting.',
      }),
    },
    {
      title: t('2.title', { fallback: 'Momentum Meets Method' }),
      description: t('2.description', {
        fallback:
          "If we're aligned, we kick off structured 1:1 sessions — either weekly or biweekly — to bring your strategy to life.",
      }),
      listLabel: t('2.listLabel', { fallback: 'What happens inside?' }),
      list: [
        t('2.list.0', { fallback: 'We co-create high-converting offers' }),
        t('2.list.1', {
          fallback: "Clean up messaging that's missing the mark",
        }),
        t('2.list.2', {
          fallback: 'Build out lead systems and conversion pathways',
        }),
      ],
      whatYouGet: t('2.whatYouGet', {
        fallback:
          "Tangible progress. Clear feedback. And decisions you don't second-guess.",
      }),
    },
    {
      title: t('3.title', { fallback: 'In the Trenches, Together' }),
      description: t('3.description', {
        fallback:
          "This isn't surface-level support — it's roll-up-our-sleeves work. We review, adjust, create, and problem-solve together as your business takes shape.",
      }),
      listLabel: t('3.listLabel', { fallback: 'Ongoing support includes:' }),
      list: [
        t('3.list.0', {
          fallback: 'On-demand reviews (copy, funnels, offers)',
        }),
        t('3.list.1', { fallback: 'Strategic tweaks and quick pivots' }),
        t('3.list.2', { fallback: 'Messaging audits and optimization' }),
        t('3.list.3', { fallback: 'Guidance exactly when you need it' }),
      ],
      whatYouGet: t('3.whatYouGet', {
        fallback: 'Real-time partnership. Less friction. More flow.',
      }),
    },
    {
      title: t('4.title', { fallback: 'Growth on Your Terms' }),
      description: t('4.description', {
        fallback:
          "As your business evolves, so does our strategy. We don't set it and forget it — we check, test, refine, and scale what works.",
      }),
      listLabel: t('4.listLabel', { fallback: "Together, we'll:" }),
      list: [
        t('4.list.0', { fallback: 'Monitor key metrics' }),
        t('4.list.1', { fallback: 'Adjust your systems to meet demand' }),
        t('4.list.2', { fallback: 'Double down on high-impact activities' }),
        t('4.list.3', { fallback: 'Prepare for the next level' }),
      ],
      whatYouGet: t('4.whatYouGet', {
        fallback:
          'A dynamic business that grows with you, not one that outpaces or limits you.',
      }),
      cardClassName: 'mb-0',
      stepLineClassName: 'hidden',
    },
  ];

  return (
    <section className="mx-4 flex flex-col bg-white px-[60px] pb-[60px] max-md:px-4 max-md:pb-4">
      {steps.map((step, index) => (
        <section
          key={step.title}
          className="flex h-full items-stretch gap-10 max-md:gap-4"
        >
          <StepLine number={++index} className={step.stepLineClassName} />
          <Card {...step} className={step.cardClassName} />
        </section>
      ))}
    </section>
  );
};

const StepLine = ({
  number,
  className,
}: {
  number: number;
  className?: string;
}) => {
  const t = useTranslations('whatToExpect.map');

  return (
    <div className="flex shrink-0 items-stretch gap-4">
      <div className="flex h-full flex-col items-center">
        <span className="h-3 w-3 shrink-0 rounded-full bg-black" />
        <span className={cn('w-1 flex-1 bg-black', className)} />
      </div>
      <Text color="dark" className="self-start">
        {t('phase')} {number}
      </Text>
    </div>
  );
};

const Card = ({
  title,
  description,
  listLabel,
  list,
  whatYouGet,
  className,
}: {
  title: string;
  description: string;
  listLabel: string;
  list: string[];
  whatYouGet: string;
  className?: string;
}) => {
  const t = useTranslations('whatToExpect.map');

  return (
    <section
      className={cn(
        'mb-10 flex w-full gap-8 rounded-sm bg-[#F5F4FD] p-6 max-md:flex-col max-md:px-2 max-md:py-4',
        className,
      )}
    >
      <div className="flex w-1/2 flex-col gap-4 max-md:w-full">
        <div className="flex flex-col gap-2">
          <Title size="2xl" as="h3" className="max-md:text-[18px]" weight={400}>
            {title}
          </Title>
          <Text color="dark">{description}</Text>
        </div>
        <div className="flex flex-col gap-2">
          <Text color="dark">{listLabel}</Text>
          <ul className="flex flex-col gap-1">
            {list.map(item => (
              <li
                key={item}
                className="flex items-center gap-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-black"
              >
                <Text color="dark">{item}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-2 rounded-lg bg-[rgba(225,223,246,0.40)] p-6 max-md:w-full max-md:px-2 max-md:py-4">
        <Title size="2xl" as="h4" className="max-md:text-[18px]" weight={400}>
          {t('whatYouGet')}
        </Title>
        <Text color="dark">{whatYouGet}</Text>
      </div>
    </section>
  );
};
