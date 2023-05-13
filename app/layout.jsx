import '../styles/globals.css';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';
import Sidebar from '../components/admin/Sidebar';

export default function RootLayout({ children, Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
      <Helmet>
        <body
          className={classNames({
            'debug-screens': process.env.NODE_ENV === 'development',
          })}
        />
      </Helmet>

      {router.asPath === '/admin' ||
      router.asPath === '/uploadNotes' ||
      router.asPath === '/uploadQB' ||
      router.asPath === '/uploadTT' ||
      router.asPath === '/uploadQuizzes' ? (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
