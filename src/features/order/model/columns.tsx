import Link from 'next/link';
import type { useTranslations } from 'next-intl';
import type { ColumnDef } from '@tanstack/react-table';

import type { Order } from '@/features/order/model/types';

import { Text } from '@/shared/ui/kit/text';

export const getColumns = (
  t: ReturnType<typeof useTranslations>,
): ColumnDef<Order>[] => [
  {
    accessorKey: 'orderId',
    header: () => (
      <Text color="ghost" size="base">
        {t('orderId', { fallback: 'Order ID' })}
      </Text>
    ),
    cell: info => <Text color="ghost">#{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'service',
    header: () => (
      <Text color="ghost" size="base">
        {t('service', { fallback: 'Service' })}
      </Text>
    ),
    cell: info => <Text color="black">{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'date',
    header: () => (
      <Text color="ghost" size="base">
        {t('date', { fallback: 'Date' })}
      </Text>
    ),
    cell: info => {
      const date = new Date(info.getValue<string>());
      return <Text color="black">{date.toISOString().split('T')[0]}</Text>;
    },
  },
  {
    accessorKey: 'total',
    header: () => (
      <Text color="ghost" size="base">
        {t('total', { fallback: 'Total' })}
      </Text>
    ),
    cell: info => <Text color="black">{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'payment',
    header: () => (
      <Text color="ghost" size="base">
        {t('payment', { fallback: 'Payment' })}
      </Text>
    ),
    cell: info => <Text color="black">{info.getValue<string>() ?? 'N/A'}</Text>,
  },
  {
    accessorKey: 'status',
    header: () => (
      <Text color="ghost" size="base">
        {t('status', { fallback: 'Status' })}
      </Text>
    ),
    cell: info => <Text color="black">{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'invoice',
    header: () => (
      <Text color="ghost" size="base">
        {t('invoice', { fallback: 'Invoice' })}
      </Text>
    ),
    cell: info => {
      const invoiceUrl = info.getValue<string>();

      return invoiceUrl ? (
        <Link href={invoiceUrl}>
          <Text color="black" underline>
            {t('download', { fallback: 'Download' })}
          </Text>
        </Link>
      ) : (
        <Text color="black">N/A</Text>
      );
    },
  },
];
