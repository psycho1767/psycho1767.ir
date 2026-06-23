'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLElement>(null)
  const { language, t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-28">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: copy */}
          <div className="lg:col-span-5 reveal">
            <span className="section-label">{t('contact.label')}</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-display leading-[1.05]">
              {t('contact.title1')}<br />
              <span className="text-ink-muted">{t('contact.title2')}</span>
            </h2>
            <p className="mt-4 text-ink-dim max-w-md">
              {t('contact.desc')}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:psycho@example.com"
                className="flex items-center gap-3 text-ink-dim hover:text-ink-fg transition group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-elevated ring-1 ring-ink-border group-hover:ring-ink-accent/30 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[14px]">psycho@example.com</span>
              </a>
              <a
                href="https://github.com/psycho1767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-dim hover:text-ink-fg transition group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-elevated ring-1 ring-ink-border group-hover:ring-ink-accent/30 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <span className="text-[14px]">github.com/psycho1767</span>
              </a>
              <a
                href="https://linkedin.com/in/psycho1767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-dim hover:text-ink-fg transition group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-elevated ring-1 ring-ink-border group-hover:ring-ink-accent/30 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <span className="text-[14px]">linkedin.com/in/psycho1767</span>
              </a>
              <a
                href="https://t.me/psycho1767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-dim hover:text-ink-fg transition group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-elevated ring-1 ring-ink-border group-hover:ring-ink-accent/30 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </span>
                <span className="text-[14px]">@psycho1767</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 reveal" data-delay="120">
            <form onSubmit={handleSubmit} className="card p-6 md:p-8">
              <div className="font-mono text-xs text-ink-muted mb-6">{t('contact.cmd')}</div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[12px] font-mono uppercase tracking-[0.2em] text-ink-muted mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-ink-bg ring-1 ring-ink-border rounded-xl text-ink-fg placeholder-ink-muted/50 focus:outline-none focus:ring-ink-accent/50 transition font-mono text-sm"
                    placeholder={t('contact.namePh')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[12px] font-mono uppercase tracking-[0.2em] text-ink-muted mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-ink-bg ring-1 ring-ink-border rounded-xl text-ink-fg placeholder-ink-muted/50 focus:outline-none focus:ring-ink-accent/50 transition font-mono text-sm"
                    placeholder={t('contact.emailPh')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[12px] font-mono uppercase tracking-[0.2em] text-ink-muted mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-ink-bg ring-1 ring-ink-border rounded-xl text-ink-fg placeholder-ink-muted/50 focus:outline-none focus:ring-ink-accent/50 transition font-mono text-sm resize-none"
                    placeholder={t('contact.messagePh')}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : submitStatus === 'success' ? (
                  t('contact.sent')
                ) : (
                  <>
                    <span>{t('contact.send')}</span>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flip-rtl" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
