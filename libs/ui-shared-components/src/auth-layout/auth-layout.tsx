import MainLayout from '../main-layout/main-layout';

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default AuthLayout;
