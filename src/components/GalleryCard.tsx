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

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button - Made more prominent */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-110"
            aria-label="Close image"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Escape key listener */}
          <div
            className="absolute inset-0"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Click outside to close area */}
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.image}
              alt={image.title}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                {image.title}
              </h3>
              {image.description && (
                <p className="text-gray-300">{image.description}</p>
              )}
            </div>
          </motion.div>

          {/* Instructions for closing */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-sm text-gray-400">
              Click anywhere outside the image or press ESC to close
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryCard;
