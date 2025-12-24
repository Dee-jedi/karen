import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import type { GalleryImage } from '../data/galleryData';
import { X } from 'lucide-react';

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
}

const GalleryCard = ({ image, index }: GalleryCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Lazy load images when they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
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
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.03 }}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-900"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-4/5 w-full overflow-hidden">
          {/* Low quality placeholder first */}
          {!isLoaded && (
            <div className="h-full w-full animate-pulse bg-gray-800"></div>
          )}

          {/* Actual image - lazy loaded */}
          {isInView && (
            <img
              ref={imgRef}
              src={image.image}
              alt={`${image.category} image ${image.id}`}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transition: 'opacity 0.3s ease' }}
            />
          )}
        </div>

        {/* Overlay - Only show when image is loaded */}
        {isLoaded && (
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}

        {/* Shimmer Effect */}
        {isLoaded && (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          </div>
        )}
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <Modal image={image} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

// Separate Modal component for better performance
const Modal = ({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
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
        {/* Loading placeholder */}
        {!isImageLoaded && (
          <div className="flex h-full items-center justify-center">
            <div className="h-64 w-64 animate-pulse rounded-lg bg-gray-800"></div>
          </div>
        )}

        {/* Image Container */}
        <div className="flex h-full items-center justify-center">
          <img
            src={image.image}
            alt={`${image.category} image ${image.id}`}
            onLoad={() => setIsImageLoaded(true)}
            className={`w-auto max-w-full object-contain ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              maxHeight: 'calc(100vh - 100px)',
              transition: 'opacity 0.3s ease',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryCard;
