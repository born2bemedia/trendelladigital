'use client';

import { type ReactNode, useId } from 'react';
import type { CheckboxProps } from '@radix-ui/react-checkbox';
import { Indicator, Root } from '@radix-ui/react-checkbox';

import { Check } from '@/shared/icons/fill/check';
import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';

export function Checkbox({
  label,
  onCheckedChange,
  checked = false,
  id,
  intent = 'default',
  ...props
}: {
  label?: ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  intent?: 'default' | 'danger';
} & CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className="flex items-center gap-3">
      <Root
        className={cn(
          'flex h-[18px] w-[18px] flex-shrink-0 cursor-pointer items-center justify-center border bg-transparent transition-all duration-300 ease-in-out data-[state=checked]:bg-black',
          intent === 'danger'
            ? 'border-[#FFE6E6] hover:shadow-[0_0_0_1px_#FFE6E6] focus:shadow-[0_0_0_1px_#FFE6E6]'
            : 'border-black hover:shadow-[0_0_0_1px_#000] focus:shadow-[0_0_0_1px_#000]',
        )}
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <Indicator className="mt-0.5">
          <Check />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <Text color="dark" weight={500}>
          {label}
        </Text>
      </label>
    </div>
  );
}
