'use client';
import { Title } from '@/shared/ui/kit/title';

export const PolicyHeader = ({
  title,
}: {
  title: string;
  lastUpdate: string;
}) => {
  return (
    <header className="flex flex-col gap-4 p-4">
      <Title as="h1" size="4xl">
        {title}
      </Title>
    </header>
  );
};
