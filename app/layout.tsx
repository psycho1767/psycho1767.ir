import type { Metadata } from 'next'
import { ReactNode } from 'react'
import ClientLayout from './components/ClientLayout'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://psycho.dev'),
  title: {
    default: 'Psycho — Full Stack Developer | React, Next.js, Python',
    template: '%s | Psycho',
  },
  description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and Python. Building scalable applications with clean code and modern technologies.',
  keywords: ['developer', 'full stack developer', 'react developer', 'next.js developer', 'python developer', 'web developer', 'frontend', 'backend', 'psycho1767', 'psycho', 'typescript', 'node.js', 'postgresql', 'fastapi'],
  authors: [{ name: 'Psycho' }],
  creator: 'Psycho',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://psycho.dev',
    siteName: 'Psycho — Full Stack Developer',
    title: 'Psycho — Full Stack Developer | React, Next.js, Python',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and Python. Building scalable applications with clean code.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Psycho — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psycho — Full Stack Developer | React, Next.js, Python',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and Python.',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://psycho.dev',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F172A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Psycho',
              alternateName: 'psycho1767',
              url: 'https://psycho.dev',
              jobTitle: 'Full Stack Developer',
              description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and Python.',
              knowsAbout: ['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'FastAPI', 'Docker', 'AWS'],
              sameAs: [
                'https://github.com/psycho1767',
                'https://linkedin.com/in/psycho1767',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased pt-2.5">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
