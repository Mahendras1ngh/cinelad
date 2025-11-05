import siteConfig from '../../data/site-config.json'

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures exceptional results every time. 
            We follow a systematic approach to deliver value at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.process.map((step, index) => (
            <div key={step.step} className="text-center relative">
              {/* Connector line */}
              {index < siteConfig.process.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-500 transform -translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                {/* Step number */}
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our proven process can help you achieve your goals. 
              We're here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-base font-medium rounded-lg text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
              >
                📞 Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}