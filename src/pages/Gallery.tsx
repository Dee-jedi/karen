import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GalleryCard from '../components/GalleryCard';
import { galleryData, categoryLabels } from '../data/galleryData';
import type { CategoryType } from '../data/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  // Check URL for category parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryFromUrl = params.get('category') as CategoryType;
    if (categoryFromUrl && categoryFromUrl in categoryLabels) {
      setActiveCategory(categoryFromUrl);
    }
  }, []);

  // Filter images based on active category
  const filteredImages =
    activeCategory === 'all'
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category);

    // Update URL without reload
    const url = new URL(window.location.href);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url.toString());
  };

  const categories: CategoryType[] = [
    'all',
    'weddings',
    'portraits',
    'events',
    'creative',
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pb-24 pt-24 md:pb-6">
      {/* Subtle Ambient Background Gradients */}
      <div className="pointer-events-none fixed inset-0">
        {/* Top Left - Pink/Red Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-32 -top-32 h-100 w-100 rounded-full bg-linear-to-br from-red-500/15 via-pink-500/10 to-transparent blur-3xl"
        />

        {/* Top Right - Purple Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -right-32 top-20 h-112.5 w-112.5 rounded-full bg-linear-to-bl from-purple-500/12 via-violet-500/8 to-transparent blur-3xl"
        />

        {/* Bottom Left - Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.1, 0.16, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-32 -left-20 h-105 w-105 rounded-full bg-linear-to-tr from-blue-500/12 via-cyan-500/8 to-transparent blur-3xl"
        />

        {/* Bottom Right - Rose Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.17, 0.12],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute -bottom-20 -right-32 h-100 w-100 rounded-full bg-linear-to-tl from-rose-500/15 via-pink-500/10 to-transparent blur-3xl"
        />
      </div>

      {/* Floating Glowing Bubbles - Simplified & More Visible */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Bubble 1 - Red */}
        <motion.div
          animate={{
            y: [0, -80, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[15%] top-[30%] h-32 w-32 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 50%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Bubble 2 - Purple */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, -25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute right-[20%] top-[25%] h-40 w-40 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)',
            filter: 'blur(45px)',
          }}
        />

        {/* Bubble 3 - Pink */}
        <motion.div
          animate={{
            y: [0, -90, 0],
            x: [0, 30, 0],
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute left-[60%] top-[50%] h-36 w-36 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)',
            filter: 'blur(42px)',
          }}
        />

        {/* Bubble 4 - Blue */}
        <motion.div
          animate={{
            y: [0, -85, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.28, 0.58, 0.28],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute left-[35%] bottom-[30%] h-38 w-38 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.38) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Bubble 5 - Orange */}
        <motion.div
          animate={{
            y: [0, -95, 0],
            x: [0, 25, 0],
            scale: [1, 1.28, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute right-[35%] bottom-[35%] h-35 w-35 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(251, 146, 60, 0.35) 0%, rgba(251, 146, 60, 0.1) 50%, transparent 100%)',
            filter: 'blur(38px)',
          }}
        />
      </div>

      {/* Filter Tabs */}
      <section className="relative z-10 mb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-7xl"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/5 text-gray-400 backdrop-blur-sm hover:bg-white/10 hover:text-white'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredImages.map((image, index) => (
              <GalleryCard key={image.id} image={image} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-xl text-gray-500">
                No photos found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
