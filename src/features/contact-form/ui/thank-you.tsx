'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/10 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-lg bg-[#F5F4FD] px-6 py-10 focus:outline-none max-lg:w-[96%] max-md:max-h-[96%] max-md:overflow-y-auto"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="flex h-full flex-col gap-10">
              <DialogContent />
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const DialogContent = () => {
  const t = useTranslations('consultingForm');

  return (
    <section className="flex flex-col gap-10">
      <section className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start max-md:gap-4">
        <div className="flex flex-col gap-4 p-4 max-md:p-0">
          <Title size="4xl" as="h4">
            {t('thankYou', { fallback: 'Thank you!' })}
          </Title>
          <Text color="dark">
            {t('thankYouDesc', {
              fallback:
                'Your request has been received. We’ll get back to you shortly to schedule your consultation.',
            })}
          </Text>
        </div>
        <Close asChild>
          <Button>
            {t('close', { fallback: 'Close' })} <ArrowRight color="black" />
          </Button>
        </Close>
      </section>
      <Image
        className="h-[300px] w-full rounded-sm object-cover"
        src="/images/request-dialog/business.jpg"
        alt="Thank you"
        width={900}
        height={300}
        unoptimized
      />
    </section>
  );
};
