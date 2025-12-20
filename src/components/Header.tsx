import DesktopNav from './DesktopNav';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
// import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-glass-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          {/* <img src={logo} alt="Logo" className="h-8 w-auto" /> */}
          <h1 className="font-dancing-script text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent tracking-wider drop-shadow-lg">
            Karen Plato
          </h1>
        </div>

        {/* Right side - Desktop nav + Camera icon */}
        <div className="flex items-center gap-6">
          {/* Desktop nav - hidden on mobile */}
          <div className="hidden md:block">
            <DesktopNav />
          </div>

          {/* Camera icon on right (mobile only) with the exact animation */}
          <div className="flex items-center md:hidden">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="rounded-full bg-linear-to-br from-rose-400/10 to-rose-600/10 p-2 backdrop-blur-sm">
                <Camera className="h-5 w-5 text-rose-400/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
