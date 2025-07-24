'use client';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';

import { changePasswordSchema } from '../model/schema';

export const ChangePasswordForm = () => {
  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validators: {
      onChange: changePasswordSchema,
    },
    onSubmit: async data => {
      console.log('data', data);
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex flex-col gap-6"
    >
      <Field name="oldPassword">
        {field => (
          <TextField
            name={field.name}
            label="Current password"
            placeholder="Enter your current password"
            type="password"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="newPassword">
        {field => (
          <TextField
            name={field.name}
            label="New password"
            placeholder="Enter your new password"
            type="password"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="confirmNewPassword">
        {field => (
          <TextField
            name={field.name}
            label="Confirm new password"
            placeholder="Enter your new password again"
            type="password"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
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
              'Saving...'
            ) : (
              <>
                Save Changes
                <ArrowRight color="black" />
              </>
            )}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
