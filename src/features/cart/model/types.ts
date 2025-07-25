import type { Package } from '@/features/packages/model/types';
import type { Product } from '@/features/products/model/types';

export type CartItem = (Package | Product) & {
  quantity: number;
  total: number;
};
