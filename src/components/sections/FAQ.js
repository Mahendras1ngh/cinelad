'use client'

import { useState } from 'react'
import faqData from '../../data/faq.json'
import siteConfig from '../../data/site-config.json'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full py-6 px-4 text-left focus:outline-none focus:bg-white/5 hover:bg-white/5 transition-colors"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white pr-4">
            {faq.question}
          </h3>
          <span className={`text-2xl text-accent-red-primary transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
            +
          </span>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <div className="px-4 text-white/70 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([faqData.faqs[0]?.id]))

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="section-padding bg-dark-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-gradient-red">Questions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        <div className="bg-dark-secondary rounded-2xl shadow-lg overflow-hidden border border-accent-red-primary/30 fade-in-up delay-200">
          {faqData.faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openItems.has(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up delay-400">
          <div className="bg-dark-primary rounded-2xl p-8 border border-accent-red-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              We're here to help! Contact us directly and we'll be happy to answer any additional questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-3 bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow"
              >
                Get in Touch
              </button>
              <button
                onClick={() => window.location.href = `tel:${siteConfig.company.phone}`}
                className="px-6 py-3 border-2 border-accent-red-primary text-white hover:bg-accent-red-primary hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                📞 Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
