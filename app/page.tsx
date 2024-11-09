'use client';

// import { FormEvent } from 'react';
// import { useRouter } from 'next/navigation';
// import LoginForm from './ui/login-form';
// import SignupForm from './ui/sign-up.form';
import About from './ui/about';

// if user is logged in, redirect to home page
export default function LoginPage() {
  // const router = useRouter();

  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   const username = formData.get('username');
  //   const password = formData.get('password');

  //   const response = await fetch('/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       username,
  //       password
  //     })
  //   });

  //   if (response.ok) {
  //     router.push('/');
  //   } else {
  //     // Handle errors
  //   }
  // }

  return (
    <div>
      {/* <LoginForm onSubmitFunc={handleSubmit} />
    <SignupForm onSubmitFunc={handleSubmit} /> */}
      <About />
    </div>
  );
}