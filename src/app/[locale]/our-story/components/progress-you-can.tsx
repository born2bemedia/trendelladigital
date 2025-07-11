'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ProgressYouCan = () => {
  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] py-[100px] max-md:px-4 max-md:py-[60px]">
      <section className="flex flex-col gap-10">
        <Title>Progress You Can Measure</Title>
        <Text color="dark">
          Progress You Can Measure
          <br />
          We’re not about vanity metrics. But we are about meaningful progress.
          <br />
          Here’s what we’ve helped our clients achieve — and what we’re proud to
          stand behind:
        </Text>
      </section>
      <StatisticBoard />
    </section>
  );
};

const StatisticBoard = () => {
  const stats = [
    {
      title: '87%',
      subtitle: 'of clients doubled their revenue within 6 months',
      text: 'From freelancers to solo founders — clarity and structure pay off',
    },
    {
      title: '200+',
      subtitle: 'high-converting offers launched',
      text: 'Irresistible, aligned, and built around what you do best.',
    },
    {
      title: '1,000+',
      subtitle: 'systems mapped, automated, and simplified',
      text: 'As time is a resource, and yours should be respected.',
    },
    {
      title: '94%',
      subtitle: 'client retention',
      text: 'We don’t do “one and done.” We build long-term wins with long-term people.',
    },
  ];

  return (
    <section className="flex gap-10 rounded-lg bg-[#F5F4FD] p-6 max-lg:flex-col-reverse max-md:p-2">
      <section className="flex w-[35%] flex-col gap-6 max-lg:w-full">
        {stats.map(stat => (
          <StatItem key={stat.title} {...stat} />
        ))}
      </section>
      <Image
        className="h-full w-[65%] rounded-lg object-cover max-lg:w-full"
        src="/images/our-story/progress.jpg"
        alt="progress"
        width={100}
        height={100}
        unoptimized
      />
    </section>
  );
};

const StatItem = ({
  subtitle,
  text,
  title,
}: {
  title: string;
  subtitle: string;
  text: string;
}) => (
  <article className="flex flex-col gap-2">
    <Title size="4xl" as="h3">
      {title}
    </Title>
    <Text color="dark" weight={700}>
      {subtitle}
    </Text>
    <Text color="dark">{text}</Text>
  </article>
);
