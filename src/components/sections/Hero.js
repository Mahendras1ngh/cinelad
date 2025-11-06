import Button from '../ui/Button'
import siteConfig from '../../data/site-config.json'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg"></div>
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
            {siteConfig.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {siteConfig.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              href="/contact" 
              size="lg" 
              variant="accent"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              {siteConfig.hero.ctaText}
            </Button>
            <Button 
              href={`tel:${siteConfig.company.phone}`}
              size="lg" 
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto glass-effect border-white text-white hover:electric-gradient hover:scale-105 hover:shadow-xl animate-pulse"
            >
              🎬 Call Now
            </Button>
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