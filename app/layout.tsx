import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-sans' });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

const basePath = process.env.NODE_ENV === 'production' ? '/LandingPage_MTRP' : ''

export const metadata: Metadata = {
  title: 'María Teresa Reinoso Pérez, PhD | Disease Ecology & Ornithology',
  description: 'Postdoctoral researcher specializing in avian disease ecology, evolutionary biology, and molecular epidemiology. Cornell University & University of Arizona.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: `${basePath}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    apple: `${basePath}/icon.svg`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
