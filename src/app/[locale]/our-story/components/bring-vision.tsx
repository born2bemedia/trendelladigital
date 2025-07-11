'use client';

import Link from 'next/link';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const BringVision = () => {
  return (
    <section className="flex gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]">
      <section className="flex w-1/2 flex-col max-md:w-full">
        <div className="flex flex-col gap-4">
          <Title color="white">
            You Bring the Vision. We Bring the Framework.
          </Title>
          <Text color="white">Together, we build something that lasts.</Text>
        </div>
        <LookingFor className="flex max-md:hidden" />
      </section>
      <section className="flex w-1/2 flex-col gap-2 max-md:w-full">
        <Card value="See How We Can Help You" url="/how-we-can-help-you" />
        <Card value="Jump to What to Expect" url="/what-to-expect" />
      </section>
      <LookingFor className="hidden max-md:flex" />
    </section>
  );
};

const Card = ({ value, url }: { value: string; url: string }) => (
  <Link
    href={url}
    className="flex min-h-[200px] w-full flex-col rounded-lg bg-[linear-gradient(90deg,rgba(49,49,49,0.20)_0%,rgba(151,151,151,0.20)_100%)] px-10 py-6"
  >
    <div className="mt-auto flex flex-col gap-2">
      <Title size="2xl" as="h4" color="white">
        {value}
      </Title>
      <div className="ml-auto">
        <ArrowRight />
      </div>
    </div>
  </Link>
);

const LookingFor = ({ className }: { className: string }) => {
  return (
    <div className={cn('mt-auto flex-col gap-4', className)}>
      <Title size="3xl" as="h3" color="white">
        Looking for more insights that actually move the needle?
      </Title>
      <Button variant="metal">
        Browse All Articles <ArrowRight color="black" />
      </Button>
    </div>
  );
};
