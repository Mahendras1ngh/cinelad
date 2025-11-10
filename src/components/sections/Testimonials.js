'use client'

import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import testimonialsData from '../../data/testimonials.json'

function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-full bg-white border border-red-500/30 hover:shadow-red-500/20">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-red-400 text-xl">★</span>
          ))}
        </div>
        <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4" style={{background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100)'}}>
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
            <div className="text-sm text-red-400 font-medium">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function ClientLogo({ client }) {
  return (
    <div className="flex items-center justify-center p-6 bg-white border border-red-500/20 rounded-lg shadow-sm hover:shadow-md hover:border-red-500/40 transition-all">
      <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-600 text-sm font-medium">
        {client.name}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % testimonialsData.testimonials.length
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">What Our </span>
            <span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(45deg, #b91c1c 0%, #e31e25 25%, #ff4757 50%, #e31e25 75%, #b91c1c 100%)', WebkitBackgroundClip: 'text'}}>Clients Say</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Featured testimonial slider */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <TestimonialCard testimonial={testimonialsData.testimonials[currentTestimonial]} />
          </div>
          
          {/* Slider dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonialsData.testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Client logos */}
        <div className="border-t border-red-500/20 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h3>
            <p className="text-gray-600">
              We're proud to work with amazing companies of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {testimonialsData.clients.map((client, index) => (
              <ClientLogo key={index} client={client} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-red-500/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's create something amazing together. Your success story could be next.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100%)', boxShadow: '0 0 15px rgba(227, 30, 37, 0.3)'}}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}