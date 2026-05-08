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

      <section className="section-padding bg-dark-primary min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Start Your <span className="text-gradient-red">Project</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with us today and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card dark>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <span className="text-2xl mr-4 text-accent-red-primary group-hover:scale-110 transition-transform">📞</span>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <a
                          href={`tel:${siteConfig.company.phone}`}
                          className="text-accent-red-primary hover:text-accent-red-dark font-medium transition-colors"
                        >
                          {siteConfig.company.phone}
                        </a>
                        <p className="text-sm text-white/60 mt-1">
                          Call us directly for immediate assistance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <span className="text-2xl mr-4 text-accent-red-primary group-hover:scale-110 transition-transform">📧</span>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <a
                          href={`mailto:${siteConfig.company.email}`}
                          className="text-accent-red-primary hover:text-accent-red-dark font-medium transition-colors break-all sm:break-normal"
                        >
                          {siteConfig.company.email}
                        </a>
                        <p className="text-sm text-white/60 mt-1">
                          Send us an email anytime
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <span className="text-2xl mr-4 text-accent-red-primary group-hover:scale-110 transition-transform">📍</span>
                      <div>
                        <h3 className="font-semibold text-white">Address</h3>
                        <p className="text-white/70">{siteConfig.company.address}</p>
                        <p className="text-sm text-white/60 mt-1">
                          Visit our office
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card dark>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Why Choose Cinelad?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-accent-red-primary mr-3">✓</span>
                      <span className="text-white/70">Expert team with proven track record</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-red-primary mr-3">✓</span>
                      <span className="text-white/70">Tailored solutions for your business</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-red-primary mr-3">✓</span>
                      <span className="text-white/70">Transparent pricing and timeline</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-red-primary mr-3">✓</span>
                      <span className="text-white/70">Ongoing support and maintenance</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-red-primary mr-3">✓</span>
                      <span className="text-white/70">Fast turnaround time</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 bg-dark-primary text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red-primary/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-6 text-white/80">
                  Don't wait! Call us now for a free consultation and let's discuss your project.
                </p>
                <Button
                  href={`tel:${siteConfig.company.phone}`}
                  size="lg"
                  variant="outline-white"
                >
                  📞 Call {siteConfig.company.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
