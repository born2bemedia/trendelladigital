'use client';

import Link from 'next/link';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WeHelp = () => {
  return (
    <section className="flex gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]">
      <section className="flex w-1/2 flex-col gap-4 max-md:w-full">
        <Title color="white">We’ll Help You See the Whole Picture</Title>
        <Text color="white">
          Every growth journey starts with a meaningful conversation. We’ll help
          you assess where you are, where you’re headed, and what’s needed to
          close the gap.s
        </Text>
      </section>
      <Link
        href="/contact-us"
        className="flex h-[300px] w-1/2 flex-col gap-2 rounded-lg bg-gradient-to-r from-[rgba(49,49,49,0.20)] to-[rgba(151,151,151,0.20)] px-10 py-6 max-md:h-[200px] max-md:w-full"
      >
        <div className="mt-auto flex flex-col gap-2">
          <Title size="2xl" as="h3" color="white">
            Contact Us
          </Title>
          <span className="ml-auto">
            <ArrowRight />
          </span>
        </div>
      </Link>
    </section>
  );
};
