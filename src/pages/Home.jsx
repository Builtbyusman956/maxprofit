import { lazy, Suspense } from 'react'
import Hero from '../components/home/Hero'

const TrustBar     = lazy(() => import('../components/home/TrustBar'))
const Stats        = lazy(() => import('../components/home/Stats'))
const Packages     = lazy(() => import('../components/home/Packages'))
const VideoReviews = lazy(() => import('../components/home/VideoReviews'))
const FAQ          = lazy(() => import('../components/home/FAQ'))

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 rounded-full border-2 border-[#E8631A]/20 border-t-[#E8631A] animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionLoader />}><TrustBar /></Suspense>
      <Suspense fallback={<SectionLoader />}><Stats /></Suspense>
      <Suspense fallback={<SectionLoader />}><Packages /></Suspense> 
      <Suspense fallback={<SectionLoader />}><VideoReviews /></Suspense>
      <Suspense fallback={<SectionLoader />}><FAQ /></Suspense>
      {/* Portfolio preview, BookingCTA — coming next */}
    </>
  )
}