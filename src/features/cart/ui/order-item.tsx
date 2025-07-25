'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OrderItem = ({
  name,
  price,
  quantity,
  total,
  onIncrement,
  onDecrement,
}: {
  name: string;
  price: number;
  quantity: number;
  total: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <section className="flex flex-col gap-10 border border-black p-4">
      <Title size="3xl" weight={400} as="h3">
        {name}
      </Title>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-3xl text-black">
          <button onClick={onDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={onIncrement}>+</button>
        </span>
        <Text>€{price.toLocaleString()}</Text>
      </div>
      <div className="flex items-center justify-between">
        <Text color="ghost" size="base">
          Subtotal
        </Text>
        <Text color="black" size="2xl">
          €{total.toLocaleString()}
        </Text>
      </div>
    </section>
  );
};
