import siteConfig from '../../data/site-config.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-dark-primary text-white relative overflow-hidden'>
      {/* Subtle red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-red-primary/5 to-transparent pointer-events-none"></div>

      {/* Background Media Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-5'>
        <div className='absolute top-10 left-4 sm:left-10 text-3xl sm:text-4xl md:text-5xl text-accent-red-primary media-icon-rotate'>
          📸
        </div>
        <div className='absolute top-20 right-4 sm:right-20 text-4xl sm:text-5xl md:text-6xl text-accent-red-light media-icon-pulse'>
          🎬
        </div>
        <div className='hidden sm:block absolute bottom-20 left-1/4 text-4xl text-accent-red-primary media-icon-rotate' style={{ animationDelay: '1s' }}>
          🎥
        </div>
        <div className='absolute bottom-10 right-4 sm:right-10 text-3xl sm:text-4xl md:text-5xl text-accent-red-light media-icon-pulse' style={{ animationDelay: '2s' }}>
          📹
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10'>
          {/* Company Info */}
          <div className='sm:col-span-2 lg:col-span-2'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
              <span className='text-gradient-red'>
                {siteConfig.company.name}
              </span>
            </h3>
            <p className='text-white/70 mb-6 max-w-md text-sm sm:text-base leading-relaxed'>
              {siteConfig.company.tagline}. We deliver cutting-edge content solutions
              that drive growth, enhance engagement, and create lasting value
              for your brand.
            </p>
            <div className='space-y-3 text-sm sm:text-base'>
              <div className='flex items-center group'>
                <span className='mr-3 text-accent-red-primary text-xl group-hover:scale-110 transition-transform'>📍</span>
                <span className='text-white/70 group-hover:text-white transition-colors'>
                  {siteConfig.company.address}
                </span>
              </div>
              <div className='flex items-center group'>
                <span className='mr-3 text-accent-red-primary text-xl group-hover:scale-110 transition-transform'>📧</span>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className='text-white/70 hover:text-accent-red-light transition-colors break-all sm:break-normal'
                >
                  {siteConfig.company.email}
                </a>
              </div>
              <div className='flex items-center group'>
                <span className='mr-3 text-accent-red-primary text-xl group-hover:scale-110 transition-transform'>📞</span>
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className='text-white/70 hover:text-accent-red-light transition-colors'
                >
                  {siteConfig.company.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4 relative inline-block'>
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-red-primary"></span>
            </h4>
            <ul className='space-y-2.5'>
              <li>
                <a
                  href='/'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='/portfolio'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4 relative inline-block'>
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-red-primary"></span>
            </h4>
            <ul className='space-y-2.5'>
              <li>
                <a
                  href='/services'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Instagram Reels
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  UGC Content
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Brand Storytelling
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Viral Campaigns
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-white/70 hover:text-accent-red-light transition-colors inline-block hover:translate-x-1 duration-300'
                >
                  Content Packages
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className='border-t border-white/10 mt-10 sm:mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            {/* Social Links */}
            <div className='flex flex-wrap justify-center md:justify-start gap-6 text-sm sm:text-base'>
              <a
                href={siteConfig.social.linkedin}
                className='text-white/70 hover:text-accent-red-light transition-colors flex items-center space-x-2 group'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className="group-hover:scale-110 transition-transform">💼</span>
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.social.twitter}
                className='text-white/70 hover:text-accent-red-light transition-colors flex items-center space-x-2 group'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className="group-hover:scale-110 transition-transform">🐦</span>
                <span>Twitter</span>
              </a>
              <a
                href={siteConfig.social.facebook}
                className='text-white/70 hover:text-accent-red-light transition-colors flex items-center space-x-2 group'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className="group-hover:scale-110 transition-transform">📘</span>
                <span>Facebook</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                className='text-white/70 hover:text-accent-red-light transition-colors flex items-center space-x-2 group'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className="group-hover:scale-110 transition-transform">📸</span>
                <span>Instagram</span>
              </a>
            </div>

            {/* Copyright & Links */}
            <div className='flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-white/50'>
              <span className='text-center'>
                © {currentYear} {siteConfig.company.name}. All rights reserved.
              </span>
              <div className='flex space-x-4 sm:space-x-6'>
                <a
                  href='/privacy'
                  className='hover:text-accent-red-light transition-colors'
                >
                  Privacy Policy
                </a>
                <a
                  href='/terms'
                  className='hover:text-accent-red-light transition-colors'
                >
                  Terms
                </a>
                <a
                  href='https://www.mahindersingh.com/client'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-accent-red-light transition-colors opacity-60 hover:opacity-100'
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
