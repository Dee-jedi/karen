import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark">
      <div className="flex items-center justify-center space-x-2">
        <motion.div
          className="h-4 w-4 rounded-full bg-linear-to-r from-red-500 to-pink-500"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-linear-to-r from-red-500 to-pink-500"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.2,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-linear-to-r from-red-500 to-pink-500"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.4,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
