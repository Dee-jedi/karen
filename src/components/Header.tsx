import DesktopNav from './DesktopNav';
// import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-glass-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo - Placeholder text until logo is received */}
        <div className="flex items-center">
          {/* <img src={logo} alt="Logo" className="h-8 w-auto" /> */}
          <h1 className="font-dancing-script text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent tracking-wider drop-shadow-lg">
            Karen Plato
          </h1>
        </div>

        {/* Desktop nav */}
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
