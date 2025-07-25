'use client';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const TotalOrder = ({
  total,
  onClick,
}: {
  total: number;
  onClick: () => void;
}) => {
  return (
    <section className="flex w-[280px] shrink-0 flex-col gap-4 p-4 text-right">
      <div className="flex flex-col">
        <Text color="ghost">Total:</Text>
        <Text size="4xl" weight={500} color="dark">
          €{total.toLocaleString()}
        </Text>
      </div>
      <Button className="justify-center" onClick={onClick} fullWidth>
        Proceed to Checkout <ArrowRight color="black" />
      </Button>
    </section>
  );
};
