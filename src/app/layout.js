import { Rubik } from 'next/font/google'
import './css/globals.css'
import './css/navbar.css'
import './css/search.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'City Explorer',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
