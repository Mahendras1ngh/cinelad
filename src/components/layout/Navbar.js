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
    <nav className="glass-effect sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt={siteConfig.company.name}
                width={32}
                height={32}
                className="object-contain sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-electric via-brand-purple to-brand-neon bg-clip-text text-transparent">
                {siteConfig.company.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-brand-electric px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="text-brand-electric hover:text-brand-neon font-semibold text-xs sm:text-sm transition-all duration-300"
            >
              <span className="media-icon-pulse">🎬</span> {siteConfig.company.phone}
            </a>
            <Button href="/contact" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Show phone on mobile/tablet */}
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="text-brand-electric hover:text-brand-neon font-semibold text-xs transition-all duration-300 lg:hidden"
            >
              <span className="media-icon-pulse">🎬</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-brand-electric focus:outline-none focus:text-brand-electric transition-colors p-1"
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
          <div className="md:hidden glass-effect border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-brand-electric block px-3 py-2 text-base font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-white/10">
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="text-brand-electric hover:text-brand-neon block px-3 py-2 font-semibold transition-all duration-300"
                >
                  <span className="media-icon-pulse">🎬</span> {siteConfig.company.phone}
                </a>
                <div className="px-3 py-2">
                  <Button href="/contact" size="sm" className="w-full">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}