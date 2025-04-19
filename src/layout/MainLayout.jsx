
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? 'bg-gray-100' : 'bg-white'}>
      <Navbar isHome={isHomePage} />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
