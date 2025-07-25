import Image from 'next/image';

import { OrderList } from '@/features/cart/ui/order-list';

export default function CartPage() {
  return (
    <section className="mx-4 mt-4 flex flex-col gap-10 bg-white px-[60px] pt-[104px] pb-[120px] max-md:px-4 max-md:pb-[80px]">
      <Image
        className="h-[200px] w-full rounded-lg object-cover"
        src="/images/cart/hero.jpg"
        alt="hero"
        width={1000}
        height={200}
      />
      <OrderList />
    </section>
  );
}
