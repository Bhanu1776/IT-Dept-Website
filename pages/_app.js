import '../styles/globals.css';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <body
          className={classNames({
            'debug-screens': process.env.NODE_ENV === 'development',
          })}
        />
      </Helmet>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
