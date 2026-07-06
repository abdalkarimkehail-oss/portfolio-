import { useState } from 'react'
import { motion } from 'framer-motion'
import { viewportOnce } from '../lib/motion'
import { Icon } from '../lib/icons'

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
    if (validate()) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] bg-gradient-to-br from-(--color-navy-light) to-(--color-navy) text-white p-8 md:p-14"
        >
          <h2 className="uppercase font-black tracking-tight leading-none text-[clamp(1.9rem,5vw,3.2rem)] mb-3">
            Let's Work<span className="block text-white/50">Together</span>
          </h2>
          <p className="text-white/70 text-sm mb-10 max-w-sm">
            Got a project in mind? Drop me a line.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl">
            {submitted ? (
              <p className="text-sm text-white/80">Thanks — I'll get back to you soon.</p>
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
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-sm mb-4 text-white/80 focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="" className="text-black">
                    Budget
                  </option>
                  <option className="text-black">&lt;$3k</option>
                  <option className="text-black">$3k – $5k</option>
                  <option className="text-black">$5k – $10k</option>
                  <option className="text-black">&gt;$10k</option>
                </select>

                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-sm placeholder-white/50 mb-1.5 focus:outline-none focus:border-white/40 transition-colors resize-y"
                />
                {errors.message && <p className="text-xs text-red-300 mb-4">{errors.message}</p>}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  className="mt-4 px-8 py-3.5 rounded-full bg-white text-(--color-navy) text-sm font-semibold flex items-center gap-2"
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
        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-sm placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
      />
      {error && <p className="text-xs text-red-300 mt-1">{error}</p>}
    </div>
  )
}
