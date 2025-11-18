import { allowedCountriesOptions } from '@/shared/lib/countries';
import { v } from '@/shared/lib/forms';

export const signUpSchema = v.pipe(
  v.object({
    firstName: v.pipe(v.string(), v.minLength(1)),
    lastName: v.pipe(v.string(), v.minLength(1)),
    username: v.pipe(v.string(), v.minLength(1)),
    email: v.pipe(v.string(), v.email()),
    phone: v.pipe(
      v.string(),
      v.minLength(5, 'Please provide your phone number'),
    ),
    address: v.pipe(v.string(), v.minLength(1, 'Address is required')),
    apartment: v.pipe(v.string()),
    city: v.pipe(v.string(), v.minLength(1, 'City is required')),
    country: v.pipe(
      v.string(),
      v.custom(
        value =>
          value === '' ||
          allowedCountriesOptions.some(opt => opt.label === value),
        'Please select a valid country',
      ),
    ),
    zip: v.pipe(v.string(), v.minLength(1, 'Zip code is required')),
    password: v.pipe(v.string(), v.minLength(6)),
    confirmPassword: v.pipe(v.string(), v.minLength(6)),
    isAgree: v.pipe(
      v.boolean(),
      v.literal(true, 'You must agree to the terms and conditions'),
    ),
  }),
  v.forward(
    v.partialCheck(
      [['password'], ['confirmPassword']],
      input => input.password === input.confirmPassword,
      'The two passwords do not match.',
    ),
    ['confirmPassword'],
  ),
);

export type SignUpSchema = v.InferInput<typeof signUpSchema>;
