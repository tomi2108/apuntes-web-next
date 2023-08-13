import NavBar from '@/components/NavBar/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apuntes de sistemas',
  viewport: {
    initialScale: 1
  }

}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <meta charSet='UTF-8' />
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.css' crossOrigin='anonymous' />
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
