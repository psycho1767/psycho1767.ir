'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const skillCategories = [
  {
    titleKey: 'skills.frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    titleKey: 'skills.backend',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    titleKey: 'skills.database',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    titleKey: 'skills.tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 85 },
    ],
  },
]

export default function Skills() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative py-28">
      <div className="container-tight">
        <div className="max-w-2xl reveal">
          <span className="section-label">{t('skills.label')}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-display leading-[1.05]">
            {t('skills.title1')}<br />
            <span className="text-ink-muted">{t('skills.title2')}</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* All skill cards equal size */}
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.titleKey}
              className={`card spotlight reveal p-6 ${categoryIndex === 0 ? 'md:p-8' : ''}`}
              data-delay={categoryIndex * 80}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                {String(categoryIndex + 1).padStart(2, '0')}
              </div>
              <h3 className={`mt-3 font-display tracking-tight ${categoryIndex === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                {t(category.titleKey)}
              </h3>
              {categoryIndex === 0 && (
                <p className="mt-3 text-ink-dim max-w-md text-[14px] leading-relaxed">
                  {t('skills.coreDesc')}
                </p>
              )}
              <div className={`mt-4 space-y-3 ${categoryIndex === 0 ? 'mt-6 space-y-4' : ''}`}>
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className={`text-ink-fg ${categoryIndex === 0 ? 'text-sm font-medium' : 'text-[13px]'}`}>{skill.name}</span>
                      <span className={`text-ink-accent font-mono ${categoryIndex === 0 ? 'text-sm' : 'text-[11px]'}`}>{skill.level}%</span>
                    </div>
                    <div className={`${categoryIndex === 0 ? 'h-1.5' : 'h-1'} bg-ink-elevated rounded-full overflow-hidden`}>
                      <div
                        className="h-full bg-gradient-to-r from-ink-accent to-green-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * category.skills.length + index) * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack ribbon */}
        <div className="mt-12 card p-6 reveal" data-delay="400">
          <h3 className="text-center font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted mb-6">{t('skills.stack')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Next.js', 'TypeScript', 'JavaScript', 'Python',
              'Node.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Tailwind CSS',
              'Prisma', 'FastAPI', 'Docker', 'AWS', 'Git', 'Vercel',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.15em] bg-ink-elevated ring-1 ring-ink-border rounded-lg text-ink-muted hover:text-ink-fg hover:ring-ink-accent/30 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
