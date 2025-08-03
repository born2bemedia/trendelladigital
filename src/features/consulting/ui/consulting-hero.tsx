'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ConsultingHero = ({
  type,
  imgUrl,
  title,
  description,
  btnMeta,
}: {
  type: 'business' | 'marketing';
  imgUrl: string;
  title: string;
  description: string;
  btnMeta: {
    label: string;
    url: string;
  };
}) => {
  return (
    <section
      className={cn(
        'mx-4 mt-2.5 flex px-[60px] pt-[106px] pb-[60px] max-md:px-4 max-md:pt-[90px] max-md:pb-4',
        type === 'marketing' ? 'bg-[#F6F3F3]' : 'bg-[#F5F4FD]',
      )}
    >
      <section className="relative flex h-[366px] w-full max-md:h-[600px]">
        <Image
          className="object-cover"
          src={imgUrl}
          alt={title}
          fill
          priority
        />
        <div className="relative m-1 mt-auto flex flex-col gap-4 rounded-sm bg-[#F5F4FD] p-4">
          <Title color="black" size="4xl" as="h1">
            {title}
          </Title>
          <Text color="black">{description}</Text>
          <Link href={btnMeta.url}>
            <Button>{btnMeta.label}</Button>
          </Link>
        </div>
      </section>
    </section>
  );
};
