'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PopularPosts = () => {
  const t = useTranslations('popularPosts');

  const posts = [
    {
      title: t('0.title', {
        fallback: "3 Offers That Convert (Even If You're Just Starting)",
      }),
      description: t('0.description', {
        fallback:
          'Why people buy — and how to package what you do in a way that clicks.',
      }),
      url: '#',
    },
    {
      title: t('1.title', {
        fallback: 'Marketing Without a Massive Following',
      }),
      description: t('1.description', {
        fallback:
          "You don't need to post every day to get clients. Here's what to focus on instead.",
      }),
      url: '#',
    },
    {
      title: t('2.title', { fallback: 'Systems That Save Time (and Sanity)' }),
      description: t('2.description', {
        fallback:
          'The behind-the-scenes tools we use to help founders get hours back each week.',
      }),
      url: '#',
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-[100px] py-[80px] max-md:px-4">
      <Title color="white">
        {t('title', { fallback: 'Most Popular Posts' })}
      </Title>
      <section className="flex gap-2 max-md:flex-col">
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
}: {
  url: string;
  title: string;
  description: string;
}) => {
  return (
    <Link
      href={url}
      className="flex min-h-[353px] flex-1 flex-col justify-between rounded-lg bg-[rgba(151,151,151,0.20)] p-[60px] max-md:p-10"
    >
      <section className="flex flex-col gap-2">
        <Title size="2xl" color="white">
          {title}
        </Title>
        <Text color="gray">{description}</Text>
      </section>
      <Button variant="ghost">
        Read More <ArrowRight />
      </Button>
    </Link>
  );
};
