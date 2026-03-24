import { lsRead } from '@/shared/lib/utils/browser';

import type { CartItem } from '../model/types';

export function getCart(): CartItem[] {
  const data = lsRead('cart');
  const parsed = data ? JSON.parse(data) : [];
  const cart = Array.isArray(parsed) ? parsed : [];
  return cart.map((item: CartItem) => ({
    ...item,
    total: item.price * item.quantity,
  }));
}
