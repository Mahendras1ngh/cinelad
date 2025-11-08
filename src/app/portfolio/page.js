'use client';
import { useState } from 'react';
import { Play, Filter } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

export default function ReelsPortfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Instagram Reels Data - focused on reel content only
  const REELS_DATA = [
    {
      url: 'https://www.instagram.com/reel/C8hDgP2pxZs/?igsh=MTB6am5rcm9rZXBvcw%3D%3D',
      title: 'Ankit Baiyanpuria & HONDA',
      type: 'Brand Collaboration',
      category: 'Auto',
      description: 'High-energy brand collaboration reel featuring fitness influencer with Honda',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg', // placeholder
      views: '2.5M',
      engagement: '95K'
    },
    {
      url: 'https://www.instagram.com/p/Cwu5h3LPrym/',
      title: 'Maruti Suzuki Campaign',
      type: 'Brand Campaign',
      category: 'Auto',
      description: 'Creative automotive campaign showcasing Maruti Suzuki features',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '1.8M',
      engagement: '78K'
    },
    {
      url: 'https://www.instagram.com/p/DITr9jSNXYY/',
      title: 'Creative Content Series',
      type: 'Original Content',
      category: 'Creative',
      description: 'Original creative content showcasing storytelling techniques',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '950K',
      engagement: '45K'
    },
    {
      url: 'https://www.instagram.com/reel/DA_Xs39JPZ1/',
      title: 'M&S Campaign Vol. 1',
      type: 'Fashion Campaign',
      category: 'Fashion',
      description: 'Stylish fashion campaign for M&S featuring trending styles',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '1.2M',
      engagement: '62K'
    },
    {
      url: 'https://www.instagram.com/reel/DBB3nGttqgk/',
      title: 'M&S Campaign Vol. 2',
      type: 'Fashion Campaign',
      category: 'Fashion',
      description: 'Follow-up fashion campaign with innovative visual storytelling',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '1.4M',
      engagement: '71K'
    },
    {
      url: 'https://www.instagram.com/reel/C69Ap1yRsSo/',
      title: 'Tecno India',
      type: 'Tech Campaign',
      category: 'Technology',
      description: 'Dynamic tech reel showcasing Tecno smartphone features',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '2.1M',
      engagement: '89K'
    },
    {
      url: 'https://www.instagram.com/reel/CpeillJo51C/',
      title: 'Creative Shoot Behind Scenes',
      type: 'Behind The Scenes',
      category: 'Creative',
      description: 'Behind-the-scenes content from our creative production process',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '750K',
      engagement: '38K'
    },
    {
      url: 'https://www.instagram.com/reel/CfTN9AHIOCn/',
      title: 'Brand Storytelling',
      type: 'Brand Content',
      category: 'Branding',
      description: 'Engaging brand storytelling reel with emotional connection',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '1.1M',
      engagement: '54K'
    },
    {
      url: 'https://www.instagram.com/reel/CfWZSUNI8Jc/',
      title: 'Social Media Trends',
      type: 'Trending Content',
      category: 'Social',
      description: 'Trend-based content showcasing our adaptability to social media',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '1.6M',
      engagement: '82K'
    },
    {
      url: 'https://www.instagram.com/reel/CfdXarGB6eT/',
      title: 'Digital Campaign',
      type: 'Digital Marketing',
      category: 'Marketing',
      description: 'Strategic digital marketing campaign with measurable results',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '1.3M',
      engagement: '67K'
    },
    {
      url: 'https://www.instagram.com/reel/CfLNSjeoXNq/',
      title: 'Brand Showcase',
      type: 'Product Showcase',
      category: 'Product',
      description: 'Product-focused reel highlighting key features and benefits',
      thumbnail: 'https://img.youtube.com/vi/default/0.jpg',
      views: '980K',
      engagement: '49K'
    }
  ];

  const categories = ['All', 'Auto', 'Fashion', 'Technology', 'Creative', 'Branding', 'Marketing', 'Product', 'Social'];

  const filteredReels = activeFilter === 'All' 
    ? REELS_DATA 
    : REELS_DATA.filter(reel => reel.category === activeFilter);

  const totalViews = REELS_DATA.reduce((sum, reel) => sum + parseFloat(reel.views.replace('M', '')) * 1000000 + parseFloat(reel.views.replace('K', '')) * 1000, 0);
  const totalEngagement = REELS_DATA.reduce((sum, reel) => sum + parseFloat(reel.engagement.replace('K', '')) * 1000, 0);

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Floating Reel Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-30">📱</div>
          <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-20">🎬</div>
          <div className="absolute bottom-32 left-20 text-3xl animate-bounce opacity-25" style={{animationDelay: '1s'}}>📹</div>
          <div className="absolute bottom-40 right-10 text-3xl animate-bounce opacity-30" style={{animationDelay: '1.5s'}}>✨</div>
          <div className="absolute top-60 left-1/4 text-4xl animate-pulse opacity-20" style={{animationDelay: '2s'}}>🎯</div>
          <div className="absolute bottom-20 left-1/2 text-4xl animate-bounce opacity-25" style={{animationDelay: '2.5s'}}>🚀</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Viral Reels
              <span className="block bg-gradient-to-r from-brand-electric via-brand-purple to-brand-neon bg-clip-text text-transparent">
                That Convert
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of scroll-stopping reels that drive engagement, 
              boost brand awareness, and deliver real business results across social platforms.
            </p>
            
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="glass-effect rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-brand-electric">{REELS_DATA.length}+</div>
                <div className="text-white/80">Viral Reels</div>
              </div>
              <div className="glass-effect rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-brand-neon">15M+</div>
                <div className="text-white/80">Total Views</div>
              </div>
              <div className="glass-effect rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-brand-purple">750K+</div>
                <div className="text-white/80">Engagement</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="#reels" size="lg" variant="accent" className="neon-glow">
                🎬 View Our Reels
              </Button>
              <Button href="/contact" size="lg" variant="outline" className="glass-effect border-white text-white hover:electric-gradient">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="text-3xl">📱</div>
          <div className="text-xs mt-1 text-center">Swipe Up For Reels</div>
        </div>
      </section>

      {/* Reels Gallery */}
      <section id="reels" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 electric-gradient text-white text-sm font-medium rounded-full mb-6">
              🎬 Our Reel Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Content That Stops 
              <span className="block bg-gradient-to-r from-brand-electric via-brand-purple to-brand-neon bg-clip-text text-transparent">
                The Scroll
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From viral brand campaigns to trending content, explore our collection of reels 
              that have generated millions of views and driven real business results.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  activeFilter === category
                    ? 'electric-gradient text-white shadow-lg neon-glow'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-brand-electric hover:text-brand-electric'
                }`}
              >
                <Filter size={16} className="inline mr-2" />
                {category}
              </button>
            ))}
          </div>

          {/* Reels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReels.map((reel, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  
                  {/* Reel Preview */}
                  <div className="aspect-[9/16] relative overflow-hidden bg-gradient-to-br from-brand-electric/20 to-brand-purple/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center text-2xl">📱</div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <Play size={24} className="text-brand-electric ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 purple-gradient text-white text-xs font-medium rounded-full">
                        {reel.category}
                      </span>
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 right-4 flex flex-col items-end space-y-1">
                      <div className="glass-effect px-2 py-1 rounded-lg border border-white/20">
                        <span className="text-white text-xs font-medium">👁️ {reel.views}</span>
                      </div>
                      <div className="glass-effect px-2 py-1 rounded-lg border border-white/20">
                        <span className="text-white text-xs font-medium">💖 {reel.engagement}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-brand-purple uppercase tracking-wider">
                        {reel.type}
                      </span>
                      <span className="text-lg">📱</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-electric transition-colors duration-300">
                      {reel.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {reel.description}
                    </p>
                    
                    <a 
                      href={reel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-brand-electric hover:text-brand-purple transition-colors duration-300"
                    >
                      View on Instagram
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-effect rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Create Viral Reels?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's collaborate to create scroll-stopping content that drives real business results 
                and connects with your audience on a deeper level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg" variant="accent" className="neon-glow">
                  Start Your Reel Project
                </Button>
                <Button href={`tel:+91-9876543210`} size="lg" variant="outline">
                  📞 Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}