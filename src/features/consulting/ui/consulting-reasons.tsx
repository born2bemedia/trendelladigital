'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ConsultingReasons = ({
  values,
}: {
  values: { title: string; description: string }[];
}) => {
  const t = useTranslations('consultingReasons');

  return (
    <section className="flex gap-10 px-[100px] py-[80px] max-md:flex-col-reverse max-md:px-4">
      <TitleBottom className="hidden max-md:flex" />
      <ul className="flex flex-col gap-2">
        {values.map(value => (
          <Reason key={value.title} {...value} />
        ))}
      </ul>
      <section className="flex flex-col">
        <Title color="white">
          {t('title', { fallback: 'Why Trendella Digital?' })}
        </Title>
        <TitleBottom className="mt-auto flex max-md:hidden" />
      </section>
    </section>
  );
};

const Reason = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <li className="flex flex-col gap-2 rounded-lg bg-[rgba(151,151,151,0.2)] p-10 max-md:p-4">
    <Text size="lg" color="white">
      {title}
    </Text>
    <Text color="gray">{description}</Text>
  </li>
);

const TitleBottom = ({ className }: { className?: string }) => {
  const t = useTranslations('consultingReasons');

  return (
    <div className={cn('flex-col gap-4', className)}>
      <Title as="h3" size="3xl" color="white">
        {t('text', {
          fallback: 'See how founders like you leveled up with structure:',
        })}
      </Title>
      <Link href="/before-and-after">
        <Button variant="metal">
          {t('button', { fallback: 'Before & After Results' })}{' '}
          <ArrowRight color="black" />
        </Button>
      </Link>
    </div>
  );
};
