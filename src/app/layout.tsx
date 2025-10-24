import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "../Components/Footer"
import Providers from './providers'
import Theme from '@/Components/Theme'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MD Website',
  description: 'Welcome to my web corner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" dir='ltr' suppressHydrationWarning>
      <body className={ `${inter.className} antialiased dark:bg-[#20232a] flex flex-col min-h-screen `} suppressHydrationWarning>
        <Providers>

          <Header/>
          <main className='mx-auto mt-40 justify-between max-w-3xl px-6 w-full grow text-gray-500 '>

          {children}  
          </main>
          <Footer />

        </Providers>
      </body>

    </html>

  )
}
