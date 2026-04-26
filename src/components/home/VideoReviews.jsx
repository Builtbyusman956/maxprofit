import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiPlayCircleFill,
  RiInstagramLine,
  RiExternalLinkLine,
  RiCloseLine,
  RiStarFill,
  RiHeartFill,
} from 'react-icons/ri'

// ── Reel data ─────────────────────────────────────────────────
// Instagram doesn't allow direct embedding on external sites.
// We open each reel directly on Instagram in a new tab.
const reels = [
  {
    id: 1,
    url: 'https://www.instagram.com/reel/DHFLb-wN6pR/?igsh=cmo3eTMzaXU3MHJy',
    thumbnail: 'https://picsum.photos/seed/reel1/400/700',
    title: 'How I Built a $10K/Month Shopify Store',
    caption: 'From zero to $10K/month — the exact strategy I used to launch and scale a brand new Shopify store.',
    likes: '4.2K',
    tag: 'Case Study',
    tagColor: '#E8631A',
  },
  {
    id: 2,
    url: 'https://www.instagram.com/reel/DK0BJ1_x1EZ/?igsh=ODdubDU4YTEybW54',
    thumbnail: 'https://picsum.photos/seed/reel2/400/700',
    title: 'Brand Identity Mistakes Killing Your Sales',
    caption: '3 brand identity mistakes most entrepreneurs make that silently kill conversions — and how to fix them.',
    likes: '6.8K',
    tag: 'Brand Tips',
    tagColor: '#F5A623',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/reel/DG_kpDoB29u/?igsh=c3JxZXF2eXRtdmY=',
    thumbnail: 'https://picsum.photos/seed/reel3/400/700',
    title: 'Shopify SEO That Actually Works in 2025',
    caption: 'The SEO strategy that got my client 340% more organic traffic in 90 days — no paid ads needed.',
    likes: '9.1K',
    tag: 'SEO Strategy',
    tagColor: '#E8631A',
  },
  {
    id: 4,
    url: 'https://www.instagram.com/reel/DHmccYyxd_h/?igsh=YjdiY3NoZHY5ajl0',
    thumbnail: 'https://picsum.photos/seed/reel4/400/700',
    title: 'The Growth Funnel That Changed Everything',
    caption: 'One funnel. $85K in 60 days. Here\'s exactly how the growth funnel I built for a client worked.',
    likes: '7.3K',
    tag: 'Growth Funnel',
    tagColor: '#F5A623',
  },
]

const IG_PROFILE = 'https://www.instagram.com/maxprofit_150?igsh=MXMzc2k0emVmODBzbg=='

