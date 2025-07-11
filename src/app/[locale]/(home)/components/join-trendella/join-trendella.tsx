'use client';

import Image from 'next/image';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './join-trendella.module.css';

const benefits = [
  {
    imgPath: '/images/home/join/stars.svg',
    title: 'Thrive on clarity and ownership',
    description:
      'you take initiative, solve problems, and move things forward without hand-holding',
    color: 'pink',
  },
  {
    imgPath: '/images/home/join/star.svg',
    title: 'Love working directly with founders, experts, and creators',
    description: 'and know how to listen, challenge, and guide with empathy',
    color: 'purple',
  },
  {
    imgPath: '/images/home/join/fallen-star.svg',
    title: 'Understand both strategy and execution',
    description: 'and aren’t afraid to get into the weeds when needed',
    color: 'pink',
  },
  {
    imgPath: '/images/home/join/stars-line.svg',
    title: 'Think independently but collaborate intentionally',
    description: 'across disciplines, time zones, and ideas',
    color: 'purple',
  },
  {
    imgPath: '/images/home/join/stars-min.svg',
    title:
      'Have a sharp mind for business and a real respect for personal growth',
    description: 'yours and the client’s',
    color: 'pink',
  },
];

export const JoinTrendella = () => {
  return (
    <section className="relative flex gap-10 px-[100px] py-[80px] max-md:flex-col-reverse max-md:px-4 max-md:py-[60px]">
      <SeeOpenRoles className="hidden max-md:flex" />
      <section className="flex w-1/2 flex-col gap-2 max-md:w-full">
        {benefits.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </section>
      <section className="flex w-1/2 flex-col max-md:w-full">
        <section className="flex flex-col gap-2.5">
          <Title color="white">
            Join the Trendella Digital Team That Builds What Matters
          </Title>
          <Text>
            We&apos;re here for the builders, the thinkers, the executors — and
            we expect the same from each other.
            <br />
            We&apos;re looking for{' '}
            <span className="font-bold">
              marketers, strategists, and operators
            </span>{' '}
            who:
          </Text>
        </section>
        <SeeOpenRoles className="mt-auto flex max-md:hidden" />
      </section>
    </section>
  );
};

const Card = ({
  imgPath,
  color,
  description,
  title,
}: {
  title: string;
  description: string;
  imgPath: string;
  color: string;
}) => (
  <article
    key={title}
    className={cn(
      'flex flex-col gap-3 rounded-lg px-10 py-6',
      color === 'pink' ? st.pinkBg : st.purpleBg,
    )}
  >
    <Image src={imgPath} alt="img" width={48} height={48} />
    <Title size="2xl" color="dark" as="h4">
      {title}
    </Title>
    <Text color="dark">{description}</Text>
  </article>
);

const SeeOpenRoles = ({ className }: { className?: string }) => {
  return (
    <section className={cn('flex-col gap-2.5', className)}>
      <Title as="h3" size="3xl" color="white">
        Think your mindset, skills, and standards are a match for how we work?
      </Title>
      <Button variant="metal">
        See Open Roles <ArrowRight color="black" />
      </Button>
    </section>
  );
};
