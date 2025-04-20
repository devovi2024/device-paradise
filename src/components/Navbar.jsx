import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div role="navigation" className={isHome ? 'nav-wrapper transparent' : 'nav-wrapper white-bg'}>
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">GadgetHeaven</h1>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Dashboard
          </NavLink>
          <NavLink to="/stats" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Stats
          </NavLink>
          <NavLink to="/extra" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Extra
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Cart
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Wishlist
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
