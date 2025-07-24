'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { logout } from '@/core/auth/api/logout';

import { useTabsStore } from '@/features/order/model/tabs.store';

import { notifyWarning } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';

import { Greeting } from './greeting';

export const Tabs = () => {
  const router = useRouter();

  const t = useTranslations('auth.tabs');
  const { activeTab, setActiveTab } = useTabsStore();

  const logoutHandle = async () => {
    const res = await logout();

    if (res.success) {
      router.push('/');
    } else {
      notifyWarning(
        t('warning', {
          fallback: 'Something went wrong — please refresh and try again.',
        }),
      );
    }
  };

  return (
    <section className="sticky top-4 flex flex-col gap-6 p-6 max-md:relative max-md:p-0">
      <Greeting />
      <div className="flex flex-col gap-2 max-md:flex-row max-md:overflow-x-auto max-md:pb-2">
        <Button
          variant={activeTab === 'orderHistory' ? 'primary' : 'outline'}
          className="max-md:shrink-0"
          onClick={() => setActiveTab('orderHistory')}
        >
          {t('history', {
            fallback: 'My Order History',
          })}
        </Button>
        <Button
          variant={activeTab === 'accountSettings' ? 'primary' : 'outline'}
          className="max-md:shrink-0"
          onClick={() => setActiveTab('accountSettings')}
        >
          {t('settings', {
            fallback: 'Account Settings',
          })}
        </Button>
        <Button
          variant="outline"
          className="max-md:shrink-0"
          onClick={logoutHandle}
        >
          {t('logout', {
            fallback: 'Log Out',
          })}
        </Button>
      </div>
    </section>
  );
};
