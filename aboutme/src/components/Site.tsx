'use client'

import { LangProvider } from '@/lib/i18n'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { About, Contact, Footer, Projects, Stack, Work } from './Sections'

export function Site() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
