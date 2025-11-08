'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Filter, Grid, Video, ChevronUp, ChevronDown } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

export default function ReelsPortfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'scroll'
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const reelRefs = useRef([]);

  // Function to extract Instagram post ID from URL
  const getInstagramPostId = (url) => {
    // Handle different Instagram URL formats
    const patterns = [
      /instagram\.com\/reel\/([^\/\?]+)/,
      /instagram\.com\/p\/([^\/\?]+)/,
      /instagram\.com\/tv\/([^\/\?]+)/
    ];
    
    for (let pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  // Function to generate thumbnail placeholder
  const generateThumbnailData = (reel) => {
    // Create a custom thumbnail based on reel data
    const colors = {
      'Auto': 'from-blue-400 via-blue-500 to-blue-600',
      'Fashion': 'from-pink-400 via-pink-500 to-pink-600', 
      'Technology': 'from-green-400 via-green-500 to-green-600',
      'Creative': 'from-purple-400 via-purple-500 to-purple-600',
      'Branding': 'from-indigo-400 via-indigo-500 to-indigo-600',
      'Marketing': 'from-yellow-400 via-yellow-500 to-yellow-600',
      'Product': 'from-red-400 via-red-500 to-red-600',
      'Social': 'from-teal-400 via-teal-500 to-teal-600'
    };
    
    return {
      gradient: colors[reel.category] || 'from-gray-400 via-gray-500 to-gray-600',
      icon: {
        'Auto': '🚗',
        'Fashion': '👗',
        'Technology': '💻',
        'Creative': '🎨',
        'Branding': '🏢',
        'Marketing': '📈',
        'Product': '📦',
        'Social': '📱'
      }[reel.category] || '🎬'
    };
  };

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

  // Function to scroll to reels section and activate scroll mode
  const viewReelsInScrollMode = () => {
    setViewMode('scroll');
    setCurrentReelIndex(0);
    
    // Use setTimeout to ensure state updates first
    setTimeout(() => {
      // Scroll to the actual scroll container
      const scrollContainer = document.getElementById('reels-scroll-container');
      if (scrollContainer) {
        scrollContainer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Scroll functionality
  const scrollToReel = (index) => {
    if (reelRefs.current[index] && scrollContainerRef.current) {
      reelRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentReelIndex(index);
    }
  };

  const handleNextReel = () => {
    if (currentReelIndex < filteredReels.length - 1) {
      scrollToReel(currentReelIndex + 1);
    }
  };

  const handlePrevReel = () => {
    if (currentReelIndex > 0) {
      scrollToReel(currentReelIndex - 1);
    }
  };

  // Touch/Swipe functionality
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStartY || !touchEndY) return;
    
    const distance = touchStartY - touchEndY;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe && viewMode === 'scroll') {
      handleNextReel();
    }
    if (isDownSwipe && viewMode === 'scroll') {
      handlePrevReel();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Handle keyboard navigation for scroll view
      if (viewMode === 'scroll') {
        if (e.key === 'ArrowDown' || e.key === ' ') {
          e.preventDefault();
          handleNextReel();
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          handlePrevReel();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentReelIndex, viewMode, filteredReels.length]);

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentReelIndex(0);
    reelRefs.current = [];
  }, [activeFilter]);

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
              <button
                onClick={viewReelsInScrollMode}
                className="px-8 py-4 text-lg electric-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 neon-glow hover:scale-105"
              >
                🎬 View Our Reels
              </button>
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

          {/* Filter Buttons & View Toggle */}
          <div className="flex flex-col items-center gap-6 mb-12">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">View Mode:</span>
              <div className="flex items-center gap-1 bg-white border-2 border-gray-200 p-1 rounded-full shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'electric-gradient text-white shadow-lg neon-glow'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  title="Grid View"
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => {
                    setViewMode('scroll');
                    setCurrentReelIndex(0);
                    
                    // Use setTimeout to ensure state updates first
                    setTimeout(() => {
                      // Scroll to the actual scroll container
                      const scrollContainer = document.getElementById('reels-scroll-container');
                      if (scrollContainer) {
                        scrollContainer.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }, 100);
                  }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    viewMode === 'scroll'
                      ? 'electric-gradient text-white shadow-lg neon-glow'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  title="Scroll View (TikTok Style)"
                >
                  <Video size={18} />
                </button>
              </div>
              {viewMode === 'scroll' && (
                <span className="text-xs text-gray-500 ml-2">
                  📱 Swipe up/down or use arrow keys
                </span>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
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
          </div>

          {/* Grid View - Instagram Style Reels */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredReels.map((reel, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer aspect-[9/16] relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(reel.url, '_blank')}
                >
                  
                  {/* Background reel preview with actual Instagram thumbnail */}
                  <div className="absolute inset-0">
                    {/* Instagram iframe for actual thumbnail */}
                    <iframe
                      src={`https://www.instagram.com/p/${getInstagramPostId(reel.url)}/embed/captioned/?cr=1&v=12&wp=540`}
                      className="w-full h-full object-cover"
                      style={{ border: 'none', overflow: 'hidden' }}
                      loading="lazy"
                    />
                    
                    {/* Fallback with custom thumbnail if iframe fails */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-60 flex items-center justify-center">
                      <div className="text-center text-white space-y-2">
                        {/* <div className="text-3xl">{generateThumbnailData(reel).icon}</div>
                        <div className="text-sm font-medium px-2">
                          {reel.title.length > 30 ? `${reel.title.slice(0, 30)}...` : reel.title}
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Instagram-style top overlay - Account info */}
                  <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-20">
                    <div className="flex items-center space-x-3">
                      {/* Profile picture placeholder */}
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs">
                        🎬
                      </div>
                      {/* Account name and verification */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-1">
                          <span className="text-white font-semibold text-sm">cinelads</span>
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <div className="text-white/80 text-xs">{reel.type}</div>
                      </div>
                      {/* Follow button */}
                      <button className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-md border border-white/40 hover:bg-white/30 transition-colors">
                        Follow
                      </button>
                    </div>
                  </div>


                  {/* Instagram-style right side actions */}
                  <div className="absolute right-3 bottom-20 flex flex-col space-y-4 z-20">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle like
                      }}
                      className="flex flex-col items-center space-y-1"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="white" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">{reel.engagement}</span>
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openReelModal(reel);
                      }}
                      className="flex flex-col items-center space-y-1"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">156</span>
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (navigator.share) {
                          navigator.share({
                            title: reel.title,
                            text: reel.description,
                            url: reel.url,
                          });
                        }
                      }}
                      className="flex flex-col items-center space-y-1"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                        </svg>
                      </div>
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle bookmark
                      }}
                      className="flex flex-col items-center space-y-1"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                        </svg>
                      </div>
                    </button>
                  </div>

                  {/* Instagram-style bottom overlay - Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20">
                    <div className="space-y-2">
                      {/* View count */}
                      <div className="text-white/80 text-xs font-medium">
                        {reel.views} views
                      </div>
                      
                      {/* Title/Description */}
                      <div className="text-white">
                        <span className="font-semibold text-sm">cinelads</span>
                        <span className="text-sm ml-2">{reel.title}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/90 text-sm leading-relaxed">
                        {reel.description.length > 80 ? 
                          `${reel.description.slice(0, 80)}... more` : 
                          reel.description
                        }
                      </p>
                      
                      {/* Hashtags/Category */}
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs text-blue-300">#{reel.category.toLowerCase()}</span>
                        <span className="text-xs text-blue-300">#reels</span>
                        <span className="text-xs text-blue-300">#cinelads</span>
                      </div>
                    </div>
                  </div>

                  {/* Reel indicator */}
                  <div className="absolute top-4 right-4 z-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white drop-shadow-lg" fill="white" viewBox="0 0 24 24">
                      <path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Scroll View (TikTok-style) */}
          {viewMode === 'scroll' && (
            <div id="reels-scroll-container" className="relative bg-black">
              {/* Scroll Container */}
              <div 
                ref={scrollContainerRef}
                className="max-w-md mx-auto h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {filteredReels.map((reel, index) => {
                  const thumbData = generateThumbnailData(reel);
                  const isActive = index === currentReelIndex;
                  
                  return (
                    <div
                      key={index}
                      ref={el => reelRefs.current[index] = el}
                      className="h-screen snap-start relative bg-black flex items-center justify-center"
                    >
                      {/* Full-screen Reel Content - Similar to Modal */}
                      <div className="w-full h-full relative bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500">
                        
                        {/* Reel preview placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center text-white text-3xl">📱</div>
                        </div>
                        
                        {/* Enhanced Reel Player - Similar to Modal */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Try Instagram oEmbed API first */}
                          <div className="w-full h-full relative">
                            {/* Instagram post embed attempt */}
                            <div className="absolute inset-0">
                              <iframe
                                src={`https://www.instagram.com/p/${getInstagramPostId(reel.url)}/embed/captioned/?cr=1&v=12&wp=540`}
                                className="w-full h-full"
                                style={{ border: 'none', overflow: 'hidden' }}
                                allowFullScreen
                                allowTransparency
                                frameBorder="0"
                              />
                            </div>
                            
                            {/* Fallback content */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-90">
                              <div className="text-center text-white space-y-4 z-10">
                                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                                  <Play size={40} className="text-white ml-2" fill="white" />
                                </div>
                                <div className="space-y-3 max-w-sm">
                                  <h3 className="text-xl font-semibold">{reel.title}</h3>
                                  <p className="text-sm opacity-90 leading-relaxed px-4">{reel.description.slice(0, 100)}...</p>
                                  <div className="flex justify-center space-x-4 text-sm">
                                    <span className="bg-white/20 px-3 py-1 rounded-full">👁️ {reel.views}</span>
                                    <span className="bg-white/20 px-3 py-1 rounded-full">💖 {reel.engagement}</span>
                                  </div>
                                  <button
                                    onClick={() => window.open(reel.url, '_blank')}
                                    className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
                                  >
                                    Watch Full Reel on Instagram
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* TikTok-style top header */}
                        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-lg">
                                🎬
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-bold text-lg">cinelads</span>
                                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                  </svg>
                                </div>
                                <div className="text-white/80 text-sm">{reel.category} • {reel.views}</div>
                              </div>
                            </div>
                            <button className="px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-lg border border-white/40 hover:bg-white/30 transition-all backdrop-blur-sm">
                              Follow
                            </button>
                          </div>
                        </div>

                        {/* Enhanced TikTok-style right sidebar */}
                        <div className="absolute right-4 bottom-32 flex flex-col space-y-6 z-20">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="flex flex-col items-center space-y-2 group"
                          >
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 group-hover:bg-white/30 transition-all shadow-lg">
                              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                            </div>
                            <span className="text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded-full">{reel.engagement}</span>
                          </button>
                          
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(reel.url, '_blank');
                            }}
                            className="flex flex-col items-center space-y-2 group"
                          >
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 group-hover:bg-white/30 transition-all shadow-lg">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                              </svg>
                            </div>
                            <span className="text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded-full">247</span>
                          </button>
                          
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              if (navigator.share) {
                                navigator.share({
                                  title: reel.title,
                                  text: reel.description,
                                  url: reel.url,
                                });
                              }
                            }}
                            className="flex flex-col items-center space-y-2 group"
                          >
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 group-hover:bg-white/30 transition-all shadow-lg">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                              </svg>
                            </div>
                          </button>
                          
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="flex flex-col items-center space-y-2 group"
                          >
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 group-hover:bg-white/30 transition-all shadow-lg">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                              </svg>
                            </div>
                          </button>
                          
                          {/* Profile music disc */}
                          <div className="w-12 h-12 bg-gray-800 rounded-full border-2 border-white/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                              <span className="text-white text-xs">🎵</span>
                            </div>
                            <div className={`absolute inset-0 ${isActive ? 'animate-spin' : ''} duration-[3s]`} style={{animationTimingFunction: 'linear'}}>
                              <div className="w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced bottom description area */}
                        <div className="absolute bottom-0 left-0 right-16 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20">
                          <div className="space-y-3">
                            {/* Main text */}
                            <div className="text-white">
                              <span className="font-bold text-base">@cinelads</span>
                              <p className="text-white/95 text-sm leading-relaxed mt-1">
                                {reel.description.length > 100 ? 
                                  `${reel.description.slice(0, 100)}... ` : 
                                  reel.description
                                }
                                <span className="text-white/70">more</span>
                              </p>
                            </div>
                            
                            {/* Hashtags */}
                            <div className="flex flex-wrap gap-2">
                              <span className="text-blue-300 text-sm">#{reel.category.toLowerCase()}</span>
                              <span className="text-blue-300 text-sm">#reels</span>
                              <span className="text-blue-300 text-sm">#viral</span>
                              <span className="text-blue-300 text-sm">#cinelads</span>
                            </div>
                            
                            {/* Music info */}
                            <div className="flex items-center gap-2 text-white/80">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                              </svg>
                              <span className="text-sm">Original Audio - {reel.type}</span>
                            </div>
                          </div>
                        </div>

                        {/* Progress dots */}
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30">
                          <div className="flex flex-col items-center space-y-2">
                            {filteredReels.map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                  i === currentReelIndex ? 'h-8 bg-white' : 'h-4 bg-white/40 hover:bg-white/60'
                                }`}
                                onClick={() => scrollToReel(i)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Navigation Hints */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/60 z-30">
                <div className="text-center">
                  <div className="text-2xl mb-2">☝️</div>
                  <div className="text-xs font-medium">Swipe Up</div>
                </div>
              </div>

              {/* Enhanced Navigation Controls */}
              <div className="absolute left-6 bottom-20 flex flex-col space-y-4 z-30">
                <button
                  onClick={handlePrevReel}
                  disabled={currentReelIndex === 0}
                  className={`p-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                    currentReelIndex === 0
                      ? 'bg-black/20 text-white/30 cursor-not-allowed'
                      : 'bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:scale-110'
                  }`}
                >
                  <ChevronUp size={24} />
                </button>
                <button
                  onClick={handleNextReel}
                  disabled={currentReelIndex === filteredReels.length - 1}
                  className={`p-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                    currentReelIndex === filteredReels.length - 1
                      ? 'bg-black/20 text-white/30 cursor-not-allowed'
                      : 'bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:scale-110'
                  }`}
                >
                  <ChevronDown size={24} />
                </button>
              </div>
            </div>
          )}

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
                <Button href={`tel:+919899591626`} size="lg" variant="outline">
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