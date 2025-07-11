'use client';

import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import 'swiper/css';
import 'swiper/css/pagination';
import './what-you-do-slider.css';

const slides = [
  {
    imgUrl: '/images/home/what-you-do/1.jpg',
    title: 'Turning your expertise into high-value offers',
    description: 'people actually want to buy',
  },
  {
    imgUrl: '/images/home/what-you-do/1.jpg',
    title: 'Positioning your brand',
    description: 'people actually want to buy',
  },
  {
    imgUrl: '/images/home/what-you-do/1.jpg',
    title: 'Designing a business model',
    description: 'that’s sustainable, scalable, and yours',
  },
  {
    imgUrl: '/images/home/what-you-do/1.jpg',
    title: 'Building strategic systems',
    description: 'that support consistent income',
  },
];

export const WhatYouDoSlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={24}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
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
        // 1440: {
        //   slidesPerView: 4,
        // },
      }}
      loop
      grabCursor
    >
      {slides.map(item => (
        <SwiperSlide key={item.title} className="h-[500px]">
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
    <section className="relative flex h-full w-[350px] flex-col">
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
