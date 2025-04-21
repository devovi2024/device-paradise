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
        <h1 className="banner-title">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="banner-subtitle">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="banner-button" onClick={handleNavigate}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
