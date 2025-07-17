'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PlusIcon } from '@/shared/icons/fill/plus';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const BookStrategyCall = () => {
  const t = useTranslations('beforeAndAfter.bookStrategyCall');

  return (
    <section className="flex items-center gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]">
      <div className="flex w-1/2 flex-col gap-4 max-md:w-full">
        <Title color="white">
          {t('title', { fallback: 'This Isn’t Overnight Hype.' })}
        </Title>
        <Text color="white">
          {t('description.0', {
            fallback: 'It’s innovative, structured, personalized growth.',
          })}
          <br />
          {t('description.1', {
            fallback:
              'We work with ready people, not necessarily “ready-made.”',
          })}
          <br />
          {t('description.2', {
            fallback: 'If you bring the drive, we’ll bring the strategy.',
          })}
        </Text>
      </div>
      <Link
        href="/contact-us"
        className="relative flex w-1/2 flex-col rounded-lg bg-[#979797]/20 p-10 max-md:w-full"
      >
        <div className="flex flex-col gap-2">
          <Text color="gray">
            {t('buttonDescription', {
              fallback: 'Want to become your own Before & After story?',
            })}
          </Text>
          <Title as="h4" color="white" size="lg">
            {t('button', { fallback: 'Book Your Free Strategy Call' })}
          </Title>
        </div>
        <span className="absolute right-4 bottom-4 ml-auto">
          <PlusIcon />
        </span>
      </Link>
    </section>
  );
};
