'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const btnVariants = cva(
  'py-4 px-6 flex items-center gap-2 text-sm cursor-pointer transition duration-300 ease-in-out font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-transparent border border-black text-black hover:opacity-70',
        secondary:
          'bg-transparent text-white border border-white hover:opacity-70',
        metal:
          'text-black border border-white/40 bg-gradient-to-r from-white from-3% to-[#999] to-[61%] hover:opacity-70',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  variant,
  onClick,
  disabled,
  fullWidth = false,
  type = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonVariants) => {
  return (
    <button
      className={cn(
        btnVariants({ variant }),
        fullWidth ? 'w-full' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
