'use client';
import { Container } from '@nextui-org/react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={'flex justify-center items-center '}
      style={{
        height: '100vh',
        padding: 0,
        backgroundImage: "url('/wave.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundOrigin: '0',
      }}
    >
      {children}
    </div>
  );
}
