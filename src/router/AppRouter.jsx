import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ExtraPage from '../pages/ExtraPage';
import NotFound from '../pages/NotFound';
import ProductReviews from '../pages/ProductReviews';
import Statistics from '../pages/Stats';
import WishList from '../pages/Wishlist';
import Cart from '../pages/Cart';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />     
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="stats" element={<Statistics />} />
        <Route path="extra" element={<ExtraPage />} />
        <Route path="reviews/:productId" element={<ProductReviews />} />   
        <Route path="*" element={<NotFound />} />
        <Route path="wishlist" element={< WishList/>} />
        <Route path="cart" element={<Cart />} />
        <Route path="dashboard" element={<Dashboard />} />

      </Route>
    </Routes>
  );
};

export default AppRouter;
