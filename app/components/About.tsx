'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-5 reveal">
              <span className="section-label">{t('about.label')}</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-display leading-[1.05]">
                {t('about.title1')}<br />
                <span className="text-ink-muted">{t('about.title2')}</span>
              </h2>
              <p className="mt-4 text-ink-dim max-w-md">
                {t('about.desc')}
              </p>
              <ul className="mt-6 space-y-2.5 text-[13px] font-mono text-ink-muted">
                <li className="flex items-center gap-3">
                  <span className="status-dot"></span>
                  <span className="uppercase tracking-[0.22em]">{t('about.skill1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="status-dot"></span>
                  <span className="uppercase tracking-[0.22em]">{t('about.skill2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="status-dot"></span>
                  <span className="uppercase tracking-[0.22em]">{t('about.skill3')}</span>
                </li>
              </ul>
            </div>

            {/* Right: code card */}
            <div className="lg:col-span-7 reveal" data-delay="120">
              <div className="card spotlight overflow-hidden p-6 md:p-8">
                <div className="relative">
                  <div className="font-mono text-xs text-ink-muted mb-3">{t('about.cmd')}</div>
                  <div className="rounded-xl bg-[#0a0a0a] dark:bg-ink-bg ring-1 ring-ink-border p-4 font-mono text-sm">
                    <div className="text-ink-muted">
                      <span className="text-purple-400">export const</span> <span className="text-ink-fg">skills</span> <span className="text-ink-muted">=</span> <span className="text-ink-muted">{'{'}</span>
                    </div>
                    <div className="pl-4 text-ink-muted">
                      <span className="text-ink-fg">frontend</span><span className="text-ink-muted">:</span> <span className="text-green-400">[&apos;React&apos;, &apos;Next.js&apos;, &apos;TypeScript&apos;, &apos;Tailwind&apos;]</span><span className="text-ink-muted">,</span>
                    </div>
                    <div className="pl-4 text-ink-muted">
                      <span className="text-ink-fg">backend</span><span className="text-ink-muted">:</span> <span className="text-green-400">[&apos;Python&apos;, &apos;Node.js&apos;, &apos;FastAPI&apos;]</span><span className="text-ink-muted">,</span>
                    </div>
                    <div className="pl-4 text-ink-muted">
                      <span className="text-ink-fg">database</span><span className="text-ink-muted">:</span> <span className="text-green-400">[&apos;PostgreSQL&apos;, &apos;MySQL&apos;, &apos;MongoDB&apos;]</span><span className="text-ink-muted">,</span>
                    </div>
                    <div className="pl-4 text-ink-muted">
                      <span className="text-ink-fg">tools</span><span className="text-ink-muted">:</span> <span className="text-green-400">[&apos;Git&apos;, &apos;Docker&apos;, &apos;AWS&apos;, &apos;Vercel&apos;]</span>
                    </div>
                    <div className="text-ink-muted">
                      <span className="text-ink-muted">{'}'}</span><span className="text-ink-muted">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="relative py-16 border-t border-b hairline">
        <div className="container-tight grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-ink-border">
          <div className="md:px-8 first:md:ps-0">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted">{t('stats.years')}</div>
            <div className="mt-3 font-display text-5xl md:text-6xl tracking-display tabular-nums">
              {isVisible ? '5' : '0'}+
            </div>
          </div>
          <div className="md:px-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted">{t('stats.projects')}</div>
            <div className="mt-3 font-display text-5xl md:text-6xl tracking-display tabular-nums">
              {isVisible ? '50' : '0'}+
            </div>
          </div>
          <div className="md:px-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted">{t('stats.tech')}</div>
            <div className="mt-3 font-display text-5xl md:text-6xl tracking-display tabular-nums">
              {isVisible ? '20' : '0'}+
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
