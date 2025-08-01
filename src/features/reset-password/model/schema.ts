import { v } from '@/shared/lib/forms';

export const resetPasswordSchema = v.object({
  email: v.pipe(v.string(), v.minLength(1, 'Email is required')),
});

export const changePasswordSchema = v.object({
  password: v.pipe(v.string(), v.minLength(6, 'Password is required')),
});
