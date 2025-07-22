'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { TextField } from '@/shared/ui/kit/text-field';

import { signUp } from '../api/sign-up';
import { signUpSchema } from '../model/schemas/sign-up';

export const SignUpForm = () => {
  const t = useTranslations('signUp.form');

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
    },
    validators: {
      onChange: signUpSchema,
    },
    onSubmit: async data => {
      const { success } = await signUp({
        email: data.value.email,
        password: data.value.password,
        confirmPassword: data.value.confirmPassword,
        phone: data.value.phone,
        firstName: data.value.firstName,
        lastName: data.value.lastName,
        username: data.value.username,
      });

      if (success) {
        notifySuccess(
          t('success', { fallback: 'Account created successfully' }),
        );
      } else {
        notifyWarning(
          t('error', {
            fallback:
              'Something went wrong — please refresh and try again, or email us directly at info@trendelladigital.com.',
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
          <TextField
            name={field.name}
            label={t('fields.phone.label', {
              fallback: 'Phone Number',
            })}
            placeholder={t('fields.phone.label', {
              fallback: 'Phone Number',
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
                  fallback: 'I’m over 18 and agree to Trendella Digital’s',
                })}{' '}
                <Link href="/terms-of-service" className="underline">
                  {t('fields.isAgree.label.1', {
                    fallback: 'Terms of Service',
                  })}
                </Link>
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
