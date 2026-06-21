'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { dict, type Lang } from './content'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (typeof dict)['en']
}

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = (typeof window !== 'undefined' &&
      localStorage.getItem('lang')) as Lang | null
    if (saved && dict[saved]) {
      setLangState(saved)
      return
    }
    const nav = navigator.language.slice(0, 2)
    const guess = (['en', 'es', 'ca', 'zh'] as Lang[]).find((l) => l === nav)
    if (guess) setLangState(guess)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') localStorage.setItem('lang', l)
    document.documentElement.lang = l
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
