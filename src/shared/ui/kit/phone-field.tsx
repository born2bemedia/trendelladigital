'use client';

import {
  defaultCountries,
  PhoneInput,
  type PhoneInputProps,
} from 'react-international-phone';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { excludedCountries } from '@/shared/lib/countries';
import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';

import 'react-international-phone/style.css';

const phoneFieldVariants = cva(
  '!p-6 !rounded-r-lg transition-all !border !text-base !text-[#030303]/50 duration-300 !w-full !h-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: '!border-[#E1DFF6]/20 !bg-[#E1DFF6]/20',
        secondary: '!bg-white !border-white',
      },
      intent: {
        primary: '',
        danger:
          '!shadow-[0_0_0_1px_#FFE6E6] !border-[#FF3939] !bg-[#FFE6E6] !text-[rgba(255,57,57,0.5)]',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'primary',
    },
  },
);

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;

export const PhoneField = ({
  country,
  label,
  variant,
  intent,
  ...args
}: PhoneInputProps & {
  country?: string;
  label?: string;
} & PhoneFieldVariants) => {
  return (
    <label className="relative w-full">
      <Text color="ghost" className="mb-1.5">
        {label}
      </Text>
      <PhoneInput
        defaultCountry={
          defaultCountries.some(
            ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2),
          )
            ? country
            : 'us'
        }
        className="!h-[74px]"
        inputClassName={phoneFieldVariants({
          variant,
          intent,
        })}
        countries={defaultCountries.filter(
          ([, iso2]) => !excludedCountries.includes(iso2),
        )}
        countrySelectorStyleProps={{
          buttonClassName: cn(
            '!h-full bg-white !border-none !pr-3 !pl-2.5',
            variant === 'primary'
              ? '!bg-[#E1DFF6]/20 !border-[#E1DFF6]/20'
              : '!bg-white !border-white',
          ),
          dropdownStyleProps: {
            className: '!outline-none',
          },
        }}
        {...args}
      />
    </label>
  );
};
