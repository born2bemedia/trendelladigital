'use client';

import Link from 'next/link';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { PlusIcon } from '@/shared/icons/fill/plus';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getArticles = () => [
  {
    title: '3 Offers That Convert (Even If You’re Just Starting)',
    description:
      'Learn what makes an offer irresistible — and how to build yours fast.',
    url: '/',
  },
  {
    title: 'Marketing Without a Massive Following',
    description:
      'How to attract clients without dancing on TikTok or posting every day.',
    url: '/',
  },
  {
    title: 'Systems That Save Time (and Sanity)',
    description:
      'Behind-the-scenes systems that reduce decision fatigue and increase operational clarity.',
    url: '/',
  },
];

export const LatestFrom = () => {
  return (
    <section className="flex gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]">
      <section className="flex w-1/2 flex-col max-md:w-full">
        <div className="flex flex-col gap-4">
          <Title color="white">Latest From the Growth Library</Title>
          <Text color="white">
            Our blog is packed with{' '}
            <span className="font-bold">
              real strategies, no-fluff insights, and tools
            </span>{' '}
            we use every day with real people — and now, they&apos;re yours too.
          </Text>
        </div>
        <BrowseArticles className="flex max-md:hidden" />
      </section>
      <section className="flex w-1/2 flex-col gap-2 max-md:w-full">
        {getArticles().map(item => (
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
  return (
    <div className={cn('mt-auto flex-col gap-4', className)}>
      <Title size="3xl" as="h3" color="white">
        Looking for more insights that actually move the needle?
      </Title>
      <Link href="/">
        <Button variant="metal">
          Browse All Articles <ArrowRight color="black" />
        </Button>
      </Link>
    </div>
  );
};
