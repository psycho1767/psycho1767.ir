'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'fa'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  isLoading: boolean
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.github': 'GitHub',
    'nav.contactBtn': 'Contact',
    'hero.badge': 'Available for work',
    'hero.title1': 'Crafting Digital',
    'hero.title2': 'Experiences.',
    'hero.subtitle': 'Full Stack Developer specializing in React, Next.js, and Python. Building scalable applications with clean code and modern technologies.',
    'hero.cmd': 'psycho --stack react nextjs python',
    'hero.status': 'available',
    'hero.cta1': 'View Projects',
    'hero.cta2': 'Get in Touch',
    'about.label': 'About',
    'about.title1': 'Code is poetry.',
    'about.title2': 'I write good ones.',
    'about.desc': 'Passionate Full Stack Developer with expertise in modern web technologies. I build robust, scalable applications that make a difference.',
    'about.skill1': 'Frontend Mastery',
    'about.skill2': 'Backend Architecture',
    'about.skill3': 'Database Design',
    'about.cmd': '~/psycho & about',
    'stats.years': 'years experience',
    'stats.projects': 'projects completed',
    'stats.tech': 'technologies',
    'projects.label': 'Projects',
    'projects.title': 'Things I\'ve built with care.',
    'projects.desc': 'A selection of projects showcasing my skills in full-stack development.',
    'skills.label': 'Skills',
    'skills.title1': 'The tools I wield',
    'skills.title2': 'with precision.',
    'skills.core': 'Core Technologies',
    'skills.coreDesc': 'Specialized in modern web development with a focus on performance and scalability.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'skills.stack': 'Tech Stack',
    'contact.label': 'Contact',
    'contact.title1': 'Let\'s build',
    'contact.title2': 'something great.',
    'contact.desc': 'Have a project in mind or want to collaborate? I\'d love to hear from you.',
    'contact.cmd': '~/contact & send',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.namePh': 'Your name',
    'contact.emailPh': 'your@email.com',
    'contact.messagePh': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.sent': 'Message Sent!',
    'footer.built': 'Built with passion and coffee.',
  },
  fa: {
    'nav.about': 'درباره من',
    'nav.projects': 'پروژه‌ها',
    'nav.skills': 'مهارت‌ها',
    'nav.contact': 'تماس',
    'nav.github': 'گیتهاب',
    'nav.contactBtn': 'تماس',
    'hero.badge': 'آماده همکاری',
    'hero.title1': 'ساخت تجربه‌های',
    'hero.title2': 'دیجیتال.',
    'hero.subtitle': 'توسعه‌دهنده فول‌استک با تخصص در React، Next.js و Python. ساخت اپلیکیشن‌های مقیاس‌پذیر با کد تمیز و فناوری‌های روز.',
    'hero.cmd': 'psycho --stack react nextjs python',
    'hero.status': 'آماده',
    'hero.cta1': 'پروژه‌ها',
    'hero.cta2': 'ارتباط با من',
    'about.label': 'درباره من',
    'about.title1': 'کد شعر است.',
    'about.title2': 'من شعرهای خوبی می‌نویسم.',
    'about.desc': 'توسعه‌دهنده فول‌استک علاقه‌مند به فناوری‌های مدرن وب. اپلیکیشن‌های مقیاس‌پذیر و کارآمد می‌سازم که تفاوت ایجاد کنند.',
    'about.skill1': 'تسلط بر فرانت‌اند',
    'about.skill2': 'معماری بک‌اند',
    'about.skill3': 'طراحی دیتابیس',
    'about.cmd': '~/psycho & درباره من',
    'stats.years': 'سال تجربه',
    'stats.projects': 'پروژه تکمیل شده',
    'stats.tech': 'تکنولوژی',
    'projects.label': 'پروژه‌ها',
    'projects.title': 'پروژه‌هایی که با دقت ساختم.',
    'projects.desc': 'گزیده‌ای از پروژه‌ها که مهارت من در توسعه فول‌استک را به نمایش می‌گذارد.',
    'skills.label': 'مهارت‌ها',
    'skills.title1': 'ابزارهایی که با دقت',
    'skills.title2': 'از آن‌ها استفاده می‌کنم.',
    'skills.core': 'تکنولوژی‌های اصلی',
    'skills.coreDesc': 'تخصص در توسعه وب مدرن با تمرکز بر عملکرد و مقیاس‌پذیری.',
    'skills.frontend': 'فرانت‌اند',
    'skills.backend': 'بک‌اند',
    'skills.database': 'دیتابیس',
    'skills.tools': 'ابزارها',
    'skills.stack': 'تکنولوژی‌ها',
    'contact.label': 'تماس',
    'contact.title1': 'بیایید با هم',
    'contact.title2': 'چیز بزرگی بسازیم.',
    'contact.desc': 'پروژه‌ای در ذهن دارید یا می‌خواهید همکاری کنید؟ خوشحال می‌شوم بشنوم.',
    'contact.cmd': '~/تماس & ارسال',
    'contact.name': 'نام',
    'contact.email': 'ایمیل',
    'contact.message': 'پیام',
    'contact.namePh': 'نام شما',
    'contact.emailPh': 'your@email.com',
    'contact.messagePh': 'درباره پروژه‌تان بگویید...',
    'contact.send': 'ارسال پیام',
    'contact.sending': 'در حال ارسال...',
    'contact.sent': 'پیام ارسال شد!',
    'footer.built': 'با اشتیاق و قهوه ساخته شده.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [isLoading, setIsLoading] = useState(false)

  const toggleLanguage = () => {
    setIsLoading(true)
    setTimeout(() => {
      setLanguage(prev => prev === 'en' ? 'fa' : 'en')
      setTimeout(() => setIsLoading(false), 600)
    }, 400)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isLoading, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    return { language: 'en' as Language, toggleLanguage: () => {}, isLoading: false, t: (key: string) => key }
  }
  return context
}
