import type { ReactNode } from 'react';

import { Tabs } from './components';

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative mx-4 flex gap-6 bg-white px-[60px] pt-[104px] pb-[60px] max-md:flex-col max-md:px-4 max-md:pb-4">
      <Tabs />
      {children}
    </main>
  );
}
