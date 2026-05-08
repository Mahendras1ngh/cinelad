'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Card from '../ui/Card'
import siteConfig from '../../data/site-config.json'

export default function Pricing() {
  const packages = [
    {
      id: 'starter',
      title: '5 Reels',
      price: '1,75,000/-',
      features: [
        '5 High-Quality Reels',
        'Concept Development',
        'Professional Editing',
        'Trending Audio Integration',
        'Basic Optimization'
      ],
      popular: false
    },
    {
      id: 'growth',
      title: '10 Reels',
      price: '3,50,000/-',
      features: [
        '10 High-Quality Reels',
        'Advanced Concept Development',
        'Professional Editing & Effects',
        'Trending Audio Integration',
        'Platform Optimization',
        'Performance Analytics'
      ],
      popular: true
    },
    {
      id: 'scale',
      title: '15 Reels',
      price: '5,25,000/-',
      features: [
        '15 High-Quality Reels',
        'Premium Concept Development',
        'Advanced Editing & VFX',
        'Custom Audio Integration',
        'Multi-Platform Optimization',
        'Detailed Analytics & Insights',
        'Priority Support'
      ],
      popular: false
    }
  ]

  return (
    <section className="section-padding bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-gradient-red">Package</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Select the perfect package for your brand's social media growth.
            All packages include our signature scroll-stopping content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: pkg.popular ? 1.05 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: pkg.popular ? 1.08 : 1.03, y: -5 }}
              className="relative"
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <span className="bg-gradient-to-r from-accent-red-primary to-accent-red-light text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <Card
                dark
                className={`h-full ${
                  pkg.popular
                    ? 'border-2 border-accent-red-primary ring-4 ring-accent-red-primary/20'
                    : ''
                }`}
              >
                <div className="p-8 text-center h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-4xl font-bold text-accent-red-primary mb-6">
                    ₹{pkg.price}
                  </div>

                  <ul className="space-y-4 mb-8 flex-1 text-left">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-white/70">
                        <span className="text-accent-red-primary mr-3 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={`${siteConfig.company.googleFormUrl}?package=${encodeURIComponent(pkg.title)}`}
                    className="w-full"
                    variant={pkg.popular ? 'accent' : 'outline'}
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up delay-600">
          <div className="inline-flex items-center bg-accent-red-primary/10 border border-accent-red-primary/30 rounded-lg px-6 py-3 mb-6 scale-pulse">
            <span className="text-2xl mr-3 bounce-slow">🚨</span>
            <span className="text-white font-semibold">
              Almost Sold out for this month. Book your slot now!
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-white/70">
              Need a custom package? Let's discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
                variant="accent"
              >
                Book a Custom Package
              </Button>
              <Button
                href={`tel:${siteConfig.company.phone}`}
                size="lg"
                variant="outline"
              >
                📞 Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
