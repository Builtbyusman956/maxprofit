import { Link } from 'react-router-dom'
import {
  RiShoppingBag3Line,
  RiInstagramLine,
  RiTiktokLine,
  RiWhatsappLine,
  RiFacebookBoxLine,
  RiArrowRightUpLine,
  RiMailLine,
  RiMapPinLine,
} from 'react-icons/ri'

const socials = [
  { icon: <RiInstagramLine />,    href: 'https://www.instagram.com/maxprofit_150?igsh=MW1iZjgwenBzdjBudQ==', label: 'Instagram' },
  { icon: <RiTiktokLine />,       href: 'https://tiktok.com/@maxprofit150',                                   label: 'TikTok' },
  { icon: <RiFacebookBoxLine />,  href: 'https://www.facebook.com/share/1DqDxNT1Ju/',                        label: 'Facebook' },
  { icon: <RiWhatsappLine />,     href: 'https://wa.me/message/EE3K7MDUS4FVK1',                              label: 'WhatsApp' },
]

const footerLinks = {
  Services: [
    { label: 'Shopify Store Setup', to: '/services' },
    { label: 'Brand Identity',      to: '/services' },
    { label: 'Growth Funnels',      to: '/services' },
    { label: 'Social Media Mktg',   to: '/services' },
    { label: 'SEO & Paid Ads',      to: '/services' },
  ],
  Company: [
    { label: 'Portfolio',   to: '/portfolio' },
    { label: 'Packages',    to: '/#packages' },
    { label: 'Reviews',     to: '/#reviews' },
    { label: 'Book a Call', to: '/book-a-call' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0D0A07] border-t border-[#E8631A]/10 relative overflow-hidden">

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#E8631A]/60 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#E8631A]/3 blur-3xl rounded-full pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

        {/* Brand column */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <span className="w-9 h-9 rounded-lg bg-[#E8631A] flex items-center justify-center text-white text-lg shadow-lg shadow-[#E8631A]/30">
              <RiShoppingBag3Line />
            </span>
            <span className="font-bold text-lg text-[#F5EDE4]" style={{ fontFamily: "'Syne', sans-serif" }}>
              Max<span className="text-[#E8631A]">Profit</span>
            </span>
          </Link>

          <p className="text-[#8C7B6E] text-sm leading-relaxed max-w-[240px]">
            Helping entrepreneurs build brands that sell — with Shopify, strategy, and systems that scale.
          </p>

          <a
            href="mailto:hello@maxprofit.com"
            className="flex items-center gap-2 text-[#C4A98A] hover:text-[#E8631A] text-sm transition-colors duration-200"
          >
            <RiMailLine className="text-[#E8631A] flex-shrink-0" />
            hello@maxprofit.com
          </a>

          <div className="flex items-center gap-2 text-[#8C7B6E] text-sm">
            <RiMapPinLine className="text-[#E8631A] flex-shrink-0" />
            Available Worldwide
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2 mt-1">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-[#E8631A]/15 flex items-center justify-center text-[#8C7B6E] hover:text-[#E8631A] hover:border-[#E8631A]/40 hover:bg-[#E8631A]/08 transition-all duration-200 text-base"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading} className="flex flex-col gap-4">
            <h4
              className="text-xs font-bold uppercase tracking-widest text-[#E8631A]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {heading}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {items.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[#8C7B6E] hover:text-[#F5EDE4] text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#E8631A]">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA card */}
        <div className="flex flex-col">
          <div className="rounded-2xl border border-[#E8631A]/20 bg-[#1A1410] p-6 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8631A] bg-[#E8631A]/10 px-3 py-1 rounded-full w-fit">
              Free Discovery Call
            </span>
            <h4 className="text-[#F5EDE4] font-bold text-base leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
              Ready to grow your brand?
            </h4>
            <p className="text-[#8C7B6E] text-sm leading-relaxed">
              Let's talk about your goals and build a plan that actually works.
            </p>
            <Link
              to="/book-a-call"
              className="flex items-center justify-center gap-1.5 bg-[#E8631A] hover:bg-[#FF8C42] text-white text-sm font-semibold py-2.5 px-4 rounded-full transition-all duration-300 shadow-lg shadow-[#E8631A]/25 hover:-translate-y-0.5 mt-1"
            >
              Book a Call
              <RiArrowRightUpLine />
            </Link>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#F5EDE4]/05 mt-4 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8C7B6E] text-xs">
            © {year} Maxprofit. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#8C7B6E] hover:text-[#C4A98A] text-xs transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[#8C7B6E] hover:text-[#C4A98A] text-xs transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}