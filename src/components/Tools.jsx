import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const tools = [
  { name: 'Front-End Dev', sub: 'React, UI Engineering', bg: '#2c4a86', fg: '#fff', glyph: '</>' },
  { name: 'UI/UX Design', sub: 'Product Design', bg: '#A259FF', fg: '#fff', glyph: 'UX' },
  { name: 'Data Analysis', sub: 'Insights & Reporting', bg: '#00C7B7', fg: '#0e0e10', glyph: 'DA' },
  { name: 'Prompt Engineering', sub: 'IBM Certified', bg: '#052FAD', fg: '#fff', glyph: 'AI' },
  { name: 'Azure AI Fundamentals', sub: 'Microsoft Certified', bg: '#0078D4', fg: '#fff', glyph: 'Az' },
  { name: 'IoT Systems', sub: 'Smart Products', bg: '#ffffff', fg: '#111111', glyph: 'IoT', border: true },
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
            Skills &<span className="block text-(--color-muted)">Expertise</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {tools.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface) px-5 py-6 flex items-center gap-3.5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[11px] shrink-0"
                style={{
                  background: t.bg,
                  color: t.fg,
                  border: t.border ? '1px solid rgba(139,137,145,0.3)' : 'none',
                }}
              >
                {t.glyph}
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-[11px] text-(--color-muted) mt-0.5">{t.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
