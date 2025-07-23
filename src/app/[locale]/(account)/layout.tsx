import type { ReactNode } from 'react';
import Image from 'next/image';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-4 mt-4 flex flex-col gap-10 bg-white px-[60px] pt-[104px] pb-[60px] max-md:px-4 max-md:pt-[90px] max-md:pb-4">
      <Image
        className="h-[200px] w-full rounded-sm object-cover"
        src="/images/account/hero.jpg"
        alt="hero"
        width={1920}
        height={200}
        unoptimized
      />
      <section className="relative flex gap-6 max-md:flex-col">
        {children}
      </section>
    </main>
  );
}
