import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { pricingPackages, additionalInfo } from '../data/pricingData';
import {
  Check,
  ArrowLeft,
  Sparkles,
  Clock,
  Camera,
  Star,
  Zap,
  Heart,
  MapPin,
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const PricingDetails = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const pkg = pricingPackages.find((p) => p.id === packageId);

  // Package color themes matching the main pricing page
  const packageThemes = {
    standard: {
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      light:
        'bg-linear-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/20',
      border: 'border-blue-500/30',
      badgeColor: 'from-blue-500 to-indigo-600',
      icon: Camera,
      colorName: 'blue',
    },
    classic: {
      gradient: 'from-rose-400 via-pink-500 to-fuchsia-600',
      light:
        'bg-linear-to-br from-rose-900/30 via-pink-900/20 to-fuchsia-900/20',
      border: 'border-rose-500/30',
      badgeColor: 'from-rose-500 to-pink-600',
      icon: Heart,
      colorName: 'rose',
    },
    premium: {
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      light:
        'bg-linear-to-br from-amber-900/30 via-orange-900/20 to-red-900/20',
      border: 'border-amber-500/30',
      badgeColor: 'from-amber-500 to-orange-600',
      icon: Sparkles,
      colorName: 'amber',
    },
  };

  // Feature icons mapping
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
    '12x24 Wedding Photobook': Star,
    '16x20 Wedding frame': Star,
    '12x24 Wedding Photobook (synthetic)': Star,
    '20x30 Wedding frame': Star,
    'Two 12x15 frames': Star,
    '12x28 Wedding Photobook': Star,
    '24x36 Wedding frame': Star,
    'Parent Photobook (8x20)': Heart,
  };

  if (!pkg) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="mb-4 text-2xl text-white">Package not found</h2>
          <Link to="/pricing" className="text-red-500 hover:text-red-400">
            Back to Pricing
          </Link>
        </div>
      </div>
    );
  }

  const theme =
    packageThemes[pkg.id as keyof typeof packageThemes] ||
    packageThemes.standard;
  const Icon = theme.icon;

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

      {/* Back Button */}
      <div className="relative z-10 mb-6 px-6">
        <button
          onClick={() => navigate('/pricing')}
          className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Packages</span>
        </button>
      </div>

      {/* Package Detail */}
      <section className="relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-6xl"
        >
          {/* Main Card */}
          <div
            className={`
            overflow-hidden rounded-3xl 
            border ${theme.border} backdrop-blur-sm
            ${theme.light}
          `}
          >
            {/* Hero Section */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={pkg.imagePlaceholder}
                alt={`${pkg.name} package`}
                className="h-full w-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent`}
              />

              {/* Package Badge */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-xl bg-linear-to-br ${theme.gradient} bg-opacity-20 backdrop-blur-sm`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-medium px-3 py-1.5 rounded-full bg-linear-to-r ${theme.badgeColor} text-white`}
                    >
                      {pkg.id === 'premium' ? 'Premium Full Day' : 'Full Day'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Package Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h1
                  className={`text-4xl md:text-5xl font-bold text-white mb-2`}
                >
                  {pkg.name} Package
                </h1>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-gray-300">₦</span>
                  <span className="text-5xl md:text-6xl font-bold text-white">
                    {pkg.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 lg:p-10">
              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="mb-6 text-2xl font-semibold text-white">
                  Complete Package Details
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {pkg.features.map((feature, idx) => {
                    const FeatureIcon = getFeatureIcon(feature);
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.03 }}
                        className="flex items-start gap-4 rounded-xl bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors group"
                      >
                        <div
                          className={`p-2.5 rounded-lg bg-linear-to-br ${theme.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}
                        >
                          <FeatureIcon className="h-5 w-5 text-white/90" />
                        </div>
                        <span className="text-gray-200 flex-1">{feature}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="my-8 border-t border-white/10" />

              {/* Additional Information */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Important Note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-2xl border border-amber-500/30 bg-linear-to-br from-amber-900/20 to-amber-900/10 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <MapPin className="h-5 w-5 text-amber-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-100">
                      Location Note
                    </h3>
                  </div>
                  <p className="text-sm text-amber-200/90 leading-relaxed">
                    📍 {additionalInfo.note}
                  </p>
                </motion.div>
              </div>

              {/* Back to Packages Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 text-center"
              >
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-3 rounded-xl bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:gap-4 group"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <span>Explore Other Packages</span>
                </Link>
              </motion.div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 opacity-20">
              <div
                className={`w-full h-full bg-linear-to-br ${theme.gradient} rounded-full blur-2xl`}
              />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 translate-x-16 translate-y-16 opacity-20">
              <div
                className={`w-full h-full bg-linear-to-br ${theme.gradient} rounded-full blur-2xl`}
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PricingDetails;
