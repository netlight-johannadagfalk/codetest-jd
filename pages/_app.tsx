import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import AuthContextProvider from '../context/auth-context';

import configureStore from './../hooks/hooks-store/product-store';

configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
