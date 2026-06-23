'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const projects = [
  {
    title: 'freeapps.ir',
    description: { en: 'Platform for discovering and accessing free online tools and applications.', fa: 'پلتفرم کشف و دسترسی به ابزارها و اپلیکیشن‌های آنلاین رایگان.' },
    tags: ['React', 'Next.js', 'TailwindCSS', 'Node.js'],
    url: 'https://freeapps.ir',
    span: 'col-span-6 md:col-span-4 md:row-span-2',
    large: true,
  },
  {
    title: 'upload.freeapps.ir',
    description: { en: 'File upload and sharing service with simple public access.', fa: 'سرویس آپلود و اشتراک‌گذاری فایل با دسترسی عمومی ساده.' },
    tags: ['React', 'Next.js', 'TailwindCSS', 'Node.js'],
    url: 'https://upload.freeapps.ir',
    span: 'col-span-6 sm:col-span-3 md:col-span-2',
    large: false,
  },
  {
    title: 'meet.freeapps.ir',
    description: { en: 'Web-based meeting and communication platform.', fa: 'پلتفرم جلسات و ارتباطات آنلاین مبتنی بر وب.' },
    tags: ['React', 'Next.js', 'TailwindCSS', 'WebRTC', 'Node.js'],
    url: 'https://meet.freeapps.ir',
    span: 'col-span-6 sm:col-span-3 md:col-span-2',
    large: false,
  },
  {
    title: 'Dental Management Panel',
    description: { en: 'Comprehensive dental clinic management dashboard with real-time updates and digital pen support.', fa: 'پنل مدیریت جامع کلینیک دندان‌پزشکی با به‌روزرسانی لحظه‌ای و پشتیبانی از قلم دیجیتال.' },
    tags: ['React', 'Node.js', 'WebSocket', 'TailwindCSS'],
    url: null,
    span: 'col-span-6 md:col-span-3',
    large: false,
  },
  {
    title: 'Medical Articles Marketplace',
    description: { en: 'Medical article sales platform with integrated blog and full website customization.', fa: 'پلتفرم فروش مقالات پزشکی با وبلاگ یکپارچه و سفارشی‌سازی کامل وب‌سایت.' },
    tags: ['React', 'Node.js', 'TailwindCSS'],
    url: null,
    span: 'col-span-6 md:col-span-3',
    large: false,
  },
  {
    title: 'Gaming Server Leaderboard',
    description: { en: 'Real-time gaming leaderboard with Discord integration and custom bot support.', fa: 'جدول امتیازات لحظه‌ای بازی‌ها با یکپارچه‌سازی Discord و پشتیباتی از ربات سفارشی.' },
    tags: ['React', 'Node.js', 'WebSocket', 'Discord API'],
    url: null,
    span: 'col-span-6 sm:col-span-3 md:col-span-2',
    large: false,
  },
  {
    title: 'School Financial Management',
    description: { en: 'Frontend for school financial management platform.', fa: 'فرانت‌اند پلتفرم مدیریت مالی مدارس.' },
    tags: ['React', 'TailwindCSS'],
    url: null,
    span: 'col-span-6 sm:col-span-3 md:col-span-2',
    large: false,
  },
  {
    title: 'USDT Exchange Bot',
    description: { en: 'Telegram bot for converting and swapping USDT to Iranian Rial.', fa: 'ربات تلگرام برای تبدیل و مبادله USDT به ریال ایران.' },
    tags: ['Node.js', 'Telegram Bot API'],
    url: null,
    span: 'col-span-6 sm:col-span-3 md:col-span-2',
    large: false,
  },
  {
    title: 'Eitaa Financial Fund Bot',
    description: { en: 'Financial fund management bot developed for the Eitaa platform.', fa: 'ربات مدیریت صندوق مالی توسعه یافته برای پلتفرم ایتا.' },
    tags: ['Node.js', 'Eitaa API'],
    url: null,
    span: 'col-span-6 sm:col-span-3 md:col-span-2',
    large: false,
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [iframesLoaded, setIframesLoaded] = useState(false)
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

  useEffect(() => {
    const timer = setTimeout(() => setIframesLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-28">
      <div className="container-tight">
        <div className="max-w-2xl reveal">
          <span className="section-label">{t('projects.label')}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-display leading-[1.05]">
            {t('projects.title')}
          </h2>
          <p className="mt-3 text-ink-dim max-w-lg">
            {t('projects.desc')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-6 gap-4">
          {projects.map((project, index) => {
            const CardWrapper = project.url ? 'a' : 'div'
            const wrapperProps = project.url
              ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <CardWrapper
                key={project.title}
                {...wrapperProps}
                className={`card spotlight reveal ${project.span} group ${project.url ? 'cursor-pointer' : ''}`}
                data-delay={index * 60}
              >
                <div className={`p-6 ${project.large ? 'md:p-8 h-full flex flex-col' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {project.url && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-accent opacity-0 group-hover:opacity-100 transition-opacity flip-rtl" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  
                  <h3 className={`mt-3 font-display ${project.large ? 'text-2xl md:text-3xl' : 'text-xl'} tracking-tight`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mt-2 text-ink-dim ${project.large ? 'text-[15px] leading-relaxed max-w-md' : 'text-[14px] leading-relaxed'}`}>
                    {project.description[language]}
                  </p>

                  {project.large && iframesLoaded && (
                    <div className="relative mt-8 h-48 md:h-56 rounded-xl overflow-hidden ring-1 ring-ink-border bg-ink-bg flex-1">
                      {project.url ? (
                        <iframe
                          src={project.url}
                          className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-[0.4] origin-top-left"
                          style={{ width: '250%', height: '250%' }}
                          loading="lazy"
                          title={project.title}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl font-bold text-ink-accent/20 font-mono">
                            {project.title.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div className="grain-layer" aria-hidden="true"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-ink-accent">
                          {project.tags[0]}
                        </div>
                        <div className="font-mono text-[10px] text-ink-muted">
                          {project.tags.length} {language === 'fa' ? 'تکنولوژی' : 'technologies'}
                        </div>
                      </div>
                    </div>
                  )}

                  {!project.large && project.url && iframesLoaded && (
                    <div className="relative mt-4 h-32 rounded-lg overflow-hidden ring-1 ring-ink-border bg-ink-bg">
                      <iframe
                        src={project.url}
                        className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-[0.35] origin-top-left"
                        style={{ width: '285%', height: '285%' }}
                        loading="lazy"
                        title={project.title}
                      />
                      <div className="grain-layer" aria-hidden="true"></div>
                    </div>
                  )}
                  
                  <div className={`flex flex-wrap gap-2 ${project.large ? 'mt-6' : 'mt-4'}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-mono uppercase tracking-[0.15em] bg-ink-elevated ring-1 ring-ink-border rounded text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.large && project.url && (
                    <div className="mt-4 flex items-center gap-2 text-[12px] text-ink-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>{language === 'fa' ? 'مشاهده پروژه' : 'View project'}</span>
                      <svg viewBox="0 0 24 24" className="h-3 w-3 flip-rtl" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
