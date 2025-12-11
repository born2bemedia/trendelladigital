'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/model/user.store';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { allowedCountries } from '@/shared/lib/countries';
import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Autocomplete } from '@/shared/ui/kit/autocomplete';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { signUp } from '../api/sign-up';
import { signUpSchema } from '../model/schemas/sign-up';

export const SignUpForm = () => {
  const t = useTranslations('signUp.form');
  const tu = useTranslations('user.editUserForm');

  const router = useRouter();
  const { setUser } = useUserStore();
  const locale = useLocale();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      isAgree: false,
      firstName: '',
      lastName: '',
      username: '',
      address: '',
      apartment: '',
      city: '',
      country: '',
      zip: '',
    },
    validators: {
      onBlur: signUpSchema,
    },
    onSubmit: async data => {
      const { success, user } = await signUp({
        email: data.value.email,
        password: data.value.password,
        confirmPassword: data.value.confirmPassword,
        phone: data.value.phone,
        firstName: data.value.firstName,
        lastName: data.value.lastName,
        username: data.value.username,
        address: data.value.address,
        apartment: data.value.apartment,
        city: data.value.city,
        country: data.value.country,
        zip: data.value.zip,
      });

      if (success) {
        notifySuccess(
          t('success', { fallback: 'Account created successfully' }),
        );
        setUser(user);
        router.push(`/${locale}/account`);
      } else {
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
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex w-1/2 flex-col gap-6 max-md:w-full"
    >
      <Title size="3xl">Personal Information</Title>
      <div className="flex gap-6">
        <section className="flex w-1/2 flex-col gap-6">
          <Field name="firstName">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.firstName.label', {
                  fallback: 'First Name',
                })}
                placeholder={t('fields.firstName.label', {
                  fallback: 'First Name',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
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
                placeholder={t('fields.lastName.label', {
                  fallback: 'Last Name',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="email">
            {field => (
              <TextField
                name={field.name}
                label={t('fields.email.label', {
                  fallback: 'Email Address',
                })}
                placeholder={t('fields.email.label', {
                  fallback: 'Email Address',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="phone">
            {field => (
              <PhoneField
                name={field.name}
                label={t('fields.phone.label', {
                  fallback: 'Phone Number',
                })}
                placeholder={t('fields.phone.label', {
                  fallback: 'Phone Number',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={value => field.handleChange(value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                variant="primary"
              />
            )}
          </Field>
        </section>
        <section className="flex w-1/2 flex-col gap-6">
          <Field name="apartment">
            {field => (
              <TextField
                name={field.name}
                label={tu('fields.apartment.label', {
                  fallback: 'Apartment / Suite (optional)',
                })}
                placeholder={tu('fields.apartment.placeholder', {
                  fallback: 'Enter your apartment / suite',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="city">
            {field => (
              <TextField
                name={field.name}
                label={tu('fields.city.label', {
                  fallback: 'City',
                })}
                placeholder={tu('fields.city.placeholder', {
                  fallback: 'Enter your city',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="country">
            {field => (
              <Autocomplete
                items={Object.entries(allowedCountries).map(
                  ([value, label]) => ({
                    value,
                    label: label.name,
                  }),
                )}
                label={tu('fields.country.label', {
                  fallback: 'Country',
                })}
                placeholder={tu('fields.country.placeholder', {
                  fallback: 'Enter your country',
                })}
                initialValue={String(field.state.value)}
                onChange={value => field.handleChange(value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
          <Field name="zip">
            {field => (
              <TextField
                name={field.name}
                label={tu('fields.zip.label', {
                  fallback: 'Postal Code',
                })}
                placeholder={tu('fields.zip.placeholder', {
                  fallback: 'Enter your postal code',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              />
            )}
          </Field>
        </section>
      </div>
      <Field name="address">
        {field => (
          <TextField
            name={field.name}
            label={tu('fields.address.label', {
              fallback: 'Address',
            })}
            placeholder={tu('fields.address.placeholder', {
              fallback: 'Enter your address',
            })}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Title size="3xl">Account Access</Title>
      <Field name="username">
        {field => (
          <TextField
            name={field.name}
            label={t('fields.username.label', {
              fallback: 'Username',
            })}
            placeholder={t('fields.username.label', {
              fallback: 'Username',
            })}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="password">
        {field => (
          <TextField
            name={field.name}
            label={t('fields.password.label', {
              fallback: 'Password',
            })}
            placeholder={t('fields.password.label', {
              fallback: 'Password',
            })}
            type="password"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="confirmPassword">
        {field => (
          <TextField
            name={field.name}
            label={t('fields.confirmPassword.label', {
              fallback: 'Confirm Password',
            })}
            placeholder={t('fields.confirmPassword.label', {
              fallback: 'Confirm Password',
            })}
            type="password"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="isAgree">
        {field => (
          <Checkbox
            name={field.name}
            label={
              <>
                {t('fields.isAgree.label.0', {
                  fallback: 'I’m over 18 and agree to Idelaria’s',
                })}{' '}
                <Link href="/terms-of-service" className="underline">
                  {t('fields.isAgree.label.1', {
                    fallback: 'Terms of Service',
                  })}
                </Link>{' '}
                {t('fields.isAgree.label.2', {
                  fallback: 'and',
                })}{' '}
                <Link href="/privacy-policy" className="underline">
                  {t('fields.isAgree.label.3', {
                    fallback: 'Privacy Policy.',
                  })}
                </Link>
              </>
            }
            checked={field.state.value}
            onCheckedChange={e =>
              field.handleChange(e === 'indeterminate' ? false : e)
            }
          />
        )}
      </Field>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit}
            className="justify-center"
            fullWidth
          >
            {isSubmitting ? (
              t('creating', { fallback: 'Creating...' })
            ) : (
              <>
                {t('create', { fallback: 'Create Account' })}
                <ArrowRight color="black" />
              </>
            )}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
