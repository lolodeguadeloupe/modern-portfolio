import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="flex justify-between items-center w-full max-w-[1000px]">
        <div>
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex">
          <ul className="hidden md:flex gap-x-8">
            {[
              { name: 'accueil', to: 'home' },
              { name: 'à propos', to: 'about' },
              { name: 'compétences', to: 'skills' },
              { name: 'projets', to: 'work' },
              { name: 'contact', to: 'contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#64ffda] cursor-pointer capitalize"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? <Bars3Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            nav
              ? 'fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
              : 'hidden'
          }`}
        >
          {[
            { name: 'accueil', to: 'home' },
            { name: 'à propos', to: 'about' },
            { name: 'compétences', to: 'skills' },
            { name: 'mes expériences', to: 'work' },
            { name: 'contact', to: 'contact' }
          ].map((item) => (
            <li key={item.name} className="py-6 text-4xl capitalize">
              <Link
                onClick={handleClick}
                to={item.to}
                smooth={true}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
