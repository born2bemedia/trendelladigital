'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { lsWrite } from '@/shared/lib/utils/browser';
import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { getCart } from '../api/get-cart';
import { getColumns } from '../model/columns';
import type { CartItem } from '../model/types';
import { OrderItem } from './order-item';
import { TotalOrder } from './total-order';

export const OrderList = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => setCart(getCart()), []);

  const router = useRouter();

  const toCheckoutHandle = () => {
    lsWrite('cart', JSON.stringify(cart));
    router.push('/checkout');
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart(prev =>
      prev.map(item =>
        item.name === name
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
              total: item.price * Math.max(1, item.quantity + delta),
            }
          : item,
      ),
    );
  };

  const increment = (name: string) => updateQuantity(name, 1);
  const decrement = (name: string) => updateQuantity(name, -1);

  const columns = getColumns(increment, decrement);

  return cart.length ? (
    <section className="flex gap-10 max-md:flex-col">
      <div className="rounded-lg bg-[#F5F4FD] p-6">
        <div className="max-md:hidden">
          <Table
            data={cart}
            columns={columns}
            className="bg-transparent"
            viewVariant="grid"
          />
        </div>
        <div className="hidden flex-col max-md:flex">
          {cart.map(item => (
            <OrderItem
              key={item.id}
              onIncrement={() => increment(item.name)}
              onDecrement={() => decrement(item.name)}
              {...item}
            />
          ))}
        </div>
      </div>
      <TotalOrder
        total={cart.reduce((acc, item) => acc + item.total, 0)}
        onClick={toCheckoutHandle}
      />
    </section>
  ) : (
    <section className="flex flex-col gap-4 p-4">
      <Title size="4xl">Nothing Here… Yet</Title>
      <Text color="dark">
        Browse our consulting services to find the right strategy, systems, or
        marketing support to move your business forward.
      </Text>
    </section>
  );
};
