'use client'

import { useEffect, useState } from 'react'
import { LANGS, profile } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export function Nav() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'projects', label: t.nav.projects },
    { id: 'stack', label: t.nav.stack },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ground/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-shell items-center justify-between px-5">
        {/* window chrome / brand */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red/80" />
            <span className="h-3 w-3 rounded-full bg-accent-2/80" />
            <span className="h-3 w-3 rounded-full bg-green/80" />
          </span>
          <span className="text-sm text-text-dim transition-colors group-hover:text-text">
            <span className="text-accent">~/</span>
            {profile.handle}
            <span className="text-muted">.dev</span>
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded px-3 py-1.5 text-sm text-text-dim transition-colors hover:bg-panel hover:text-accent"
            >
              <span className="text-muted">/</span>
              {l.label}
            </a>
          ))}
          <LangSwitch lang={lang} setLang={setLang} className="ml-2" />
        </div>

        {/* mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch lang={lang} setLang={setLang} />
          <button
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded border border-line text-text-dim hover:text-accent"
          >
            {open ? '✕' : '≡'}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="border-t border-line bg-ground/95 px-5 py-3 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-text-dim hover:text-accent"
            >
              <span className="text-muted">/</span>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function LangSwitch({
  lang,
  setLang,
  className = '',
}: {
  lang: string
  setLang: (l: any) => void
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-0.5 rounded-md border border-line bg-panel p-0.5 ${className}`}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          title={l.flag}
          className={`rounded px-2 py-1 text-xs transition-colors ${
            lang === l.code
              ? 'bg-accent/15 text-accent'
              : 'text-muted hover:text-text'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
