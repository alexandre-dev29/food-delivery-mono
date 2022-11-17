'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { Container, CssBaseline, useTheme } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DarkTheme, LightTheme, poppins } from '@food-delivery-mono/ui-shared-components';
import { Toaster } from 'react-hot-toast';
import { IconoirProvider } from 'iconoir-react';

export default function Providers({ children }) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return (
    <Container xl={true} css={{ backgroundColor: '$bgColorWhite', padding: 0 }}>
      <NextThemesProvider
        defaultTheme={'light'}
        attribute={'class'}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <Toaster />
          <IconoirProvider
            iconProps={{
              color: '#41436A',
              strokeWidth: 1,
              width: '1em',
              height: '1em',
            }}
          >
            {children}
          </IconoirProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </Container>
  );
}
