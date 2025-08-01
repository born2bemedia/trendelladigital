'use client';

import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';

import { sendForgotRequest } from '../api/send-forgot-request';
import { resetPasswordSchema } from '../model/schema';

export const ResetPasswordForm = () => {
  const t = useTranslations('resetPassword.form');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
    validators: {
      onChange: resetPasswordSchema,
    },
    onSubmit: async data => {
      const res = await sendForgotRequest(data.value.email);

      if (res.message === 'Success') {
        notifySuccess('Password reset link sent');
      } else {
        notifyWarning(
          `${res.errors.map((e: { message: string }) => e.message).join(' ')}`,
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
      className="flex w-1/2 flex-col gap-6 rounded-lg bg-[#F5F4FD] p-6 max-md:w-full"
    >
      <Field name="email">
        {field => (
          <TextField
            name={field.name}
            label="Email"
            placeholder="Email"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
            variant="secondary"
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
              t('2', {
                fallback: 'Loading...',
              })
            ) : (
              <>
                {t('1', {
                  fallback: 'Reset Your Password',
                })}
                <ArrowRight color="black" />
              </>
            )}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
