import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CodeTape from './components/CodeTape'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Psycho — Full Stack Developer | React, Next.js, Python',
  description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and Python. Building scalable applications with clean code and modern technologies. Available for freelance and full-time opportunities.',
  keywords: ['developer', 'full stack developer', 'react developer', 'next.js developer', 'python developer', 'web developer', 'frontend developer', 'backend developer', 'psycho1767', 'psycho', 'typescript', 'node.js', 'postgresql', 'fastapi', 'portfolio'],
  openGraph: {
    title: 'Psycho — Full Stack Developer | React, Next.js, Python',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and Python. Building scalable applications with clean code.',
    type: 'website',
    url: 'https://psycho.dev',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-bg">
      <Navbar />
      <Hero />
      <CodeTape />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
