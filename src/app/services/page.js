import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Services from '../../components/sections/Services'
import Button from '../../components/ui/Button'

export const metadata = {
  title: 'Our Services - Cinelads',
  description: 'Discover our content creation services: social media reels, UGC content, brand storytelling, viral campaigns, and monthly content packages.',
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Comprehensive solutions designed to accelerate your business growth and digital transformation.
          </p>
          <Button 
            href="/contact" 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900"
          >
            Get Custom Quote
          </Button>
        </div>
      </section>
      
      {/* Services Section */}
      <Services />
      
      {/* Additional CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every business is unique. If you don't see exactly what you're looking for, 
            let's discuss how we can create a custom solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
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