import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'it', 'ro'],
  localeDetection: false,
  defaultLocale: 'en',
});
