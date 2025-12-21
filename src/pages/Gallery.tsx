import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GalleryCard from '../components/GalleryCard';
import { galleryData, categoryLabels } from '../data/galleryData';
import type { CategoryType } from '../data/galleryData';
import AnimatedBackground from '../components/AnimatedBackground'; // Import the static version

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
      {/* Use the static animated background */}
      <AnimatedBackground />

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
                    ? 'bg-rose-500 text-white shadow-lg shadow-red-500/30'
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
