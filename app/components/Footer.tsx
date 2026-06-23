'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="border-t hairline relative z-10">
      <div className="container-tight py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-ink-accent/10">
            <span className="text-ink-accent font-bold text-[10px]">P</span>
          </span>
          <span>&copy; {currentYear} Psycho. {t('footer.built')}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/psycho1767" target="_blank" rel="noopener noreferrer" className="hover:text-ink-fg transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/psycho1767" target="_blank" rel="noopener noreferrer" className="hover:text-ink-fg transition">
            LinkedIn
          </a>
          <a href="https://t.me/psycho1767" target="_blank" rel="noopener noreferrer" className="hover:text-ink-fg transition">
            Telegram
          </a>
          <a href="mailto:psycho1767@example.com" className="hover:text-ink-fg transition">
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </footer>
  )
}
