'use client';

import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { allowedCountries } from '@/shared/lib/countries';
import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Autocomplete } from '@/shared/ui/kit/autocomplete';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';

import { editUser } from '../api/edit-user';
import { editUserSchema } from '../model/schemas/edit-user';
import { useUserStore } from '../model/user.store';

export const EditUserForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const t = useTranslations('user.editUserForm');
  const { user, setUser } = useUserStore();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      address: user?.address ?? '',
      apartment: user?.apartment ?? '',
      city: user?.city ?? '',
      country: user?.country ?? '',
      zip: user?.zip ?? '',
    },
    validators: {
      onChange: editUserSchema,
    },
    onSubmit: async data => {
      const res = await editUser({ ...data.value, id: user?.id ?? -1 });
      setUser(res.doc);

      if (res.message) {
        notifySuccess(
          t('success', {
            fallback: 'User updated successfully',
          }),
        );
        onSuccess?.();
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
      className="flex flex-col gap-6"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
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
            variant="secondary"
          />
        )}
      </Field>
      <Field name="phone">
        {field => (
          <PhoneField
            name={field.name}
            variant="secondary"
            label={t('fields.phone.label', {
              fallback: 'Phone',
            })}
            placeholder={t('fields.phone.placeholder', {
              fallback: 'Enter your phone number',
            })}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={value => field.handleChange(value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="address">
        {field => (
          <TextField
            name={field.name}
            label={t('fields.address.label', {
              fallback: 'Address',
            })}
            placeholder={t('fields.address.placeholder', {
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
      <Field name="apartment">
        {field => (
          <TextField
            name={field.name}
            label={t('fields.apartment.label', {
              fallback: 'Apartment / Suite (optional)',
            })}
            placeholder={t('fields.apartment.placeholder', {
              fallback: 'Enter your apartment / suite',
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
      <Field name="country">
        {field => (
          <Autocomplete
            items={Object.entries(allowedCountries).map(([value, label]) => ({
              value,
              label: label.name,
            }))}
            label={t('fields.country.label', {
              fallback: 'Country',
            })}
            placeholder={t('fields.country.placeholder', {
              fallback: 'Select your country',
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
