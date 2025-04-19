import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false); 

  const navLinkStyle = ({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-gray-700';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={isHome ? 'bg-transparent' : 'bg-white shadow-md'}>
      <div className='max-w-6xl mx-auto px-4 py-3 flex justify-between items-center'>
        {/* Logo or Brand Name */}
        <h1 className='text-xl font-bold text-blue-700'>GadgetHeaven</h1>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-blue-700'
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`space-x-4 lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <NavLink to='/' className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to='/dashboard' className={navLinkStyle}>
            Dashboard
          </NavLink>
          <NavLink to='/stats' className={navLinkStyle}>
            Stats
          </NavLink>
          <NavLink to='/extra' className={navLinkStyle}>
            Extra
          </NavLink>
          <NavLink to='/cart' className={navLinkStyle}>
            Cart
          </NavLink>
          <NavLink to='/wishlist' className={navLinkStyle}>
            Wishlist
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
