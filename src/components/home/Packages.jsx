import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiCheckLine,
  RiCloseLine,
  RiArrowRightUpLine,
  RiCalendarLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiStarFill,
  RiLockLine,
} from 'react-icons/ri'
import { SiStripe } from 'react-icons/si'
import { packages } from '../../data/packages'

// ── Package Card ──────────────────────────────────────────────
function PackageCard({ pkg, index, onSelect }) {
  const Icon = pkg.icon
  const isPopular = pkg.popular

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={`relative flex flex-col rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-300
        ${isPopular
          ? 'border-[#E8631A]/50 bg-[#1A1410] shadow-2xl shadow-[#E8631A]/15'
          : 'border-[#F5EDE4]/07 bg-[#1A1410] hover:border-[#E8631A]/25'
        }`}
    >
      {isPopular && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8631A]/06 via-transparent to-transparent pointer-events-none" />
      )}

      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: isPopular
            ? `linear-gradient(90deg, transparent, ${pkg.color}, transparent)`
            : `linear-gradient(90deg, transparent, ${pkg.color}50, transparent)`,
        }}
      />

      {/* Popular badge — inside card top on mobile, floating on desktop */}
      {isPopular && (
        <div className="flex justify-center pt-4 sm:hidden">
          <span className="flex items-center gap-1.5 bg-[#E8631A] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-[#E8631A]/40">
            <RiStarFill className="text-[#F5A623]" />
            Most Popular
          </span>
        </div>
      )}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex">
          <span className="flex items-center gap-1.5 bg-[#E8631A] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-[#E8631A]/40">
            <RiStarFill className="text-[#F5A623]" />
            Most Popular
          </span>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full p-5 sm:p-7 pt-5 sm:pt-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-base sm:text-lg"
              style={{ background: `${pkg.color}18`, color: pkg.color }}
            >
              <Icon />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: pkg.color }}>
              {pkg.tag}
            </span>
          </div>
          <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] text-[#8C7B6E] font-medium bg-[#F5EDE4]/04 border border-[#F5EDE4]/08 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <RiTimeLine className="text-[#E8631A]" />
            {pkg.delivery}
          </span>
        </div>

        {/* Name + Price */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-[#F5EDE4] font-black text-lg sm:text-xl mb-2 sm:mb-3 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            {pkg.name}
          </h3>
          <div className="flex items-end gap-2">
            <span
              className="text-3xl sm:text-4xl font-black leading-none"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: `linear-gradient(120deg, ${pkg.color}, #F5A623)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {pkg.priceLabel}
            </span>
            <span className="text-[#8C7B6E] text-xs mb-1">
              {pkg.price ? 'one-time' : 'custom quote'}
            </span>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-[#E8631A]/20 via-[#F5EDE4]/06 to-transparent mb-4 sm:mb-5" />

        {/* Features */}
        <ul className="flex flex-col gap-2 mb-5 sm:mb-6 flex-1">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[#C4A98A] text-xs sm:text-sm">
              <RiCheckLine className="flex-shrink-0 mt-0.5 text-sm sm:text-base" style={{ color: pkg.color }} />
              {f}
            </li>
          ))}
          {pkg.notIncluded.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[#5A5165] text-xs sm:text-sm line-through">
              <RiCloseLine className="flex-shrink-0 mt-0.5 text-sm sm:text-base text-[#3A3045]" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        {pkg.ctaType === 'pay' ? (
          <button
            onClick={() => onSelect(pkg)}
            className="w-full flex items-center justify-center gap-2 font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-full transition-all duration-300 text-xs sm:text-sm hover:-translate-y-0.5"
            style={{
              background: isPopular ? `linear-gradient(135deg, ${pkg.color}, #F5A623)` : `${pkg.color}18`,
              color: isPopular ? '#fff' : pkg.color,
              border: isPopular ? 'none' : `1px solid ${pkg.color}35`,
              boxShadow: isPopular ? `0 8px 24px ${pkg.color}35` : 'none',
            }}
          >
            <RiLockLine />
            {pkg.cta} — {pkg.priceLabel}
            <RiArrowRightUpLine />
          </button>
        ) : (
          <Link
            to="/book-a-call"
            className="w-full flex items-center justify-center gap-2 font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-full transition-all duration-300 text-xs sm:text-sm border border-[#F5A623]/35 hover:border-[#F5A623]/70 hover:bg-[#F5A623]/08 text-[#F5A623] hover:-translate-y-0.5"
          >
            <RiCalendarLine />
            {pkg.cta} — Let's Talk
            <RiArrowRightUpLine />
          </Link>
        )}
      </div>
    </motion.div>
  )
}

