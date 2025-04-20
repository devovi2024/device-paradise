import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Oops! The page you are looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-600 underline">Go Home</Link>
    </div>
  );
};

export default NotFound;
