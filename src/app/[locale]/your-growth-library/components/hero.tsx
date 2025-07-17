'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('yourGrowthLibrary.hero');

  return (
    <section className="mx-4 mt-4 flex bg-white px-[60px] pt-[106px] pb-[60px] max-md:px-4 max-md:pt-[90px] max-md:pb-4">
      <section className="relative flex h-[366px] w-full max-md:h-[600px]">
        <Image
          className="rounded-sm object-cover object-center"
          src="/images/your-growth-library/hero.jpg"
          alt="people"
          fill
          priority
        />
        <div className="relative m-1 mt-auto flex w-[600px] flex-col gap-4 rounded-sm bg-white p-4">
          <Title color="black" size="4xl" as="h1">
            {t('title', { fallback: 'Your Growth Library' })}
          </Title>
          <Text color="black">
            {t('description', {
              fallback:
                'Explore practical insights, proven strategies, and honest lessons from the field, designed to help you build with clarity.',
            })}
          </Text>
        </div>
      </section>
    </section>
  );
};
