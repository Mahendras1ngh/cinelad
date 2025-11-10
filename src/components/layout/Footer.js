import siteConfig from '../../data/site-config.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='text-white relative overflow-hidden'
      style={{
        background:
          'linear-gradient(135deg, #1a1a1a 0%, #e31e25 50%, #1a1a1a 100%)',
      }}
    >
      {/* Background Media Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-10'>
        <div
          className='absolute top-10 left-4 sm:left-10 text-3xl sm:text-4xl md:text-5xl media-icon-rotate'
          style={{ color: '#ff4757' }}
        >
          📸
        </div>
        <div
          className='absolute top-20 right-4 sm:right-20 text-4xl sm:text-5xl md:text-6xl media-icon-pulse'
          style={{ color: '#ff4757' }}
        >
          🎬
        </div>
        <div
          className='hidden sm:block absolute bottom-20 left-1/4 text-4xl media-icon-rotate'
          style={{ animationDelay: '1s', color: '#ff4757' }}
        >
          🎥
        </div>
        <div
          className='absolute bottom-10 right-4 sm:right-10 text-3xl sm:text-4xl md:text-5xl media-icon-pulse'
          style={{ animationDelay: '2s', color: '#ff4757' }}
        >
          📹
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          {/* Company Info */}
          <div className='sm:col-span-2 lg:col-span-2'>
            <h3 className='text-xl sm:text-2xl font-bold mb-4'>
              <span
                className='text-transparent bg-clip-text'
                style={{
                  background:
                    'linear-gradient(45deg, #b91c1c 0%, #e31e25 25%, #ff4757 50%, #e31e25 75%, #b91c1c 100%)',
                  WebkitBackgroundClip: 'text',
                }}
              >
                {siteConfig.company.name}
              </span>
            </h3>
            <p className='text-gray-300 mb-6 max-w-md text-sm sm:text-base'>
              {siteConfig.company.tagline}. We deliver cutting-edge solutions
              that drive growth, enhance efficiency, and create lasting value
              for your business.
            </p>
            <div className='space-y-2 text-sm sm:text-base'>
              <div className='flex items-center'>
                <span className='mr-2 sm:mr-3'>📍</span>
                <span className='text-gray-300'>
                  {siteConfig.company.address}
                </span>
              </div>
              <div className='flex items-center'>
                <span className='mr-2 sm:mr-3'>📧</span>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className='text-gray-300 hover:text-red-400 transition-colors break-all sm:break-normal'
                >
                  {siteConfig.company.email}
                </a>
              </div>
              <div className='flex items-center'>
                <span className='mr-2 sm:mr-3'>📞</span>
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  {siteConfig.company.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>Services</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/services'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  Instagram Reels
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  UGC Content
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  Brand Storytelling
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  Viral Campaigns
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-gray-300 hover:text-red-400 transition-colors'
                >
                  Content Packages
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup - Commented out until implemented */}
        {/* 
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="max-w-md">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none glass-effect text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-brand-electric text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 electric-gradient hover:scale-105 text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-all duration-300 font-medium hover:rotate-1 hover:shadow-xl text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        */}

        {/* Social Links & Copyright */}
        <div className='border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6 mb-4 md:mb-0 text-sm sm:text-base'>
              <a
                href={siteConfig.social.linkedin}
                className='text-gray-300 hover:text-red-400 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.twitter}
                className='text-gray-300 hover:text-red-400 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
              <a
                href={siteConfig.social.facebook}
                className='text-gray-300 hover:text-red-400 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                className='text-gray-300 hover:text-red-400 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </div>
            <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400'>
              <span className='text-center'>
                © {currentYear} {siteConfig.company.name}. All rights reserved.
              </span>
              <div className='flex space-x-4 sm:space-x-6'>
                <a
                  href='/privacy'
                  className='hover:text-red-400 transition-colors'
                >
                  Privacy Policy
                </a>
                <a
                  href='/terms'
                  className='hover:text-red-400 transition-colors'
                >
                  Terms of Service
                </a>
                <a
                  href='https://www.mahindersingh.com/client'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-400 transition-colors opacity-70 hover:opacity-100'
                  title='Developer Portfolio'
                >
                  Made with ❤️ by 💀
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
