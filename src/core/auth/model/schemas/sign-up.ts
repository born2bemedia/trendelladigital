import { v } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils/validation';

export const signUpSchema = v.pipe(
  v.object({
    firstName: v.pipe(v.string(), v.minLength(1)),
    lastName: v.pipe(v.string(), v.minLength(1)),
    username: v.pipe(v.string(), v.minLength(1)),
    email: v.pipe(v.string(), v.email()),
    phone: v.pipe(
      v.string(),
      v.minLength(1, 'Please provide your phone number'),
      v.custom(
        value => isPhoneValid(String(value)),
        'Looks like you missed a required field. Please double-check and try again.',
      ),
    ),
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
