'use client';

import { useRouter } from 'next/navigation';
import { useForm } from '@tanstack/react-form';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';

import { changePassword } from '../api/change-password';
import { changePasswordSchema } from '../model/schema';

export const ChangePasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      password: '',
    },
    validators: {
      onChange: changePasswordSchema,
    },
    onSubmit: async data => {
      const res = await changePassword(token, data.value.password);

      if (res.token) {
        notifySuccess('Password changed successfully');
        router.push('/login');
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
      <Field name="password">
        {field => (
          <TextField
            name={field.name}
            label="New Password"
            placeholder="New Password"
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
              'Loading...'
            ) : (
              <>
                Change Password
                <ArrowRight color="black" />
              </>
            )}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
