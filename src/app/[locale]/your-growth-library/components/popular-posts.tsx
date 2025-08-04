'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/styles';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PopularPosts = () => {
  const t = useTranslations('popularPosts');
  const tp = useTranslations('topics.browse');
  const tpo = useTranslations('topics');

  const posts = [
    {
      type: tp('2.title', { fallback: 'Business & Offers' }),
      title: t('0.title', {
        fallback: "3 Offers That Convert (Even If You're Just Starting)",
      }),
      description: t('0.description', {
        fallback:
          'Why people buy — and how to package what you do in a way that clicks.',
      }),
      url: '/your-growth-library/3-offers-that-convert',
      imgUrl: '/images/your-growth-library/1.jpg',
    },
    {
      type: tp('0.title', { fallback: 'Funnels & Marketing' }),
      title: t('1.title', {
        fallback: 'Marketing Without a Massive Following',
      }),
      description: t('1.description', {
        fallback:
          "You don't need to post every day to get clients. Here's what to focus on instead.",
      }),
      url: '/your-growth-library/marketing-without-a-massive-following',
      imgUrl: '/images/your-growth-library/2.jpg',
      reverse: true,
    },
    {
      type: tp('1.title', { fallback: 'Mindset & Growth Habits' }),
      title: t('2.title', { fallback: 'Systems That Save Time (and Sanity)' }),
      description: t('2.description', {
        fallback:
          'The behind-the-scenes tools we use to help founders get hours back each week.',
      }),
      url: '/your-growth-library/systems-that-save-time',
      imgUrl: '/images/your-growth-library/3.jpg',
    },
  ];

  return (
    <section className="mx-4 flex flex-col gap-[80px] bg-white px-[60px] pb-[80px] max-md:gap-10 max-md:px-4 max-md:pb-4">
      <section className="flex flex-col gap-4 p-4">
        <Title size="4xl" as="h2" capitalize>
          {tpo('title.0', { fallback: 'Insights That Make Sense' })}, <br />
          {tpo('title.1', { fallback: 'and Strategies that Move You Forward' })}
        </Title>
        <Text color="dark">
          {tpo('description.0', {
            fallback:
              "Got 10 minutes and a business to grow? You're in the right place. Here, you'll find posts designed for quick wins, meaningful insights, and clear next steps.",
          })}{' '}
          <br />{' '}
          {tpo('description.1', {
            fallback:
              'Tired of vague advice that leaves you stuck? Consider this your shortcut to clarity: plain-English, actionable guidance that keeps pace with your ambitions.',
          })}
        </Text>
      </section>
      <section className="flex flex-col gap-6">
        {posts.map(post => (
          <Card key={post.title} {...post} />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  url,
  title,
  description,
  type,
  imgUrl,
  reverse,
}: {
  url: string;
  title: string;
  description: string;
  type: string;
  imgUrl: string;
  reverse?: boolean;
}) => {
  return (
    <article
      className={cn(
        'flex w-full gap-10 rounded-lg bg-[#F5F4FD] p-6 max-md:flex-col-reverse max-md:p-4',
        reverse && 'flex-row-reverse',
      )}
    >
      <Link
        href={url}
        className="flex w-1/2 flex-col justify-between max-md:w-full max-md:gap-4"
      >
        <div className="flex flex-col gap-4">
          <Tag>{type}</Tag>
          <div className="flex flex-col gap-2">
            <Title
              size="4xl"
              as="h3"
              color="dark"
              weight={400}
              className="max-md:text-[24px]"
            >
              {title}
            </Title>
            <Text color="dark" weight={500}>
              {description}
            </Text>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="ml-auto"
        >
          <path
            d="M13.334 13.3335L26.6673 26.6668M26.6673 26.6668V16.6668M26.6673 26.6668H16.6673"
            stroke="#030303"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Image
        className="h-full max-h-[250px] w-1/2 rounded-lg object-cover max-md:w-full"
        src={imgUrl}
        alt={title}
        width={100}
        height={250}
        unoptimized
      />
    </article>
  );
};
