'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ArrowBottomRight } from '@/shared/icons/fill/arrow-bottom-right';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Topics = () => {
  const t = useTranslations('topics');

  return (
    <section className="mx-4 flex flex-col gap-[80px] bg-white px-[60px] pb-[60px] max-md:px-4 max-md:pb-4">
      <section className="flex flex-col gap-4 p-4">
        <Title size="4xl" as="h2" capitalize>
          {t('title.0', { fallback: 'Insights That Make Sense' })}, <br />{' '}
          {t('title.1', { fallback: 'and Strategies that Move You Forward' })}
        </Title>
        <Text color="dark">
          {t('description.0', {
            fallback:
              "Got 10 minutes and a business to grow? You're in the right place. Here, you'll find posts designed for quick wins, meaningful insights, and clear next steps.",
          })}{' '}
          <br />{' '}
          {t('description.1', {
            fallback:
              'Tired of vague advice that leaves you stuck? Consider this your shortcut to clarity: plain-English, actionable guidance that keeps pace with your ambitions.',
          })}
        </Text>
      </section>
      <BrowseTopic />
    </section>
  );
};

const BrowseTopic = () => {
  const t = useTranslations('topics.browse');

  const topics = [
    {
      title: t('0.title', { fallback: 'Funnels & Marketing' }),
      description: t('0.description', {
        fallback: 'Build systems that attract, nurture, and convert.',
      }),
    },
    {
      title: t('1.title', { fallback: 'Mindset & Growth Habits' }),
      description: t('1.description', {
        fallback: 'Lead with clarity — and stay focused as you scale.',
      }),
    },
    {
      title: t('2.title', { fallback: 'Business & Offers' }),
      description: t('2.description', {
        fallback: 'Turn ideas into income with the right structure.',
      }),
    },
    {
      title: t('3.title', { fallback: 'Messaging & Content' }),
      description: t('3.description', {
        fallback: 'Say what matters. Stand out without the noise.',
      }),
    },
  ];

  return (
    <section className="flex gap-10 rounded-lg bg-[#F5F4FD] p-6 max-md:flex-col">
      <section className="flex w-1/2 flex-col justify-between gap-6 max-md:w-full">
        <div className="flex flex-col gap-2">
          <Title as="h3" weight={400} size="4xl">
            {t('title', { fallback: 'Browse by Topic' })}
          </Title>
          <Text weight={500} color="dark">
            {t('description', {
              fallback:
                'Find content that fits what you&apos;re working on right now:',
            })}
          </Text>
        </div>
        <ul className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
          {topics.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </ul>
      </section>
      <Image
        className="h-full w-1/2 rounded-lg object-cover max-md:h-[420px] max-md:w-full"
        src="/images/your-growth-library/browse.png"
        alt="browse topic"
        width={648}
        height={420}
        unoptimized
      />
    </section>
  );
};

const Card = ({
  description,
  title,
}: {
  title: string;
  description: string;
}) => (
  <li className="flex flex-col gap-2 rounded-lg bg-[rgba(225,223,246,0.40)] p-6">
    <Title as="h4" size="lg" color="black">
      {title}
    </Title>
    <Text color="dark" size="base">
      {description}
    </Text>
    <span className="ml-auto">
      <ArrowBottomRight />
    </span>
  </li>
);
