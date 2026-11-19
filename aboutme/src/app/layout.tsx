import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { profile } from '@/lib/content'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Junjie Li — Full-Stack Software Engineer',
    template: '%s — Junjie Li',
  },
  description:
    'Junjie Li — Full-stack software engineer in Barcelona. React Native, Node.js, .NET and AI-native workflows.',
  metadataBase: new URL(profile.site),
  alternates: { canonical: '/' },
  keywords: [
    'Junjie Li',
    'Software Engineer',
    'Barcelona',
    'Full-stack Developer',
    'AI Engineer',
    'React Native',
    'Mobile Developer',
    'Node.js',
    'Next.js',
    'React',
    '.NET',
  ],
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Junjie Li — Full-Stack Software Engineer',
    description:
      'Mobile apps and the backends behind them — React Native, Node.js, .NET. Based in Barcelona.',
    url: profile.site,
    siteName: 'Junjie Li',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junjie Li — Full-Stack Software Engineer',
    description:
      'Mobile apps and the backends behind them — React Native, Node.js, .NET. Based in Barcelona.',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Junjie Li',
  alternateName: 'Junjie Li — Full-Stack Software Engineer',
  url: profile.site,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.site,
  email: `mailto:${profile.email}`,
  jobTitle: 'Full-Stack Software Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressCountry: 'ES',
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    'Software Engineering',
    'Mobile Development',
    'React Native',
    'Backend Development',
    'Full-stack Development',
    'Artificial Intelligence',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, personJsonLd]) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
