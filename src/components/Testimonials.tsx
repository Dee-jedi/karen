import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    text: 'Every photo captured the emotion of our special day perfectly.',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Corporate Client',
    text: 'Professional and creative. The headshots exceeded expectations.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Portrait Client',
    text: 'Incredible eye for detail. I felt comfortable the entire shoot.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative mx-auto max-w-4xl px-6 py-12">
      <div className="relative h-70 overflow-hidden md:h-65">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 200, damping: 40 },
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0 rounded-2xl bg-white/5 p-6 backdrop-blur-sm md:p-10"
          >
            {/* Quote Icon */}
            <div className="mb-4 inline-block rounded-full bg-red-500/10 p-3">
              <Quote className="h-6 w-6 text-red-400/70" />
            </div>

            {/* Testimonial Text */}
            <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Client Info */}
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-base font-medium text-white md:text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-white/5 p-3 transition-all hover:bg-white/10 active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-gray-400" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-red-400/80'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="rounded-full bg-white/5 p-3 transition-all hover:bg-white/10 active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
