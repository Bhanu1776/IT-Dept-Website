import './globals.css'

export const metadata = {
  title: 'XIE-IT',
  description: 'The official IT-department website created by XIE students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="debug-screens">{children}</body>
    </html>
  )
}
