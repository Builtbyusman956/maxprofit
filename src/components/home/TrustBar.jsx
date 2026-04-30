import { motion } from 'framer-motion'
import { SiShopify, SiMeta, SiGoogleads, SiTiktok, SiMailchimp } from 'react-icons/si'

const platforms = [
  { icon: SiShopify,   name: 'Shopify',   color: '#96BF48' },
  { icon: SiMeta,      name: 'Meta Ads',  color: '#0081FB' },
  { icon: SiGoogleads, name: 'Google Ads',color: '#FBBC04' },
  { icon: SiTiktok,    name: 'TikTok',    color: '#F5EDE4' },
  { icon: SiMailchimp, name: 'Mailchimp', color: '#FFE01B' },
]

const trust = [
  { value: '200+', label: 'Brands Built' },
  { value: '$5M+', label: 'Client Revenue' },
  { value: '98%',  label: 'Satisfaction' },
  { value: '4+',   label: 'Years Experience' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#0D0A07] border-y border-[#F5EDE4]/05 py-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6">

        {/* Platform icons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5 md:gap-8"
        >
          {platforms.map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center gap-2 group cursor-default"
            >
              <Icon
                className="text-base transition-all duration-300 group-hover:scale-110"
                style={{ color }}
              />
              <span className="text-[#5A5165] group-hover:text-[#8C7B6E] text-xs font-medium transition-colors duration-200 hidden sm:block">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#F5EDE4]/08 to-transparent" />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {trust.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="text-sm font-black"
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
              <span className="text-[#5A5165] text-xs">{label}</span>
              {i < trust.length - 1 && (
                <div className="hidden md:block w-px h-3.5 bg-[#F5EDE4]/08 ml-2" />
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}