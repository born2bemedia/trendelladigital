'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const listSt: Record<'business' | 'marketing', { item: string; list: string }> =
  {
    business: {
      item: 'border-[rgba(135,121,247,0.40)] bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)]',
      list: 'bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)]',
    },
    marketing: {
      item: 'border border-[rgba(209,183,188,0.40)] bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)]',
      list: 'bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)]',
    },
  };

export const ConsultingInfoBlock = ({
  title,
  subtitle,
  description,
  list,
  type,
}: {
  title: string;
  subtitle: string;
  description: ReactNode;
  list: {
    title: string;
    description: string;
    items: string[];
  };
  type: 'business' | 'marketing';
}) => {
  const t = useTranslations('consultingInfoBlock');

  return (
    <section
      className={cn(
        'mx-4 flex gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]',
        type === 'marketing' ? 'bg-[#F6F3F3]' : 'bg-[#F5F4FD]',
      )}
    >
      <section className="flex flex-col justify-between">
        <div className="flex flex-col gap-2.5">
          <Title color="black">{title}</Title>
          <Text color="dark">{description}</Text>
        </div>
        <Subtitle value={subtitle} className="flex max-md:hidden" />
      </section>
      <section
        className={cn(
          'flex flex-col gap-2 rounded-lg px-10 py-6 max-md:px-4',
          listSt[type].list,
        )}
      >
        <Title size="2xl" as="h4" weight={400} color="dark">
          {list.title}
        </Title>
        <Text color="dark">
          {list.description} <br />
          <br />
          <br />
          {t('walkAway')}
        </Text>
        <ul className="flex flex-col gap-1">
          {list.items.map(item => (
            <ListItem key={item} item={item} type={type} />
          ))}
        </ul>
      </section>
      <Subtitle value={subtitle} className="hidden max-md:flex" />
    </section>
  );
};

const Subtitle = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const t = useTranslations('consultingInfoBlock');

  return (
    <div className={cn('mt-auto flex-col gap-4', className)}>
      <Title size="3xl" as="h3">
        {value}
      </Title>
      <Link href="/expect">
        <Button>
          {t('button')} <ArrowRight color="black" />
        </Button>
      </Link>
    </div>
  );
};

const ListItem = ({
  item,
  type,
}: {
  item: string;
  type: 'marketing' | 'business';
}) => (
  <li
    className={cn(
      'border border-[rgba(135,121,247,0.40)] bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)] p-6',
      listSt[type].item,
    )}
  >
    <Text color="dark">{item}</Text>
  </li>
);
