import { motion } from 'framer-motion';
import { pricingPackages, additionalInfo } from '../data/pricingData';
import { Check, Sparkles, Clock, Camera, Star, Zap, Heart } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import AnimatedBackground from '../components/AnimatedBackground';

const Pricing = () => {
  // Package color themes matching your data
  const packageThemes = [
    {
      name: 'standard',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      light:
        'bg-linear-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/20',
      border: 'border-blue-500/30',
      glow: 'shadow-2xl shadow-blue-500/15',
      icon: Camera,
      badgeColor: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'classic',
      gradient: 'from-rose-400 via-pink-500 to-fuchsia-600',
      light:
        'bg-linear-to-br from-rose-900/30 via-pink-900/20 to-fuchsia-900/20',
      border: 'border-rose-500/30',
      glow: 'shadow-2xl shadow-rose-500/20',
      icon: Heart,
      badgeColor: 'from-rose-500 to-pink-600',
    },
    {
      name: 'premium',
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      light:
        'bg-linear-to-br from-amber-900/30 via-orange-900/20 to-red-900/20',
      border: 'border-amber-500/30',
      glow: 'shadow-2xl shadow-amber-500/15',
      icon: Sparkles,
      badgeColor: 'from-amber-500 to-orange-600',
    },
  ];

  // Fixed icon mapping with type safety
  const featureIcons: Record<string, React.ComponentType<any>> = {
    'Full day Wedding Photography': Camera,
    'Complimentary Prewedding Session': Camera,
    'Wedding Photobook': Star,
    'Wedding frame': Star,
    'All Soft copies in flash drive': Zap,
    'Edited soft copies for social media upload': Zap,
    'One photographer with assistant': Clock,
    'Two Photographers': Clock,
    'Parent Photobook': Heart,
    Frames: Star,
  };

  // Duration for each package based on your data
  const packageDurations = {
    standard: 'Full Day',
    classic: 'Full Day',
    premium: 'Premium Full Day',
  };

  // Price notes for each package
  const priceNotes = {
    standard: 'One-time payment',
    classic: 'Most Popular',
    premium: 'Premium Experience',
  };

  // Descriptions for each package
  const packageDescriptions = {
    standard: 'Essential coverage for your special day',
    classic: 'Complete package with premium features',
    premium: 'Ultimate photography experience',
  };

  // Common features for "All Packages Include" section
  const commonFeatures = [
    'Professional editing',
    'Digital delivery',
    'Client gallery',
    'Fast turnaround',
    'Quality guarantee',
  ];

  // Get appropriate icon for feature
  const getFeatureIcon = (feature: string) => {
    const iconKey = Object.keys(featureIcons).find((key) =>
      feature.toLowerCase().includes(key.toLowerCase().split(' ')[0])
    );
    return featureIcons[iconKey || ''] || Check;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pb-24 pt-24 md:pb-6">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative z-10 mb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1 className="mb-3 font-serif text-4xl font-light text-white md:text-5xl">
            <span className="bg-linear-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Wedding Photography
            </span>{' '}
            Packages
          </h1>
          <p className="text-lg text-gray-300/80">
            Choose the perfect package for your special day in Abuja
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards - Horizontal Layout */}
      <section className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
            {pricingPackages.map((pkg, index) => {
              const theme =
                packageThemes.find((t) => t.name === pkg.id) ||
                packageThemes[index];

              return (
                <PricingCard
                  key={pkg.id}
                  pkg={pkg}
                  theme={theme}
                  index={index}
                  getFeatureIcon={getFeatureIcon}
                  packageDurations={packageDurations}
                  priceNotes={priceNotes}
                  packageDescriptions={packageDescriptions}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison & Additional Info */}
      <section className="relative z-10 mt-12 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          {/* All Packages Include Section */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-linear-to-br from-gray-900/50 to-black/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-center text-xl font-semibold text-white">
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                All Packages Include
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="rounded-2xl border border-amber-500/30 bg-linear-to-br from-amber-900/20 to-amber-900/10 p-6 backdrop-blur-sm">
            <p className="text-center text-sm text-amber-200/90">
              📍 {additionalInfo.note}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
