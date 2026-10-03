import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Team from '@/components/Team'
import { getReviews } from '@/lib/reviews'

import InternshipPage from './internship/page'

export default async function Home() {
  const reviews = await getReviews()

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Team />
      <Testimonials initialReviews={reviews} />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
