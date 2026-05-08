'use client'

import siteConfig from '../../data/site-config.json'

export default function Process() {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How We <span className="text-gradient-red">Work</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our proven process ensures exceptional results every time.
            We follow a systematic approach to deliver value at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.process.map((step, index) => (
            <div key={step.step} className={`text-center relative fade-in-up delay-${(index + 1) * 100}`}>
              {/* Connector line */}
              {index < siteConfig.process.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent-red-primary to-accent-red-light transform -translate-x-1/2 z-0"></div>
              )}

              <div className="relative z-10">
                {/* Step number */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent-red-primary to-accent-red-light text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-red-glow scale-pulse">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 float">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 border border-accent-red-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our proven process can help you achieve your goals.
              We're here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-3 bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow"
              >
                Start Your Project
              </button>
              <button
                onClick={() => window.location.href = `tel:${siteConfig.company.phone}`}
                className="px-6 py-3 border-2 border-accent-red-primary text-white hover:bg-accent-red-primary hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                📞 Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
