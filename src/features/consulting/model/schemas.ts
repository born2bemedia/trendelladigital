import { v } from '@/shared/lib/forms';

export const requestFormSchema = v.object({
  fullName: v.pipe(v.string(), v.minLength(1, 'Full name is required')),
  business: v.pipe(v.string(), v.minLength(1, 'Business is required')),
  email: v.pipe(v.string(), v.email(), v.minLength(1, 'Email is required')),
  phoneNumber: v.pipe(v.string(), v.minLength(5, 'Phone number is required')),
  message: v.pipe(v.string()),
});

export type RequestForm = v.InferOutput<typeof requestFormSchema>;
