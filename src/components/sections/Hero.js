'use client';
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import siteConfig from '../../data/site-config.json'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red-primary/10 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mobile: Fewer, smaller elements */}
        <div className="absolute top-20 left-4 sm:left-10 text-2xl sm:text-3xl md:text-4xl animate-bounce opacity-30 sm:opacity-40 text-accent-red-light float" style={{animationDelay: '0s'}}>📸</div>
        <div className="absolute top-40 right-4 sm:right-20 text-3xl sm:text-4xl md:text-5xl animate-pulse opacity-25 sm:opacity-35 text-accent-red-primary scale-pulse" style={{animationDelay: '0.5s'}}>🎬</div>
        <div className="absolute bottom-32 left-4 sm:left-20 text-2xl sm:text-3xl animate-bounce opacity-30 sm:opacity-40 text-accent-red-light bounce-slow" style={{animationDelay: '1s'}}>🎥</div>
        <div className="absolute bottom-40 right-4 sm:right-10 text-2xl sm:text-3xl animate-bounce opacity-30 sm:opacity-40 text-accent-red-primary media-icon-rotate" style={{animationDelay: '1.5s'}}>🎞️</div>

        {/* Desktop only elements */}
        <div className="hidden sm:block absolute top-60 left-1/4 text-4xl animate-pulse opacity-30 text-accent-red-light media-icon-pulse" style={{animationDelay: '2s'}}>📹</div>
        <div className="hidden sm:block absolute bottom-20 left-1/2 text-4xl animate-bounce opacity-35 text-accent-red-primary float" style={{animationDelay: '2.5s'}}>📱</div>
        <div className="hidden md:block absolute bottom-1/3 left-1/5 text-3xl animate-bounce opacity-35 text-accent-red-light rotate-slow" style={{animationDelay: '3s'}}>✨</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
          >
            Creative Content That
            <span className="block text-gradient-red text-shimmer">
              Stops The Scroll
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {siteConfig.hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <button
              onClick={() => window.location.href = '/contact'}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow"
            >
              {siteConfig.hero.ctaText}
            </button>
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-white/30 text-white hover:border-accent-red-primary hover:bg-accent-red-primary/10"
            >
              📞 Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-red-primary animate-bounce">
        <div className="text-3xl">🎯</div>
        <div className="text-xs mt-1 text-center text-white/60">Scroll for Magic</div>
      </div>
    </section>
  )
}
