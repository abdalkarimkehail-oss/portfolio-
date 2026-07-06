import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const experience = [
  {
    company: 'JoRide',
    role: 'Lead Mobile Engineer',
    date: '2024 — Present',
    desc: 'Built the mobile app and backend services for a peer-to-peer car-sharing platform, from architecture to launch.',
  },
  {
    company: 'MediRoute JO',
    role: 'Software Engineer',
    date: '2023 — 2024',
    desc: 'Developed an AI-driven referral engine to route patients to appropriate care providers.',
  },
  {
    company: 'Alrayyan Group',
    role: 'Web Developer',
    date: '2022 — 2023',
    desc: 'Delivered a multi-site web presence covering several affiliated businesses.',
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
              className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 py-8 border-b border-(--color-border) transition-all duration-300 hover:pl-3"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-semibold">{e.company}</span>
                  <span className="text-xs font-semibold text-(--color-accent) uppercase tracking-wide">
                    {e.role}
                  </span>
                </div>
                <div className="text-xs text-(--color-muted) mt-1">{e.date}</div>
              </div>
              <div className="text-sm text-(--color-muted) leading-relaxed">{e.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
