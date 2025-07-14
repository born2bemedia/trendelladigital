'use client';

import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import { DataTransferIcon } from '@/shared/icons/art/data-transfer';
import { DocumentIcon } from '@/shared/icons/art/document';
import { MagicWandIcon } from '@/shared/icons/art/magic-wand';
import { SupplierIcon } from '@/shared/icons/art/supplier';
import { WorkflowIcon } from '@/shared/icons/art/workflow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getItems = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: DataTransferIcon,
    title: t('0.title', { fallback: 'Launching a new direction' }),
    text: t('0.text', {
      fallback: 'after a pivot, burnout, or corporate exit',
    }),
  },
  {
    icon: MagicWandIcon,
    title: t('1.title', { fallback: 'Clarifying a cluttered project' }),
    text: t('1.text', {
      fallback: 'that’s generating noise but lacking real traction',
    }),
  },
  {
    icon: WorkflowIcon,
    title: t('2.title', { fallback: 'Refining an existing structure' }),
    text: t('2.text', {
      fallback:
        'that’s ready to scale but bottlenecked by systems or positioning',
    }),
  },
  {
    icon: SupplierIcon,
    title: t('3.title', { fallback: 'Systemizing delivery' }),
    text: t('3.text', {
      fallback:
        'so your project works, even when you’re not constantly working in it',
    }),
  },
  {
    icon: DocumentIcon,
    title: t('4.title', { fallback: 'Optimizing marketing efforts' }),
    text: t('4.text', {
      fallback: 'to reduce wasted motion and increase qualified leads',
    }),
  },
];

export const StrategyImpact = () => {
  const t = useTranslations('howWeCanHelpYou.strategyImpact');
  const ti = useTranslations('howWeCanHelpYou.strategyImpact.items');

  return (
    <section className="mx-4 flex gap-10 bg-white px-[60px] py-[100px] max-md:flex-col-reverse max-md:gap-10 max-md:px-4 max-md:py-[60px]">
      <section className="flex w-1/2 flex-col gap-2 max-md:w-full">
        <Text color="black">
          {t('text.0', { fallback: 'We Partner With Clients' })} <br />
          {t('text.1', { fallback: 'Across Multiple Inflection Points' })}
        </Text>
        {getItems(ti).map(item => (
          <Card key={item.title} {...item} />
        ))}
      </section>
      <StrategyTitle />
    </section>
  );
};

const StrategyTitle = () => {
  const t = useTranslations('howWeCanHelpYou.strategyImpact');

  return (
    <section className="flex w-1/2 flex-col gap-2.5 max-md:w-full">
      <Title>
        {t('title', { fallback: 'The Right Strategy Changes Everything' })}
      </Title>
      <Text color="black">
        {t('description', {
          fallback:
            'We help you design strategy, systems, and structure that reflect your value and drive real growth — with clarity, control, and purpose built in.',
        })}
      </Text>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
}) => (
  <article className="flex flex-col gap-2 rounded-lg bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)] px-10 py-6">
    <Icon />
    <Title size="2xl" as="h3" weight={400}>
      {title}
    </Title>
    <Text color="dark">{text}</Text>
  </article>
);
