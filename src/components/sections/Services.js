'use client'

import { useState } from 'react'
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card'
import Button from '../ui/Button'
import servicesData from '../../data/services.json'
import siteConfig from '../../data/site-config.json'

function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-red-500/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-4xl mb-2 block">{service.icon}</span>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
          
          <p className="text-gray-300 mb-6">{service.description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-white mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="text-red-400 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => window.location.href = `${siteConfig.company.googleFormUrl}?service=${encodeURIComponent(service.formField)}`}
              className="flex-1 px-4 py-3 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              style={{background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100%)', boxShadow: '0 0 15px rgba(227, 30, 37, 0.3)'}}
            >
              Get Started
            </button>
            <button 
              onClick={() => window.location.href = `tel:${siteConfig.company.phone}`}
              className="flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:scale-105"
            >
              Call Us
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
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Media Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {/* Mobile: Smaller, fewer elements */}
        <div className="absolute top-10 left-4 sm:left-10 text-3xl sm:text-4xl md:text-6xl media-icon-rotate" style={{color: '#e31e25'}}>🎥</div>
        <div className="absolute top-20 right-4 sm:right-20 text-4xl sm:text-6xl md:text-8xl media-icon-pulse" style={{color: '#e31e25'}}>📸</div>
        <div className="absolute bottom-20 left-4 sm:left-20 text-3xl sm:text-5xl md:text-7xl media-icon-rotate" style={{animationDelay: '1s', color: '#e31e25'}}>🎬</div>
        <div className="absolute bottom-10 right-4 sm:right-10 text-3xl sm:text-4xl md:text-6xl media-icon-pulse" style={{animationDelay: '2s', color: '#e31e25'}}>📹</div>
        
        {/* Desktop only elements */}
        <div className="hidden sm:block absolute top-1/2 left-1/4 text-5xl media-icon-rotate" style={{animationDelay: '0.5s', color: '#e31e25'}}>🎞️</div>
        <div className="hidden md:block absolute bottom-1/3 left-1/6 text-4xl media-icon-rotate" style={{animationDelay: '2.2s', color: '#e31e25'}}>✨</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
            Content so good, even your competitors might 
            <span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(45deg, #b91c1c 0%, #e31e25 25%, #ff4757 50%, #e31e25 75%, #b91c1c 100%)', WebkitBackgroundClip: 'text'}}>
              double-tap
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8 px-4">
            Our content can be relatable, funny, eye-catching, jaw dropping, informative & oddly wholesome at times all while advertising your products to a community that we built.
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.services.map((service) => (
            <Card key={service.id} hover className="h-full bg-white backdrop-blur-sm hover-lift border border-red-500/30 shadow-lg hover:shadow-red-500/20 transition-all duration-300">
              <CardHeader className="text-center">
                <span className="text-4xl sm:text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </CardHeader>
              
              <CardBody className="flex-1">
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <span className="text-red-400 mr-2 text-xs">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardBody>
              
              <CardFooter className="space-y-3">
                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:scale-105"
                >
                  Learn More
                </button>
                <button 
                  onClick={() => window.location.href = `${siteConfig.company.googleFormUrl}?service=${encodeURIComponent(service.formField)}`}
                  className="w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 text-white hover:scale-105"
                  style={{background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100%)', boxShadow: '0 0 15px rgba(227, 30, 37, 0.3)'}}
                >
                  Get Started
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 text-lg text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100%)', boxShadow: '0 0 20px rgba(227, 30, 37, 0.4)'}}
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