import { v } from '@/shared/lib/forms';

export const editUserSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(1, 'First name is required')),
  lastName: v.pipe(v.string(), v.minLength(1, 'Last name is required')),
  email: v.pipe(v.string(), v.email('Invalid email address')),
  phone: v.pipe(v.string(), v.minLength(1, 'Phone number is required')),
  address: v.pipe(v.string()),
  apartment: v.pipe(v.string()),
  city: v.pipe(v.string()),
  country: v.pipe(v.string()),
  zip: v.pipe(v.string()),
});

export type EditUserSchema = v.InferOutput<typeof editUserSchema>;
