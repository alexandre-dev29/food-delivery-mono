import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from "next/app";
import { AuthorizedLayout, MainLayout } from "@food-delivery-mono/ui-shared-components";
import "./global.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) =>
    <MainLayout><AuthorizedLayout>{page}</AuthorizedLayout></MainLayout>);

  return getLayout(<Component {...pageProps} />);
};

export default App;
