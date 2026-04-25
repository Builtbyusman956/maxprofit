import { Link } from 'react-router-dom'
import {
  RiArrowRightUpLine,
  RiPlayCircleLine,
  RiShieldCheckLine,
  RiStore2Line,
  RiLineChartLine,
  RiStarFill,
  RiCheckboxCircleFill,
} from 'react-icons/ri'
import { SiShopify } from 'react-icons/si'

const badges = [
  { icon: <RiCheckboxCircleFill />, text: 'Shopify Partner' },
  { icon: <RiCheckboxCircleFill />, text: '200+ Stores Built' },
  { icon: <RiCheckboxCircleFill />, text: '$5M+ Revenue Generated' },
]

const floatingCards = [
  {
    icon: <RiStore2Line />,
    label: 'Store Launched',
    value: '3x Revenue',
    color: 'text-[#E8631A]',
    bg: 'bg-[#E8631A]/10',
  },
  {
    icon: <RiLineChartLine />,
    label: 'Brand Growth',
    value: '+280% Traffic',
    color: 'text-[#F5A623]',
    bg: 'bg-[#F5A623]/10',
  },
  {
    icon: <RiShieldCheckLine />,
    label: 'Client Satisfied',
    value: '100% Rate',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0806] pt-28 pb-20">

      {/* ── Background layers ── */}
      {/* Radial glow top-left */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#E8631A]/8 blur-[120px] pointer-events-none" />
      {/* Radial glow bottom-right */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#F5A623]/6 blur-[100px] pointer-events-none" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#F5EDE4 1px, transparent 1px), linear-gradient(90deg, #F5EDE4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0806] to-transparent pointer-events-none z-10" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="flex flex-col gap-7">

            {/* Top badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="flex items-center gap-2 bg-[#1A1410] border border-[#E8631A]/25 text-[#F5EDE4] text-xs font-semibold px-4 py-2 rounded-full">
                <SiShopify className="text-[#E8631A] text-sm" />
                Shopify Expert & Brand Strategist
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.0] tracking-tight text-[#F5EDE4] mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Build a Brand
                <br />
                That{' '}
                <span className="relative inline-block">
                  <span
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(120deg, #FF8C42 0%, #F5A623 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Actually Sells
                  </span>
                  {/* Underline squiggle */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5 C 40 1, 80 8, 120 4, 160 1, 180 6, 199 4"
                      stroke="#E8631A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-[#C4A98A] text-lg leading-relaxed max-w-lg">
              I help entrepreneurs launch and grow winning Shopify stores — from brand identity and store setup to growth funnels, SEO, and social media marketing that converts.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3">
              {badges.map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 text-xs text-[#C4A98A] font-medium"
                >
                  <span className="text-[#E8631A] text-sm">{icon}</span>
                  {text}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/#packages"
                className="flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#E8631A]/30 hover:shadow-[#E8631A]/50 hover:-translate-y-0.5 text-sm"
              >
                View Packages
                <RiArrowRightUpLine className="text-lg" />
              </Link>

              <Link
                to="/book-a-call"
                className="flex items-center gap-2 border border-[#E8631A]/30 hover:border-[#E8631A]/70 text-[#F5EDE4] hover:text-[#E8631A] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm"
              >
                <RiPlayCircleLine className="text-lg" />
                Book Free Call
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-4 pt-2">
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {['#E8631A', '#F5A623', '#c0392b', '#8C7B6E', '#1A1410'].map((bg, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#0A0806] flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: bg, zIndex: 5 - i }}
                  >
                    {['AJ', 'KO', 'BM', 'SF', '+'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {Array(5).fill(0).map((_, i) => (
                    <RiStarFill key={i} className="text-[#F5A623] text-xs" />
                  ))}
                </div>
                <p className="text-[#8C7B6E] text-xs">
                  Trusted by <span className="text-[#F5EDE4] font-semibold">200+ entrepreneurs</span> worldwide
                </p>
              </div>
            </div>

          </div>

          {/* ── Right: Visual ── */}
          <div className="hidden lg:flex items-center justify-center relative">

            {/* Main card */}
            <div className="relative w-full max-w-md">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-[#E8631A]/15 blur-3xl rounded-3xl scale-110 pointer-events-none" />

              {/* Card */}
              <div className="relative bg-[#1A1410] border border-[#E8631A]/20 rounded-3xl p-8 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-[#8C7B6E] text-xs font-medium mb-1">Dashboard Overview</p>
                    <h3 className="text-[#F5EDE4] font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Brand Performance
                    </h3>
                  </div>
                  <span className="flex items-center gap-1.5 bg-emerald-400/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Monthly Revenue', value: '$48,200', change: '+34%', up: true },
                    { label: 'Conversion Rate', value: '4.8%',    change: '+1.2%', up: true },
                    { label: 'Store Traffic',   value: '12.4K',   change: '+67%', up: true },
                    { label: 'Avg Order Value', value: '$127',    change: '+18%', up: true },
                  ].map(({ label, value, change, up }) => (
                    <div key={label} className="bg-[#120F0A] rounded-xl p-4 border border-[#F5EDE4]/05">
                      <p className="text-[#8C7B6E] text-xs mb-1.5">{label}</p>
                      <p className="text-[#F5EDE4] font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {value}
                      </p>
                      <p className={`text-xs font-semibold mt-1 ${up ? 'text-emerald-400' : 'text-red-400'}`}>
                        {change} this month
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div className="bg-[#120F0A] rounded-xl p-4 border border-[#F5EDE4]/05">
                  <p className="text-[#8C7B6E] text-xs mb-3">Weekly Sales</p>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-md transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            background: i === 5
                              ? 'linear-gradient(180deg, #FF8C42, #E8631A)'
                              : 'rgba(232,99,26,0.25)',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <span key={i} className="text-[#8C7B6E] text-xs flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingCards.map(({ icon, label, value, color, bg }, i) => (
              <div
                key={label}
                className={`
                  absolute bg-[#1A1410] border border-[#F5EDE4]/08 rounded-xl px-4 py-3
                  flex items-center gap-3 shadow-xl backdrop-blur
                  ${i === 0 ? '-left-12 top-12' : i === 1 ? '-right-10 top-1/3' : '-left-8 bottom-16'}
                `}
                style={{ animation: `float ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.6}s` }}
              >
                <span className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center text-base flex-shrink-0`}>
                  {icon}
                </span>
                <div>
                  <p className="text-[#8C7B6E] text-[10px] leading-none mb-1">{label}</p>
                  <p className="text-[#F5EDE4] font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ── Keyframe for floating cards (inline style tag) ── */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}