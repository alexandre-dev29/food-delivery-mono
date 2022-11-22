import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DarkTheme, LightTheme } from '@food-delivery-mono/ui-shared-components';
import { Container, NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';
import { IconoirProvider } from 'iconoir-react';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient, useGraphqlErrorState } from '@food-delivery-mono/uishared-types';
import ErrorPopup from '../error-popup/ErrorPopup';

type Props = {
  children?: ReactNode;
};

export function MainLayout({ children }: Props) {
  const { isOpen, setIsOpen, errorType, messagesError } = useGraphqlErrorState();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container xl={true} css={{ backgroundColor: '$bgColorWhite', padding: 0, minHeight: '100vh' }}>
      <NextThemesProvider
        defaultTheme={'light'}
        attribute={'class'}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <IconoirProvider
          iconProps={{
            color: '#41436A',
            strokeWidth: 1,
            width: '1em',
            height: '1em',
          }}
        >
          <NextUIProvider>
            <ErrorPopup errorType={errorType} messages={messagesError} onCloseEvent={closeModal} openStatus={isOpen} />
            <Toaster />
            <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
          </NextUIProvider>
        </IconoirProvider>
      </NextThemesProvider>
    </Container>
  );
}

export default MainLayout;
