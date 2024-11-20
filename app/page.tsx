'use client';

import { useRouter } from 'next/compat/router';

// if user is logged in, redirect to home page
export default function LandingPage() {
  const router = useRouter();

  return (
    <div>
      hi
    </div>
  );
}