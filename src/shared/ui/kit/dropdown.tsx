'use client';

import { type ReactNode, useState } from 'react';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { CompressIcon } from '@/shared/icons/fill/compress';
import { ExpandIcon } from '@/shared/icons/fill/expand';

export type DropdownOptions = { value: string; label: React.ReactNode };

export const Dropdown = ({
  options,
  value,
  onChange,
}: {
  options: DropdownOptions[];
  value: ReactNode;
  onChange?: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex w-full cursor-pointer items-center justify-between gap-1 rounded-lg bg-[#E1DFF6]/20 p-6 outline-0">
        <p className="text-base text-[#030303]/50">{value}</p>
        {open ? <CompressIcon /> : <ExpandIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex min-w-[var(--radix-dropdown-menu-trigger-width)] animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col gap-1 bg-transparent data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className="relative flex cursor-pointer rounded-lg bg-[#f9f8fc] p-6 transition-all duration-300 ease-in-out outline-none select-none"
              onClick={() => {
                setOpen(false);
                onChange?.(option.value);
              }}
            >
              <p className="text-base text-[#030303]/50">{option.label}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
