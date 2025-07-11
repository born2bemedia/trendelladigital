'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Partnership = () => {
  return (
    <section className="flex flex-col gap-10 px-[100px] py-[80px] max-md:px-4 max-md:py-[80px]">
      <section className="flex flex-col gap-2.5">
        <Title color="white">
          One-On-One Partnership With Tactical Intelligences
        </Title>
        <Text color="white">
          We believe collaboration beats delegation. Our consulting is
          structured around deep partnership, combining high-level thinking with
          tactical precision.
        </Text>
      </section>
      <section className="relative flex h-[500px] max-md:h-[900px]">
        <Image
          className="object-cover"
          src="/images/how-we-help/book-girl.jpg"
          alt="girl-with-book"
          fill
          unoptimized
        />
        <Receives />
      </section>
    </section>
  );
};

const Receives = () => {
  const items = [
    'Private 1:1 strategy sessions, customized to your goals',
    'Support that evolves as your business does — responsive, adaptive, and clear',
    'Strategic input paired with hands-on co-creation — from messaging to monetization',
    'A clear execution framework with weekly or biweekly momentum check-ins',
    'Real-time feedback and expert guidance on offers, funnels, messaging, and systems',
  ];

  return (
    <section className="z-10 m-2 mt-auto flex flex-col gap-4 rounded-lg bg-white p-6">
      <Title as="h3" color="dark">
        You’ll receive:
      </Title>
      <section className="flex gap-6 max-md:flex-col">
        {items.map(item => (
          <div
            key={item}
            className="border-t-[3px] border-[rgba(151,151,151,0.27)] pt-2.5"
          >
            <Text color="dark" size="base">
              {item}
            </Text>
          </div>
        ))}
      </section>
    </section>
  );
};
