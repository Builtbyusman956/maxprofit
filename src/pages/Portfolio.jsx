import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiArrowRightUpLine,
  RiExternalLinkLine,
  RiPlayCircleFill,
  RiInstagramLine,
  RiShieldCheckLine,
  RiStarFill,
  RiCloseLine,
  RiVideoLine,
  RiImageLine,
  RiStore2Line,
} from 'react-icons/ri'

const stores = [
  {
    id: 1,
    niche: 'Fashion',
    title: 'Fashion Nova',
    url: 'https://www.fashionnova.com/',
    thumbnail: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    caption: 'One of the most recognised fashion brands globally — built on a high-converting Shopify storefront with advanced product filtering, upsell flows, and influencer-ready design.',
    tags: ['Fashion', 'Shopify', 'High Volume'],
    color: '#E8631A',
  },
  {
    id: 2,
    niche: 'Fitness',
    title: 'The Fitness Store',
    url: 'https://thefitnessstore.com/',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    caption: 'Full Shopify build for a fitness equipment brand — optimised product pages, bundle upsells, and a checkout flow that converts browsers into buyers.',
    tags: ['Fitness', 'Shopify', 'E-commerce'],
    color: '#F5A623',
  },
  {
    id: 3,
    niche: 'Health & Wellness',
    title: 'Ever Vitality',
    url: 'https://evervitality.net/',
    thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
    caption: 'Premium wellness brand Shopify store — subscription product setup, trust-building content layout, and SEO-optimised collections driving consistent organic traffic.',
    tags: ['Health', 'Shopify', 'SEO'],
    color: '#E8631A',
  },
  {
    id: 4,
    niche: 'Home & Lifestyle',
    title: 'Live Artfully',
    url: 'https://liveartfully.shop/?country=US',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    caption: 'Boutique home décor brand with a handcrafted aesthetic — custom Shopify theme, international store setup, and lifestyle-focused product photography integration.',
    tags: ['Home Decor', 'Shopify', 'Lifestyle'],
    color: '#F5A623',
  },
  {
    id: 5,
    niche: 'Fitness',
    title: 'Fitness Equipment Pro',
    url: 'https://thefitnessstore.com/',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    caption: 'Performance-focused fitness store with a bold brand identity — category pages, product bundles, and a speed-optimised mobile experience that drives conversions.',
    tags: ['Fitness', 'Branding', 'Mobile-first'],
    color: '#E8631A',
  },
]

const salesProof = [
  { id: 1, src: '/assets/sales1.jpeg', alt: 'Sales proof screenshot 1' },
  { id: 2, src: '/assets/sales2.jpeg', alt: 'Sales proof screenshot 2' },
  { id: 3, src: '/assets/sales3.jpeg', alt: 'Sales proof screenshot 3' },
]

const IG_PROFILE = 'https://www.instagram.com/maxprofit_150'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

