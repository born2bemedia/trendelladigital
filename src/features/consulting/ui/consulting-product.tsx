'use client';

import { useState } from 'react';

import { AddIcon } from '@/shared/icons/fill/add';
import { MinusIcon } from '@/shared/icons/fill/minus';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ConsultingProduct = ({
  description,
  name,
  includes,
}: {
  name: string;
  description: string;
  includes: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col gap-10 rounded-lg bg-white px-6 py-10">
      <section className="flex items-start gap-10 max-md:items-center max-md:gap-4">
        <div className="flex flex-col gap-2">
          <Title as="h4" color="dark" size="2xl">
            {name}
          </Title>
          <Text color="ghost">{description}</Text>
        </div>
        <button
          className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
          onClick={() => setOpen(!open)}
        >
          {open ? <MinusIcon /> : <AddIcon />}
        </button>
      </section>
      {open && (
        <section className="flex flex-col gap-2">
          <Text color="dark">Includes:</Text>
          <ul className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            {includes.map(item => (
              <ListItem key={item} value={item} />
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};

const ListItem = ({ value }: { value: string }) => (
  <li className="rounded-lg bg-[rgba(151,151,151,0.05)] p-4">
    <Text color="dark">{value}</Text>
  </li>
);
