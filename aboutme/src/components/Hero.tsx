'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/lib/content'
import { useLang } from '@/lib/i18n'
import { Icon } from './ui'

export function Hero() {
  const { t, lang } = useLang()
  // Boot log animates in for flavour; main content is always rendered
  // (present in SSR HTML for recruiters, SEO, and no-JS).
  const [line, setLine] = useState(t.hero.boot.length)

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setLine(t.hero.boot.length)
      return
    }
    setLine(0)
    const timers: ReturnType<typeof setTimeout>[] = []
    t.hero.boot.forEach((_, i) => {
      timers.push(setTimeout(() => setLine(i + 1), 320 * (i + 1)))
    })
    return () => timers.forEach(clearTimeout)
  }, [t, lang])

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-shell flex-col justify-center px-5 pt-24 pb-16"
    >
      <div className="overflow-hidden rounded-xl border border-line bg-panel/70 shadow-2xl shadow-black/40 backdrop-blur-sm">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-line bg-panel-2/80 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red/80" />
          <span className="h-3 w-3 rounded-full bg-accent-2/80" />
          <span className="h-3 w-3 rounded-full bg-green/80" />
          <span className="ml-3 text-xs text-muted">
            {profile.handle}@{profile.host}: ~
          </span>
        </div>

        {/* body */}
        <div className="px-5 py-7 text-sm sm:px-8 sm:py-9">
          {/* boot log */}
          <div className="mb-6 space-y-1 font-mono text-text-dim">
            {t.hero.boot.slice(0, line).map((b, i) => (
              <div key={b} className="flex gap-2">
                <span className="text-green">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* whoami */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green">junjie@barcelona</span>
            <span className="text-muted">:~$</span>
            <span className="text-text">whoami</span>
          </div>

          {
            <div className="mt-5 animate-fade-up">
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg text-accent sm:text-xl">
                <span className="text-muted">&gt; </span>
                {t.role}
                <span className="cursor" />
              </p>

              <p className="prose-body mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
                {t.hero.tagline}
              </p>
              <p className="prose-body mt-2 max-w-2xl text-sm leading-relaxed text-text-dim">
                {t.hero.sub}
              </p>

              {/* status + ctas */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs text-green">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  {t.hero.available}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ground transition-transform hover:-translate-y-0.5"
                >
                  {t.hero.ctaWork}
                  <Icon.arrow className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon.download />
                  {t.hero.ctaCv}
                </a>
                <div className="ml-1 flex items-center gap-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-text-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon.github />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-text-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon.linkedin />
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}
