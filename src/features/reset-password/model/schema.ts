import { v } from '@/shared/lib/forms';

export const resetPasswordSchema = v.object({
  email: v.pipe(v.string(), v.minLength(1, 'Email is required')),
});
