'use client';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';

import { editUser } from '../api/edit-user';
import { editUserSchema } from '../model/schemas/edit-user';
import { useUserStore } from '../model/user.store';

export const EditUserForm = ({ onSuccess }: { onSuccess?: () => void }) => {
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
        notifySuccess('User updated successfully');
        onSuccess?.();
      } else {
        notifyWarning(
          'Something went wrong — please refresh and try again, or email us directly at info@trendelladigital.com.',
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
            label="First Name"
            placeholder="Enter your first name"
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
            label="Last Name"
            placeholder="Enter your last name"
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
            label="Email"
            placeholder="Enter your email"
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
            label="Phone"
            placeholder="Enter your phone number"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="address">
        {field => (
          <TextField
            name={field.name}
            label="Address"
            placeholder="Enter your address"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="apartment">
        {field => (
          <TextField
            name={field.name}
            label="Apartment / Suite (optional)"
            placeholder="Enter your apartment / suite"
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
            label="City"
            placeholder="Enter your city"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="country">
        {field => (
          <TextField
            name={field.name}
            label="Country"
            placeholder="Enter your country"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            intent={field.state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Field name="zip">
        {field => (
          <TextField
            name={field.name}
            label="Postal Code"
            placeholder="Enter your postal code"
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
