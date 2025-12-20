import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="mb-4"
      >
        <FiAlertTriangle className="text-5xl text-gray-400" />
      </motion.div>

      {/* Text */}
      <h1 className="mb-2 text-2xl font-semibold">Oops!</h1>

      <p className="mb-6 text-gray-500">
        The page you’re looking for doesn’t exist.
      </p>

      {/* Gallery CTA */}
      <Link
        to="/gallery"
        className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        View Gallery
      </Link>
    </div>
  );
};

export default NotFound;
