'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Filter, Grid, Video, ChevronUp, ChevronDown } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

export default function ReelsPortfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'scroll'
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [playingGridReel, setPlayingGridReel] = useState(null);
  const [videoModal, setVideoModal] = useState(null); // For video modal
  const scrollContainerRef = useRef(null);
  const reelRefs = useRef([]);

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\?\/]+)/,
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
      url: 'https://youtu.be/zaffWMJN5zw',
      title: 'Cinelad Showcase Video 1',
      type: 'Brand Content',
      category: 'Creative',
      description: 'Professional video content showcasing creative storytelling and brand engagement',
      thumbnail: 'https://img.youtube.com/vi/zaffWMJN5zw/maxresdefault.jpg',
      views: '1.2M',
      engagement: '58K',
      orientation: 'landscape'
    },
    {
      url: 'https://youtube.com/shorts/MTbjsB1zDog',
      title: 'Cinelad Short 1',
      type: 'Short Form Content',
      category: 'Social',
      description: 'High-impact short-form content designed for maximum engagement',
      thumbnail: 'https://img.youtube.com/vi/MTbjsB1zDog/maxresdefault.jpg',
      views: '850K',
      engagement: '42K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtu.be/bRJ-fHAKDRU',
      title: 'Brand Campaign Video',
      type: 'Brand Campaign',
      category: 'Branding',
      description: 'Compelling brand campaign showcasing storytelling excellence',
      thumbnail: 'https://img.youtube.com/vi/bRJ-fHAKDRU/maxresdefault.jpg',
      views: '1.5M',
      engagement: '72K',
      orientation: 'landscape'
    },
    {
      url: 'https://youtu.be/GfZN-dGWutE',
      title: 'Creative Production',
      type: 'Original Content',
      category: 'Creative',
      description: 'Original creative production demonstrating cinematic quality',
      thumbnail: 'https://img.youtube.com/vi/GfZN-dGWutE/maxresdefault.jpg',
      views: '920K',
      engagement: '45K',
      orientation: 'landscape'
    },
    {
      url: 'https://youtube.com/shorts/xkUJaPKz3us',
      title: 'Viral Short Content',
      type: 'Viral Content',
      category: 'Social',
      description: 'Viral short-form video optimized for social media platforms',
      thumbnail: 'https://img.youtube.com/vi/xkUJaPKz3us/maxresdefault.jpg',
      views: '2.1M',
      engagement: '98K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtube.com/shorts/5U-y5LTbOjs',
      title: 'Engaging Short 1',
      type: 'Short Form',
      category: 'Marketing',
      description: 'Highly engaging short-form content with strategic messaging',
      thumbnail: 'https://img.youtube.com/vi/5U-y5LTbOjs/maxresdefault.jpg',
      views: '1.3M',
      engagement: '65K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtube.com/shorts/2mKusUywrlA',
      title: 'Social Media Short',
      type: 'Social Content',
      category: 'Social',
      description: 'Optimized social media content for maximum reach',
      thumbnail: 'https://img.youtube.com/vi/2mKusUywrlA/maxresdefault.jpg',
      views: '1.8M',
      engagement: '82K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtube.com/shorts/K8K-C6l4xVk',
      title: 'Creative Short 2',
      type: 'Creative Short',
      category: 'Creative',
      description: 'Innovative short-form content with unique visual style',
      thumbnail: 'https://img.youtube.com/vi/K8K-C6l4xVk/maxresdefault.jpg',
      views: '1.1M',
      engagement: '54K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtube.com/shorts/-i55B2ekQjI',
      title: 'Trending Content',
      type: 'Trending',
      category: 'Social',
      description: 'On-trend content capitalizing on current social media movements',
      thumbnail: 'https://img.youtube.com/vi/-i55B2ekQjI/maxresdefault.jpg',
      views: '1.6M',
      engagement: '78K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtube.com/shorts/eTjg3romfyA',
      title: 'Brand Story Short',
      type: 'Brand Story',
      category: 'Branding',
      description: 'Compelling brand storytelling in short-form format',
      thumbnail: 'https://img.youtube.com/vi/eTjg3romfyA/maxresdefault.jpg',
      views: '950K',
      engagement: '47K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtu.be/Zop_5X20TGU',
      title: 'Professional Production',
      type: 'Professional Content',
      category: 'Product',
      description: 'High-quality professional video production',
      thumbnail: 'https://img.youtube.com/vi/Zop_5X20TGU/maxresdefault.jpg',
      views: '1.4M',
      engagement: '68K',
      orientation: 'landscape'
    },
    {
      url: 'https://youtube.com/shorts/yXQBVuyAUh8',
      title: 'Dynamic Short',
      type: 'Dynamic Content',
      category: 'Marketing',
      description: 'Dynamic short-form content with powerful messaging',
      thumbnail: 'https://img.youtube.com/vi/yXQBVuyAUh8/maxresdefault.jpg',
      views: '1.7M',
      engagement: '85K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtube.com/shorts/WdHud8O86hw',
      title: 'Engaging Visual',
      type: 'Visual Content',
      category: 'Creative',
      description: 'Visually stunning content designed to captivate audiences',
      thumbnail: 'https://img.youtube.com/vi/WdHud8O86hw/maxresdefault.jpg',
      views: '1.2M',
      engagement: '59K',
      orientation: 'portrait'
    },
    {
      url: 'https://youtu.be/THa2Z9zL-g8',
      title: 'Cinematic Production',
      type: 'Cinematic',
      category: 'Product',
      description: 'Cinematic quality video showcasing production excellence',
      thumbnail: 'https://img.youtube.com/vi/THa2Z9zL-g8/maxresdefault.jpg',
      views: '2.3M',
      engagement: '112K',
      orientation: 'landscape'
    }
  ];

  const categories = ['All', 'Creative', 'Branding', 'Marketing', 'Product', 'Social'];

  const filteredReels = activeFilter === 'All'
    ? REELS_DATA
    : REELS_DATA.filter(reel => reel.category === activeFilter);

  // Separate portrait and landscape videos
  const portraitVideos = filteredReels.filter(reel => reel.orientation === 'portrait');
  const landscapeVideos = filteredReels.filter(reel => reel.orientation === 'landscape');

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
    setPlayingGridReel(null); // Stop any playing grid videos
    setPlayingGridReel(null); // Stop any playing grid videos
    reelRefs.current = [];
  }, [activeFilter]);

  // Reset playing video when switching view modes
  useEffect(() => {
    setPlayingGridReel(null);
  }, [viewMode]);

  // Reset playing video when switching view modes
  useEffect(() => {
    setPlayingGridReel(null);
  }, [viewMode]);

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red-primary/10 to-transparent"></div>
        
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
              <span className="block text-gradient-red">
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
                <div className="text-3xl font-bold" style={{color: '#e31e25'}}>{REELS_DATA.length}+</div>
                <div className="text-3xl font-bold" style={{color: '#e31e25'}}>{REELS_DATA.length}+</div>
                <div className="text-white/80">Viral Reels</div>
              </div>
              <div className="glass-effect rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold" style={{color: '#e31e25'}}>15M+</div>
                <div className="text-3xl font-bold" style={{color: '#e31e25'}}>15M+</div>
                <div className="text-white/80">Total Views</div>
              </div>
              <div className="glass-effect rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold" style={{color: '#e31e25'}}>750K+</div>
                <div className="text-3xl font-bold" style={{color: '#e31e25'}}>750K+</div>
                <div className="text-white/80">Engagement</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={viewReelsInScrollMode}
                className="px-8 py-4 text-lg bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-red-glow"
              >
                🎬 View Our Reels
              </button>
              <Button href="/contact" size="lg" variant="outline">
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
      <section id="reels" className="section-padding bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent-red-primary text-white text-sm font-semibold rounded-full mb-6">
              🎬 Our Reel Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Content That Stops
              <span className="block text-gradient-red">
                The Scroll
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
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
            <>
              {/* Portrait Videos Section */}
              {portraitVideos.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 px-4 fade-in-up">
                    Short Form Content <span className="text-gradient-red">(Reels & Shorts)</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 p-4 md:p-6">
                    {portraitVideos.map((reel, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group cursor-pointer aspect-[9/16] relative rounded-2xl overflow-hidden bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-red-300"
                        style={{
                          fontSize: '0',
                          lineHeight: '0'
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setVideoModal(reel);
                        }}
                      >
                        <div className="absolute inset-0">
                          <img
                            src={reel.thumbnail}
                            alt={reel.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const thumbData = generateThumbnailData(reel);
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div
                            className={`hidden w-full h-full items-center justify-center bg-gradient-to-br ${generateThumbnailData(reel).gradient} text-white text-6xl`}
                          >
                            {generateThumbnailData(reel).icon}
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent z-10">
                          <div className="text-white text-xs font-medium line-clamp-2 leading-tight mb-1">{reel.title}</div>
                          <div className="flex items-center gap-2 text-white/70 text-[10px]">
                            <span>👁 {reel.views}</span>
                            <span>❤️ {reel.engagement}</span>
                          </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white drop-shadow-lg" fill="white" viewBox="0 0 24 24">
                              <path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12"/>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Landscape Videos Section */}
              {landscapeVideos.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 px-4 fade-in-up">
                    Long Form Content <span className="text-gradient-red">(Full Videos)</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 md:p-6">
                    {landscapeVideos.map((reel, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group cursor-pointer aspect-video relative rounded-2xl overflow-hidden bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-red-300"
                        style={{
                          fontSize: '0',
                          lineHeight: '0'
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setVideoModal(reel);
                        }}
                      >
                        <div className="absolute inset-0">
                          <img
                            src={reel.thumbnail}
                            alt={reel.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const thumbData = generateThumbnailData(reel);
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div
                            className={`hidden w-full h-full items-center justify-center bg-gradient-to-br ${generateThumbnailData(reel).gradient} text-white text-6xl`}
                          >
                            {generateThumbnailData(reel).icon}
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
                          <div className="text-white text-sm font-medium line-clamp-2 mb-2">{reel.title}</div>
                          <div className="flex items-center gap-4 text-white/70 text-xs">
                            <span>👁 {reel.views}</span>
                            <span>❤️ {reel.engagement}</span>
                          </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white drop-shadow-lg" fill="white" viewBox="0 0 24 24">
                              <path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12"/>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Scroll View (TikTok-style) */}
          {viewMode === 'scroll' && (
            <div id="reels-scroll-container" className="relative bg-black">
              {/* Scroll Container */}
              <div 
                ref={scrollContainerRef}
                className="w-full md:max-w-md md:mx-auto h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
                className="w-full md:max-w-md md:mx-auto h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
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
                      className="h-screen snap-start relative bg-black flex items-center justify-center cursor-pointer"
                      onClick={() => window.open(reel.url, '_blank')}
                      className="h-screen snap-start relative bg-black flex items-center justify-center cursor-pointer"
                      onClick={() => window.open(reel.url, '_blank')}
                    >
                      {/* Full-screen Reel Content - Similar to Modal */}
                      <div className="w-full h-full relative">
                      <div className="w-full h-full relative">
                        
                        {/* Reel preview placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center text-white text-3xl">📱</div>
                        </div>
                        
                        {/* Enhanced Video Player - YouTube Embed */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full relative">
                            {/* YouTube embed */}
                            <div className="absolute inset-0">
                              <iframe
                                src={`https://www.youtube.com/embed/${getYouTubeVideoId(reel.url)}?autoplay=${isActive ? 1 : 0}&mute=1&controls=1&loop=1`}
                                className="w-full h-full"
                                style={{
                                  border: 'none',
                                  overflow: 'hidden',
                                }}
                                allowFullScreen
                                allow="autoplay; encrypted-media"
                              />
                            </div>
                            
                            {/* Fallback content - hidden for clean experience */}
                            {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-90">
                            {/* Fallback content - hidden for clean experience */}
                            {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-90">
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
                            </div> */}
                            </div> */}
                          </div>
                        </div>

                        {/* Top header hidden for clean experience */}
                        {/* Top header hidden for clean experience */}

                        {/* Enhanced TikTok-style right sidebar */}
                        <div className="absolute right-2 md:right-4 bottom-32 flex flex-col space-y-4 md:space-y-6 z-20">
                        <div className="absolute right-2 md:right-4 bottom-32 flex flex-col space-y-4 md:space-y-6 z-20">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="flex flex-col items-center space-y-2 group"
                          >
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span className="text-white text-xs font-bold drop-shadow-lg">{reel.engagement}</span>
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span className="text-white text-xs font-bold drop-shadow-lg">{reel.engagement}</span>
                          </button>
                          
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(reel.url, '_blank');
                            }}
                            className="flex flex-col items-center space-y-2 group"
                          >
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                            <span className="text-white text-xs font-bold drop-shadow-lg">247</span>
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                            <span className="text-white text-xs font-bold drop-shadow-lg">247</span>
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
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                            </svg>
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                            </svg>
                          </button>
                          
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="flex flex-col items-center space-y-2 group"
                          >
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                            </svg>
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                            </svg>
                          </button>
                          
                          {/* Profile music disc */}
                          <div className="w-12 h-12 bg-gray-800 rounded-full border-2 border-white/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
                              <span className="text-white text-xs">🎵</span>
                            </div>
                            <div className={`absolute inset-0 ${isActive ? 'animate-spin' : ''} duration-[3s]`} style={{animationTimingFunction: 'linear'}}>
                              <div className="w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced bottom description area */}
                        <div className="absolute bottom-0 left-0 right-0 md:right-16 p-4 md:p-6 z-20">
                        <div className="absolute bottom-0 left-0 right-0 md:right-16 p-4 md:p-6 z-20">
                          <div className="space-y-3">
                            {/* Main text */}
                            <div className="text-white">
                              <span className="font-bold text-base">@Cinelad01</span>
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
                              <span className="text-blue-300 text-sm">#Cinelad01</span>
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

                        {/* Progress dots hidden for clean experience */}
                        {/* Progress dots hidden for clean experience */}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation controls hidden - swipe/touch only */}
              {/* Navigation controls hidden - swipe/touch only */}
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-dark-secondary rounded-2xl p-8 border border-accent-red-primary/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Create Viral Reels?
              </h3>
              <p className="text-white/70 mb-6">
                Let's collaborate to create scroll-stopping content that drives real business results
                and connects with your audience on a deeper level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg" variant="accent">
                  Start Your Project
                </Button>
                <Button href={`tel:+919899591626`} size="lg" variant="outline">
                  📞 Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/95 backdrop-blur-sm overflow-y-auto py-8 px-4"
            onClick={() => setVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-6xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close button */}
            <button
              onClick={() => setVideoModal(null)}
              className="absolute top-0 right-0 w-12 h-12 bg-accent-red-primary hover:bg-accent-red-dark text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-50 group"
              style={{ transform: 'translate(50%, -50%)' }}
            >
              <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Video container */}
            <div className={`relative bg-black rounded-lg overflow-hidden shadow-2xl ${videoModal.orientation === 'portrait' ? 'aspect-[9/16] max-w-md mx-auto' : 'aspect-video'}`}>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoModal.url)}?autoplay=1&controls=1`}
                className="w-full h-full"
                style={{
                  border: 'none',
                }}
                allowFullScreen
                allow="autoplay; encrypted-media; fullscreen"
              />
            </div>

            {/* Video info */}
            <div className="mt-6 text-white px-2">
              <h3 className="text-xl font-bold mb-2">{videoModal.title}</h3>
              <p className="text-white/70 mb-3">{videoModal.description}</p>
              <div className="flex items-center gap-4 text-sm text-white/60 flex-wrap">
                <span>👁 {videoModal.views} views</span>
                <span>❤️ {videoModal.engagement} engagement</span>
                <span className="px-3 py-1 bg-accent-red-primary/20 text-accent-red-primary rounded-full text-xs">
                  {videoModal.category}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}