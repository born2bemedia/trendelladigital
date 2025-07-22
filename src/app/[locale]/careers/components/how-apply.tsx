'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-apply.module.css';

export const HowApply = () => {
  const t = useTranslations('careers.howApply');

  const steps = [
    t('steps.0', {
      fallback: 'A short note about who you are and why you’re a fit',
    }),
    t('steps.1', {
      fallback:
        'Examples of your work or links (portfolio, website, case studies, etc.)',
    }),
    t('steps.2', {
      fallback: 'The role you’re applying for in the subject line',
    }),
  ];

  return (
    <section className="relative px-[100px] py-[80px] max-md:px-4 max-md:py-10">
      <WhatYouCanExpect />
      <section className="flex gap-10 pt-[80px] max-md:flex-col max-md:pt-10">
        <section className="flex w-1/2 flex-col justify-between max-md:w-full">
          <div className="flex flex-col gap-2.5">
            <Title color="white">
              {t('title', { fallback: 'How to Apply' })}
            </Title>
            <Text color="white">
              {t('description', {
                fallback:
                  'We care more about how you think and work than where you’ve worked before.',
              })}
            </Text>
          </div>
          <Text size="2xl" color="white" weight={600} className="max-md:hidden">
            {t('weReview', {
              fallback:
                'We review every application personally. Even if we don’t have an immediate opening, we may keep your information on file for future collaborations.',
            })}
          </Text>
        </section>
        <section className="flex flex-col gap-2">
          <Text color="white">
            {t('sendEmail', { fallback: 'Send an email to E-mail with:' })}
          </Text>
          <section className="flex flex-col gap-1">
            {steps.map(item => (
              <div key={item} className="border border-white px-10 py-6">
                <Text size="xl" color="white">
                  {item}
                </Text>
              </div>
            ))}
          </section>
        </section>
        <Text
          size="2xl"
          color="white"
          weight={600}
          className="hidden max-md:flex"
        >
          {t('weReview', {
            fallback:
              'We review every application personally. Even if we don’t have an immediate opening, we may keep your information on file for future collaborations.',
          })}
        </Text>
      </section>
    </section>
  );
};

const WhatYouCanExpect = () => {
  const t = useTranslations('careers.whatToExpect');

  const items = [
    {
      imgUrl: '/images/careers/br-stars.svg',
      text: t('steps.0', {
        fallback: 'A lean, thoughtful team that values autonomy and respect',
      }),
    },
    {
      imgUrl: '/images/careers/star-ring.svg',
      text: t('steps.1', {
        fallback: 'Flexible working hours — results over constant availability',
      }),
    },
    {
      imgUrl: '/images/careers/asteroid.svg',
      text: t('steps.2', {
        fallback: 'Clear documentation, no guesswork',
      }),
    },
    {
      imgUrl: '/images/careers/sun.svg',
      text: t('steps.3', {
        fallback: 'Async collaboration with regular touchpoints',
      }),
    },
    {
      imgUrl: '/images/careers/star-fall.svg',
      text: t('steps.4', {
        fallback: 'Room to grow with a brand that’s growing fast',
      }),
    },
  ];

  return (
    <section className="flex flex-col gap-10 pb-[80px] max-md:pb-10">
      <Title className="text-center" color="white">
        {t('title', { fallback: 'What You Can Expect From Us' })}
      </Title>
      <section className="flex gap-2 max-xl:flex-wrap max-md:flex-col max-md:flex-nowrap">
        {items.map((item, index) => (
          <section
            className={cn(
              'flex flex-1 flex-col gap-2 rounded-lg p-6',
              index % 2 ? st.bgPurple : st.bgPink,
            )}
            key={item.text}
          >
            <Image src={item.imgUrl} alt={item.text} width={48} height={48} />
            <Text size="2xl" weight={500} color="dark">
              {item.text}
            </Text>
          </section>
        ))}
      </section>
    </section>
  );
};
