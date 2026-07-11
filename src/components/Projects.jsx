import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'
import { Icon } from '../lib/icons'

const projects = [
  {
    title: 'JoRide',
    tag: 'MOBILE / IOT / P2P',
    desc: "Jordan's first app-based, IoT-powered self-drive car-sharing platform — Flutter app + ASP.NET Core backend.",
    href: 'https://github.com/abdalkarimkehail-oss/joride-frontend',
    gradient: 'bg-gradient-to-br from-(--color-navy-light) to-(--color-bg)',
  },
  {
    title: 'Padel',
    tag: 'MOBILE / BACKEND',
    desc: 'Court-booking app built from Figma UI/UX mockups — Flutter frontend + ASP.NET Core backend.',
    href: 'https://github.com/abdalkarimkehail-oss/padel-tennis',
    gradient: 'bg-gradient-to-br from-(--color-navy) to-(--color-surface)',
  },
  {
    title: 'Costa Coffee',
    tag: 'VOICE ORDERING · PRIVATE',
    desc: 'Bilingual voice-ordering kiosk app for Costa Coffee — speech-to-text, fuzzy menu matching, card payment.',
    href: 'https://github.com/abdalkarimkehail-oss/costa-coffee-README',
    gradient: 'bg-gradient-to-br from-(--color-muted)/30 to-(--color-bg)',
  },
  {
    title: 'Half Million Coffee',
    tag: 'VOICE ORDERING · PRIVATE',
    desc: 'Arabic voice-ordering app for Half Million Coffee, built with FlutterFlow.',
    href: 'https://github.com/abdalkarimkehail-oss/half-million-README',
    gradient: 'bg-gradient-to-br from-(--color-navy-light) to-(--color-surface)',
  },
  {
    title: 'Pharmacy App',
    tag: 'MOBILE',
    desc: 'Flutter e-commerce app for browsing and ordering pharmacy products.',
    href: 'https://github.com/abdalkarimkehail-oss/pharmacy-app',
    gradient: 'bg-gradient-to-br from-(--color-muted)/25 to-(--color-surface)',
  },
  {
    title: 'Book Reviews — K8s Availability',
    tag: 'SOFTWARE ARCHITECTURE',
    desc: 'Kubernetes availability tactics demonstrated live: fault detection, recovery, prevention, and containment.',
    href: 'https://github.com/abdalkarimkehail-oss/architecture-project',
    gradient: 'bg-gradient-to-br from-(--color-navy) to-(--color-bg)',
  },
  {
    title: 'Sales & Logistics BI',
    tag: 'POWER BI / DATA',
    desc: 'Star-schema Power BI dashboard analyzing sales performance and logistics operations.',
    href: 'https://github.com/abdalkarimkehail-oss/business-intelligence-',
    gradient: 'bg-gradient-to-br from-(--color-muted)/30 to-(--color-navy)',
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
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface) overflow-hidden group block"
            >
              <div className={`relative aspect-[4/3] flex items-center justify-center ${p.gradient}`}>
                <span className="text-xs tracking-[0.2em] uppercase text-(--color-text)/70 text-center px-4 transition-transform duration-500 group-hover:scale-110">
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
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
