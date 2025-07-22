'use server';

import type { SignUpSchema } from '../model/schemas/sign-up';
import { login } from './login';

export async function signUp(
  userDTO: Omit<SignUpSchema, 'retypePassword' | 'isAgree'>,
) {
  const res = await fetch(`${process.env.SERVER_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...userDTO, role: 'customer' }),
  });
  const result = await res.json();

  if (!result.errors) {
    return await login({ email: userDTO.email, password: userDTO.password });
  } else {
    return { success: false };
  }
}
