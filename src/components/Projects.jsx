import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'
import { Icon } from '../lib/icons'
import joRideLogo from '../assets/logos/joride.png'
import padelLogo from '../assets/logos/padel.png'
import costaLogo from '../assets/logos/costa.jpg'
import halfMillionLogo from '../assets/logos/half-million.jpg'
import pharmacyLogo from '../assets/logos/pharmacy.png'
import k8sLogo from '../assets/logos/kubernetes.png'
import powerBiLogo from '../assets/logos/power-bi.png'
import arabianOudLogo from '../assets/logos/arabian-oud.jpg'

// Each project can carry a `logo` (imported image) once the asset is available.
// Until then, `variant` controls the thumbnail backdrop and the title renders as text.
const variants = {
  navy: {
    bg: 'bg-gradient-to-br from-(--color-navy-light) to-(--color-navy)',
    label: 'text-white',
    arrow: 'bg-white/15 text-white',
  },
  grey: {
    bg: 'bg-(--color-muted)',
    label: 'text-(--color-bg)',
    arrow: 'bg-(--color-bg)/15 text-(--color-bg)',
  },
  light: {
    bg: 'bg-(--color-card-light)',
    label: 'text-(--color-bg)',
    arrow: 'bg-(--color-bg)/10 text-(--color-bg)',
  },
}

const projects = [
  {
    title: 'JoRide',
    tag: 'MOBILE / IOT / P2P',
    desc: "Jordan's first app-based, IoT-powered self-drive car-sharing platform — Flutter app + ASP.NET Core backend.",
    href: 'https://github.com/abdalkarimkehail-oss/joride-frontend',
    variant: 'navy',
    logo: joRideLogo,
  },
  {
    title: 'Padel',
    tag: 'MOBILE / BACKEND',
    desc: 'Court-booking app built from Figma UI/UX mockups — Flutter frontend + ASP.NET Core backend.',
    href: 'https://github.com/abdalkarimkehail-oss/padel-tennis',
    variant: 'grey',
    logo: padelLogo,
  },
  {
    title: 'Costa Coffee',
    tag: 'VOICE ORDERING · PRIVATE',
    desc: 'Bilingual voice-ordering kiosk app for Costa Coffee — speech-to-text, fuzzy menu matching, card payment.',
    href: 'https://github.com/abdalkarimkehail-oss/costa-coffee-README',
    variant: 'light',
    logo: costaLogo,
  },
  {
    title: 'Half Million Coffee',
    tag: 'VOICE ORDERING · PRIVATE',
    desc: 'Arabic voice-ordering app for Half Million Coffee, built with FlutterFlow.',
    href: 'https://github.com/abdalkarimkehail-oss/half-million-README',
    variant: 'navy',
    logo: halfMillionLogo,
  },
  {
    title: 'Pharmacy App',
    tag: 'MOBILE',
    desc: 'Flutter e-commerce app for browsing and ordering pharmacy products.',
    href: 'https://github.com/abdalkarimkehail-oss/pharmacy-app',
    variant: 'grey',
    logo: pharmacyLogo,
  },
  {
    title: 'Book Reviews — K8s Availability',
    tag: 'SOFTWARE ARCHITECTURE',
    desc: 'Kubernetes availability tactics demonstrated live: fault detection, recovery, prevention, and containment.',
    href: 'https://github.com/abdalkarimkehail-oss/architecture-project',
    variant: 'light',
    logo: k8sLogo,
  },
  {
    title: 'Sales & Logistics BI',
    tag: 'POWER BI / DATA',
    desc: 'Star-schema Power BI dashboard analyzing sales performance and logistics operations.',
    href: 'https://github.com/abdalkarimkehail-oss/business-intelligence-',
    variant: 'navy',
    logo: powerBiLogo,
  },
  {
    title: 'Arabian Oud — Customer Display',
    tag: 'FLUTTER / POS / LAN API · PRIVATE',
    desc: 'Customer-facing tablet display for Arabian Oud retail counters — live order sync, NearPay card payment, and a QR receipt flow driven by a local LAN API.',
    href: 'https://github.com/abdalkarimkehail-oss/Arabian-oud-README',
    variant: 'light',
    logo: arabianOudLogo,
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
          {projects.map((p) => {
            const v = variants[p.variant]
            return (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl overflow-hidden group block shadow-lg shadow-black/20"
              >
                <div className={`relative aspect-[4/3] flex items-center justify-center ${p.logo ? 'bg-white' : v.bg}`}>
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.title}
                      className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span
                      className={`text-xs tracking-[0.2em] uppercase text-center px-4 font-semibold transition-transform duration-500 group-hover:scale-110 ${v.label}`}
                    >
                      {p.title}
                    </span>
                  )}
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur flex items-center justify-center ${p.logo ? 'bg-(--color-bg)/10 text-(--color-bg)' : v.arrow}`}>
                    <Icon name="arrow" size={14} />
                  </div>
                </div>
                <div className="p-6 bg-(--color-card-light)">
                  <div className="text-[10px] uppercase tracking-wider text-(--color-muted-dark) font-semibold mb-1.5">
                    {p.tag}
                  </div>
                  <h3 className="font-semibold mb-1 text-(--color-bg)">{p.title}</h3>
                  <p className="text-sm text-(--color-muted-dark) leading-relaxed">{p.desc}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
