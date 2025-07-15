'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import 'swiper/css';
import 'swiper/css/pagination';

export const WhatYouDoSlider = () => {
  const t = useTranslations('home.whatYouDo.slides');

  const slides = [
    {
      imgUrl: '/images/home/what-you-do/1.jpg',
      title: t('0.title', {
        fallback: 'Turning your expertise into high-value offers',
      }),
      description: t('0.description', {
        fallback: 'people actually want to buy',
      }),
    },
    {
      imgUrl: '/images/home/what-you-do/2.jpg',
      title: t('1.title', {
        fallback: 'Positioning your brand',
      }),
      description: t('1.description', {
        fallback: 'people actually want to buy',
      }),
    },
    {
      imgUrl: '/images/home/what-you-do/3.jpg',
      title: t('2.title', {
        fallback: 'Designing a business model',
      }),
      description: t('2.description', {
        fallback: 'that’s sustainable, scalable, and yours',
      }),
    },
    {
      imgUrl: '/images/home/what-you-do/4.jpg',
      title: t('3.title', {
        fallback: 'Building strategic systems',
      }),
      description: t('3.description', {
        fallback: 'that support consistent income',
      }),
    },
    {
      imgUrl: '/images/home/what-you-do/5.jpg',
      title: t('4.title', {
        fallback: 'Setting clear, trackable revenue goals',
      }),
      description: t('4.description', {
        fallback: 'and hitting them',
      }),
    },
    {
      imgUrl: '/images/home/what-you-do/6.jpg',
      title: t('5.title', {
        fallback: 'Creating messaging that converts',
      }),
      description: t('5.description', {
        fallback: 'without sounding like everyone else',
      }),
    },
    {
      imgUrl: '/images/home/what-you-do/7.jpg',
      title: t('6.title', {
        fallback: 'Removing the noise and decision fatigue',
      }),
      description: t('6.description', {
        fallback: 'that slow you down',
      }),
    },
    {
      imgUrl: '/images/home/what-you-do/8.jpg',
      title: t('7.title', {
        fallback: 'Developing the mindset and habits',
      }),
      description: t('7.description', {
        fallback: 'of a focused, self-led founder',
      }),
    },
  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      modules={[Autoplay]}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="h-[500px] w-full"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
      grabCursor
    >
      {slides.map(item => (
        <SwiperSlide
          key={item.title}
          className="ml-4 h-[500px] max-md:ml-0 max-md:h-[233px]"
        >
          <SliderCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SliderCard = ({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="relative flex h-full w-[350px] flex-col max-md:w-full">
      <Image
        className="object-cover"
        src={imgUrl}
        alt="slide"
        fill
        unoptimized
      />
      <section className="absolute right-1 bottom-1 left-1 z-10 flex h-[150px] flex-col gap-2 bg-white p-6 text-left">
        <Title as="h4" size="2xl" color="dark">
          {title}
        </Title>
        <Text color="dark">{description}</Text>
      </section>
    </section>
  );
};
