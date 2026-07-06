import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'
import { Icon } from '../lib/icons'

const projects = [
  {
    title: 'JoRide',
    tag: 'MOBILE / P2P PLATFORM',
    desc: 'P2P car-sharing platform — mobile app + backend for peer-to-peer vehicle rentals.',
    gradient: 'bg-gradient-to-br from-(--color-navy-light) to-(--color-bg)',
  },
  {
    title: 'MediRoute JO',
    tag: 'HEALTHTECH / AI',
    desc: 'AI-assisted medical referral system routing patients to the right care faster.',
    gradient: 'bg-gradient-to-br from-(--color-muted)/30 to-(--color-bg)',
  },
  {
    title: 'Alrayyan Group',
    tag: 'WEB / MULTI-SITE',
    desc: 'Multi-site web presence for a group of businesses, built for speed and clarity.',
    gradient: 'bg-gradient-to-br from-(--color-navy) to-(--color-surface)',
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
              <div className={`relative aspect-[4/3] flex items-center justify-center ${p.gradient}`}>
                <span className="text-xs tracking-[0.2em] uppercase text-(--color-text)/70 transition-transform duration-500 group-hover:scale-110">
                  {p.title}
                </span>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white">
                  <Icon name="arrow" size={14} />
                </div>
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-wider text-(--color-accent) font-semibold mb-1.5">
                  {p.tag}
                </div>
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
