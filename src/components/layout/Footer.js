import siteConfig from '../../data/site-config.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {siteConfig.company.name}
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {siteConfig.company.tagline}. We deliver cutting-edge solutions that drive growth, enhance efficiency, and create lasting value for your business.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span className="text-gray-300">{siteConfig.company.address}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📧</span>
                <a 
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.company.email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <a 
                  href={`tel:${siteConfig.company.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services#web-development" className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services#mobile-app" className="text-gray-300 hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/services#digital-marketing" className="text-gray-300 hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/services#brand-design" className="text-gray-300 hover:text-white transition-colors">
                  Brand Design
                </a>
              </li>
              <li>
                <a href="/services#consulting" className="text-gray-300 hover:text-white transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href={siteConfig.social.linkedin}
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.twitter}
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={siteConfig.social.facebook}
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>© {currentYear} {siteConfig.company.name}. All rights reserved.</span>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}