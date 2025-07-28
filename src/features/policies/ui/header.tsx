'use client';

import { formatDate } from '@/shared/lib/utils/date';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PolicyHeader = ({
  title,
  lastUpdate,
}: {
  title: string;
  lastUpdate: string;
}) => {
  return (
    <header className="flex flex-col gap-4 p-4">
      <Title as="h1" size="4xl">
        {title}
      </Title>
      <Text color="dark">
        Last updated:{' '}
        <span className="font-bold">{formatDate(lastUpdate)}</span>
      </Text>
    </header>
  );
};
