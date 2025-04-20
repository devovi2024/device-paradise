import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <section className="banner-section">
      <div className="banner-content">
        <h1 className="banner-title">Discover the Future of Gadgets</h1>
        <p className="banner-subtitle">The latest tech right at your fingertips.</p>
        <button className="banner-button" onClick={handleNavigate}>
          Go to Dashboard
        </button>
      </div>
    </section>
  );
};

export default Banner;
