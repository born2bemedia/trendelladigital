'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Button } from '../kit/button';

export const ImgHero = ({
  img,
  title,
  description,
  button,
}: {
  img: { alt: string; url: string };
  title: string;
  description: string | string[];
  button?: { label: string; url: string };
}) => {
  return (
    <section className="mx-4 mt-2.5 flex bg-white px-[60px] pt-[106px] pb-[60px] max-md:px-4 max-md:pt-[90px] max-md:pb-4">
      <section className="relative flex h-[366px] w-full max-md:h-[600px]">
        <Image
          className="rounded-sm object-cover object-center"
          src={img.url}
          alt={img.alt}
          fill
          priority
        />
        <div className="relative m-1 mt-auto flex w-[600px] flex-col gap-4 rounded-sm bg-white p-4">
          <Title color="black" size="4xl" as="h1">
            {title}
          </Title>
          <Text color="black">{description}</Text>
          {button && (
            <Link href={button.url}>
              <Button>{button.label}</Button>
            </Link>
          )}
        </div>
      </section>
    </section>
  );
};
