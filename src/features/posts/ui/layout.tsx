'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';

import { Button } from '@/shared/ui/kit/button';

export const PolicyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-4 mt-2 flex flex-col gap-10 bg-white px-[60px] pt-[104px] pb-[120px] max-md:px-4 max-md:pb-[80px]">
      <Link href="/your-growth-library">
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 15L10 12L13 9"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Link>
      {children}
    </main>
  );
};
