'use client';

import { useRouter } from 'next/navigation';
import { checkAuthStatus } from './lib/utils';
import { useEffect } from 'react';

export default function LandingPage() {
  const router = useRouter();

  useEffect(()=> {
    const authCheck = async() => {
      const check = await checkAuthStatus();
      if (check) {
        router.push('/home');
      } else {
        router.push('/users/sign-in');
      }
    };
    authCheck();
  });

  return (
    <div></div>
  );
}
