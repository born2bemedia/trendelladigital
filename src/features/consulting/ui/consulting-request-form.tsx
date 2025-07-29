'use client';

import { useState } from 'react';
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

import type { Package } from '@/features/packages/model/types';
import type { Product } from '@/features/products/model/types';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { notifyWarning } from '@/shared/lib/toast';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { sendRequest } from '../api/send-request';
import { requestFormSchema } from '../model/schemas';

export const ConsultingRequestForm = ({
  isOpen,
  setIsOpen,
  type,
  entity,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  type: 'marketing' | 'business';
  entity: Product | Package;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations('consultingForm');

  return (
    <Root
      open={isOpen}
      onOpenChange={open => {
        setIsOpen(open);
        if (!open) {
          setIsSuccess(false);
        }
      }}
    >
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/10 backdrop-blur-sm" />
        <Content
          className={cn(
            'animate-contentShow fixed top-1/2 left-1/2 z-[999] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-lg px-6 py-10 focus:outline-none max-lg:w-[96%] max-md:max-h-[96%] max-md:overflow-y-auto',
            type === 'business' ? 'bg-[#F5F4FD]' : 'bg-[#F6F3F3]',
          )}
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="flex h-full flex-col gap-10">
              {isSuccess ? (
                <ThankYou type={type} />
              ) : (
                <>
                  <Title size="4xl" color="dark" weight={400}>
                    {entity.name}{' '}
                    {t('requestForm', { fallback: 'Request Form' })}
                  </Title>
                  <RequestForm
                    onSuccess={() => setIsSuccess(true)}
                    type={type}
                  />
                </>
              )}
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const RequestForm = ({
  onSuccess,
  type,
}: {
  onSuccess: () => void;
  type: 'marketing' | 'business';
}) => {
  const t = useTranslations('consultingForm');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      business: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validators: {
      onBlur: requestFormSchema,
    },
    onSubmit: async data => {
      const { error } = await sendRequest({ ...data.value, type });

      if (!error) {
        onSuccess();
      } else {
        notifyWarning(
          t('error', {
            fallback: 'Something went wrong — try again or contact us directly',
          }),
        );
      }
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex flex-col gap-10"
    >
      <section className="flex flex-col gap-6">
        <FormRow>
          <Field name="fullName">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.0.label', { fallback: 'Full Name' })}
                placeholder={t('fields.0.placeholder', {
                  fallback: 'Enter your full name',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="secondary"
              />
            )}
          </Field>
          <Field name="business">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.1.label', { fallback: 'Business' })}
                placeholder={t('fields.1.placeholder', {
                  fallback: 'Tell us about your business',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="secondary"
              />
            )}
          </Field>
        </FormRow>
        <FormRow>
          <Field name="email">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.2.label', { fallback: 'Email' })}
                placeholder={t('fields.2.placeholder', {
                  fallback: 'Enter your email',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="secondary"
              />
            )}
          </Field>
          <Field name="phoneNumber">
            {field => (
              <PhoneField
                name={field.name}
                label={t('fields.3.label', { fallback: 'Phone Number' })}
                placeholder={t('fields.3.placeholder', {
                  fallback: 'Enter your phone number',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={value => field.handleChange(value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="secondary"
              />
            )}
          </Field>
        </FormRow>
        <Field name="message">
          {field => (
            <TextArea
              name={field.name}
              label={t('fields.4.label', { fallback: 'Your Message' })}
              placeholder={t('fields.4.placeholder', {
                fallback: 'Message',
              })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
              intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              variant="secondary"
            />
          )}
        </Field>
      </section>
      <div className="ml-auto flex gap-2.5">
        <Close asChild>
          <Button>{t('cancel', { fallback: 'Cancel' })}</Button>
        </Close>
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit}
              className="justify-center"
              fullWidth
            >
              {isSubmitting ? (
                t('requesting', { fallback: 'Requesting...' })
              ) : (
                <>
                  {t('request', { fallback: 'Request' })}
                  <ArrowRight color="black" />
                </>
              )}
            </Button>
          )}
        </Subscribe>
      </div>
    </form>
  );
};

const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-6 max-md:flex-col">{children}</div>
);

const ThankYou = ({ type }: { type: 'marketing' | 'business' }) => {
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
        src={
          type === 'business'
            ? '/images/request-dialog/business.jpg'
            : '/images/request-dialog/marketing.jpg'
        }
        alt={`${type} Request Form`}
        width={900}
        height={300}
        unoptimized
      />
    </section>
  );
};
