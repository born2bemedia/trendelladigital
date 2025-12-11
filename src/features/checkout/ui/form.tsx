'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import type { User } from '@/core/user/model/types';

import { getCart } from '@/features/cart/api/get-cart';
import type { CartItem } from '@/features/cart/model/types';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { CloseIcon } from '@/shared/icons/fill/close';
import { allowedCountries } from '@/shared/lib/countries';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { lsWrite } from '@/shared/lib/utils/browser';
import { Autocomplete } from '@/shared/ui/kit/autocomplete';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { sendOrder } from '../api/send-order';
import { checkoutSchema } from '../model/schemas';

export const CheckoutForm = ({ user }: { user?: User }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => setCart(getCart()), []);

  const router = useRouter();
  const t = useTranslations('checkout');

  const totalPrice = cart.reduce((acc, item) => acc + item.total, 0);

  const onDeleteItem = (id: number) => {
    setCart(prev => {
      const newCart = prev.filter(item => item.id !== id);
      lsWrite('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      city: user?.city ?? '',
      country: user?.country ?? '',
      zip: user?.zip ?? '',
      additionalInfo: '',
      address1: user?.address ?? '',
      address2: user?.apartment ?? '',
      isAgreeWithTerms: false,
      isAgreeWithPrivacy: false,
    },
    validators: {
      onBlur: checkoutSchema,
    },
    onSubmit: async data => {
      const res = await sendOrder({
        billing: data.value,
        products: cart.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.total,
        })),
        user: user ?? undefined,
        totalPrice,
      });

      if (res?.message === 'Order successfully created.') {
        notifySuccess(
          t('success', {
            fallback: 'Your order has been created successfully.',
          }),
        );
        lsWrite('cart', JSON.stringify([]));
        router.push('/');
      } else {
        console.error(res);
        notifyWarning(
          t('error', {
            fallback:
              'Something went wrong — please refresh and try again, or email us directly at info@idelaria.com.',
          }),
        );
      }
    },
  });

  return (
    <form
      className="flex gap-6 max-lg:flex-col"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <section className="flex w-full flex-col gap-10 rounded-lg bg-[rgba(225,223,246,0.20)] p-6">
        <Title as="h1" size="3xl" weight={500}>
          {t('title', {
            fallback: 'Billing Details',
          })}
        </Title>
        <div className="flex flex-col gap-6">
          <FormRow>
            <Field name="firstName">
              {field => (
                <TextField
                  name={field.name}
                  label={t('fields.firstName.label', {
                    fallback: 'First Name',
                  })}
                  placeholder={t('fields.firstName.placeholder', {
                    fallback: 'Enter your first name',
                  })}
                  value={String(field.state.value)}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                  variant="secondary"
                />
              )}
            </Field>
            <Field name="lastName">
              {field => (
                <TextField
                  name={field.name}
                  label={t('fields.lastName.label', {
                    fallback: 'Last Name',
                  })}
                  placeholder={t('fields.lastName.placeholder', {
                    fallback: 'Enter your last name',
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
                  label={t('fields.email.label', {
                    fallback: 'Email',
                  })}
                  placeholder={t('fields.email.placeholder', {
                    fallback: 'Enter your email',
                  })}
                  value={String(field.state.value)}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                  type="email"
                  variant="secondary"
                />
              )}
            </Field>
            <Field name="phone">
              {field => (
                <PhoneField
                  name={field.name}
                  label={t('fields.phone.label', {
                    fallback: 'Phone number',
                  })}
                  placeholder={t('fields.phone.placeholder', {
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
          <Field name="address1">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.address1.label', {
                  fallback: 'Address Line 1',
                })}
                placeholder={t('fields.address1.placeholder', {
                  fallback: 'Enter your address',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="secondary"
              />
            )}
          </Field>
          <Field name="address2">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.address2.label', {
                  fallback: 'Address Line 2',
                })}
                placeholder={t('fields.address2.placeholder', {
                  fallback: 'Enter your address',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="secondary"
              />
            )}
          </Field>
          <Field name="city">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.city.label', {
                  fallback: 'City',
                })}
                placeholder={t('fields.city.placeholder', {
                  fallback: 'Enter your city',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="secondary"
              />
            )}
          </Field>
          <FormRow>
            <Field name="country">
              {field => (
                <Autocomplete
                  items={Object.entries(allowedCountries).map(
                    ([value, label]) => ({
                      value,
                      label: label.name,
                    }),
                  )}
                  label={t('fields.country.label', {
                    fallback: 'Country',
                  })}
                  placeholder={t('fields.country.placeholder', {
                    fallback: 'Enter your country',
                  })}
                  initialValue={String(field.state.value)}
                  onChange={value => field.handleChange(value)}
                  intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                  variant="secondary"
                />
              )}
            </Field>
            <Field name="zip">
              {field => (
                <TextField
                  name={field.name}
                  label={t('fields.zip.label', {
                    fallback: 'Postal Code',
                  })}
                  placeholder={t('fields.zip.placeholder', {
                    fallback: 'Enter your postal code',
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
        </div>
        <Title size="3xl" weight={500}>
          {t('additionalInfo', {
            fallback: 'Additional Information',
          })}
        </Title>
        <Field name="additionalInfo">
          {field => (
            <TextArea
              name={field.name}
              label={t('fields.additionalInfo.label', {
                fallback: 'Additional Information',
              })}
              placeholder={t('fields.additionalInfo.placeholder', {
                fallback: 'Add Special Notes',
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
      <section className="flex w-[368px] shrink-0 flex-col gap-[60px] border border-black p-6 max-lg:w-full">
        <Title as="h4" size="2xl" weight={400}>
          {t('summary.title', {
            fallback: 'Your Order Summary',
          })}
        </Title>
        <div className="flex flex-col gap-6">
          <section className="flex max-h-[220px] flex-col overflow-y-auto">
            {cart.map(item => (
              <CardItem
                key={item.id}
                name={item.name}
                price={item.total}
                quantity={item.quantity}
                onDelete={() => onDeleteItem(item.id)}
              />
            ))}
          </section>
          <span className="h-[1px] w-full bg-black" />
          <span className="flex items-center justify-between">
            <Text size="2xl" color="dark">
              {t('summary.total', {
                fallback: 'Total:',
              })}
            </Text>
            <Title size="4xl" as="h5">
              €{totalPrice.toLocaleString()}
            </Title>
          </span>
        </div>
        <section className="flex flex-col gap-6">
          <Field name="isAgreeWithTerms">
            {field => (
              <Checkbox
                name={field.name}
                label={
                  <>
                    I agree to the{' '}
                    <Link href="/terms-and-condition" className="underline">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/refund-policy" className="underline">
                      Refund Policy.
                    </Link>
                  </>
                }
                checked={field.state.value}
                onCheckedChange={e =>
                  field.handleChange(e === 'indeterminate' ? false : e)
                }
                intent={field.state.meta.errors.length ? 'danger' : 'default'}
              />
            )}
          </Field>
          <Field name="isAgreeWithPrivacy">
            {field => (
              <Checkbox
                name={field.name}
                label={
                  <>
                    My data will be processed as described in the{' '}
                    <Link href="/privacy-policy" className="underline">
                      Privacy Policy.
                    </Link>
                  </>
                }
                checked={field.state.value}
                onCheckedChange={e =>
                  field.handleChange(e === 'indeterminate' ? false : e)
                }
                intent={field.state.meta.errors.length ? 'danger' : 'default'}
              />
            )}
          </Field>
          <div className="flex flex-col gap-2">
            <Subscribe
              selector={state => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="justify-center"
                  fullWidth
                >
                  {isSubmitting ? (
                    t('submit.loading', {
                      fallback: 'Submitting...',
                    })
                  ) : (
                    <>
                      {t('submit.label', {
                        fallback: 'Submit',
                      })}
                      <ArrowRight color="black" />
                    </>
                  )}
                </Button>
              )}
            </Subscribe>
            <Text size="xs" color="dark">
              {t('appendix.0', {
                fallback:
                  'We only use your information to deliver your service and enhance your experience — see how in our',
              })}{' '}
              <Link href="/privacy-policy" className="underline">
                {t('appendix.1', {
                  fallback: 'Privacy Policy.',
                })}
              </Link>
            </Text>
          </div>
        </section>
      </section>
    </form>
  );
};

const FormRow = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-6">{children}</div>
);

const CardItem = ({
  name,
  price,
  quantity,
  onDelete,
}: {
  price: number;
  name: string;
  quantity: number;
  onDelete: () => void;
}) => {
  const t = useTranslations('checkout');

  return (
    <section className="flex flex-col gap-4 p-2">
      <div className="flex items-center justify-between gap-[60px]">
        <Text size="base" color="black">
          {name} x {quantity}
        </Text>
        <button onClick={onDelete} className="cursor-pointer">
          <CloseIcon />
        </button>
      </div>
      <span className="flex items-center justify-between p-2">
        <Text size="base" color="black">
          {t('price', {
            fallback: 'Price:',
          })}
        </Text>
        <Text size="base" color="black">
          €{price.toLocaleString()}
        </Text>
      </span>
    </section>
  );
};
