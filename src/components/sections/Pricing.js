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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect package for your brand's social media growth. 
            All packages include our signature scroll-stopping content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative h-full ${pkg.popular ? 'ring-2 ring-primary-500' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8 text-center h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">
                  ₹{pkg.price}
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  href={`${siteConfig.company.googleFormUrl}?package=${encodeURIComponent(pkg.title)}`}
                  className="w-full"
                  variant={pkg.popular ? 'primary' : 'outline'}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-accent-50 rounded-lg px-6 py-3 mb-6">
            <span className="text-2xl mr-3">🚨</span>
            <span className="text-accent-700 font-semibold">
              Almost Sold out for this month. Book your slot now!
            </span>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
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