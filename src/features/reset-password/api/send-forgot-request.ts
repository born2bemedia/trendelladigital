'use server';

import { SERVER_URL } from '@/shared/config/env';

export async function sendForgotRequest(email: string) {
  const res = await fetch(`${SERVER_URL}/api/users/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();

  return data;
}
