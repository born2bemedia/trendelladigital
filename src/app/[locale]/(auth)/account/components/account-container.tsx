'use client';

import { useTabsStore } from '@/features/order/model/tabs.store';
import type { Order } from '@/features/order/model/types';

import { AccountAccess } from './account-access';
import { OrderHistory } from './order-history';
import { PersonalInfoContainer } from './personal-info-container';

export const AccountContainer = ({ orders }: { orders: Order[] }) => {
  const { activeTab } = useTabsStore();

  return (
    <section className="flex flex-1 gap-10 rounded-lg bg-[rgba(209,183,188,0.30)] px-6 py-10 max-md:flex-col">
      {activeTab === 'orderHistory' ? (
        <OrderHistory orders={orders} />
      ) : (
        <>
          <PersonalInfoContainer />
          <AccountAccess />
        </>
      )}
    </section>
  );
};
