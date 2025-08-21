import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Suspense } from 'react'

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://enovetmedia.com'),
  title: {
    default: 'Enovet Media - Digital Marketing & Web Development',
    template: '%s | Enovet Media'
  },
  description: 'Professional digital marketing and web development services to help your business grow online. Expert solutions in SEO, PPC, social media, and web development.',
  keywords: 'digital marketing, SEO, PPC, social media marketing, content marketing, web development, video production, branding, digital strategy',
  authors: [{ name: 'Enovet Media', url: 'https://enovetmedia.com' }],
  creator: 'Enovet Media',
  publisher: 'Enovet Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: 'Enovet Media - Digital Marketing Agency',
    description: 'Grow your digital presence with Enovet Media. We offer comprehensive digital marketing services.',
    url: 'https://enovetmedia.com',
    siteName: 'Enovet Media',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630/1E3A8A/FFFFFF?text=Enovet+Media',
        width: 1200,
        height: 630,
        alt: 'Enovet Media',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enovet Media - Digital Marketing Agency',
    description: 'Grow your digital presence with Enovet Media. We offer comprehensive digital marketing services.',
    images: ['https://via.placeholder.com/1200x630/1E3A8A/FFFFFF?text=Enovet+Media'],
    creator: '@enovetmedia',
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
  alternates: {
    canonical: 'https://enovetmedia.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#1E3A8A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-gray-900 min-h-screen`} suppressHydrationWarning>
        <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
          <div className="relative min-h-screen bg-gray-900">
            <Navbar />
            <main className="min-h-screen bg-gray-900">
              {children}
            </main>
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  )
} 