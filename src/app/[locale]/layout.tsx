import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from 'sonner';

import { cn } from '@/shared/lib/utils/styles';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';
import { TopBar } from '@/shared/ui/components/top-bar';

import './globals.css';
import { routing } from '@/i18n/routing';

const suisseIntl = localFont({
  src: [
    {
      path: '../../../public/fonts/suisse-intl/light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/suisse-intl/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/suisse-intl/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/suisse-intl/bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <GoogleAnalytics gaId="G-B2ZZ1FQF7K" />
      <body className={cn(suisseIntl.className, 'antialiased')}>
        <NextIntlClientProvider>
          <TopBar />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
