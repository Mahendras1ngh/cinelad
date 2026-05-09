import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

export const metadata = {
  title: 'About Us - Cinelad',
  description: 'Learn about Cinelad, our mission to create scroll-stopping content, and the creative team behind viral brand stories.',
  title: 'About Us - Cinelad',
  description: 'Learn about Cinelad, our mission to create scroll-stopping content, and the creative team behind viral brand stories.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-dark-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red-primary/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-outline-animated">About</span> <span className="text-outline-red">Cinelad</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/80">
            We're passionate about creating content that stops the scroll and transforms brands into viral sensations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-gradient-red">Story</span>
              </h2>
              <p className="text-lg text-white/70 mb-6">
                Founded with a vision to create content that truly connects,
                Cinelad has been helping brands break through the noise and capture hearts on social media.
              </p>
              <p className="text-lg text-white/70 mb-6">
                Our team of creative storytellers combines trend expertise with authentic brand understanding
                to deliver content that not only stops the scroll but drives real business results.
              </p>
              <p className="text-lg text-white/70">
                We believe in creating content that feels genuine, builds communities, and turns viewers
                into loyal customers. Every reel, every story, every post is crafted to make your brand unforgettable.
              </p>
            </div>
            <div className="bg-dark-secondary rounded-2xl p-8 text-center border border-accent-red-primary/30">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent-red-primary mb-2">500+</div>
                  <div className="text-white/70">Viral Reels Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-red-primary mb-2">50+</div>
                  <div className="text-white/70">Brands Transformed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-red-primary mb-2">10M+</div>
                  <div className="text-white/70">Views Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-red-primary mb-2">300%</div>
                  <div className="text-white/70">Avg. Engagement Boost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-gradient-red">Values</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover dark>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-white/70">
                  We strive for excellence in every project, ensuring the highest quality standards
                  and attention to detail in all our deliverables.
                </p>
              </div>
            </Card>

            <Card hover dark>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
                <p className="text-white/70">
                  We believe in building long-term partnerships with our clients, working together
                  as a team to achieve shared success and growth.
                </p>
              </div>
            </Card>

            <Card hover dark>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-white/70">
                  We stay at the forefront of technology and industry trends, bringing innovative
                  solutions that give our clients a competitive edge.
                </p>
              </div>
            </Card>

            <Card hover dark>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-white/70">
                  Transparency, honesty, and ethical business practices form the foundation of
                  all our client relationships and internal operations.
                </p>
              </div>
            </Card>

            <Card hover dark>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Agility</h3>
                <p className="text-white/70">
                  We adapt quickly to changing requirements and market conditions, ensuring
                  our solutions remain relevant and effective.
                </p>
              </div>
            </Card>

            <Card hover dark>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-white mb-3">Growth</h3>
                <p className="text-white/70">
                  We're committed to continuous learning and improvement, both for ourselves
                  and for helping our clients achieve sustainable growth.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-dark-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work <span className="text-gradient-red">Together</span>?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Let's discuss how we can help your business achieve its goals.
            We're excited to learn about your project and explore how we can contribute to your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="accent">
              Start a Project
            </Button>
            <Button
              href="tel:+91-9876543210"
              size="lg"
              variant="outline"
            >
              📞 Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
