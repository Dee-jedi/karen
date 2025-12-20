import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 500, label: 'Projects Completed', suffix: '+' },
  { value: 400, label: 'Happy Clients', suffix: '+' },
  { value: 5, label: 'Years Experience' },
];

function AnimatedNumber({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25, // Lower = less bounce, faster to settle
    stiffness: 150, // Higher = faster movement
    mass: 0.3, // Lower = less inertia
    restDelta: 0.01, // Stop when close enough
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <div ref={ref} />;
}

const AnimatedStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap justify-center gap-12 text-center md:gap-20"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-4xl font-light text-white md:text-5xl">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="mt-2 text-sm font-light uppercase tracking-wider text-gray-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedStats;
