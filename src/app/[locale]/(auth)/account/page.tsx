import { getUserOrders } from '@/features/order/api/get-user-orders';

import { AccountContainer } from './components';

export default async function AccountPage() {
  const orders = await getUserOrders();

  return <AccountContainer orders={orders} />;
}
