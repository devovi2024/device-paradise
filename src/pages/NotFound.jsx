import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="page not-found-page">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <Link to="/">Go back to Home</Link>
  </div>
);

export default NotFound;
