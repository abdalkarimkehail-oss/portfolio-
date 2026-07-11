import { useState } from 'react'
import { motion } from 'framer-motion'
import { viewportOnce } from '../lib/motion'
import { Icon } from '../lib/icons'

const CONTACT_EMAIL = 'abdalkarimkehail@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return

    const subject = encodeURIComponent(`New project inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget || 'Not specified'}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] bg-(--color-card-light) text-(--color-bg) p-8 md:p-14 shadow-xl shadow-black/20"
        >
          <h2 className="uppercase font-black tracking-tight leading-none text-[clamp(1.9rem,5vw,3.2rem)] mb-3">
            Let's Work<span className="block text-(--color-muted-dark)">Together</span>
          </h2>
          <p className="text-(--color-muted-dark) text-sm mb-10 max-w-sm">
            Got a project in mind? Drop me a line — it opens your email app addressed to me.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl">
            {submitted ? (
              <p className="text-sm text-(--color-muted-dark)">
                Your email app should have opened with the message ready — hit send there to reach me.
              </p>
            ) : (
              <>
                <Field
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  placeholder="Name"
                  error={errors.name}
                />
                <Field
                  value={form.email}
                  onChange={(v) => update('email', v)}
                  placeholder="Email"
                  error={errors.email}
                />

                <select
                  value={form.budget}
                  onChange={(e) => update('budget', e.target.value)}
                  className="w-full bg-white border border-(--color-border-light) rounded-xl px-4 py-3.5 text-sm mb-4 text-(--color-bg) focus:outline-none focus:border-(--color-bg)/40 transition-colors"
                >
                  <option value="">Budget</option>
                  <option>&lt;$3k</option>
                  <option>$3k – $5k</option>
                  <option>$5k – $10k</option>
                  <option>&gt;$10k</option>
                </select>

                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white border border-(--color-border-light) rounded-xl px-4 py-3.5 text-sm placeholder-(--color-muted-dark)/60 mb-1.5 text-(--color-bg) focus:outline-none focus:border-(--color-bg)/40 transition-colors resize-y"
                />
                {errors.message && <p className="text-xs text-red-600 mb-4">{errors.message}</p>}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  className="mt-4 px-8 py-3.5 rounded-full bg-(--color-bg) text-white text-sm font-semibold flex items-center gap-2"
                >
                  Submit
                  <Icon name="send" size={14} />
                </motion.button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ value, onChange, placeholder, error }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-(--color-border-light) rounded-xl px-4 py-3.5 text-sm placeholder-(--color-muted-dark)/60 text-(--color-bg) focus:outline-none focus:border-(--color-bg)/40 transition-colors"
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}
