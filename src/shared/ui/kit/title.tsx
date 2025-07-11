'use client';

import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const titleVariants = cva(
  'transition duration-300 ease-in-out leading-[120%]',
  {
    variants: {
      size: {
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-[40px] leading-[100%] max-md:text-[32px]',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl max-md:text-[40px] leading-[100%]',
      },
      color: {
        dark: 'text-dark',
        white: 'text-white',
        deepDark: 'text-deep-dark',
      },
      weight: {
        400: 'font-normal',
        500: 'font-medium',
        700: 'font-bold',
      },
    },
    defaultVariants: {
      size: '6xl',
      color: 'dark',
      weight: 500,
    },
  },
);

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  color,
  weight,
  size,
  as = 'h2',
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(titleVariants({ color, weight, size }), className)}>
      {children}
    </Tag>
  );
};
