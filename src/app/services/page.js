import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Services from '../../components/sections/Services'
import Button from '../../components/ui/Button'

export const metadata = {
  title: 'Our Services - Cinelad',
  description: 'Discover our content creation services: social media reels, UGC content, brand storytelling, viral campaigns, and monthly content packages.',
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-dark-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red-primary/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-outline-animated">Our <span className='text-outline-red'>Services</span></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/80">
            Comprehensive solutions designed to accelerate your business growth and digital transformation.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-lg bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow"
          >
            Get Custom Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Additional CTA */}
      <section className="section-padding bg-dark-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Something <span className="text-gradient-red">Custom</span>?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Every business is unique. If you don't see exactly what you're looking for,
            let's discuss how we can create a custom solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="accent">
              Discuss Custom Project
            </Button>
            <Button
              href="tel:+91-9876543210"
              size="lg"
              variant="outline"
            >
              📞 Call for Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
