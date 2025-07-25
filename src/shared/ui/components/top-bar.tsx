'use client';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Text } from '@/shared/ui/kit/text';

import { LangSwitcher } from './lang-switcher';

export const TopBar = () => {
  return (
    <section className="flex items-center justify-between bg-white px-[80px] py-2 max-md:hidden">
      <div className="flex items-center gap-[60px]">
        <Text size="xs" color="black">
          info@trendelladigital.com
        </Text>
      </div>
      <section className="flex items-center gap-[60px]">
        <div className="flex items-center gap-5">
          <Text size="xs" color="black" className="flex items-center">
            Instagram <ArrowRight color="black" />
          </Text>
          <Text size="xs" color="black" className="flex items-center">
            Twitter <ArrowRight color="black" />
          </Text>
          <Text size="xs" color="black" className="flex items-center">
            Facebook <ArrowRight color="black" />
          </Text>
        </div>
        <LangSwitcher />
      </section>
    </section>
  );
};
