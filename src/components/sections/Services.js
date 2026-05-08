'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card'
import Button from '../ui/Button'
import servicesData from '../../data/services.json'
import siteConfig from '../../data/site-config.json'

function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-dark-secondary border border-accent-red-primary/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-4xl mb-2 block">{service.icon}</span>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white text-xl transition-colors"
            >
              ✕
            </button>
          </div>

          <p className="text-white/70 mb-6">{service.description}</p>

          <div className="mb-6">
            <h4 className="font-semibold text-white mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/70">
                  <span className="text-accent-red-primary mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.location.href = `${siteConfig.company.googleFormUrl}?service=${encodeURIComponent(service.formField)}`}
              className="flex-1 px-6 py-3 bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow"
            >
              Get Started
            </button>
            <button
              onClick={() => window.location.href = `tel:${siteConfig.company.phone}`}
              className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-accent-red-primary/50 text-white hover:bg-accent-red-primary hover:text-white hover:scale-105"
            >
              📞 Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="section-padding bg-dark-secondary relative overflow-hidden">
      {/* Background Media Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-4 sm:left-10 text-3xl sm:text-4xl md:text-6xl text-accent-red-primary media-icon-rotate float">🎥</div>
        <div className="absolute top-20 right-4 sm:right-20 text-4xl sm:text-6xl md:text-8xl text-accent-red-light media-icon-pulse bounce-slow">📸</div>
        <div className="absolute bottom-20 left-4 sm:left-20 text-3xl sm:text-5xl md:text-7xl text-accent-red-primary media-icon-rotate scale-pulse" style={{animationDelay: '1s'}}>🎬</div>
        <div className="absolute bottom-10 right-4 sm:right-10 text-3xl sm:text-4xl md:text-6xl text-accent-red-light media-icon-pulse float" style={{animationDelay: '2s'}}>📹</div>
        <div className="hidden sm:block absolute top-1/2 left-1/4 text-5xl text-accent-red-primary media-icon-rotate" style={{animationDelay: '0.5s'}}>🎞️</div>
        <div className="hidden md:block absolute bottom-1/3 left-1/6 text-4xl text-accent-red-light rotate-slow" style={{animationDelay: '2.2s'}}>✨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4 text-white">
            Content so good, even your competitors might{' '}
            <span className="text-gradient-red text-shimmer">double-tap</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 px-4">
            Our content can be relatable, funny, eye-catching, jaw dropping, informative & oddly wholesome at times all while advertising your products to a community that we built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card hover dark className="h-full">
              <CardHeader className="text-center">
                <span className="text-4xl sm:text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
              </CardHeader>

              <CardBody className="flex-1">
                <p className="text-white/70 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-white/60">
                      <span className="text-accent-red-primary mr-2 text-xs">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardBody>

              <CardFooter className="space-y-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 border-2 border-accent-red-primary/50 text-white hover:bg-accent-red-primary/10 hover:scale-105"
                >
                  Learn More
                </button>
                <button
                  onClick={() => window.location.href = `${siteConfig.company.googleFormUrl}?service=${encodeURIComponent(service.formField)}`}
                  className="w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-accent-red-primary hover:bg-accent-red-dark text-white hover:scale-105 hover:shadow-red-glow"
                >
                  Get Started
                </button>
              </CardFooter>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-white/70 mb-4 text-sm sm:text-base">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 text-lg bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow w-full sm:w-auto"
          >
            Request Custom Quote
          </button>
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  )
}
