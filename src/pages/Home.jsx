import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GadgetCard from "../components/GadgetCard";
import CategorySidebar from "../components/CategorySidebar";
import gadgetsData from "../data/gadgets.json";
import Banner from "../components/Banner";
import "../styles/Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredGadgets, setFilteredGadgets] = useState(gadgetsData);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategory) {
      const filtered = gadgetsData.filter(
        (gadget) => gadget.category === selectedCategory
      );
      setFilteredGadgets(filtered);
    } else {
      setFilteredGadgets(gadgetsData);
    }
  }, [selectedCategory]);

  const categories = [
    "All Products",
    "Computers",
    "Phones",
    "Smart Watches",
    "Chargers",
    "Power Banks",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === "All Products" ? null : category);
  };

  return (
    <div className="home-head">
      <div className="home-head2">
      <Banner />
      </div>
      <h2 className="banner-title">Explore Our Gadget Collection</h2>
      <div className="home-page">
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <div className="gadget-cards">
          {filteredGadgets.slice(0, 10).map((product) => (
            <GadgetCard
              key={product.product_id}
              product={product}
              onClick={() => navigate(`/product/${product.product_id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
