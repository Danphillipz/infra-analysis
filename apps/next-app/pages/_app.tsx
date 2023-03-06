import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { SessionProvider } from 'next-auth/react';

function CustomApp({
  Component,
  pageProps: { session, ...pageProperties },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProperties} />
      </main>
    </SessionProvider>
  );
}

export default CustomApp;
