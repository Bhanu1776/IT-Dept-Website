import './styles/globals.css'
import classNames from 'classnames';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJs 13',
  description: 'Nextjs 13 starter template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#e0c8fd" />

        <meta property="og:title" content="Nextjs App" />
        <meta name="twitter:title" content="Nextjs App" />

        <meta name="description" content="Nextjs 13 starter template" />
        <meta property="og:description" content="Nextjs 13 starter template" />
        <meta name="twitter:description" content="Nextjs 13 starter template" />

        <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
        <meta name="twitter:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
      </head>
      <body
        className={classNames({
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
