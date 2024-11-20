'use client';

export const checkAuthStatus = async (): Promise<boolean> => {
  const response = await fetch('/auth/check', {
    method: 'GET',
    credentials: 'include'
  });

  return response.ok;
};
