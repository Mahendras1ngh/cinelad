import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import siteConfig from '../../data/site-config.json'

export const metadata = {
  title: 'Contact Us - Cinelad',
  description: 'Ready to create scroll-stopping content? Get in touch with Cinelad to discuss your content creation needs and book your slot.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Start Your Project
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with us today and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">📞</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <a 
                          href={`tel:${siteConfig.company.phone}`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          {siteConfig.company.phone}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          Call us directly for immediate assistance
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">📧</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a 
                          href={`mailto:${siteConfig.company.email}`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          {siteConfig.company.email}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          Send us an email anytime
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">📍</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">{siteConfig.company.address}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Visit our office
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Why Choose Cinelad?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-600">Expert team with proven track record</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-600">Tailored solutions for your business</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-600">Transparent pricing and timeline</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-600">Ongoing support and maintenance</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-600">Fast turnaround time</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Contact Form - HIDDEN */}
            {/* <div>
              <Card>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-4">
                      Fill out our detailed form to tell us about your project:
                    </p>
                    <Button 
                      href={siteConfig.company.googleFormUrl}
                      size="lg"
                      className="w-full mb-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fill Out Project Form
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                  </div>

                  <form className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="+91-9876543210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Brand Design">Brand Design</option>
                        <option value="Business Consulting">Business Consulting</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Custom Solution">Custom Solution</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields. We'll get back to you within 24 hours.
                  </p>
                </div>
              </Card>
            </div> */}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 text-white" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #e31e25 50%, #1a1a1a 100%)'}}>
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Don't wait! Call us now for a free consultation and let's discuss your project.
              </p>
              <Button 
                href={`tel:${siteConfig.company.phone}`}
                size="lg"
                variant="outline"
                className="border-white !text-white hover:bg-white hover:text-gray-900"
              >
                📞 Call {siteConfig.company.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}