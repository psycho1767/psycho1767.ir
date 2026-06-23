'use client'

import { ReactNode, useEffect } from 'react'
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext'
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'

function LanguageLoader() {
  const { isLoading } = useLanguage()
  if (!isLoading) return null
  return (
    <div className="fixed inset-0 z-[99998] flex items-center justify-center bg-ink-bg/90 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-ink-accent/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-ink-accent animate-spin" />
        </div>
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink-muted">Switching...</span>
      </div>
    </div>
  )
}

function HtmlAttributes() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.classList.toggle('font-yekan', language === 'fa')
  }, [language, theme])

  return null
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <HtmlAttributes />
        <LanguageLoader />
        <div className="noise" aria-hidden="true" />
        <div className="cursor-halo" aria-hidden="true" />
        <div className="cursor-ring" aria-hidden="true" />
        <div className="cursor-dot" aria-hidden="true" />
        <div className="scroll-progress" aria-hidden="true" />
        <canvas className="particle-field" aria-hidden="true" suppressHydrationWarning />
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          // Cursor
          const ring = document.querySelector('.cursor-ring');
          const dot = document.querySelector('.cursor-dot');
          const halo = document.querySelector('.cursor-halo');
          if (ring && dot && halo) {
            document.addEventListener('mousemove', (e) => {
              ring.style.left = e.clientX + 'px';
              ring.style.top = e.clientY + 'px';
              dot.style.left = e.clientX + 'px';
              dot.style.top = e.clientY + 'px';
              halo.style.left = e.clientX + 'px';
              halo.style.top = e.clientY + 'px';
            });
            document.querySelectorAll('a, button, [role="button"]').forEach(el => {
              el.addEventListener('mouseenter', () => { ring.style.transform = 'translate(-50%, -50%) scale(1.5)'; ring.style.borderColor = 'rgba(34, 197, 94, 0.6)'; });
              el.addEventListener('mouseleave', () => { ring.style.transform = 'translate(-50%, -50%) scale(1)'; ring.style.borderColor = 'rgba(34, 197, 94, 0.4)'; });
            });
          }

          // Scroll progress
          const scrollProgress = document.querySelector('.scroll-progress');
          if (scrollProgress) {
            window.addEventListener('scroll', () => {
              const scrollTop = document.documentElement.scrollTop;
              const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const progress = (scrollTop / scrollHeight) * 100;
              scrollProgress.style.width = progress + '%';
            });
          }

          // Reveal on scroll
          const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });
          document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

          // Particles
          const canvas = document.querySelector('.particle-field');
          if (canvas) {
            const ctx = canvas.getContext('2d');
            function resize() {
              canvas.width = canvas.offsetWidth;
              canvas.height = canvas.offsetHeight;
            }
            resize();
            const particles = [];
            for (let i = 0; i < 50; i++) {
              particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.5 + 0.5,
              });
            }
            function animate() {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink-accent-glow');
                ctx.fill();
              });
              requestAnimationFrame(animate);
            }
            animate();
            window.addEventListener('resize', resize);
          }

          // Spotlight effect
          document.querySelectorAll('.spotlight').forEach(card => {
            card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
              card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
            });
          });
        ` }} />
      </ThemeProvider>
    </LanguageProvider>
  )
}
