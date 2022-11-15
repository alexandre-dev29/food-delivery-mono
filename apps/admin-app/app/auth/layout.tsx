'use client';
import { Container } from '@nextui-org/react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container display={'flex'} justify={'center'} alignItems={'center'} css={{ height: '100vh' }}>
      {children}
    </Container>
  );
}
