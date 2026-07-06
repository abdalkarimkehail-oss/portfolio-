import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

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
            Let's Work<span className="block text-(--color-muted)">Together</span>
          </motion.h2>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="max-w-xl"
        >
          {submitted ? (
            <p className="text-sm text-(--color-muted)">
              Thanks — I'll get back to you soon.
            </p>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  placeholder="Your name"
                  error={errors.name}
                />
                <Field
                  label="Email"
                  value={form.email}
                  onChange={(v) => update('email', v)}
                  placeholder="you@email.com"
                  error={errors.email}
                />
              </div>

              <div className="mb-5">
                <label className="block text-[11px] uppercase tracking-wider text-(--color-muted) mb-2">
                  Budget
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => update('budget', e.target.value)}
                  className="w-full bg-transparent border-b border-(--color-border) py-3 text-sm focus:outline-none focus:border-white transition-colors"
                >
                  <option value="" className="bg-(--color-bg)">
                    Select…
                  </option>
                  <option className="bg-(--color-bg)">&lt;$3k</option>
                  <option className="bg-(--color-bg)">$3k – $5k</option>
                  <option className="bg-(--color-bg)">$5k – $10k</option>
                  <option className="bg-(--color-bg)">&gt;$10k</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-[11px] uppercase tracking-wider text-(--color-muted) mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full bg-transparent border-b border-(--color-border) py-3 text-sm focus:outline-none focus:border-white transition-colors resize-y"
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                type="submit"
                className="px-8 py-3.5 rounded-full bg-(--color-muted) text-(--color-bg) text-sm font-semibold"
              >
                Submit
              </motion.button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, placeholder, error }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-wider text-(--color-muted) mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-(--color-border) py-3 text-sm focus:outline-none focus:border-white transition-colors"
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}
