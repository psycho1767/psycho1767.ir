/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          bg: 'var(--ink-bg)',
          surface: 'var(--ink-surface)',
          elevated: 'var(--ink-elevated)',
          fg: 'var(--ink-fg)',
          muted: 'var(--ink-muted)',
          dim: 'var(--ink-dim)',
          accent: 'var(--ink-accent)',
        },
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        display: ['Geist', 'sans-serif'],
        yekan: ['Yekan', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.02em',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(251, 113, 133, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(251, 113, 133, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 0 0 rgba(251, 113, 133, 0.4)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 0 6px rgba(251, 113, 133, 0)' },
        },
      },
    },
  },
  plugins: [],
}
