'use client'

import { useState } from 'react'
import faqData from '../../data/faq.json'
import siteConfig from '../../data/site-config.json'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 px-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">
            {faq.question}
          </h3>
          <span className={`text-2xl text-red-500 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
            +
          </span>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <div className="px-4 text-gray-600 leading-relaxed">
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {faqData.faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openItems.has(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're here to help! Contact us directly and we'll be happy to answer any additional questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 hover:scale-105"
                style={{background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100%)', boxShadow: '0 0 15px rgba(227, 30, 37, 0.3)'}}
              >
                Get in Touch
              </button>
              <button
                onClick={() => window.location.href = `tel:${siteConfig.company.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-red-500/50 text-base font-medium rounded-lg text-red-500 hover:bg-red-500/10 hover:border-red-400 transition-all duration-300 hover:scale-105"
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