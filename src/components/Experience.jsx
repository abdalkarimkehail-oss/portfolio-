import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const experience = [
  {
    company: 'JoRide',
    desc: 'Built the mobile app and backend services for a peer-to-peer car-sharing platform, from architecture to launch.',
    date: '2024 — Present',
  },
  {
    company: 'MediRoute JO',
    desc: 'Developed an AI-driven referral engine to route patients to appropriate care providers.',
    date: '2023 — 2024',
  },
  {
    company: 'Alrayyan Group',
    desc: 'Delivered a multi-site web presence covering several affiliated businesses.',
    date: '2022 — 2023',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-px">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="uppercase font-black tracking-tight leading-none text-[clamp(2rem,5vw,3.5rem)]"
          >
            5 Years of<span className="block text-(--color-muted)">Experience</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="border-t border-(--color-border)"
        >
          {experience.map((e) => (
            <motion.div
              key={e.company}
              variants={fadeUp}
              className="grid md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-6 py-8 border-b border-(--color-border) transition-all duration-300 hover:pl-3"
            >
              <div className="font-semibold">{e.company}</div>
              <div className="text-sm text-(--color-muted) leading-relaxed">{e.desc}</div>
              <div className="text-xs text-(--color-muted) md:text-right">{e.date}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
