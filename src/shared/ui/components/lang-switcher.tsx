'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { Text } from '@/shared/ui/kit/text';

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('langSwitcher');
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === '/' || pathname === `/${locale}`;

  const switchLanguage = useCallback(
    (value: string) => {
      const segments = pathname.split('/');
      segments[1] = value;
      const newPath = segments.join('/');
      router.replace(newPath);
    },
    [pathname, router],
  );

  const languages = [
    { value: 'en', label: t('en', { fallback: 'English' }) },
    { value: 'de', label: t('de', { fallback: 'German' }) },
    { value: 'it', label: t('it', { fallback: 'Italian' }) },
    { value: 'el', label: t('el', { fallback: 'Greek' }) },
  ];

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="cursor-pointer capitalize outline-0">
        <Text
          size="xs"
          color={isHomePage ? 'black' : 'white'}
          className="px-2 py-1"
          underline
        >
          {languages.find(language => language.value === locale)?.label}
        </Text>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex w-[200px] animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col gap-2 bg-white px-5 py-2.5 capitalize data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {languages.map(option => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => {
                setOpen(false);
                switchLanguage(option.value);
              }}
              className="cursor-pointer outline-0"
            >
              <p className="text-base text-[#030303]">{option.label}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