// ── Preview Modal ─────────────────────────────────────────────
function ReelModal({ reel, onClose }) {
  return (
    <AnimatePresence>
      {reel && (
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
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md bg-[#1A1410] border border-[#E8631A]/20 rounded-3xl overflow-hidden shadow-2xl">

              {/* Thumbnail */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/30 to-transparent" />

                {/* Instagram play badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#E8631A]/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-[#E8631A]/40">
                      <RiInstagramLine className="text-white text-2xl" />
                    </div>
                    <span className="text-white text-xs font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      Opens on Instagram
                    </span>
                  </div>
                </div>

                {/* Tag */}
                <span
                  className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: `${reel.tagColor}25`, color: reel.tagColor, border: `1px solid ${reel.tagColor}40` }}
                >
                  {reel.tag}
                </span>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-all"
                >
                  <RiCloseLine className="text-lg" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-[#F5EDE4] font-bold text-lg leading-snug mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {reel.title}
                  </h3>
                  <p className="text-[#8C7B6E] text-sm leading-relaxed">{reel.caption}</p>
                </div>

                <div className="flex items-center gap-2 text-[#8C7B6E] text-xs">
                  <RiHeartFill className="text-[#E8631A]" />
                  {reel.likes} likes on Instagram
                </div>

                {/* Note */}
                <div className="bg-[#120F0A] border border-[#F5EDE4]/05 rounded-xl p-3 text-[#8C7B6E] text-xs leading-relaxed">
                  📱 This video is hosted on Instagram. Tap below to watch the full reel — it opens in a new tab.
                </div>

                {/* CTA */}
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8631A] to-[#F5A623] text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8631A]/30 text-sm"
                >
                  <RiInstagramLine className="text-lg" />
                  Watch on Instagram
                  <RiExternalLinkLine />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Reel Card ─────────────────────────────────────────────────
function ReelCard({ reel, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(reel)}
      className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#F5EDE4]/06 bg-[#1A1410] cursor-pointer hover:border-[#E8631A]/30 transition-all duration-300"
      style={{ boxShadow: hovered ? '0 16px 48px rgba(232,99,26,0.15)' : '0 4px 20px rgba(0,0,0,0.3)' }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '9/14' }}>
        <motion.img
          src={reel.thumbnail}
          alt={reel.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/20 to-transparent" />

        {/* Tag — hidden on very small screens */}
        <span
          className="hidden xs:block absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full"
          style={{ background: `${reel.tagColor}25`, color: reel.tagColor, border: `1px solid ${reel.tagColor}40` }}
        >
          {reel.tag}
        </span>

        {/* Likes */}
        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-0.5 sm:gap-1 text-white text-[9px] sm:text-[10px] font-bold bg-black/60 backdrop-blur-sm px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
          <RiHeartFill className="text-[#E8631A] text-[9px] sm:text-xs" />
          {reel.likes}
        </span>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.25 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: hovered ? 'linear-gradient(135deg, #E8631A, #F5A623)' : 'rgba(232,99,26,0.85)',
              boxShadow: hovered ? '0 0 24px rgba(232,99,26,0.5)' : 'none',
              opacity: hovered ? 1 : 0.8,
            }}
          >
            <RiPlayCircleFill className="text-white text-xl sm:text-2xl ml-0.5" />
          </motion.div>
        </div>

        {/* IG badge */}
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1 text-white text-[9px] sm:text-[10px] font-bold bg-black/60 backdrop-blur-sm px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
          <RiInstagramLine className="text-[#E8631A]" />
          <span className="hidden sm:inline">@maxprofit_150</span>
          <span className="sm:hidden">IG</span>
        </div>
      </div>

      {/* Info — compact on mobile */}
      <div className="p-2.5 sm:p-4">
        <h3 className="text-[#F5EDE4] font-bold text-[11px] sm:text-sm leading-snug line-clamp-2" style={{ fontFamily: "'Syne', sans-serif" }}>
          {reel.title}
        </h3>
        <p className="hidden sm:block text-[#8C7B6E] text-xs mt-1.5 leading-relaxed line-clamp-2">{reel.caption}</p>
      </div>
    </motion.div>
  )
}

// ── Main Component ─────────────────────────────────────────────
export default function VideoReviews() {
  const [activeReel, setActiveReel] = useState(null)

  return (
    <section className="py-14 sm:py-20 bg-[#0D0A07] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#E8631A]/05 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-[#F5A623]/04 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 mb-7 sm:mb-10"
        >
          {/* Top row: label + IG button */}
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-[#E8631A] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              <RiStarFill />
              Client Results
            </span>
            <a
              href={IG_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#E8631A]/30 hover:border-[#E8631A]/60 text-[#C4A98A] hover:text-[#F5EDE4] font-semibold px-3 sm:px-5 py-2 rounded-full transition-all duration-300 text-[11px] sm:text-sm"
            >
              <RiInstagramLine className="text-[#E8631A]" />
              <span className="hidden sm:inline">Follow</span> @maxprofit_150
              <RiExternalLinkLine className="text-[10px] sm:text-xs" />
            </a>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5EDE4] leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Real People.{' '}
            <span style={{ background: 'linear-gradient(120deg, #FF8C42, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real Results.
            </span>
          </h2>
          <p className="text-[#8C7B6E] text-sm leading-relaxed max-w-md">
            Watch how we've helped entrepreneurs build profitable brands and Shopify stores from scratch.
          </p>
        </motion.div>

        {/* Grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {reels.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} onClick={setActiveReel} />
          ))}
        </div>

        {/* Bottom IG strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-[#1A1410] border border-[#E8631A]/15 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#E8631A] to-[#F5A623] flex items-center justify-center text-white text-base sm:text-lg shadow-lg shadow-[#E8631A]/30 flex-shrink-0">
              <RiInstagramLine />
            </div>
            <div>
              <p className="text-[#F5EDE4] font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                Want to see more results?
              </p>
              <p className="text-[#8C7B6E] text-xs">Daily tips and client wins on Instagram</p>
            </div>
          </div>
          <a
            href={IG_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8631A] to-[#F5A623] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8631A]/25"
          >
            <RiInstagramLine />
            Watch More on Instagram
            <RiExternalLinkLine className="text-xs" />
          </a>
        </motion.div>

      </div>

      <ReelModal reel={activeReel} onClose={() => setActiveReel(null)} />
    </section>
  )
}