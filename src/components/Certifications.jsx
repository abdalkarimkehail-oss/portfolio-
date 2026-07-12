import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const certifications = [
  {
    issuer: 'IBM',
    title: 'Prompt Engineering: Shaping Better AI Responses',
    date: 'Issued May 2026',
  },
  {
    issuer: 'Microsoft',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    date: 'Issued May 2026',
  },
  {
    issuer: 'IBM',
    title: 'IBM Cloud Essentials',
    date: 'Issued Apr 2026',
  },
  {
    issuer: 'IBM',
    title: 'Data Fundamentals Guided Learning with Capstone',
    date: 'Issued May 2025',
  },
  {
    issuer: 'Huawei',
    title: 'Overview of AI (Arabic)',
    date: 'Issued Jun 2025',
  },
  {
    issuer: 'Direct English KSA',
    title: 'English',
    date: 'Issued Nov 2020',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
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
            Certifications<span className="block text-(--color-muted)">& Credentials</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid md:grid-cols-3 gap-6"
        >
          {certifications.map((c) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-(--color-border-light) bg-(--color-card-light) p-6 shadow-lg shadow-black/10"
            >
              <div className="text-[10px] uppercase tracking-wider text-(--color-muted-dark) font-semibold mb-3">
                {c.issuer}
              </div>
              <h3 className="font-semibold mb-2 leading-snug text-(--color-bg)">{c.title}</h3>
              <div className="text-xs text-(--color-muted-dark)/70 mt-4">{c.date}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
