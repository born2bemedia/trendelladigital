'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Title } from '@/shared/ui/kit/title';

export const WorkWithUs = () => {
  const t = useTranslations('whatToExpect.workWithUs');

  return (
    <section className="relative flex gap-10 px-[60px] pt-[200px] pb-[100px] max-md:flex-col max-md:px-4 max-md:pt-[120px] max-md:pb-[60px]">
      <div className="w-1/2 max-md:w-full">
        <Title color="white">
          {t('title', {
            fallback: "Still wondering what it's like to work with us?",
          })}
        </Title>
      </div>
      <section className="flex w-1/2 flex-col gap-2 max-md:w-full">
        <Card
          label={t('cards.0', {
            fallback: 'Check Out Our Before & After Transformations',
          })}
          url="/before-and-after"
        />
        <Card
          label={t('cards.1', {
            fallback: 'Book Your Free Strategy Call',
          })}
          url="/contact-us"
        />
      </section>
      <Image
        className="-z-10 object-cover opacity-60 grayscale filter max-md:hidden"
        src="/images/what-to-expect/black-hole.png"
        alt="black-hole"
        fill
        unoptimized
      />
    </section>
  );
};

const Card = ({ label, url }: { url: string; label: string }) => (
  <Link
    href={url}
    className="z-10 flex h-[200px] flex-col rounded-lg bg-[rgba(49,49,49,0.20)] px-10 py-6"
  >
    <div className="flex flex-col gap-2">
      <Title size="2xl" color="white" weight={500}>
        {label}
      </Title>
      <span className="ml-auto">
        <ArrowRight />
      </span>
    </div>
  </Link>
);
