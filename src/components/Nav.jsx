import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '../lib/icons'

const links = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#projects', label: 'Projects', icon: 'folder' },
  { href: '#experience', label: 'Experience', icon: 'briefcase' },
  { href: '#tools', label: 'Tools', icon: 'tool' },
  { href: '#thoughts', label: 'Thoughts', icon: 'book' },
]

export default function Nav() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="flex items-center gap-1 rounded-full border border-(--color-border) bg-(--color-surface)/90 backdrop-blur-md px-2 py-2 shadow-lg shadow-black/30">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-label={l.label}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
              active === l.href ? 'text-white' : 'text-(--color-muted) hover:text-(--color-text)'
            }`}
          >
            {active === l.href && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-full bg-(--color-navy-light)"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">
              <Icon name={l.icon} />
            </span>
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
