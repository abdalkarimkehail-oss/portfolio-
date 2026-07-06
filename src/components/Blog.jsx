import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const posts = [
  {
    title: 'Shipping IoT Products Without Losing Your Mind',
    excerpt:
      'Notes on hardware-software integration and keeping firmware and app releases in sync.',
    date: 'Jun 12, 2026',
    read: '6 min read',
  },
  {
    title: 'What Predictive Maintenance Actually Needs',
    excerpt: 'Sensor data is easy to collect and hard to trust. Here is what changed my approach.',
    date: 'May 3, 2026',
    read: '5 min read',
  },
  {
    title: 'Building for Two Markets at Once',
    excerpt: 'Lessons from launching a car-sharing app across different regulatory environments.',
    date: 'Mar 20, 2026',
    read: '7 min read',
  },
]

export default function Blog() {
  return (
    <section id="thoughts" className="py-24 md:py-32">
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
            Design<span className="block text-(--color-muted)">Thoughts</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid md:grid-cols-3 gap-8"
        >
          {posts.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="border-t border-(--color-border) pt-6"
            >
              <div className="text-xs text-(--color-muted) mb-3">
                {p.date} · {p.read}
              </div>
              <h3 className="font-semibold mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-(--color-muted) leading-relaxed">{p.excerpt}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
