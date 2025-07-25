import { lsRead, lsWrite } from '@/shared/lib/utils/browser';

import type { Product } from '../model/types';

type CartItem = Product & { quantity: number };

export default function buyProduct(product: Product) {
  const cartData = lsRead('cart');
  const cart: CartItem[] = cartData ? JSON.parse(cartData) : [];

  const existingItemIndex = cart.findIndex(item => item.id === product.id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  lsWrite('cart', JSON.stringify(cart));
  return { success: true };
}
