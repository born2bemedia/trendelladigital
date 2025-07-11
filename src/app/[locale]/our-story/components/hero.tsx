'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <section className="mx-4 flex flex-col gap-[100px] bg-white p-[76px] pt-[106px] max-md:px-4 max-md:pt-[90px] max-md:pb-4">
      <section className="flex gap-4 max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <Title as="h1">The Journey Behind the Framework</Title>
        </div>
        <div className="w-1/2 max-md:w-full">
          <Text color="black">
            We stepped into consulting with a purpose, not by chance. <br />
            <br />
            Our work began with a personal challenge: building a business that
            felt aligned, sustainable, and true to our values. Like many of the
            individuals we now support, we had the skills, the ambition, and a
            long list of ideas — but no clear structure to turn them into
            something that worked. We set out to create that structure for
            ourselves: something that didn’t lead to burnout, dilute our
            identity, or rely on generic blueprints. <br />
            <br />
            The more we tested, built, and refined, the more we realized the
            value of what we were creating — not just for us, but for others
            navigating the same complexity. That’s when Trendella Digital was
            born: not as a pivot, but as a deliberate response to a need we
            deeply understood. We didn’t follow someone else’s model. We created
            one — and now, we help others do the same.
          </Text>
        </div>
      </section>
      <InfoBlock />
    </section>
  );
};

const InfoBlock = () => {
  return (
    <section className="relative flex h-[475px] w-full max-md:h-[900px]">
      <Image
        src="/images/our-story/hero.png"
        alt="info"
        fill
        unoptimized
        className="object-cover max-md:hidden"
      />
      <Image
        src="/images/our-story/hero-mob.jpg"
        alt="info"
        fill
        unoptimized
        className="hidden object-cover max-md:block"
      />
      <section className="relative z-10 m-1 flex w-1/2 flex-col gap-8 rounded-sm bg-[#F5F4FD] p-4 max-md:mt-auto max-md:w-full">
        <div className="flex flex-col gap-2">
          <Title size="2xl" as="h3" color="dark">
            Tested, Refined, Rebuilt
          </Title>
          <Text color="dark">
            What started as solving our roadblocks — pricing, messaging,
            systems, and growth — eventually turned into a repeatable framework.{' '}
            <br />
            <br />
            It worked for us. Then it worked for others. And eventually, it
            became Trendella Digital. <br />
            <br />
            Today, we partner with individuals who are ready to grow with
            intention — creators, service providers, freelancers, educators,
            strategists, and everyone in between.
          </Text>
        </div>
        <div className="flex flex-col gap-2.5">
          <InfoBlockItem value="People who want their work to mean something." />
          <InfoBlockItem value="People who are done guessing." />
          <InfoBlockItem value="People who want their business to feel as good as it looks on paper." />
        </div>
      </section>
    </section>
  );
};

const InfoBlockItem = ({ value }: { value: string }) => (
  <article className="rounded-lg bg-[#e1dff633] p-6">
    <Text color="dark">{value}</Text>
  </article>
);
