import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { GalleryImage } from '../data/galleryData';
import { X } from 'lucide-react';

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
}

const GalleryCard = ({ image, index }: GalleryCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;

      // Add styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore scrolling when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-900"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-4/5 w-full overflow-hidden">
          <img
            src={image.image}
            alt={image.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="mb-2 text-xl font-semibold text-white">
              {image.title}
            </h3>
            {image.description && (
              <p className="text-sm text-gray-300">{image.description}</p>
            )}
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent shimmer" />
        </div>
      </motion.div>

      {/* Modal - Updated for mobile */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button - Moved lower for mobile */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-20 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm transition-all hover:bg-black/80 active:scale-95 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
            aria-label="Close image"
          >
            <X className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative h-full w-full p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container - Fullscreen on mobile */}
            <div className="flex h-full items-center justify-center">
              <img
                src={image.image}
                alt={image.title}
                className="w-auto max-w-full object-contain"
                style={{
                  maxHeight: 'calc(100vh - 100px)',
                }}
              />
            </div>

            {/* Image Info - Simplified for mobile */}
            <div className="absolute bottom-2 left-2 right-2 bg-linear-to-t from-black/90 via-black/70 to-transparent p-3 rounded-lg sm:bottom-4 sm:left-4 sm:right-4 sm:p-4 sm:rounded-xl">
              <h3 className="mb-1 text-sm font-semibold text-white sm:text-lg">
                {image.title}
              </h3>
              {image.description && (
                <p className="text-xs text-gray-300 sm:text-sm">
                  {image.description}
                </p>
              )}
            </div>
          </motion.div>

          {/* Click outside area */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsModalOpen(false)}
          />
        </motion.div>
      )}
    </>
  );
};

export default GalleryCard;
