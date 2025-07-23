'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { Order } from '../model/types';

export const OrderCard = ({ value }: { value: Order }) => {
  const t = useTranslations('account.orderHistory');

  const date = new Date(value.date);

  return (
    <article className="flex flex-col gap-6 border border-black p-2">
      <section className="flex items-center justify-between">
        <Text color="ghost">{value.orderId}</Text>
        <Text color="black">{date.toISOString().split('T')[0]}</Text>
      </section>
      <Title size="3xl" color="black" weight={400}>
        {value.service}
      </Title>
      <section className="flex justify-between">
        <Text color="black" size="2xl">
          €{value.total}
        </Text>
        <div className="flex flex-col gap-3">
          <Text color="black">
            {t('bankTransfer.0', { fallback: 'Bank' })} <br />{' '}
            {t('bankTransfer.1', { fallback: 'Transfer' })}
          </Text>
          <Text color="ghost">{value.payment ?? 'N/A'}</Text>
        </div>
      </section>
      <div className="text-center">
        {value.invoice ? (
          <Link href={value.invoice} target="_blank">
            <Text color="black" underline>
              {t('download', { fallback: 'Download' })}
            </Text>
          </Link>
        ) : (
          <Text color="ghost" underline>
            {t('download', { fallback: 'Download' })}
          </Text>
        )}
      </div>
    </article>
  );
};
