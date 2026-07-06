import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const projects = [
  {
    title: 'JoRide',
    desc: 'P2P car-sharing platform — mobile app + backend for peer-to-peer vehicle rentals.',
  },
  {
    title: 'MediRoute JO',
    desc: 'AI-assisted medical referral system routing patients to the right care faster.',
  },
  {
    title: 'Alrayyan Group',
    desc: 'Multi-site web presence for a group of businesses, built for speed and clarity.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-px">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="uppercase font-black tracking-tight leading-none text-[clamp(2rem,5vw,3.5rem)]"
          >
            Recent<span className="block text-(--color-muted)">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-(--color-muted) max-w-xs">
            A selection of things I've built recently.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface) overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-(--color-muted)/10 to-transparent flex items-center justify-center overflow-hidden">
                <span className="text-xs text-(--color-muted) transition-transform duration-500 group-hover:scale-110">
                  {p.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-(--color-muted) leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
