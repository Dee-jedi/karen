import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import GalleryCard from '../components/GalleryCard';
import { galleryData, categoryLabels } from '../data/galleryData';
import type { CategoryType } from '../data/galleryData';
import AnimatedBackground from '../components/AnimatedBackground';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [visibleImages, setVisibleImages] = useState<number>(12); // Start with 12 images
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

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

  // Reset visible images when category changes
  useEffect(() => {
    setVisibleImages(12);
  }, [activeCategory]);

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

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const currentLoader = loaderRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoading &&
          visibleImages < filteredImages.length
        ) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleImages((prev) =>
              Math.min(prev + 12, filteredImages.length)
            );
            setIsLoading(false);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [isLoading, visibleImages, filteredImages.length]); // Direct dependencies instead of loadMoreImages

  const categories: CategoryType[] = [
    'all',
    'weddings',
    'portraits',
    'family',
    'creative',
  ];

  // Images to display (lazy loaded)
  const imagesToShow = filteredImages.slice(0, visibleImages);

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

      {/* Gallery Grid with Masonry */}
      <section className="relative z-10 px-6">
        <div className="mx-auto max-w-7xl">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3, 1280: 4 }}
          >
            <Masonry gutter="24px">
              {imagesToShow.map((image, index) => (
                <motion.div
                  key={`${image.id}-${activeCategory}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  layout
                >
                  <GalleryCard image={image} index={index} />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>

          {/* Loading indicator */}
          {visibleImages < filteredImages.length && (
            <div ref={loaderRef} className="py-10 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-rose-500 border-t-transparent"></div>
              <p className="mt-2 text-gray-400">Loading more photos...</p>
            </div>
          )}

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
