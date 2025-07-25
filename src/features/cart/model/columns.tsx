import type { ColumnDef } from '@tanstack/react-table';

import { Text } from '@/shared/ui/kit/text';

import type { CartItem } from './types';

const formatPrice = (value: number) =>
  value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);

export const getColumns = (
  onIncrement: (name: string) => void,
  onDecrement: (name: string) => void,
): ColumnDef<CartItem>[] => [
  {
    accessorKey: 'name',
    header: () => (
      <Text color="ghost" size="base">
        Service
      </Text>
    ),
    cell: info => <Text color="black">{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'price',
    header: () => (
      <Text color="ghost" size="base">
        Price
      </Text>
    ),
    cell: info => <Text color="black">€{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'quantity',
    header: () => (
      <Text color="ghost" size="base">
        Quantity
      </Text>
    ),
    cell: info => {
      const row = info.row.original;
      return (
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer text-black"
            onClick={() => onDecrement(row.name)}
          >
            -
          </button>
          <Text color="black">{row.quantity}</Text>
          <button
            className="cursor-pointer text-black"
            onClick={() => onIncrement(row.name)}
          >
            +
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: 'total',
    header: () => (
      <Text color="ghost" size="base">
        Subtotal
      </Text>
    ),
    cell: info => {
      const row = info.row.original;
      return (
        <Text color="black">€{formatPrice(row.price * row.quantity)}</Text>
      );
    },
  },
];
