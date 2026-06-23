<p align="center">
  <img src="public/favicon.svg" alt="Psycho" width="100">
</p>

<h1 align="center">Psycho — Full Stack Developer Portfolio</h1>

<p align="center">
  A modern, dark-themed portfolio website built with Next.js, React, and Tailwind CSS.
</p>

<p align="center">
  <a href="https://psycho.dev">Live Demo</a> •
  <a href="https://github.com/psycho1767">GitHub</a> •
  <a href="https://linkedin.com/in/psycho1767">LinkedIn</a> •
  <a href="https://t.me/psycho1767">Telegram</a>
</p>

---

## About

Full Stack Developer portfolio showcasing projects, skills, and experience. Features a sleek dark mode UI with green accent theme, smooth animations, and bilingual support (English/Persian).

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Language:** TypeScript

## Features

- Dark/Light mode toggle
- English/Persian language switch
- Smooth scroll animations
- Interactive cursor effects
- Responsive design (mobile-first)
- Live iframe previews for freeapps.ir projects
- SEO optimized with meta tags and structured data

## Projects Showcased

| Project | Description | Tech |
|---------|-------------|------|
| [freeapps.ir](https://freeapps.ir) | Free online tools platform | React, Next.js, TailwindCSS |
| [upload.freeapps.ir](https://upload.freeapps.ir) | File upload & sharing service | React, Next.js, WebRTC |
| [meet.freeapps.ir](https://meet.freeapps.ir) | Web meeting platform | React, Next.js, WebRTC |
| Dental Management Panel | Clinic management dashboard | React, WebSocket |
| Medical Articles Marketplace | Medical article sales platform | React, Node.js |
| Gaming Server Leaderboard | Real-time leaderboard with Discord | React, WebSocket, Discord API |
| School Financial Management | School finance frontend | React, TailwindCSS |
| USDT Exchange Bot | Telegram crypto exchange bot | Node.js, Telegram API |
| Eitaa Financial Fund Bot | Eitaa platform fund bot | Node.js, Eitaa API |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/psycho1767/psycho1767.ir.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/psycho1767/psycho1767.ir)

### cPanel

```bash
# Build static export
npm run build

# Upload contents of `out/` folder to public_html
```

## Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── contexts/       # Theme & Language providers
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── fonts/              # Yekan Persian fonts
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## License

MIT © [Psycho](https://github.com/psycho1767)
