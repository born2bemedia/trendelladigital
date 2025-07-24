'use client';

import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';

import { changePasswordSchema } from '../model/schema';

export const ChangePasswordForm = () => {
  const t = useTranslations('changePassword');

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
            label={t('fields.oldPassword.label', {
              fallback: 'Current password',
            })}
            placeholder={t('fields.oldPassword.placeholder', {
              fallback: 'Enter your current password',
            })}
            type="password"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
            variant="secondary"
          />
        )}
      </Field>
      <Field name="newPassword">
        {field => (
          <TextField
            name={field.name}
            label={t('fields.newPassword.label', {
              fallback: 'New password',
            })}
            placeholder={t('fields.newPassword.placeholder', {
              fallback: 'Enter your new password',
            })}
            type="password"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
            variant="secondary"
          />
        )}
      </Field>
      <Field name="confirmNewPassword">
        {field => (
          <TextField
            name={field.name}
            label={t('fields.confirmNewPassword.label', {
              fallback: 'Confirm new password',
            })}
            placeholder={t('fields.confirmNewPassword.placeholder', {
              fallback: 'Enter your new password again',
            })}
            type="password"
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
              t('saving', {
                fallback: 'Saving...',
              })
            ) : (
              <>
                {t('saveChanges', {
                  fallback: 'Save Changes',
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
