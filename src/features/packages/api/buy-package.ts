import { lsRead, lsWrite } from '@/shared/lib/utils/browser';

import type { Package } from '../model/types';

type CartItem = Package & { quantity: number };

export default function buyPackage(pkg: Package) {
  const cartData = lsRead('cart');
  const parsed = cartData ? JSON.parse(cartData) : [];
  const cart: CartItem[] = Array.isArray(parsed) ? parsed : [];

  const existingItemIndex = cart.findIndex(item => item.id === pkg.id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...pkg, quantity: 1 });
  }

  lsWrite('cart', JSON.stringify(cart));
  return { success: true };
}
