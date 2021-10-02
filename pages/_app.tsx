import 'styles/globals.scss';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

type Page = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
export default App;
