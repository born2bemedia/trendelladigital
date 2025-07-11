'use client';

import Image from 'next/image';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <section className="mx-4 mt-4 bg-white px-[60px] pt-[98px] pb-[60px] max-md:px-4 max-md:pb-4">
      <section className="relative flex h-[366px] w-full max-md:h-[600px]">
        <Image
          className="object-cover object-top"
          src="/images/how-we-help/hero.jpg"
          alt="hero"
          fill
          unoptimized
        />
        <HeroContent />
      </section>
    </section>
  );
};

const HeroContent = () => {
  return (
    <div className="relative z-10 m-1 mt-auto flex w-max flex-col gap-4 rounded-sm bg-white p-4">
      <Title as="h1">
        <span className="opacity-50">How</span> We Can Help You
      </Title>
      <Text color="black">
        You’re great at what you do. Let’s make sure your project reflects that.
      </Text>
      <Button>
        Book a Free Consultation <ArrowRight color="black" />
      </Button>
    </div>
  );
};
