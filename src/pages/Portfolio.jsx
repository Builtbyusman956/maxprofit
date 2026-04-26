import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiArrowRightUpLine,
  RiExternalLinkLine,
  RiLineChartLine,
  RiUserSmileLine,
  RiPercentLine,
} from 'react-icons/ri'
import { portfolioItems, allTags } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show:   { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  exit:   { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } },
}

function PortfolioCard({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={cardVariant}
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden border border-[#F5EDE4]/06 bg-[#1A1410] transition-all duration-300 hover:border-[#E8631A]/30"
      style={{ boxShadow: hovered ? '0 24px 64px rgba(232,99,26,0.14)' : '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/40 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0A0806]/70 backdrop-blur-sm border border-[#F5EDE4]/10 text-[#C4A98A]">
              {tag}
            </span>
          ))}
        </div>
        <motion.div
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#E8631A] flex items-center justify-center text-white shadow-lg"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.25 }}
        >
          <RiExternalLinkLine />
        </motion.div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div>
          <p className="text-[#E8631A] text-[10px] font-bold uppercase tracking-widest mb-1.5">{item.category}</p>
          <h3 className="text-[#F5EDE4] font-bold text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>{item.title}</h3>
          <p className="text-[#8C7B6E] text-sm leading-relaxed mt-2">{item.desc}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[
            { icon: <RiLineChartLine />, label: 'Revenue',    value: item.stats.revenue },
            { icon: <RiUserSmileLine />, label: 'Traffic',    value: item.stats.traffic },
            { icon: <RiPercentLine />,   label: 'Conv. Rate', value: item.stats.conversion },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-[#120F0A] rounded-xl p-3 border border-[#F5EDE4]/04 flex flex-col gap-1">
              <span className="text-[#E8631A] text-xs">{icon}</span>
              <p className="text-[#F5EDE4] font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</p>
              <p className="text-[#8C7B6E] text-[10px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  )
}

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? portfolioItems
    : portfolioItems.filter((p) => p.tags.includes(activeTag))

  const availableTags = allTags.filter(
    (t) => t === 'All' || portfolioItems.some((p) => p.tags.includes(t))
  )

  return (
    <div className="bg-[#0A0806] min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E8631A]/05 blur-[120px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#F5EDE4 1px, transparent 1px), linear-gradient(90deg, #F5EDE4 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8631A] bg-[#E8631A]/10 border border-[#E8631A]/20 px-4 py-2 rounded-full">
              Proven Results
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black text-[#F5EDE4] leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Brands We've{' '}
              <span style={{ background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Built & Scaled
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#8C7B6E] text-lg leading-relaxed max-w-xl">
              Real stores, real results. Browse the brands we've helped launch, grow, and dominate their markets.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 pt-2">
              {[
                { value: '200+', label: 'Stores Built' },
                { value: '$5M+', label: 'Revenue Generated' },
                { value: '98%',  label: 'Client Satisfaction' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-black" style={{ background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: "'Syne', sans-serif" }}>
                    {value}
                  </span>
                  <span className="text-[#8C7B6E] text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-20 bg-[#0A0806]/95 backdrop-blur-md border-b border-[#F5EDE4]/05">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 border
                  ${activeTag === tag
                    ? 'bg-[#E8631A] border-[#E8631A] text-white shadow-lg shadow-[#E8631A]/25'
                    : 'bg-transparent border-[#F5EDE4]/10 text-[#8C7B6E] hover:border-[#E8631A]/40 hover:text-[#C4A98A]'
                  }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-[#8C7B6E]">
              No projects found for this filter.
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden border border-[#E8631A]/20 bg-[#1A1410] p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8631A]/08 via-transparent to-[#F5A623]/05 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/60 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-5 max-w-xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8631A]">Your Brand Could Be Next</span>
              <h2 className="text-4xl font-black text-[#F5EDE4] leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to See Results Like These?
              </h2>
              <p className="text-[#8C7B6E] text-sm leading-relaxed">
                Let's talk about your brand and build a growth strategy that actually works.
              </p>
              <Link to="/book-a-call" className="flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#E8631A]/30 hover:-translate-y-0.5">
                Book a Free Call <RiArrowRightUpLine />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}