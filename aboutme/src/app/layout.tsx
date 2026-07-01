import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { profile } from '@/lib/content'

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
    default: 'Junjie Li — Software Engineer',
    template: '%s — Junjie Li',
  },
  description:
    'Junjie Li — Software Engineer in Barcelona. Large-scale systems, AI products, and high-performance computing. Available for work.',
  metadataBase: new URL(profile.site),
  alternates: { canonical: '/' },
  keywords: [
    'Junjie Li',
    'Software Engineer',
    'Barcelona',
    'Full-stack Developer',
    'AI Engineer',
    'HPC',
    'Machine Learning',
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
    title: 'Junjie Li — Software Engineer',
    description:
      'Large-scale systems, AI products, and high-performance computing. Based in Barcelona, open to opportunities.',
    url: profile.site,
    siteName: 'Junjie Li',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junjie Li — Software Engineer',
    description:
      'Large-scale systems, AI products, and high-performance computing. Based in Barcelona, open to opportunities.',
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230A0E16'/><text x='14' y='68' font-family='monospace' font-size='52' font-weight='bold' fill='%234DE2E2'>&gt;_</text></svg>",
      },
    ],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.site,
  email: `mailto:${profile.email}`,
  jobTitle: 'Software Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressCountry: 'ES',
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    'Software Engineering',
    'Large-scale Systems',
    'Artificial Intelligence',
    'Computer Vision',
    'High-Performance Computing',
    'Full-stack Development',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
