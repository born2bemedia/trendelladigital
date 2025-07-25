import { allowedCountriesOptions } from '@/shared/lib/countries';
import { v } from '@/shared/lib/forms';

export const checkoutSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(1, 'First name is required')),
  lastName: v.pipe(v.string(), v.minLength(1, 'Last name is required')),
  email: v.pipe(v.string(), v.email('Invalid email address')),
  phone: v.pipe(v.string(), v.minLength(5, 'Please provide your phone number')),
  address1: v.pipe(v.string(), v.minLength(1, 'Address is required')),
  address2: v.pipe(v.string()),
  city: v.pipe(v.string(), v.minLength(1, 'City is required')),
  zip: v.pipe(v.string(), v.minLength(1, 'Zip code is required')),
  country: v.pipe(
    v.string(),
    v.custom(
      value => allowedCountriesOptions.some(opt => opt.label === value),
      'Please select a valid country',
    ),
  ),
  additionalInfo: v.pipe(v.string()),
  isAgreeWithTerms: v.pipe(
    v.boolean(),
    v.custom(
      value => value === true,
      'You must agree to the terms and conditions',
    ),
  ),
  isAgreeWithPrivacy: v.pipe(
    v.boolean(),
    v.custom(value => value === true, 'You must agree to the privacy policy'),
  ),
});

export type CheckoutForm = v.InferOutput<typeof checkoutSchema>;
