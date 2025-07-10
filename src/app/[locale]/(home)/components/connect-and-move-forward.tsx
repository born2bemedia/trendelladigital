'use client';

import Link from 'next/link';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getContacts = () => [
  { label: 'Phone Number', value: 'Phone Number' },
  { label: 'Email', value: 'Email' },
  { label: 'Office Address', value: 'Office Address' },
];

export const ConnectAndMoveForward = () => {
  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] pt-10 pb-[100px] max-md:px-4 max-md:py-[60px]">
      <section className="flex flex-col gap-4">
        <Title>Let’s Connect & Move Forward</Title>
        <Text color="black">
          Got a question? An idea? Or just want to talk things through? We’re
          here.s
        </Text>
      </section>
      <section className="flex gap-6 max-lg:flex-col">
        {getContacts().map(item => (
          <ContactCard key={item.label} {...item} />
        ))}
        <Link href="/request-form">
          <Button>
            Send Us a Message <ArrowRight color="black" />
          </Button>
        </Link>
      </section>
    </section>
  );
};

const ContactCard = ({ label, value }: { label: string; value: string }) => (
  <section className="flex flex-1 flex-col gap-2">
    <Text color="ghost">{label}</Text>
    <div className="rounded-lg bg-[rgba(225,223,246,0.20)] p-6">
      <Text color="deepDark" size="base">
        {value}
      </Text>
    </div>
  </section>
);
