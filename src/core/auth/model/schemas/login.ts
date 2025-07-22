import { v } from '@/shared/lib/forms';

export const loginSchema = v.object({
  email: v.pipe(v.string(), v.minLength(1, 'Email or username is required')),
  password: v.pipe(v.string(), v.minLength(1, 'Password is required')),
});
