'use client'

import { useState } from 'react'
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card'
import Button from '../ui/Button'
import servicesData from '../../data/services.json'
import siteConfig from '../../data/site-config.json'

function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-4xl mb-2 block">{service.icon}</span>
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">{service.description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              href={`${siteConfig.company.googleFormUrl}?service=${encodeURIComponent(service.formField)}`}
              className="flex-1"
              variant="primary"
            >
              Get Started
            </Button>
            <Button 
              href={`tel:${siteConfig.company.phone}`}
              className="flex-1"
              variant="outline"
            >
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Content so good, even your competitors might double-tap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our content can be relatable, funny, eye-catching, jaw dropping, informative & oddly wholesome at times all while advertising your products to a community that we built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service) => (
            <Card key={service.id} hover className="h-full">
              <CardHeader className="text-center">
                <span className="text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
                      <span className="text-green-500 mr-2 text-xs">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardBody>
              
              <CardFooter className="space-y-3">
                <Button 
                  onClick={() => setSelectedService(service)}
                  className="w-full"
                  variant="outline"
                >
                  Learn More
                </Button>
                <Button 
                  href={`${siteConfig.company.googleFormUrl}?service=${encodeURIComponent(service.formField)}`}
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <Button href="/contact" size="lg" variant="accent">
            Request Custom Quote
          </Button>
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