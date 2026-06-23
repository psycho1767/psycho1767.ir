"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative z-20 transition-all duration-300 ${scrolled ? "bg-ink-bg/80 backdrop-blur-xl" : ""}`}
    >
      <div className="container-tight flex items-center justify-between py-1">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ink-accent/10 ring-1 ring-ink-accent/20">
            <span className="text-ink-accent font-bold text-sm">P</span>
          </span>
          <span className="text-[15px] font-medium tracking-tight">Psycho</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[13px] text-ink-dim">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="hover:text-ink-fg transition"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="lang-toggle">
            <button
              onClick={() => language !== "en" && toggleLanguage()}
              className={`lang-btn ${language === "en" ? "active" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => language !== "fa" && toggleLanguage()}
              className={`lang-btn ${language === "fa" ? "active" : ""}`}
            >
              FA
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/psycho"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost py-2 px-3.5 hidden sm:inline-flex"
          >
            <span>{t("nav.github")}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 flip-rtl"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn-primary py-2 px-3.5 hidden sm:inline-flex"
          >
            <span>{t("nav.contactBtn")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
