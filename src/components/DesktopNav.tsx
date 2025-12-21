import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

const DesktopNav = () => {
  return (
    <div className="hidden md:flex space-x-8">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            'text-gray-300 hover:text-rose-400 transition ' +
            (isActive ? 'text-rose-400 font-semibold' : '')
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopNav;
