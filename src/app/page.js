import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Pricing from '../components/sections/Pricing'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}