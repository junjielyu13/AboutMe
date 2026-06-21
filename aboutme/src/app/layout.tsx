import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

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
  title: 'Junjie Li — Software Engineer',
  description:
    'Junjie Li — Software Engineer in Barcelona. Large-scale systems, AI products, and high-performance computing. Available for work.',
  metadataBase: new URL('https://junjieli.vercel.app'),
  openGraph: {
    title: 'Junjie Li — Software Engineer',
    description:
      'Large-scale systems, AI products, and high-performance computing. Based in Barcelona, open to opportunities.',
    type: 'website',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
