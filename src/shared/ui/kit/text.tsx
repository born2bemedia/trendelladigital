'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const textVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    color: {
      dark: 'text-dark',
      black: 'text-black',
      deepDark: 'text-deep-dark',
      white: 'text-white',
      gray: 'text-white/50',
      ghost: 'text-[rgba(3,3,3,0.6)]',
      violet: 'text-[#8779F7]',
      danger: 'text-[#FF4C4C]',
    },
    weight: {
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'white',
    weight: 400,
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  size,
  color,
  weight,
  className,
  uppercase = false,
}: {
  children: ReactNode;
  uppercase?: boolean;
  className?: string;
} & TextVariants) => {
  return (
    <p
      className={cn(
        textVariants({ size, color, weight }),
        uppercase && 'uppercase',
        className,
      )}
    >
      {children}
    </p>
  );
};
