'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

export default function FeaturedVideos() {
  const [videoModal, setVideoModal] = useState(null)

  // Featured portrait videos
  const featuredVideos = [
    {
      url: 'https://youtube.com/shorts/MTbjsB1zDog',
      title: 'Cinelad Short 1',
      thumbnail: 'https://img.youtube.com/vi/MTbjsB1zDog/maxresdefault.jpg',
      videoId: 'MTbjsB1zDog'
    },
    {
      url: 'https://youtube.com/shorts/xkUJaPKz3us',
      title: 'Viral Short Content',
      thumbnail: 'https://img.youtube.com/vi/xkUJaPKz3us/maxresdefault.jpg',
      videoId: 'xkUJaPKz3us'
    },
    {
      url: 'https://youtube.com/shorts/2mKusUywrlA',
      title: 'Social Media Short',
      thumbnail: 'https://img.youtube.com/vi/2mKusUywrlA/maxresdefault.jpg',
      videoId: '2mKusUywrlA'
    }
  ]

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 text-6xl text-accent-red-primary media-icon-rotate">🎬</div>
        <div className="absolute bottom-20 right-10 text-6xl text-accent-red-light float">📹</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Latest <span className="text-gradient-red">Reels</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Check out some of our recent scroll-stopping content that's driving real results for brands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer aspect-[9/16] relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl hover:shadow-2xl border border-gray-800 hover:border-accent-red-primary transition-all duration-300"
              onClick={() => setVideoModal(video)}
            >
              {/* Video Thumbnail */}
              <div className="absolute inset-0">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <div className="w-16 h-16 bg-accent-red-primary rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white ml-1" fill="white" viewBox="0 0 24 24">
                    <path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12"/>
                  </svg>
                </div>
              </div>

              {/* Video info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-semibold text-sm line-clamp-2">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button href="/portfolio" size="lg" variant="accent">
            View Full Portfolio
          </Button>
        </motion.div>
      </div>

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
              className="relative w-full max-w-md my-auto"
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
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-[9/16]">
                <iframe
                  src={`https://www.youtube.com/embed/${videoModal.videoId}?autoplay=1&controls=1`}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
