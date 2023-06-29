import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'An amazing Airbnb clone!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode  
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
