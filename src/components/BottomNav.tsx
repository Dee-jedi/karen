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
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-white/5 bg-glass-dark md:hidden">
      <div className="mx-auto flex max-w-md justify-between px-6 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-sm transition-colors ${
                  isActive ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <motion.div
                    animate={{ scale: isActive ? 1.25 : 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Icon className="text-2xl" />
                  </motion.div>
                  <span className="mt-1">{tab.name}</span>
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
