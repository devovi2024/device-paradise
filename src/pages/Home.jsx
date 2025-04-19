import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GadgetCard from "../components/GadgetCard";
import CategorySidebar from "../components/CategorySidebar";
import gadgetsData from "../data/gadgets.json";
import Banner from "../components/Banner";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredGadgets, setFilteredGadgets] = useState(gadgetsData);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategory) {
      setFilteredGadgets(
        gadgetsData.filter((gadget) => gadget.category === selectedCategory)
      );
    } else {
      setFilteredGadgets(gadgetsData);
    }
  }, [selectedCategory]);

  const categories = [
    "Computers",
    "Phones",
    "Smart Watches",
    "Chargers",
    "Power Banks",
  ];

  return (
    <div>
      <Banner />
      <div className="home-page" style={{ display: "flex", gap: "20px" }}>
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <div
          className="gadget-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {filteredGadgets.map((product) => (
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
