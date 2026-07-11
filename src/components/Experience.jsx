import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const experience = [
  {
    company: '3D-Systems Co.',
    role: 'Front-End & UI/UX Intern',
    date: 'Internship',
    desc: 'Hands-on internship experience in front-end development, UI/UX design, and data analysis.',
  },
  {
    company: 'JoRide',
    role: 'Project Lead',
    date: 'Graduation Project',
    desc: "Led development of JoRide — Jordan's first app-based, IoT-powered self-drive car-sharing platform.",
  },
  {
    company: 'Certifications',
    role: 'IBM · Microsoft',
    date: 'Prompt Engineering & Azure AI',
    desc: 'Certified in Prompt Engineering (IBM) and Microsoft Azure AI Fundamentals, with a strong interest in AI-assisted development and smart systems.',
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
            My<span className="block text-(--color-muted)">Experience</span>
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
