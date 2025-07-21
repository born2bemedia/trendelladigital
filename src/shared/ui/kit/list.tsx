'use client';

import { Text } from '@/shared/ui/kit/text';

export const List = ({ values }: { values: string[] }) => (
  <ul className="flex flex-col">
    {values.map(value => (
      <li
        key={value}
        className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#030303] before:content-['']"
      >
        <Text color="dark">{value}</Text>
      </li>
    ))}
  </ul>
);
