import React, { useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist"; 
import "../styles/Dashboard.css"; 

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "cart" ? "active" : ""}`}
          onClick={() => handleTabClick("cart")}
        >
          Cart
        </button>
        <button
          className={`tab-btn ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => handleTabClick("wishlist")}
        >
          Wishlist
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "cart" && <Cart />}
        {activeTab === "wishlist" && <Wishlist />}
      </div>
    </div>
  );
};

export default Dashboard;
