'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

export const HowItHappens = () => {
  const t = useTranslations('home.howItHappens');

  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] py-[100px] max-md:px-4 max-md:py-[60px]">
      <Title>
        {t('title', {
          fallback:
            'From First “Let’s Talk” to “This Is Working” — Here&apos;s How It Happens',
        })}
      </Title>
      <Slider />
      <span className="flex items-start justify-between gap-2 max-md:flex-col">
        <Text color="dark" weight={500}>
          {t('text', {
            fallback: 'Need clarity before you commit?',
          })}
        </Text>
        <Link href="/what-to-expect">
          <Button>
            {t('btn', {
              fallback: 'What to Expect',
            })}
            <ArrowRight color="black" />
          </Button>
        </Link>
      </span>
    </section>
  );
};

const slides = (t: ReturnType<typeof useTranslations>) => [
  {
    imgUrl: '/images/home/how-it-happens/5.jpg',
    name: t('0.title', { fallback: 'The Discovery Spark' }),
    text: t('0.text', {
      fallback:
        'We hop on a free strategy call to uncover where you are, where you want to go, and what’s been holding you back. Clarity starts here.',
    }),
  },
  {
    imgUrl: '/images/home/how-it-happens/1.jpg',
    name: t('1.title', { fallback: 'Your Strategy, Your Way' }),
    text: t('1.text', {
      fallback:
        'You’ll get a clear, personalized game plan — not a generic checklist. Timeline? Tools? Priorities? All mapped out and made for you.',
    }),
  },
  {
    imgUrl: '/images/home/how-it-happens/2.jpg',
    name: t('2.title', { fallback: 'Sessions That Move You Forward' }),
    text: t('2.text', {
      fallback:
        'Weekly or biweekly 1:1s packed with insights, action steps, and accountability — think consulting meets coaching with momentum built in.',
    }),
  },
  {
    imgUrl: '/images/home/how-it-happens/3.jpg',
    name: t('3.title', { fallback: 'Let’s Build It Together' }),
    text: t('3.text', {
      fallback:
        'We don’t just advise — we help you do the thing: map funnels, shape offers, review sales pages, tweak your messaging, optimize your flow.',
    }),
  },
  {
    imgUrl: '/images/home/how-it-happens/4.jpg',
    name: t('4.title', { fallback: 'Review. Refine. Repeat.' }),
    text: t('4.text', {
      fallback:
        'We check progress, make smart adjustments, celebrate wins, and scale what works. Strategy isn’t static — we evolve as you do.',
    }),
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const t = useTranslations('home.howItHappens.slides');

  return (
    <section className="relative">
      <div className="mb-10 flex justify-between gap-2 max-lg:flex-col">
        {slides(t).map((slide, index) => (
          <section key={index} className="w-full">
            <Text color="dark" className="mb-2.5 flex items-center gap-2.5">
              <span className="text-lg opacity-50">{++index}</span>
              {slide.name}
            </Text>
            <div className="relative h-1 overflow-hidden rounded-full bg-gray-300">
              <div
                className={cn(
                  'absolute top-0 left-0 h-full bg-black transition-all duration-250 ease-linear',
                  index === activeIndex
                    ? 'animate-progress'
                    : index < activeIndex
                      ? 'w-full'
                      : 'w-0',
                )}
              />
            </div>
          </section>
        ))}
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        className="mySwiper h-[500px]"
      >
        {slides(t).map((slide, index) => (
          <SwiperSlide key={index} className="h-[500px]">
            <SlideCard text={slide.text} imgUrl={slide.imgUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const SlideCard = ({ text, imgUrl }: { text: string; imgUrl: string }) => (
  <article className="relative flex w-full rounded-lg px-6 py-10">
    <Image
      className="rounded-lg object-cover"
      src={imgUrl}
      alt={text}
      fill
      unoptimized
    />
    <Title
      size="4xl"
      color="violet"
      weight={400}
      className="relative z-10 mt-auto"
    >
      {text}
    </Title>
  </article>
);
