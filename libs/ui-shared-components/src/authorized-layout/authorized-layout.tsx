import { ReactNode } from 'react';
import MainLayout from '../main-layout/main-layout';

export interface AuthorizedLayoutProps {
  children?: ReactNode;
}

export function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
  return (
    <MainLayout>
      <div>{children}</div>
    </MainLayout>
  );
}

export default AuthorizedLayout;
