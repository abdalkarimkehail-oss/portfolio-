import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const socials = [
  { label: 'GitHub', href: 'https://github.com/omaralrayyan7' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Email', href: 'mailto:omaralrayyan7@gmail.com' },
]

function CountUp({ target }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    let raf
    function tick(now) {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold tracking-tight">
      +{value}
    </div>
  )
}

function Stat({ n, label }) {
  return (
    <div>
      <CountUp target={n} />
      <div className="text-[11px] uppercase tracking-wider text-(--color-muted) mt-1.5">
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-36 pb-16">
      <div className="container-px w-full">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14 mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="w-28 h-28 rounded-full overflow-hidden border border-(--color-border) shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&grayscale"
              alt="Omar Alrayyan"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          <div>
            <motion.div variants={fadeUp} className="text-sm text-(--color-muted) mb-2">
              Omar Alrayyan
            </motion.div>
            <motion.p variants={fadeUp} className="max-w-md text-(--color-text) leading-relaxed">
              Software engineer building IoT, mobile, and web products — from P2P
              car-sharing platforms to industrial predictive-maintenance AI.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-5 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-(--color-muted) border-b border-transparent hover:text-(--color-text) hover:border-(--color-text) transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={fadeUp}
              className="uppercase font-black tracking-tight leading-[0.95] text-[clamp(2.8rem,9vw,7.5rem)] text-transparent"
              style={{ WebkitTextStroke: '1.5px var(--color-text)' }}
            >
              Software
              <br />
              Engineer
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-3 gap-6 mt-16 pt-9 border-t border-(--color-border)"
          >
            <Stat n={5} label="Years of Experience" />
            <Stat n={14} label="Projects Completed" />
            <Stat n={6} label="Worldwide Clients" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
