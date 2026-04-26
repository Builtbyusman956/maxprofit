import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import './index.css'

// ── Code split every page ───────────────────────────────────
const Home      = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Services  = lazy(() => import('./pages/Services'))
const BookCall  = lazy(() => import('./pages/BookCall'))
const ThankYou  = lazy(() => import('./pages/ThankYou'))
const NotFound  = lazy(() => import('./pages/NotFound'))

// ── Spinner fallback ────────────────────────────────────────
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0A0806] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#E8631A]/20 border-t-[#E8631A] animate-spin" />
        <p className="text-[#8C7B6E] text-sm tracking-wide">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index          element={<Home />} />
            <Route path="portfolio"   element={<Portfolio />} />
            <Route path="services"    element={<Services />} />
            <Route path="book-a-call" element={<BookCall />} />
            <Route path="thank-you"   element={<ThankYou />} />
            <Route path="*"           element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}