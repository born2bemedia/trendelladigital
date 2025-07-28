'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurMission = () => {
  const t = useTranslations('home.ourMission');

  return (
    <section className="mx-4 flex flex-col gap-20 bg-white p-[60px] max-md:px-4">
      <section className="flex flex-col gap-4">
        <Title size="4xl">
          {t('title', { fallback: 'Your Growth is Our Mission' })}
        </Title>
        <Text color="dark">
          {t('description.0', {
            fallback:
              'We didn’t come into this by accident — we built, tested, and refined every strategy through real-world business experience.',
          })}
          <br />
          {t('description.1', {
            fallback:
              'What started as solving our own challenges evolved into a strategic framework that helps others build high-performance businesses with clarity and control.',
          })}
          <br />
          {t('description.2', {
            fallback:
              'Today, we partner with founders and experts who are ready to grow with intention — and with systems that work.',
          })}
        </Text>
      </section>
      <section className="relative h-[366px] w-full max-md:h-[400px]">
        <Image
          className="rounded-sm object-cover"
          src="/images/home/our-mission.jpg"
          alt="our-mission"
          fill
        />
        <BookConsultation />
      </section>
    </section>
  );
};

const BookConsultation = () => {
  const t = useTranslations('home.ourMission.bookConsultation');

  return (
    <section className="absolute bottom-1 left-1 flex flex-col gap-4 rounded-sm bg-white p-4 max-md:right-1">
      <Title size="4xl" as="h3">
        {t('title', { fallback: 'Curious how it all began?' })}
      </Title>
      <Link href="/contact-us">
        <Button>
          {t('button', { fallback: 'Book a Free Consultation' })}
          <ArrowRight color="black" />
        </Button>
      </Link>
    </section>
  );
};
