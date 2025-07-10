'use client';

import Image from 'next/image';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurMission = () => {
  return (
    <section className="mx-4 flex flex-col gap-20 bg-white p-[60px] max-md:px-4">
      <section className="flex flex-col gap-4">
        <Title size="4xl">Your Growth is Our Mission</Title>
        <Text color="dark">
          We didn’t come into this by accident — we built, tested, and refined
          every strategy through real-world business experience.
          <br /> What started as solving our own challenges evolved into a
          strategic framework that helps others build high-performance
          businesses with clarity and control.
          <br /> Today, we partner with founders and experts who are ready to
          grow with intention — and with systems that work.
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
  return (
    <section className="absolute bottom-1 left-1 flex flex-col gap-4 rounded-sm bg-white p-4 max-md:right-1">
      <Title size="4xl" as="h3">
        Curious how it all began?
      </Title>
      <Button>
        Book a Free Consultation  <ArrowRight color="black" />
      </Button>
    </section>
  );
};
