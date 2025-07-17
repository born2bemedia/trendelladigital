'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/styles';
import { Title } from '@/shared/ui/kit/title';

import st from './our-promise.module.css';

export const OurPromise = () => {
  const t = useTranslations('whatToExpect.ourPromise');

  const items: {
    value: string;
    imgUrl: string;
    color: 'pastel' | 'purple';
  }[] = [
    {
      imgUrl: '/images/what-to-expect/stars.svg',
      value: t('items.1', {
        fallback: "We'll never overcomplicate what can be simple",
      }),
      color: 'pastel',
    },
    {
      imgUrl: '/images/what-to-expect/sun.svg',
      value: t('items.2', {
        fallback: "We'll never hand you a strategy without support",
      }),
      color: 'purple',
    },
    {
      imgUrl: '/images/what-to-expect/star-fall.svg',
      value: t('items.3', {
        fallback: "We'll never let you get lost in the noise",
      }),
      color: 'pastel',
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-[60px] pt-[80px] max-md:px-4 max-md:pt-[60px]">
      <Title color="white" className="text-center">
        {t('title', { fallback: 'Our Promise?' })}
      </Title>
      <ul className="flex gap-2 max-md:flex-col">
        {items.map(item => (
          <Card key={item.value} {...item} />
        ))}
      </ul>
    </section>
  );
};

const Card = ({
  imgUrl,
  value,
  color,
}: {
  value: string;
  imgUrl: string;
  color: 'pastel' | 'purple';
}) => (
  <li
    className={cn('flex flex-1 flex-col gap-2 rounded-lg px-10 py-6', {
      [st.bgPastel]: color === 'pastel',
      [st.bgPurple]: color === 'purple',
    })}
  >
    <Image src={imgUrl} alt={value} width={48} height={48} />
    <Title size="2xl">{value}</Title>
  </li>
);
