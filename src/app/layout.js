import { Rubik } from 'next/font/google'
import './css/globals.css'
import './css/search.css'
import './css/favorites.css'
import './css/results.css'
import './css/navbar.css'

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
