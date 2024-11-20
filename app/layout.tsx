'use client';

import './ui/global.css';
import NavBar from './ui/nav-bar';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className='bg-desk'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
