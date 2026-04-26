import { motion } from 'framer-motion'
import { SiShopify, SiMeta, SiGoogleads,SiTiktok, SiMailchimp } from 'react-icons/si'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const platforms = [
  { icon: SiShopify,    name: 'Shopify Partner',   color: '#96BF48' },
  { icon: SiMeta,       name: 'Meta Ads',           color: '#0081FB' },
  { icon: SiGoogleads,  name: 'Google Ads',         color: '#FBBC04' },
  
  { icon: SiTiktok,     name: 'TikTok for Business',color: '#F5EDE4' },
  { icon: SiMailchimp,  name: 'Email Marketing',    color: '#FFE01B' },
]

const trust = [
  { value: '200+', label: 'Brands Built' },
  { value: '$5M+', label: 'Client Revenue' },
  { value: '98%',  label: 'Satisfaction' },
  { value: '4+',   label: 'Years Experience' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#0D0A07] border-y border-[#F5EDE4]/05 py-10 overflow-hidden relative">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-24 bg-[#E8631A]/04 blur-[60px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col gap-8">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#E8631A]/30" />
          <span className="flex items-center gap-1.5 text-[#8C7B6E] text-xs font-bold uppercase tracking-[0.2em]">
            <RiVerifiedBadgeFill className="text-[#E8631A]" />
            Trusted Platforms & Partners
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#E8631A]/30" />
        </motion.div>

        {/* Platform icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {platforms.map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="flex items-center gap-2.5 group cursor-default"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${color}12`,
                  color,
                  boxShadow: `0 0 0 1px ${color}20`,
                }}
              >
                <Icon />
              </div>
              <span className="text-[#8C7B6E] group-hover:text-[#C4A98A] text-xs font-medium transition-colors duration-200 hidden sm:block">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#E8631A]/15 to-transparent" />

        {/* Quick stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {trust.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-3">
              <span
                className="text-xl font-black"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: 'linear-gradient(120deg, #FF8C42, #F5A623)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}
              </span>
              <span className="text-[#8C7B6E] text-xs font-medium">{label}</span>
              {i < trust.length - 1 && (
                <div className="hidden md:block w-px h-5 bg-[#F5EDE4]/08 ml-3" />
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}