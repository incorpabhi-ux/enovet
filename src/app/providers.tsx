'use client'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { Suspense, lazy } from 'react'

// Lazy load providers for better initial load time
const LazyThemeProvider = lazy(() => import('next-themes').then(mod => ({ default: mod.ThemeProvider })))
const LazySessionProvider = lazy(() => import('next-auth/react').then(mod => ({ default: mod.SessionProvider })))

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
      <LazySessionProvider>
        <LazyThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </LazyThemeProvider>
      </LazySessionProvider>
    </Suspense>
  )
} 