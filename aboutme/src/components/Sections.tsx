'use client'

import { useState } from 'react'
import {
  education,
  experience,
  LANGS_TOKEN,
  languagesFact,
  profile,
  projects,
  stack,
} from '@/lib/content'
import { useLang } from '@/lib/i18n'
import { CommandHeader, Icon, Reveal } from './ui'

/* ---------------- About ---------------- */
export function About() {
  const { t, lang } = useLang()
  const s = t.sections.about
  return (
    <section id="about" className="mx-auto max-w-shell px-5 py-20 sm:py-24">
      <CommandHeader cmd={s.cmd} title={s.title} id={t.nav.about} />
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="prose-body space-y-4 text-base leading-relaxed text-text">
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-lg border border-line bg-panel/60 p-5">
            <ul className="space-y-3 text-sm">
              {s.facts.map((f) => (
                <li key={f.k} className="flex flex-col gap-0.5">
                  <span className="text-muted">{f.k}:</span>
                  <span className="text-text">
                    {f.v === LANGS_TOKEN ? languagesFact(lang) : f.v}
                  </span>
                </li>
              ))}
            </ul>
            <div className="my-5 h-px bg-line" />
            <ul className="space-y-3 text-sm">
              {education.map((e) => (
                <li key={e.school} className="flex flex-col gap-0.5">
                  <span className="text-accent">{e.degree[lang]}</span>
                  <span className="text-text-dim">{e.school}</span>
                  <span className="text-muted">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Work ---------------- */
export function Work() {
  const { t, lang } = useLang()
  const s = t.sections.work
  return (
    <section id="work" className="mx-auto max-w-shell px-5 py-20 sm:py-24">
      <CommandHeader cmd={s.cmd} title={s.title} id={t.nav.work} />
      <div className="relative space-y-5 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-line">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 60}>
            <article className="relative pl-8">
              {/* node */}
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 ${
                  job.current
                    ? 'border-green bg-green/30'
                    : 'border-accent bg-ground'
                }`}
              />
              <div className="rounded-lg border border-line bg-panel/50 p-5 transition-colors hover:border-accent/40 hover:bg-panel">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold text-text">
                    {job.role[lang]}
                    <span className="text-muted"> @ </span>
                    <span className="text-accent">{job.company}</span>
                  </h3>
                  <span className="text-xs text-muted">
                    {job.current ? job.period.replace('07.2026', s.present) : job.period}
                  </span>
                </div>
                <div className="mt-1 text-xs text-accent-2">{job.tag}</div>
                <ul className="prose-body mt-3 space-y-2 text-sm leading-relaxed text-text-dim">
                  {job.desc[lang].map((d, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1 text-accent">▹</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Projects ---------------- */
export function Projects() {
  const { t, lang } = useLang()
  const s = t.sections.projects
  return (
    <section id="projects" className="mx-auto max-w-shell px-5 py-20 sm:py-24">
      <CommandHeader cmd={s.cmd} title={s.title} id={t.nav.projects} />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => {
          const href = p.link || p.repo
          const Tag = href ? 'a' : 'div'
          return (
            <Reveal key={p.name} delay={i * 70}>
              <Tag
                {...(href
                  ? { href, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className={`group flex h-full flex-col rounded-lg border border-line bg-panel/50 p-5 transition-all ${
                  href ? 'hover:-translate-y-1 hover:border-accent/50 hover:bg-panel' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-text group-hover:text-accent">
                    {p.name}
                  </h3>
                  {href && (
                    <Icon.arrow className="-rotate-45 text-muted transition-colors group-hover:text-accent" />
                  )}
                </div>
                <span className="mt-0.5 text-xs text-muted">{p.period}</span>
                <p className="prose-body mt-3 flex-1 text-sm leading-relaxed text-text-dim">
                  {p.blurb[lang]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-line bg-ground/60 px-2 py-0.5 text-[11px] text-accent-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Tag>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

/* ---------------- Stack ---------------- */
export function Stack() {
  const { t } = useLang()
  const s = t.sections.stack
  return (
    <section id="stack" className="mx-auto max-w-shell px-5 py-20 sm:py-24">
      <CommandHeader cmd={s.cmd} title={s.title} id={t.nav.stack} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={i * 50}>
            <div className="h-full rounded-lg border border-line bg-panel/50 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm">
                <span className="text-accent-2">{'"'}</span>
                <span className="text-accent">{g.group}</span>
                <span className="text-accent-2">{'"'}</span>
                <span className="text-muted">: [</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-3">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded border border-line bg-ground/50 px-2.5 py-1 text-xs text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    {it}
                  </span>
                ))}
              </div>
              <div className="mt-2 text-sm text-muted">]</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const { t } = useLang()
  const s = t.sections.contact
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-shell px-5 py-20 sm:py-24">
      <CommandHeader cmd={s.cmd} title={s.title} id={t.nav.contact} />
      <Reveal>
        <div className="rounded-lg border border-line bg-panel/50 p-6 sm:p-8">
          <p className="prose-body max-w-xl text-base leading-relaxed text-text">
            {s.body}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ground transition-transform hover:-translate-y-0.5"
            >
              <Icon.mail />
              {s.emailMe}
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? <span className="text-green">✓ {s.copied}</span> : <>{s.copy}</>}
            </button>
          </div>

          <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
            <Line label="email" value={profile.email} href={`mailto:${profile.email}`} />
            <Line label="phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <Line label="github" value={profile.githubLabel} href={profile.github} ext />
            <Line label="linkedin" value={profile.linkedinLabel} href={profile.linkedin} ext />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Line({
  label,
  value,
  href,
  ext,
}: {
  label: string
  value: string
  href: string
  ext?: boolean
}) {
  return (
    <a
      href={href}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-2 rounded border border-line bg-ground/40 px-3 py-2.5 transition-colors hover:border-accent/50"
    >
      <span className="text-muted">{label}</span>
      <span className="text-muted">=</span>
      <span className="truncate text-text group-hover:text-accent">{value}</span>
    </a>
  )
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row">
        <span>
          <span className="text-green">$</span> echo &quot;© {profile.name} 2026&quot;
        </span>
        <span className="prose-body text-center">{t.footer}</span>
      </div>
    </footer>
  )
}
