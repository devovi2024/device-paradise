import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div role="navigation" className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">Gadget Heaven</h1>



        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/stats" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Statistics
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Dashboard
          </NavLink>
        </nav>

        {/* Icons */}
        <div className="nav-icons">
          <NavLink to="/cart" className="icon-button">
            🛒
          </NavLink>
          <NavLink to="/wishlist" className="icon-button">
            🤍
          </NavLink>

                  {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle " onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
