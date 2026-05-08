'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../ui/Button'
import siteConfig from '../../data/site-config.json'
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-dark-primary sticky top-0 z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src={logo}
                  alt={siteConfig.company.name}
                  width={40}
                  height={40}
                  className="object-contain sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <div className="absolute inset-0 bg-accent-red-primary opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300 glow-pulse"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gradient-red text-shimmer">
                {siteConfig.company.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-accent-red-primary px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-red-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="text-white/90 hover:text-accent-red-light font-semibold text-sm transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-accent-red-primary text-lg">📞</span>
              <span className="hidden xl:inline">{siteConfig.company.phone}</span>
            </a>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-2.5 bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-red-glow hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="text-accent-red-primary hover:text-accent-red-light font-semibold text-lg transition-all duration-300"
            >
              📞
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent-red-primary focus:outline-none transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-secondary border-t border-white/10 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-accent-red-primary hover:bg-white/5 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-white/10 space-y-3">
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="text-white/90 hover:text-accent-red-light flex items-center px-3 py-2 font-semibold transition-all duration-300"
                >
                  <span className="text-accent-red-primary mr-2">📞</span> {siteConfig.company.phone}
                </a>
                <div className="px-3">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="w-full px-6 py-3 bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-red-glow"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
