import type { Product } from '@/features/products/model/types';

export type Group<T = 'marketing' | 'business'> = {
  id: number;
  name: string;
  type: T;
  products: Product[];
};
