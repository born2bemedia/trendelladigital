'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ProgressYouCan = () => {
  const t = useTranslations('ourStory.progress-you-can');

  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] py-[100px] max-md:px-4 max-md:py-[60px]">
      <section className="flex flex-col gap-10">
        <Title>{t('title', { fallback: 'Progress You Can Measure' })}</Title>
        <Text color="dark">
          {t('desc.0', {
            fallback:
              'We’re not about vanity metrics. But we are about meaningful progress.',
          })}
          <br />
          {t('desc.1', {
            fallback:
              'Here’s what we’ve helped our clients achieve — and what we’re proud to stand behind:',
          })}
        </Text>
      </section>
      <StatisticBoard />
    </section>
  );
};

const StatisticBoard = () => {
  const t = useTranslations('ourStory.progress-you-can');

  const stats = [
    {
      title: '150+',
      subtitle: 'personalized strategies delivered',
      text: 'No templates. Every plan tailored, every result earned.',
    },
    {
      title: '87%',
      subtitle: t('statistic.0.subtitle', {
        fallback: 'of clients doubled their revenue within 6 months',
      }),
      text: `${t('statistic.0.text', {
        fallback:
          'From freelancers to solo founders — clarity and structure pay off',
      })}.`,
    },
    {
      title: '200+',
      subtitle: t('statistic.1.subtitle', {
        fallback: 'high-converting offers launched',
      }),
      text: t('statistic.1.text', {
        fallback: 'Irresistible, aligned, and built around what you do best.',
      }),
    },
    {
      title: '1,000+',
      subtitle: t('statistic.2.subtitle', {
        fallback: 'systems mapped, automated, and simplified',
      }),
      text: t('statistic.2.text', {
        fallback: 'As time is a resource, and yours should be respected.',
      }),
    },
    {
      title: '94%',
      subtitle: t('statistic.3.subtitle', {
        fallback: 'client retention',
      }),
      text: t('statistic.3.text', {
        fallback:
          'We don’t do “one and done.” We build long-term wins with long-term people.',
      }),
    },
  ];

  return (
    <section className="flex items-center gap-10 rounded-lg bg-[#F5F4FD] p-6 max-lg:flex-col-reverse max-md:items-start max-md:p-2">
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
