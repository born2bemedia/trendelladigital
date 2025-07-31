'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { PlusIcon } from '@/shared/icons/fill/plus';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const LatestFrom = () => {
  const t = useTranslations('home.latestFrom');
  const tp = useTranslations('popularPosts');

  const posts = [
    {
      title: tp('0.title', {
        fallback: "3 Offers That Convert (Even If You're Just Starting)",
      }),
      description: tp('0.description', {
        fallback:
          'Why people buy — and how to package what you do in a way that clicks.',
      }),
      url: '/your-growth-library/3-offers-that-convert',
    },
    {
      title: tp('1.title', {
        fallback: 'Marketing Without a Massive Following',
      }),
      description: tp('1.description', {
        fallback:
          "You don't need to post every day to get clients. Here's what to focus on instead.",
      }),
      url: '/your-growth-library/marketing-without-a-massive-following',
    },
    {
      title: tp('2.title', { fallback: 'Systems That Save Time (and Sanity)' }),
      description: tp('2.description', {
        fallback:
          'The behind-the-scenes tools we use to help founders get hours back each week.',
      }),
      url: '/your-growth-library/systems-that-save-time',
    },
  ];

  return (
    <section className="flex gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]">
      <section className="flex w-1/2 flex-col max-md:w-full">
        <div className="flex flex-col gap-4">
          <Title color="white">
            {t('title', { fallback: 'Latest From the Growth Library' })}
          </Title>
          <Text color="white">
            {t('description.0', { fallback: 'Our blog is packed with' })}{' '}
            <span className="font-bold">
              {t('description.1', {
                fallback: 'real strategies, no-fluff insights, and tools',
              })}
            </span>{' '}
            {t('description.2', {
              fallback:
                'we use every day with real people — and now, they’re yours too.',
            })}
          </Text>
        </div>
        <BrowseArticles className="flex max-md:hidden" />
      </section>
      <section className="flex w-1/2 flex-col gap-2 max-md:w-full">
        {posts.map(item => (
          <ArticleCard key={item.title} {...item} />
        ))}
      </section>
      <BrowseArticles className="hidden max-md:flex" />
    </section>
  );
};

const ArticleCard = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => (
  <Link
    href={url}
    className="flex flex-col gap-2 rounded-lg bg-[rgba(151,151,151,0.20)] p-5"
  >
    <Title color="white" size="lg" as="h4">
      {title}
    </Title>
    <Text color="gray">{description}</Text>
    <span className="ml-auto">
      <PlusIcon />
    </span>
  </Link>
);

const BrowseArticles = ({ className }: { className?: string }) => {
  const t = useTranslations('home.latestFrom');

  return (
    <div className={cn('mt-auto flex-col gap-4', className)}>
      <Title size="3xl" as="h3" color="white">
        {t('browseArticles.title', {
          fallback: 'Looking for more insights that actually move the needle?',
        })}
      </Title>
      <Link href="/your-growth-library">
        <Button variant="metal">
          {t('browseArticles.button', {
            fallback: 'Browse All Articles',
          })}
          <ArrowRight color="black" />
        </Button>
      </Link>
    </div>
  );
};
