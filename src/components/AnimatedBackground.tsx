import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <>
      {/* Unified Animated Background - Matching Gallery */}
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

      {/* Floating Glowing Bubbles */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Bubble 1 - Blue */}
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
              'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Bubble 2 - Pink */}
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
              'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)',
            filter: 'blur(45px)',
          }}
        />

        {/* Bubble 3 - Amber */}
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
              'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 100%)',
            filter: 'blur(42px)',
          }}
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
