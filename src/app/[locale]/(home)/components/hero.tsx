'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('home.hero');

  return (
    <section className="relative h-[644px] overflow-hidden">
      <div className="relative h-full">
        <section className="relative z-20 mt-auto flex h-[644px] flex-col items-center justify-center gap-8 p-20 max-md:px-4">
          <section className="mt-auto flex w-[746px] flex-col items-center justify-center gap-4 text-center max-md:w-full">
            <Title color="white" as="h1" weight={700}>
              {t('title', { fallback: 'Marketing & Business Consulting' })}
            </Title>
            <Text>
              {t('description', {
                fallback:
                  "You've spent years building skills, now let's turn them into something you love waking up for. Trendella Digital will craft a plan for you.",
              })}
            </Text>
          </section>
          <Button variant="secondary">
            {t('consultation.button', { fallback: 'Book a Free Consultation' })}
            <ArrowRight />
          </Button>
        </section>
        <Image
          src="/images/home/hero-hole.png"
          alt="hero-hole"
          fill
          className="absolute z-10 opacity-60 grayscale filter"
        />
        <Image
          className="absolute right-[150px] -bottom-[140px] z-10 opacity-50 max-md:top-[50px] max-md:-left-[70px] max-md:h-[211px] max-md:w-[159px]"
          src="/images/home/master.jpg"
          alt="master"
          width={200}
          height={266}
          unoptimized
        />
        <Image
          className="absolute top-1/2 left-[50px] z-10 max-md:hidden"
          src="/images/home/reddit.png"
          alt="master"
          width={200}
          height={266}
          unoptimized
        />
        <Image
          className="absolute -top-[50px] left-[20%] z-10 opacity-50 max-md:hidden"
          src="/images/home/tablet-man.jpg"
          alt="tablet-man"
          width={200}
          height={266}
        />
        <Image
          className="absolute top-[14%] right-[50px] z-10 max-md:-right-[10px]"
          src="/images/home/twitter.png"
          alt="master"
          width={200}
          height={266}
          unoptimized
        />
      </div>
    </section>
  );
};
