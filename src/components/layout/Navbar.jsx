import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import {
  RiMenuLine,
  RiCloseLine,
  RiShoppingBag3Line,
  RiArrowRightUpLine,
  RiStarFill,
} from 'react-icons/ri'

const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [hideNav,   setHideNav]   = useState(false)
  const lastScrollY = useRef(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHideNav(y > lastScrollY.current && y > 120)
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Top announcement bar ── */}
      <div className="bg-[#E8631A] text-white text-center text-xs font-medium py-2 tracking-wide flex items-center justify-center gap-2">
        <RiStarFill className="text-amber-300" />
        <span>Helping 200+ entrepreneurs scale their brand on Shopify</span>
        <RiStarFill className="text-amber-300" />
      </div>

      {/* ── Main navbar ── */}
      <header
        className={`
          fixed left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'top-0 bg-[#0A0806]/95 backdrop-blur-md border-b border-[#E8631A]/10 shadow-lg shadow-black/40'
            : 'top-8 bg-transparent'
          }
          ${hideNav ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-lg bg-[#E8631A] flex items-center justify-center text-white text-lg shadow-lg shadow-[#E8631A]/30 group-hover:shadow-[#E8631A]/50 transition-all duration-300">
              <RiShoppingBag3Line />
            </span>
            <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Max<span className="text-[#E8631A]">Profit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 relative group
                  ${isActive ? 'text-[#E8631A]' : 'text-[#C4A98A] hover:text-[#F5EDE4]'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#E8631A] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-a-call"
              className="hidden md:flex items-center gap-1.5 bg-[#E8631A] hover:bg-[#FF8C42] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#E8631A]/25 hover:shadow-[#E8631A]/40 hover:-translate-y-0.5"
            >
              Book a Call
              <RiArrowRightUpLine className="text-base" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#E8631A]/25 text-[#F5EDE4] hover:border-[#E8631A]/60 hover:text-[#E8631A] transition-all duration-200 text-xl"
            >
              {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile overlay menu ── */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0806]/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-400
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Decorative glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#E8631A]/5 blur-3xl pointer-events-none" />

        <nav className="flex flex-col items-center gap-2 w-full px-8 relative z-10">
          {navLinks.map(({ label, to }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `w-full max-w-xs text-center py-4 text-2xl font-bold border-b transition-colors duration-200
                ${isActive
                  ? 'text-[#E8631A] border-[#E8631A]/30'
                  : 'text-[#F5EDE4] border-[#F5EDE4]/08 hover:text-[#E8631A]'
                }`
              }
              style={{
                fontFamily: "'Syne', sans-serif",
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/book-a-call"
            className="mt-6 flex items-center gap-2 bg-[#E8631A] hover:bg-[#FF8C42] text-white text-base font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#E8631A]/30"
          >
            Book a Call
            <RiArrowRightUpLine className="text-lg" />
          </Link>
        </nav>

        <p className="absolute bottom-12 text-[#8C7B6E] text-sm text-center px-8">
          Helping entrepreneurs build brands that sell.
        </p>
      </div>
    </>
  )
}