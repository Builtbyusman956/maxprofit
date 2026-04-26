import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  RiStore2Line,
  RiMoneyDollarCircleLine,
  RiUserHeartLine,
  RiStarFill,
} from 'react-icons/ri'
import { SiShopify } from 'react-icons/si'

const stats = [
  {
    icon: RiStore2Line,
    value: 200,
    suffix: '+',
    label: 'Stores Built',
    sub: 'Across 15+ niches',
    color: '#E8631A',
  },
  {
    icon: RiMoneyDollarCircleLine,
    value: 5,
    prefix: '$',
    suffix: 'M+',
    label: 'Revenue Generated',
    sub: 'For our clients combined',
    color: '#F5A623',
  },
  {
    icon: RiUserHeartLine,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    sub: 'Based on 200+ reviews',
    color: '#E8631A',
  },
  {
    icon: SiShopify,
    value: 4,
    suffix: '+',
    label: 'Years Experience',
    sub: 'Shopify & e-commerce',
    color: '#F5A623',
  },
]

// Animated counter hook
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatCard({ stat, index, inView }) {
  const Icon = stat.icon
  const count = useCounter(stat.value, 1600, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      className="relative group rounded-2xl bg-[#1A1410] border border-[#F5EDE4]/06 p-7 overflow-hidden hover:border-[#E8631A]/25 transition-all duration-300"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top left, ${stat.color}08, transparent 70%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.color}80, transparent)` }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${stat.color}18`, color: stat.color }}
        >
          <Icon />
        </div>

        {/* Value */}
        <div className="flex items-end gap-0.5">
          {stat.prefix && (
            <span
              className="text-4xl font-black leading-none mb-0.5"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: `linear-gradient(120deg, ${stat.color}, #F5A623)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {stat.prefix}
            </span>
          )}
          <span
            className="text-5xl font-black leading-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: `linear-gradient(120deg, ${stat.color}, #F5A623)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {count}
          </span>
          <span
            className="text-3xl font-black leading-none mb-1"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: `linear-gradient(120deg, ${stat.color}, #F5A623)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <div className="flex flex-col gap-0.5">
          <p className="text-[#F5EDE4] font-bold text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
            {stat.label}
          </p>
          <p className="text-[#8C7B6E] text-xs">{stat.sub}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-[#0A0806] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#E8631A]/04 blur-[100px] rounded-full" />
      </div>

      {/* Divider top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col items-center text-center gap-3 mb-14"
        >
          <span className="flex items-center gap-1.5 text-[#F5A623] text-xs font-bold uppercase tracking-[0.2em]">
            <RiStarFill />
            By the Numbers
            <RiStarFill />
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#F5EDE4] leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Results That{' '}
            <span
              style={{
                background: 'linear-gradient(120deg, #FF8C42, #F5A623)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Speak for Themselves
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-[#8C7B6E] text-sm mt-10"
        >
          Helping entrepreneurs across Africa, the UK, USA & beyond build brands that sell.
        </motion.p>

      </div>

      {/* Divider bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/40 to-transparent" />
    </section>
  )
}