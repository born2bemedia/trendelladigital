'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import 'swiper/css';
import 'swiper/css/pagination';

export const ConsultingReviews = ({
  items,
}: {
  items: {
    name: string;
    description: string;
    imgUrl: string;
    position: string;
    review: string;
  }[];
}) => {
  const t = useTranslations('consultingReviews');

  return (
    <section className="flex flex-col gap-10 py-[80px]">
      <Title color="white" className="text-center">
        {t('title', { fallback: 'What Our Clients Say' })}
      </Title>
      <div className="flex flex-col gap-10 max-md:gap-4">
        <Slider items={items.slice(0, 3)} />
        <Slider items={items.slice(3, 6)} />
      </div>
    </section>
  );
};

const Slider = ({
  items,
}: {
  items: {
    imgUrl: string;
    name: string;
    position: string;
    review: string;
    description: string;
  }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
      slidesPerView="auto"
      modules={[Autoplay]}
      autoplay={{
        delay: 8000,
        pauseOnMouseEnter: true,
        reverseDirection: true,
      }}
      spaceBetween={30}
      className="w-full px-4"
      centeredSlides
      loop
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={item.review}
          className={cn(
            '!my-auto flex !w-[800px] items-center justify-center rounded-lg bg-white p-6 transition-all duration-300 max-md:!w-[280px]',
            index === activeIndex
              ? '!h-[300px] max-md:!h-[280px]'
              : '!h-[250px] max-md:!h-[264px]',
          )}
        >
          <ReviewCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ReviewCard = ({
  description,
  name,
  position,
  review,
  imgUrl,
}: {
  review: string;
  description: string;
  name: string;
  position: string;
  imgUrl: string;
}) => {
  return (
    <section className="flex h-full gap-10">
      <Image
        className="rounded-lg max-md:hidden"
        src={imgUrl}
        alt={name}
        width={252}
        height={252}
        unoptimized
      />
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <Title as="h4" size="3xl" className="max-md:text-[20px]">
            “{review}”
          </Title>
          <Text size="lg" color="ghost" className="max-md:text-[14px]">
            {description}
          </Text>
        </div>
        <span className="mt-auto flex gap-2 max-md:items-center">
          <Image
            className="hidden rounded-lg max-md:block"
            src={imgUrl}
            alt={name}
            width={50}
            height={50}
            unoptimized
          />
          <Text
            color="dark"
            weight={500}
            className="max-md:flex max-md:flex-col"
          >
            <span>{name},</span> <span className="opacity-60">{position}</span>
          </Text>
        </span>
      </div>
    </section>
  );
};
