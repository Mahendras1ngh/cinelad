'use client';
import Button from '../ui/Button'
import siteConfig from '../../data/site-config.json'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #e31e25 50%, #1a1a1a 100%)'}}></div>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Floating Media Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mobile: Fewer, smaller elements */}
        <div className="absolute top-20 left-4 sm:left-10 text-2xl sm:text-3xl md:text-4xl animate-bounce opacity-20 sm:opacity-30">📸</div>
        <div className="absolute top-40 right-4 sm:right-20 text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-15 sm:opacity-20">🎬</div>
        <div className="absolute bottom-32 left-4 sm:left-20 text-2xl sm:text-3xl animate-bounce opacity-20 sm:opacity-25" style={{animationDelay: '1s'}}>🎥</div>
        <div className="absolute bottom-40 right-4 sm:right-10 text-2xl sm:text-3xl animate-bounce opacity-20 sm:opacity-30" style={{animationDelay: '1.5s'}}>🎞️</div>
        
        {/* Desktop only elements */}
        <div className="hidden sm:block absolute top-60 left-1/4 text-4xl animate-pulse opacity-20" style={{animationDelay: '2s'}}>📹</div>
        <div className="hidden sm:block absolute bottom-20 left-1/2 text-4xl animate-bounce opacity-25" style={{animationDelay: '2.5s'}}>📱</div>
        <div className="hidden md:block absolute bottom-1/3 left-1/5 text-3xl animate-bounce opacity-25" style={{animationDelay: '3s'}}>✨</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Creative Content That
            <span className="block text-transparent bg-clip-text" style={{background: 'linear-gradient(45deg, #b91c1c 0%, #e31e25 25%, #ff4757 50%, #e31e25 75%, #b91c1c 100%)', WebkitBackgroundClip: 'text'}}>
              Stops The Scroll
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {siteConfig.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100%)', boxShadow: '0 0 20px rgba(227, 30, 37, 0.4)'}}
            >
              {siteConfig.hero.ctaText}
            </button>
            <a 
              href={`tel:${siteConfig.company.phone}`}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto inline-block text-center rounded-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-white/30 text-white backdrop-blur-sm"
              style={{background: 'linear-gradient(45deg, rgba(227, 30, 37, 0.3) 0%, rgba(255, 71, 87, 0.3) 100%)'}}
            >
              🎬 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="text-3xl">🎯</div>
        <div className="text-xs mt-1 text-center">Scroll for Magic</div>
      </div>
    </section>
  )
}