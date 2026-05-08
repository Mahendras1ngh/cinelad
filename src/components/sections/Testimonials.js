'use client'

import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import testimonialsData from '../../data/testimonials.json'

function TestimonialCard({ testimonial, animated = false }) {
  return (
    <Card dark className={`h-full ${animated ? 'fade-in' : ''}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-accent-red-primary text-xl scale-pulse" style={{animationDelay: `${i * 0.1}s`}}>★</span>
          ))}
        </div>
        <blockquote className="text-white/70 mb-6 italic leading-relaxed">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-accent-red-primary to-accent-red-light text-white font-semibold mr-4">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-white/60">{testimonial.role}</div>
            <div className="text-sm text-accent-red-primary font-medium">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function ClientLogo({ client }) {
  return (
    <div className="flex items-center justify-center p-4 bg-dark-secondary border border-accent-red-primary/30 rounded-lg shadow-sm hover:shadow-md hover:border-accent-red-primary/60 transition-all hover:scale-105 zoom-in">
      <div className={`w-32 h-16 flex items-center justify-center rounded ${client.name === 'Rajputana Customs' ? 'bg-gray-600 p-2' : ''}`}>
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-dark-secondary text-sm font-medium">
          {client.name}
        </div>
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
    <section className="section-padding bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="text-gradient-red">Clients Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Featured testimonial slider */}
        <div className="mb-16 zoom-in delay-200">
          <div className="max-w-4xl mx-auto">
            <TestimonialCard testimonial={testimonialsData.testimonials[currentTestimonial]} animated={true} />
          </div>

          {/* Slider dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-accent-red-primary' : 'bg-dark-secondary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonialsData.testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className={`fade-in-up delay-${(index + 1) * 200}`}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="border-t border-accent-red-primary/20 pt-16">
          <div className="text-center mb-12 fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Leading Companies
            </h3>
            <p className="text-white/70">
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
          <div className="bg-dark-secondary rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-accent-red-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/70 mb-6">
              Let's create something amazing together. Your success story could be next.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
