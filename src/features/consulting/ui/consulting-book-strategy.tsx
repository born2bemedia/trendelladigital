'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ConsultingBookStrategy = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="flex gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]">
      <div className="flex w-1/2 flex-col gap-4 max-md:w-full">
        <Title color="white">{title}</Title>
        <Text color="white">{description}</Text>
      </div>
      <BookCall />
    </section>
  );
};

const BookCall = () => {
  const t = useTranslations('consultingBookStrategy');

  return (
    <Link
      href="/contact-us"
      className="flex h-[300px] w-1/2 flex-col rounded-lg bg-gradient-to-r from-[rgba(49,49,49,0.20)] to-[rgba(151,151,151,0.20)] px-10 py-6 max-md:h-[200px] max-md:w-full"
    >
      <section className="mt-auto flex flex-col gap-2">
        <Title as="h3" color="white" size="2xl">
          {t('book', { fallback: 'Book Your Strategy Call' })}
        </Title>
        <span className="ml-auto">
          <ArrowRight />
        </span>
      </section>
    </Link>
  );
};
