import { NavLink } from 'react-router-dom';
import { FiHome, FiImage, FiDollarSign, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const tabs = [
  { name: 'Home', path: '/', icon: FiHome },
  { name: 'Gallery', path: '/gallery', icon: FiImage },
  { name: 'Pricing', path: '/pricing', icon: FiDollarSign },
  { name: 'Contact', path: '/contact', icon: FiMail },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-white/5 bg-black/95 backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-md justify-between px-6 py-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              className="flex flex-col items-center text-xs"
            >
              {({ isActive }) => (
                <>
                  <motion.div
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={
                      isActive
                        ? 'text-rose-400 drop-shadow-[0_0_6px_rgba(251,113,133,0.35)]'
                        : 'text-gray-400 hover:text-rose-400'
                    }
                  >
                    <Icon className="text-xl" />
                  </motion.div>

                  <span
                    className={`mt-1 transition-colors ${
                      isActive ? 'text-rose-400' : 'text-gray-400'
                    }`}
                  >
                    {tab.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
