import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'
import { Icon } from '../lib/icons'
import heroPhoto from '../assets/abdalkarim.jpg'

const socials = [
  { label: 'GitHub', href: 'https://github.com/abdalkarimkehail-oss', icon: 'dribbble' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
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
    <div ref={ref} className="text-3xl md:text-4xl font-black tracking-tight">
      +{value}
    </div>
  )
}

function Stat({ n, label }) {
  return (
    <div className="border-l border-(--color-border) pl-6 first:border-0 first:pl-0">
      <CountUp target={n} />
      <div className="text-[10px] uppercase tracking-wider text-(--color-muted) mt-1.5">
        {label}
      </div>
    </div>
  )
}

function FeatureCard({ variant, title, icon }) {
  const isNavy = variant === 'navy'
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl p-5 pb-16 min-h-[128px] overflow-hidden ${
        isNavy
          ? 'bg-gradient-to-br from-(--color-navy-light) to-(--color-navy) text-white'
          : 'bg-(--color-card-light) text-(--color-bg)'
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center mb-6 ${
          isNavy ? 'bg-white/15' : 'bg-black/5'
        }`}
      >
        <Icon name={icon} />
      </div>
      <div className="uppercase font-bold text-sm leading-snug pr-6">{title}</div>
      <div
        className={`absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
          isNavy ? 'bg-white text-(--color-navy)' : 'bg-white text-(--color-bg) shadow'
        }`}
      >
        <Icon name="arrow" size={14} />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-16">
      <div className="container-px w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[240px] mx-auto md:mx-0 shrink-0 rounded-[26px] bg-white text-(--color-bg) p-3 pb-6"
          >
            <span className="absolute -top-3 -left-3 w-12 h-12 rounded-full border-2 border-dashed border-(--color-muted)/50" />
            <div className="rounded-[18px] overflow-hidden aspect-[3/4]">
              <img
                src={heroPhoto}
                alt="Abdalkarim Kehail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <div className="font-extrabold tracking-tight text-sm uppercase">
                Abdalkarim Kehail
              </div>
              <p className="text-xs text-black/55 mt-2.5 px-2 leading-relaxed">
                Front-end developer and AI &amp; IoT enthusiast, building smart,
                data-driven products.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-7 h-7 rounded-full bg-(--color-navy-light) text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                  >
                    <Icon name={s.icon} size={13} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.08)}
            className="flex-1 w-full"
          >
            <motion.h1
              variants={fadeUp}
              className="uppercase font-black tracking-tight leading-[0.9] text-[clamp(2.6rem,8.5vw,6.2rem)]"
            >
              <span className="block text-(--color-text)">Software</span>
              <span className="block text-(--color-muted)">Engineer</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-(--color-muted) mt-6 leading-relaxed"
            >
              Software Engineer with a Bachelor's degree from Applied Science
              University. Experienced in front-end development, UI/UX, and data
              analysis — led development of JoRide, Jordan's first app-based,
              IoT-powered self-drive car-sharing platform, as my graduation
              project.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-(--color-border)"
            >
              <Stat n={1} label="Internship Completed" />
              <Stat n={1} label="Flagship Project" />
              <Stat n={2} label="Certifications" />
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1)}
              className="grid sm:grid-cols-2 gap-4 mt-8"
            >
              <FeatureCard
                variant="navy"
                title="AI-Assisted Development, Prompt Engineering"
                icon="layers"
              />
              <FeatureCard
                variant="light"
                title="Front-End, UI/UX, IoT Systems"
                icon="grid"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
