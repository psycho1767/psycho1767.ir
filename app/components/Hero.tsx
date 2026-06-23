'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const roles = {
  en: [
    'Full Stack Developer',
    'React Specialist',
    'Next.js Expert',
    'Python Developer',
    'SQL Architect',
  ],
  fa: [
    'توسعه‌دهنده فول‌استک',
    'متخصص React',
    'توسعه‌دهنده Next.js',
    'توسعه‌دهنده Python',
    'متخصص SQL',
  ],
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    const role = roles[language][currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1))
          if (displayText === role) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1))
          if (displayText === '') {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles[language].length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, language])

  useEffect(() => {
    setCurrentRole(0)
    setDisplayText('')
  }, [language])

  return (
    <section id="home" className="relative overflow-hidden min-h-[100dvh] flex items-center pt-8 pb-20">
      <div className="container-tight grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center relative z-10">
        {/* Left: text */}
        <div className="lg:col-span-7">
          <div className="reveal">
            <span className="pill-mono inline-flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
                <defs>
                  <radialGradient id="badge-orb" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#86EFAC"/>
                    <stop offset="60%" stopColor="#22C55E"/>
                    <stop offset="100%" stopColor="rgba(34,197,94,0)"/>
                  </radialGradient>
                </defs>
                <circle cx="12" cy="12" r="9" fill="url(#badge-orb)" opacity="0.55"/>
                <circle cx="12" cy="12" r="3.2" fill="#22C55E"/>
                <circle cx="12" cy="12" r="6" fill="none" stroke="#22C55E" strokeWidth="1" strokeDasharray="3 3" opacity="0.7">
                  <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="8s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <span>{t('hero.badge')}</span>
            </span>
          </div>

          <h1 className="mt-7 font-display text-5xl md:text-6xl xl:text-7xl leading-[1.02] tracking-display reveal" data-delay="80">
            <span>{t('hero.title1')}</span>
            <span className="block text-ink-muted">{t('hero.title2')}</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] text-ink-dim leading-relaxed reveal" data-delay="160">
            {t('hero.subtitle')}
          </p>

          {/* Command bar */}
          <div className="mt-7 cmdbar max-w-md reveal" data-delay="220">
            <span className="text-ink-accent">~</span>
            <span>{t('hero.cmd')}</span>
            <span className="ms-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em]">
              <span className="status-dot"></span>
              <span>{t('hero.status')}</span>
            </span>
          </div>

          <div className="mt-7 flex items-center gap-3 reveal" data-delay="280">
            <span className="magnetic">
              <a href="#projects" className="btn-primary">
                <span>{t('hero.cta1')}</span>
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flip-rtl" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </span>
            <a href="#contact" className="btn-ghost">{t('hero.cta2')}</a>
          </div>
        </div>

        {/* Right: code visual */}
        <div className="lg:col-span-5 relative reveal" data-delay="360">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-ink-border bg-[#0a0a0a] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.75)]">
            {/* Code display */}
            <div className="absolute inset-0 p-6 font-mono text-[12px] leading-relaxed">
              <div className="text-ink-muted mb-4">
                <span className="text-ink-accent">const</span> <span className="text-ink-fg">developer</span> <span className="text-ink-muted">=</span> <span className="text-ink-muted">{'{'}</span>
              </div>
              <div className="pl-4 text-ink-muted">
                <span className="text-ink-fg">name</span><span className="text-ink-muted">:</span> <span className="text-green-400 dark:text-green-400">&apos;Psycho&apos;</span><span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4 text-ink-muted">
                <span className="text-ink-fg">role</span><span className="text-ink-muted">:</span> <span className="text-green-400 dark:text-green-400">&apos;Full Stack Developer&apos;</span><span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4 text-ink-muted">
                <span className="text-ink-fg">stack</span><span className="text-ink-muted">:</span> <span className="text-ink-muted">[</span>
              </div>
              <div className="pl-8 text-ink-muted">
                <span className="text-green-400 dark:text-green-400">&apos;React&apos;</span><span className="text-ink-muted">,</span> <span className="text-green-400 dark:text-green-400">&apos;Next.js&apos;</span><span className="text-ink-muted">,</span>
              </div>
              <div className="pl-8 text-ink-muted">
                <span className="text-green-400 dark:text-green-400">&apos;TypeScript&apos;</span><span className="text-ink-muted">,</span> <span className="text-green-400 dark:text-green-400">&apos;Python&apos;</span><span className="text-ink-muted">,</span>
              </div>
              <div className="pl-8 text-ink-muted">
                <span className="text-green-400 dark:text-green-400">&apos;SQL&apos;</span><span className="text-ink-muted">,</span> <span className="text-green-400 dark:text-green-400">&apos;Node.js&apos;</span>
              </div>
              <div className="pl-4 text-ink-muted">
                <span className="text-ink-muted">]</span><span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4 text-ink-muted">
                <span className="text-ink-fg">passion</span><span className="text-ink-muted">:</span> <span className="text-green-400 dark:text-green-400">&apos;Building scalable apps&apos;</span><span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4 text-ink-muted">
                <span className="text-ink-fg">coffee</span><span className="text-ink-muted">:</span> <span className="text-yellow-400">Infinity</span>
              </div>
              <div className="text-ink-muted">
                <span className="text-ink-muted">{'}'}</span><span className="text-ink-muted">;</span>
              </div>
              <div className="mt-4 text-ink-muted">
                <span className="text-purple-400">export default</span> <span className="text-ink-fg">developer</span><span className="text-ink-muted">;</span>
              </div>
            </div>
            <div className="grain-layer" aria-hidden="true"></div>

            {/* Live caption strip */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl bg-ink-bg/75 ring-1 ring-ink-border backdrop-blur px-3.5 py-2.5">
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink-accent shrink-0">
                <span className="status-dot"></span>
                <span>{language === 'fa' ? 'فعال' : 'Active'}</span>
              </span>
              <p className="text-[12px] text-ink-fg leading-snug truncate min-w-0 flex-1 font-mono">
                {displayText}<span className="animate-pulse text-ink-accent">|</span>
              </p>
            </div>
          </div>

          {/* Floating status chip */}
          <div className="absolute -bottom-3 right-4 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-surface/90 ring-1 ring-ink-border backdrop-blur text-[10px] font-mono uppercase tracking-[0.2em] text-ink-dim shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]">
            <span className="status-dot"></span>
            <span>{language === 'fa' ? 'آماده کار' : 'open to work'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