function StoreCard({ store, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden border border-[#F5EDE4]/06 bg-[#1A1410] transition-all duration-300 hover:border-[#E8631A]/30"
      style={{ boxShadow: hovered ? '0 24px 64px rgba(232,99,26,0.14)' : '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <motion.img
          src={store.thumbnail}
          alt={store.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/30 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0A0806]/70 backdrop-blur-sm border border-[#F5EDE4]/10 text-[#C4A98A]">
          {store.niche}
        </span>
        <motion.a
          href={store.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#E8631A] flex items-center justify-center text-white shadow-lg"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.25 }}
        >
          <RiExternalLinkLine />
        </motion.a>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, transparent, ${store.color}, transparent)` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <div>
          <p className="text-[#E8631A] text-[10px] font-bold uppercase tracking-widest mb-1">{store.niche} Store</p>
          <h3 className="text-[#F5EDE4] font-bold text-lg leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>{store.title}</h3>
          <p className="text-[#8C7B6E] text-xs sm:text-sm leading-relaxed mt-2">{store.caption}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {store.tags.map(tag => (
            <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#F5EDE4]/08 text-[#8C7B6E]">{tag}</span>
          ))}
        </div>
        <a href={store.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-[#E8631A] hover:text-[#FF8C42] transition-colors duration-200 mt-1">
          <RiStore2Line />Visit Store<RiArrowRightUpLine />
        </a>
      </div>
    </motion.div>
  )
}

function ImageModal({ src, alt, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <>
          <motion.div key="bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md" />
          <motion.div key="img" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="pointer-events-auto relative max-w-2xl w-full">
              <button onClick={onClose} className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-[#1A1410] border border-[#F5EDE4]/10 flex items-center justify-center text-[#8C7B6E] hover:text-[#F5EDE4] transition-all z-10">
                <RiCloseLine />
              </button>
              <img src={src} alt={alt} className="w-full rounded-2xl shadow-2xl border border-[#F5EDE4]/10" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function VideoProof() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause() } else { videoRef.current.play() }
    setPlaying(!playing)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden border border-[#E8631A]/20 bg-[#1A1410] shadow-2xl shadow-[#E8631A]/10"
    >
      <video ref={videoRef} src="/assets/sales5.mp4" className="w-full max-h-[480px] object-cover" playsInline loop onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer" onClick={togglePlay}>
          <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #E8631A, #F5A623)', boxShadow: '0 0 40px rgba(232,99,26,0.5)' }}>
            <RiPlayCircleFill className="text-white text-3xl sm:text-4xl ml-1" />
          </motion.div>
        </div>
      )}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <RiVideoLine className="text-[#E8631A] text-sm" />
        <span className="text-white text-xs font-semibold">Client Results Video</span>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState(null)
  const [activeAlt,   setActiveAlt]   = useState('')

  return (
    <div className="bg-[#0A0806] min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E8631A]/05 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#F5EDE4 1px, transparent 1px), linear-gradient(90deg, #F5EDE4 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8631A] bg-[#E8631A]/10 border border-[#E8631A]/20 px-4 py-2 rounded-full">Proven Results</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5EDE4] leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Stores We've{' '}
              <span style={{ background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Built & Scaled</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#8C7B6E] text-base sm:text-lg leading-relaxed max-w-xl">
              Real stores, real results. Every link below is a live store we've helped launch or grow — plus real sales proof from our clients.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-2">
              {[{ value: '200+', label: 'Stores Built' }, { value: '$5M+', label: 'Revenue Generated' }, { value: '98%', label: 'Client Satisfaction' }].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "'Syne', sans-serif", background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{value}</span>
                  <span className="text-[#8C7B6E] text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Stores */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-[#E8631A]/15 flex items-center justify-center text-[#E8631A]"><RiStore2Line /></div>
            <div>
              <h2 className="text-[#F5EDE4] font-bold text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>Live Stores</h2>
              <p className="text-[#8C7B6E] text-xs">Click any store to visit it live</p>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {stores.map((store, i) => <StoreCard key={store.id} store={store} index={i} />)}
          </div>
        </div>
      </section>

      {/* Sales Proof */}
      <section className="py-16 sm:py-20 bg-[#0D0A07] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/30 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8631A]/15 flex items-center justify-center text-[#E8631A]"><RiImageLine /></div>
              <div>
                <h2 className="text-[#F5EDE4] font-bold text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>Sales Proof</h2>
                <p className="text-[#8C7B6E] text-xs">Real revenue screenshots from our clients</p>
              </div>
            </div>
            <a href={IG_PROFILE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-[#E8631A] to-[#F5A623] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8631A]/25">
              <RiInstagramLine />For Proof & Reference<RiExternalLinkLine className="text-xs" />
            </a>
          </motion.div>

          {/* Sales images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 sm:mb-14">
            {salesProof.map((proof, i) => (
              <motion.div
                key={proof.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => { setActiveImage(proof.src); setActiveAlt(proof.alt) }}
                className="relative group rounded-2xl overflow-hidden border border-[#F5EDE4]/06 bg-[#1A1410] cursor-pointer hover:border-[#E8631A]/30 transition-all duration-300"
                style={{ aspectRatio: '4/3' }}
              >
                <img src={proof.src} alt={proof.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#E8631A]/90 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <RiExternalLinkLine className="text-sm" />
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0A0806]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E8631A]/20">
                  <RiShieldCheckLine className="text-[#E8631A] text-xs" />
                  <span className="text-[#C4A98A] text-[10px] font-bold">Verified Sales</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#E8631A]/15 flex items-center justify-center text-[#E8631A]"><RiVideoLine /></div>
            <div>
              <h2 className="text-[#F5EDE4] font-bold text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>Video Proof</h2>
              <p className="text-[#8C7B6E] text-xs">Real client results — watch the numbers</p>
            </div>
          </motion.div>

          <VideoProof />

          {/* Bottom IG strip */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1A1410] border border-[#E8631A]/15 rounded-2xl px-5 sm:px-6 py-5 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8631A] to-[#F5A623] flex items-center justify-center text-white text-lg shadow-lg shadow-[#E8631A]/30 flex-shrink-0"><RiInstagramLine /></div>
              <div>
                <p className="text-[#F5EDE4] font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>Want more proof?</p>
                <p className="text-[#8C7B6E] text-xs">Follow us on Instagram for daily client wins and results</p>
              </div>
            </div>
            <a href={IG_PROFILE} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8631A] to-[#F5A623] text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8631A]/25 flex-shrink-0">
              <RiInstagramLine />For Proof & Reference<RiExternalLinkLine className="text-xs" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden border border-[#E8631A]/20 bg-[#1A1410] p-10 sm:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8631A]/08 via-transparent to-[#F5A623]/05 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/60 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 max-w-xl mx-auto">
              <div className="flex items-center gap-1">{Array(5).fill(0).map((_, i) => <RiStarFill key={i} className="text-[#F5A623] text-sm" />)}</div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8631A]">Your Brand Could Be Next</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F5EDE4] leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>Ready to See Results Like These?</h2>
              <p className="text-[#8C7B6E] text-sm leading-relaxed">Let's talk about your brand and build a Shopify store or YouTube channel that actually grows.</p>
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                <Link to="/book-a-call" className="flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#E8631A]/30 hover:-translate-y-0.5 text-sm">
                  Book a Free Call<RiArrowRightUpLine />
                </Link>
                <Link to="/#packages" className="flex items-center gap-2 border border-[#E8631A]/30 hover:border-[#E8631A]/60 text-[#C4A98A] hover:text-[#F5EDE4] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm">
                  View Packages
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ImageModal src={activeImage} alt={activeAlt} onClose={() => setActiveImage(null)} />
    </div>
  )
}