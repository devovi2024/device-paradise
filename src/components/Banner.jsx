import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <section
      className="banner-section"
      style={{  }}
    >
      <h1>Discover the Future of Gadgets</h1>
      <p>The latest tech right at your fingertips.</p>
      <button onClick={handleNavigate}>
        Go to Dashboard
      </button>
    </section>
  );
};

export default Banner;
