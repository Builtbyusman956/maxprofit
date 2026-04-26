import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiArrowRightUpLine, RiCheckLine, RiCalendarLine } from 'react-icons/ri'
import { services } from '../data/services'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      variants={cardVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-2xl border border-[#F5EDE4]/06 bg-[#1A1410] overflow-hidden cursor-default transition-all duration-300 hover:border-[#E8631A]/30"
      style={{ boxShadow: hovered ? '0 20px 60px rgba(232,99,26,0.12)' : '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
        style={{ background: hovered ? `linear-gradient(90deg, transparent, ${service.color}, transparent)` : 'transparent' }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${service.color}08 0%, transparent 70%)` }}
      />
      <div className="relative z-10 p-7 flex flex-col gap-5 h-full">
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300"
            style={{
              background: hovered ? `${service.color}20` : 'rgba(245,237,228,0.05)',
              color: service.color,
              boxShadow: hovered ? `0 0 20px ${service.color}30` : 'none',
            }}
          >
            <Icon />
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${service.color}15`, color: service.color }}
          >
            {service.tag}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#F5EDE4] font-bold text-xl leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            {service.title}
          </h3>
          <p className="text-[#8C7B6E] text-sm leading-relaxed">{service.desc}</p>
        </div>
        <ul className="flex flex-col gap-2 mt-auto">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[#C4A98A] text-xs">
              <RiCheckLine className="text-[#E8631A] flex-shrink-0 text-sm" />
              {f}
            </li>
          ))}
        </ul>
        <Link
          to="/book-a-call"
          className="mt-2 flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
          style={{ color: hovered ? service.color : '#8C7B6E' }}
        >
          <RiCalendarLine />
          Enquire about this service
          <RiArrowRightUpLine />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="bg-[#0A0806] min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E8631A]/06 blur-[120px] rounded-full pointer-events-none" />
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
              What We Offer
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black text-[#F5EDE4] leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Every Service Your Brand{' '}
              <span style={{ background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Needs to Win
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#8C7B6E] text-lg leading-relaxed max-w-xl">
              From brand identity and Shopify setup to marketing funnels and paid ads — everything under one roof so your brand can grow without the guesswork.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/book-a-call" className="flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#E8631A]/25 hover:-translate-y-0.5 text-sm">
                Book a Free Call <RiArrowRightUpLine />
              </Link>
              <Link to="/#packages" className="flex items-center gap-2 border border-[#E8631A]/30 hover:border-[#E8631A]/60 text-[#C4A98A] hover:text-[#F5EDE4] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm">
                View Packages
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative rounded-3xl overflow-hidden border border-[#E8631A]/20 bg-[#1A1410] p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8631A]/08 via-transparent to-[#F5A623]/05 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/60 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-5 max-w-xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8631A]">Not Sure Where to Start?</span>
              <h2 className="text-4xl font-black text-[#F5EDE4] leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Let's Build Your Custom Plan
              </h2>
              <p className="text-[#8C7B6E] text-sm leading-relaxed">
                Every brand is different. Book a free discovery call and we'll map out exactly what your brand needs to grow.
              </p>
              <Link to="/book-a-call" className="flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#E8631A]/30 hover:-translate-y-0.5">
                Book Your Free Call <RiArrowRightUpLine />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}