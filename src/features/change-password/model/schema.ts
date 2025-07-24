import { v } from '@/shared/lib/forms';

export const changePasswordSchema = v.pipe(
  v.object({
    oldPassword: v.pipe(v.string(), v.minLength(1)),
    newPassword: v.pipe(v.string(), v.minLength(6)),
    confirmNewPassword: v.pipe(v.string(), v.minLength(6)),
  }),
  v.forward(
    v.partialCheck(
      [['newPassword'], ['confirmNewPassword']],
      input => input.newPassword === input.confirmNewPassword,
      'The two passwords do not match.',
    ),
    ['confirmNewPassword'],
  ),
);

export type ChangePasswordSchema = v.InferInput<typeof changePasswordSchema>;
