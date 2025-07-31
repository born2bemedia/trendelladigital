'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <section className="mx-4 mt-4 bg-white px-[60px] pt-[98px] pb-[60px] max-md:px-4 max-md:pb-4">
      <section className="relative flex h-[366px] w-full max-md:h-[600px]">
        <Image
          className="object-cover object-top"
          src="/images/how-we-help/hero.jpg"
          alt="hero"
          fill
          unoptimized
        />
        <HeroContent />
      </section>
    </section>
  );
};

const HeroContent = () => {
  const t = useTranslations('howWeCanHelpYou.hero');

  return (
    <div className="relative z-10 m-1 mt-auto flex w-max flex-col gap-4 rounded-sm bg-white p-4">
      <Title as="h1">
        <span className="opacity-50">{t('title.0', { fallback: 'How' })}</span>{' '}
        {t('title.1', { fallback: 'We Can Help You' })}
      </Title>
      <Text color="black">
        {t('description', {
          fallback:
            "You're great at what you do. Let's make sure your project reflects that.",
        })}
      </Text>
      <Link href="/contact-us">
        <Button>
          {t('button', { fallback: 'Book a Free Consultation' })}{' '}
          <ArrowRight color="black" />
        </Button>
      </Link>
    </div>
  );
};
