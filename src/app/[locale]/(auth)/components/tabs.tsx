'use client';

import { Button } from '@/shared/ui/kit/button';

import { Greeting } from './greeting';

export const Tabs = () => {
  return (
    <section className="sticky top-4 flex flex-col gap-6 p-6 max-md:relative max-md:p-0">
      <Greeting />
      <div className="flex flex-col gap-2">
        <Button>My Order History</Button>
        <Button variant="outline">Account Settings</Button>
        <Button variant="outline">Log Out</Button>
      </div>
    </section>
  );
};
