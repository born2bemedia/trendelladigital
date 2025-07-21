export type Package<T = 'marketing' | 'business'> = {
  id: number;
  slug: string;
  name: string;
  description: string;
  type: T;
  price: number;
  fromPrice: boolean;
};
