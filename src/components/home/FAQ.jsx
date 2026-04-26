import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiAddLine, RiSubtractLine, RiQuestionLine, RiArrowRightUpLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What exactly is included in the 3 packages?',
    a: 'Each package is clearly scoped — from a starter brand kit to a full Shopify store build with marketing setup. You\'ll see exactly what\'s included before purchasing. For anything outside the packages, we\'ll build a custom quote on a discovery call.',
  },
  {
    q: 'How long does it take to build a Shopify store?',
    a: 'A standard store build takes 7–14 business days depending on complexity, number of products, and how quickly you provide your content and brand assets. We\'ll agree on a timeline before we start.',
  },
  {
    q: 'Do I need to already have a brand or product?',
    a: 'Not at all. We work with entrepreneurs at every stage — whether you have an idea, a product but no brand, or an existing store you want to grow. Our brand identity service can build your look from scratch.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes — for the two higher packages, a 50% deposit is required to begin and the remaining 50% is due on delivery. The starter package is paid in full upfront. All payments are processed securely via Stripe.',
  },
  {
    q: 'What if I\'m not happy with the result?',
    a: 'We offer up to 3 rounds of revisions on all deliverables. We\'re committed to making sure you love the final result. In the rare case something isn\'t right, we\'ll work with you until it is.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden
        ${isOpen
          ? 'border-[#E8631A]/35 bg-[#1A1410]'
          : 'border-[#F5EDE4]/06 bg-[#1A1410] hover:border-[#E8631A]/20'
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-[#F5EDE4]' : 'text-[#C4A98A]'}`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all duration-300
            ${isOpen
              ? 'bg-[#E8631A] text-white shadow-lg shadow-[#E8631A]/30'
              : 'bg-[#F5EDE4]/06 text-[#8C7B6E]'
            }`}
        >
          {isOpen ? <RiSubtractLine /> : <RiAddLine />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-gradient-to-r from-[#E8631A]/30 via-[#E8631A]/10 to-transparent mb-4" />
              <p className="text-[#8C7B6E] text-sm leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-24 bg-[#0A0806] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#E8631A]/04 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:sticky lg:top-28 flex flex-col gap-5"
          >
            <span className="flex items-center gap-2 text-[#E8631A] text-xs font-bold uppercase tracking-[0.2em]">
              <RiQuestionLine />
              FAQs
            </span>

            <h2
              className="text-4xl sm:text-5xl font-black text-[#F5EDE4] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Got{' '}
              <span
                style={{
                  background: 'linear-gradient(120deg, #FF8C42, #F5A623)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Questions?
              </span>
            </h2>

            <p className="text-[#8C7B6E] text-sm leading-relaxed">
              Everything you need to know before getting started. Can't find the answer you're looking for? Book a free call.
            </p>

            <Link
              to="/book-a-call"
              className="flex items-center gap-2 w-fit bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#E8631A]/25 hover:-translate-y-0.5 text-sm mt-2"
            >
              Ask Us Directly
              <RiArrowRightUpLine />
            </Link>

            {/* Decorative card */}
            <div className="hidden lg:block mt-4 rounded-2xl border border-[#E8631A]/15 bg-[#1A1410] p-5">
              <p className="text-[#F5EDE4] font-bold text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                Still unsure?
              </p>
              <p className="text-[#8C7B6E] text-xs leading-relaxed">
                Our discovery call is completely free and zero pressure. We'll answer every question before you spend a penny.
              </p>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}