// ── Checkout Modal ────────────────────────────────────────────
function CheckoutModal({ pkg, onClose }) {
  const [step, setStep] = useState('confirm') // confirm | form | success
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', business: '' })

  const handlePay = () => {
    if (!form.name || !form.email) return
    setLoading(true)
    // TODO: integrate Stripe here
    // For now simulate a brief loading then success
    setTimeout(() => {
      setLoading(false)
      setStep('success')
    }, 1800)
  }

  return (
    <AnimatePresence>
      {pkg && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 30 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md bg-[#1A1410] border border-[#E8631A]/25 rounded-3xl overflow-hidden shadow-2xl">

              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#F5EDE4]/06">
                <div>
                  <p className="text-[#8C7B6E] text-xs font-medium">You selected</p>
                  <h3 className="text-[#F5EDE4] font-bold text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {pkg.name}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-[#F5EDE4]/06 flex items-center justify-center text-[#8C7B6E] hover:text-[#F5EDE4] hover:bg-[#F5EDE4]/12 transition-all"
                >
                  <RiCloseLine />
                </button>
              </div>

              <div className="p-6">

                {/* Confirm step */}
                {step === 'confirm' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Summary */}
                    <div className="bg-[#120F0A] rounded-2xl p-4 border border-[#F5EDE4]/05 flex flex-col gap-3">
                      {pkg.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-[#C4A98A] text-xs">
                          <RiCheckLine className="text-[#E8631A] flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                      {pkg.features.length > 4 && (
                        <p className="text-[#8C7B6E] text-xs pl-5">+ {pkg.features.length - 4} more features</p>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C7B6E] text-sm">Total (one-time)</span>
                      <span
                        className="text-2xl font-black"
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          background: 'linear-gradient(120deg, #FF8C42, #F5A623)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {pkg.priceLabel}
                      </span>
                    </div>

                    <button
                      onClick={() => setStep('form')}
                      className="w-full flex items-center justify-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#E8631A]/30 text-sm"
                    >
                      Continue to Payment
                      <RiArrowRightUpLine />
                    </button>
                  </motion.div>
                )}

                {/* Form step */}
                {step === 'form' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-4"
                  >
                    <p className="text-[#8C7B6E] text-xs">Tell us a bit about yourself before paying</p>

                    {[
                      { key: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                      { key: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                      { key: 'business', label: 'Business / Brand Name', placeholder: 'Your Brand Co. (optional)', type: 'text' },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key} className="flex flex-col gap-1.5">
                        <label className="text-[#C4A98A] text-xs font-semibold">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[key]}
                          onChange={(e) => setForm(f => ({ ...f, [key]: e.target.value }))}
                          className="bg-[#120F0A] border border-[#F5EDE4]/08 focus:border-[#E8631A]/50 text-[#F5EDE4] placeholder-[#5A5165] text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200"
                        />
                      </div>
                    ))}

                    {/* Stripe note */}
                    <div className="flex items-center gap-2 text-[#8C7B6E] text-[10px] bg-[#120F0A] rounded-xl p-3 border border-[#F5EDE4]/05">
                      <RiShieldCheckLine className="text-emerald-400 flex-shrink-0 text-base" />
                      Secure payment powered by Stripe. Your details are never stored on our servers.
                    </div>

                    <button
                      onClick={handlePay}
                      disabled={loading || !form.name || !form.email}
                      className="w-full flex items-center justify-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#E8631A]/30 text-sm"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <SiStripe className="text-base" />
                          Pay {pkg.priceLabel} Securely
                          <RiLockLine />
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setStep('confirm')}
                      className="text-[#8C7B6E] hover:text-[#C4A98A] text-xs text-center transition-colors"
                    >
                      ← Go back
                    </button>
                  </motion.div>
                )}

                {/* Success step */}
                {step === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-2xl text-emerald-400">
                      <RiCheckLine />
                    </div>
                    <div>
                      <h3 className="text-[#F5EDE4] font-bold text-lg mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Order Confirmed! 🎉
                      </h3>
                      <p className="text-[#8C7B6E] text-sm leading-relaxed">
                        Thank you, {form.name}! We've received your order for <strong className="text-[#E8631A]">{pkg.name}</strong>. Check your email at <strong className="text-[#C4A98A]">{form.email}</strong> — we'll be in touch within 24 hours to get started.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-sm mt-2"
                    >
                      Done
                    </button>
                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Main Packages Section ─────────────────────────────────────
export default function Packages() {
  const [selectedPkg, setSelectedPkg] = useState(null)

  return (
    <section id="packages" className="py-14 sm:py-24 bg-[#0D0A07] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8631A]/04 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-14"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8631A] bg-[#E8631A]/10 border border-[#E8631A]/20 px-4 py-2 rounded-full">
            Transparent Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5EDE4] leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Pick Your{' '}
            <span style={{ background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Growth Plan
            </span>
          </h2>
          <p className="text-[#8C7B6E] text-sm sm:text-base leading-relaxed max-w-lg">
            Three clear packages — no hidden fees, no surprises. Pay securely online or book a call for a custom quote.
          </p>
        </motion.div>

        {/* Cards — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 sm:items-start">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} onSelect={setSelectedPkg} />
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-6 text-[#8C7B6E] text-[11px] sm:text-xs"
        >
          {[
            { icon: <RiLockLine className="text-[#E8631A]" />,        text: 'Secure Stripe payments' },
            { icon: <RiShieldCheckLine className="text-[#E8631A]" />, text: '3 rounds of revisions' },
            { icon: <RiTimeLine className="text-[#E8631A]" />,        text: 'Fast turnaround' },
            { icon: <RiCalendarLine className="text-[#E8631A]" />,    text: 'Free discovery call' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              {icon}
              {text}
            </div>
          ))}
        </motion.div>

      </div>

      <CheckoutModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
    </section>
  )
}