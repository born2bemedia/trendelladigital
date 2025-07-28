'use client';

import type { ReactNode } from 'react';

export const PolicyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-4 mt-2 flex flex-col gap-10 bg-white px-[60px] pt-[104px] pb-[120px] max-md:px-4 max-md:pb-[80px]">
      {children}
    </main>
  );
};
