'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';

const textFieldVariants = cva(
  'p-6 rounded-lg transition-all border text-base text-[#030303]/50 duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'border-[#E1DFF6]/20 bg-[#E1DFF6]/20',
        secondary: 'bg-white border-white',
      },
      intent: {
        primary: '',
        danger:
          'shadow-[0_0_0_1px_#FFE6E6] border-[#FF3939] bg-[#FFE6E6] text-[rgba(255,57,57,0.5)]',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'primary',
    },
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  label,
  intent,
  variant,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
} & TextFieldVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-2">
      <Text color="ghost">{label}</Text>
      <input
        className={cn(textFieldVariants({ intent, variant }), className)}
        {...args}
      />
    </label>
  );
};
