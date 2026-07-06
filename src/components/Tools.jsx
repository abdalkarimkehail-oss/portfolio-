import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const tools = [
  { name: 'Flutter', sub: 'Mobile' },
  { name: 'ASP.NET Core', sub: 'Backend' },
  { name: 'React', sub: 'Frontend' },
  { name: 'Notion', sub: 'Productivity' },
  { name: 'Figma', sub: 'Design' },
  { name: 'Netlify', sub: 'Hosting' },
]

export default function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32">
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
            Premium<span className="block text-(--color-muted)">Tools</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
        >
          {tools.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/10 bg-(--color-surface) px-4 py-7 text-center"
            >
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-[11px] text-(--color-muted) mt-1">{t.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
