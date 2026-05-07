import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import TrackingScript from './components/TrackingScript';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flamingo Florist | Custom Floral Arrangements | 30 Years of Making Moments Special',
  description: 'Beautiful custom floral arrangements for weddings, events, and special occasions. 30 years of creating works of art that make people smile, cry happy tears, and feel truly special.',
  keywords: ['florist', 'flowers', 'wedding flowers', 'custom arrangements', 'floral design', 'local florist', 'gift baskets', 'funeral flowers'],
  authors: [{ name: 'Flamingo Florist' }],
  creator: 'Flamingo Florist',
  publisher: 'Flamingo Florist',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Flamingo Florist - Custom Floral Arrangements',
    description: 'Beautiful custom floral arrangements for weddings, events, and special occasions. 30 years of making moments special.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Flamingo Florist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flamingo Florist - Custom Floral Arrangements',
    description: 'Beautiful custom floral arrangements for weddings, events, and special occasions. 30 years of making moments special.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-body antialiased bg-cream text-deep-navy">
        <TrackingScript />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        {/* Master Site Script */}
        <Script
          src="https://engine.typesite.io/scripts/master-site-script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
