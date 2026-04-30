import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  RiYoutubeLine,
  RiCheckLine,
  RiArrowRightUpLine,
  RiPlayCircleLine,
  RiRocketLine,
  RiVipCrownLine,
  RiShieldCheckLine,
  RiTimeLine,
} from 'react-icons/ri'

const steps = [
  { number: '01', title: 'Channel Setup', desc: 'We set up and optimise your channel from scratch — niche, branding, SEO foundation.' },
  { number: '02', title: 'Content Strategy', desc: 'Research-backed scripts, titles and thumbnails designed to rank and get clicks.' },
  { number: '03', title: 'Production', desc: 'Full video editing, animations, captions and professional thumbnails every month.' },
  { number: '04', title: 'Growth & Monetisation', desc: 'SEO, trend monitoring, audience strategy and sponsorship roadmap to scale revenue.' },
]

const highlights = [
  { icon: <RiYoutubeLine />,      text: 'Up to 12 videos/month' },
  { icon: <RiRocketLine />,       text: 'Full channel management' },
  { icon: <RiShieldCheckLine />,  text: 'Monetisation roadmap' },
  { icon: <RiTimeLine />,         text: 'Hands-free — you do nothing' },
  { icon: <RiVipCrownLine />,     text: 'Sponsorship outreach' },
  { icon: <RiPlayCircleLine />,   text: 'Premium editing + animations' },
]

const plans = [
  { name: 'Starter',     price: '$500',   videos: '4 videos/mo',  color: '#F5A623' },
  { name: 'Scale Up',    price: '$1,200', videos: '8 videos/mo',  color: '#E8631A', popular: true },
  { name: 'Domination',  price: '$2,500', videos: '12 videos/mo', color: '#F5A623' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

export default function YouTubeSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0806] relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/04 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#E8631A]/04 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8631A] bg-[#E8631A]/10 border border-[#E8631A]/20 px-4 py-2 rounded-full">
              <RiYoutubeLine className="text-sm" />
              New Service
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black text-[#F5EDE4] leading-tight max-w-3xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            We Handle Your{' '}
            <span style={{ background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              YouTube
            </span>{' '}
            — You Focus on Your Business
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#8C7B6E] text-base leading-relaxed max-w-xl">
            From content creation to channel growth — we automate your entire YouTube presence so you can scale faster and smarter without lifting a finger.
          </motion.p>
        </motion.div>

        {/* ── Main content grid ── */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">

          {/* Left — steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-[#F5EDE4] font-bold text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>
              How Our YouTube Automation Works
            </h3>

            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #E8631A, #F5A623)',
                        color: '#fff',
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-[#E8631A]/40 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pb-4 pt-1">
                    <p className="text-[#F5EDE4] font-bold text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {step.title}
                    </p>
                    <p className="text-[#8C7B6E] text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/#packages"
              className="flex items-center gap-2 w-fit bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#E8631A]/25 hover:-translate-y-0.5 text-sm"
            >
              View YouTube Packages
              <RiArrowRightUpLine />
            </Link>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#E8631A]/10 blur-3xl rounded-3xl scale-110 pointer-events-none" />

            <div className="relative bg-[#1A1410] border border-[#E8631A]/20 rounded-3xl overflow-hidden shadow-2xl">

              {/* Card header */}
              <div className="bg-gradient-to-r from-[#E8631A] to-[#F5A623] px-6 py-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white text-xl">
                  <RiYoutubeLine />
                </div>
                <div>
                  <p className="text-white font-black text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
                    YouTube Automation
                  </p>
                  <p className="text-white/70 text-xs">Full service — hands free</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Highlights grid */}
              <div className="p-6 grid grid-cols-2 gap-3">
                {highlights.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 bg-[#120F0A] rounded-xl p-3 border border-[#F5EDE4]/05">
                    <span className="text-[#E8631A] text-base flex-shrink-0">{icon}</span>
                    <span className="text-[#C4A98A] text-xs font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* Closing line */}
              <div className="px-6 pb-6">
                <div className="bg-[#120F0A] rounded-2xl p-4 border border-[#E8631A]/15">
                  <p className="text-[#F5EDE4] text-sm font-semibold mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    "We handle the full process."
                  </p>
                  <p className="text-[#8C7B6E] text-xs leading-relaxed">
                    From content creation to channel growth — scale faster and smarter while you focus on what matters.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Pricing mini cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-[#8C7B6E] text-xs font-bold uppercase tracking-[0.2em]">YouTube Automation Plans</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-5 border flex flex-col gap-2 transition-all duration-300
                  ${plan.popular
                    ? 'border-[#E8631A]/50 bg-[#1A1410] shadow-xl shadow-[#E8631A]/15'
                    : 'border-[#F5EDE4]/07 bg-[#1A1410]'
                  }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest bg-[#E8631A] text-white px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)` }} />
                <p className="text-[#8C7B6E] text-xs font-medium">{plan.name}</p>
                <p className="font-black text-2xl" style={{ fontFamily: "'Syne', sans-serif", background: `linear-gradient(120deg, ${plan.color}, #F5A623)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {plan.price}<span className="text-sm font-semibold">/mo</span>
                </p>
                <p className="text-[#C4A98A] text-xs">{plan.videos}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/#packages"
              className="flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#E8631A]/25 hover:-translate-y-0.5 text-sm"
            >
              See Full Packages
              <RiArrowRightUpLine />
            </Link>
            <Link
              to="/book-a-call"
              className="flex items-center gap-2 border border-[#E8631A]/30 hover:border-[#E8631A]/60 text-[#C4A98A] hover:text-[#F5EDE4] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm"
            >
              <RiPlayCircleLine />
              Book a Free Call
            </Link>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/30 to-transparent" />
    </section>
  )
}