import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { PricingPackage } from '../data/pricingData';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface PricingCardProps {
  pkg: PricingPackage;
  theme: {
    name: string;
    gradient: string;
    light: string;
    border: string;
    glow: string;
    icon: React.ComponentType<any>;
    badgeColor: string;
  };
  index: number;
  getFeatureIcon: (feature: string) => React.ComponentType<any>;
  packageDurations: Record<string, string>;
  priceNotes: Record<string, string>;
  packageDescriptions: Record<string, string>;
}

const PricingCard: React.FC<PricingCardProps> = ({
  pkg,
  theme,
  index,
  getFeatureIcon,
  packageDurations,
  priceNotes,
  packageDescriptions,
}) => {
  const Icon = theme.icon;

  return (
    <motion.div
      key={pkg.id}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className={`flex-1 min-w-0 max-w-md mx-auto lg:max-w-none ${
        pkg.highlighted ? 'lg:-mt-4 lg:mb-4' : ''
      }`}
    >
      <Link to={`/pricing/${pkg.id}`} className="block h-full">
        <div
          className={`
          relative overflow-hidden rounded-3xl h-full
          border ${theme.border} backdrop-blur-sm
          transition-all duration-300 hover:shadow-2xl
          ${pkg.highlighted ? 'scale-105 ring-2 ring-white/20 shadow-xl' : ''}
          ${theme.light}
        `}
          style={
            pkg.highlighted
              ? {
                  boxShadow: `0 20px 40px -15px var(--${theme.name}-500/20)`,
                }
              : {}
          }
        >
          {/* Package Header with Icon */}
          <div className="p-6 pb-4">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-2 rounded-xl bg-linear-to-br ${theme.gradient} bg-opacity-20`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full bg-linear-to-r ${theme.badgeColor} text-white`}
                >
                  {packageDurations[pkg.id] || 'Full Day'}
                </span>
              </div>
            </div>

            {/* Package Name */}
            <h3 className={`mb-2 text-2xl font-bold text-white`}>
              {pkg.name}
              <span
                className={`block bg-linear-to-r ${theme.gradient} bg-clip-text text-transparent`}
              >
                Package
              </span>
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-sm text-gray-400">₦</span>
              <span className="text-4xl font-bold text-white">{pkg.price}</span>
              <span className="text-sm text-gray-400 ml-2">
                {priceNotes[pkg.id]}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300/80 mb-6">
              {packageDescriptions[pkg.id]}
            </p>
          </div>

          {/* Features List */}
          <div className="px-6 pb-6">
            <div className="space-y-3">
              {pkg.features.slice(0, 2).map((feature, idx) => {
                const FeatureIcon = getFeatureIcon(feature);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div
                      className={`p-1.5 rounded-lg bg-linear-to-br ${theme.gradient} bg-opacity-10`}
                    >
                      <FeatureIcon className="h-4 w-4 text-white/80" />
                    </div>
                    <span className="text-sm text-gray-300 flex-1">
                      {feature}
                    </span>
                  </div>
                );
              })}

              {pkg.features.length > 2 && (
                <div className="pt-2 text-center">
                  <span className="text-xs text-gray-500">
                    + {pkg.features.length - 2} more features
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="px-6 pb-6">
            <button
              className={`
              group/btn w-full rounded-xl py-3 px-4
              bg-linear-to-r ${theme.gradient}
              text-white font-medium text-sm
              transition-all duration-300
              hover:shadow-lg hover:scale-[1.02]
              active:scale-95
              flex items-center justify-center gap-2
            `}
            >
              <span>View Full Details</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Shimmer Overlay */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent" />
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 -translate-x-12 -translate-y-12 opacity-20">
            <div
              className={`w-full h-full bg-linear-to-br ${theme.gradient} rounded-full blur-2xl`}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-12 translate-y-12 opacity-20">
            <div
              className={`w-full h-full bg-linear-to-br ${theme.gradient} rounded-full blur-2xl`}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
