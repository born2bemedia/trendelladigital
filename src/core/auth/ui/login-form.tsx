'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/model/user.store';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';

import { login } from '../api/login';
import { loginSchema } from '../model/schemas/login';

export const LoginForm = () => {
  const router = useRouter();

  const { setUser } = useUserStore();
  const t = useTranslations('login.form');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit: async data => {
      const { success, user, message } = await login(data.value);

      if (success) {
        notifySuccess(
          t('success', {
            fallback: 'Login successful',
          }),
        );
        setUser(user);
        router.push('/account');
      } else {
        notifyWarning(
          message ??
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
      <Field name="email">
        {field => (
          <TextField
            name={field.name}
            label={t('0', {
              fallback: 'Username or email',
            })}
            placeholder={t('0', {
              fallback: 'Username or email',
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
            type="password"
            name={field.name}
            label={t('1', {
              fallback: 'Password',
            })}
            placeholder={t('1', {
              fallback: 'Password',
            })}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <div className="flex flex-col gap-2">
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit}
              className="justify-center"
              fullWidth
            >
              {isSubmitting ? (
                t('2', {
                  fallback: 'Loading...',
                })
              ) : (
                <>
                  {t('2', {
                    fallback: 'Login',
                  })}
                  <ArrowRight color="black" />
                </>
              )}
            </Button>
          )}
        </Subscribe>
        <Link href="/forgot-password" className="ml-auto">
          <Text color="black" weight={500} underline>
            {t('3', {
              fallback: 'Forgot password?',
            })}
          </Text>
        </Link>
      </div>
    </form>
  );
};
