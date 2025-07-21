import { getGroup } from '@/features/groups/api/get-group';
import { GroupList } from '@/features/groups/ui/list';
import { getPackages } from '@/features/packages/api/get-packages';
import { PackageList } from '@/features/packages/ui/list';

import { Hero, RequestQuote } from './components';

export default async function PlansAndPricing() {
  const marketingGroups = await getGroup<'marketing'>('marketing');
  const businessGroups = await getGroup<'business'>('business');

  const marketingPackages = await getPackages<'marketing'>('marketing');
  const businessPackages = await getPackages<'business'>('business');

  return (
    <section>
      <Hero />
      <PackageList
        type="business"
        values={businessPackages}
        images={[
          '/images/pricing/bis-pckg-1.jpg',
          '/images/pricing/bis-pckg-2.jpg',
        ]}
      />
      <PackageList
        type="marketing"
        values={marketingPackages}
        images={[
          '/images/pricing/mrk-pckg-1.jpg',
          '/images/pricing/mrk-pckg-2.jpg',
        ]}
        reverseImg
      />
      <GroupList type="business" groups={businessGroups} />
      <GroupList type="marketing" groups={marketingGroups} />
      <RequestQuote />
    </section>
  );
}
