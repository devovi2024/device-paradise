import React, { useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next level. From smart devices
          to the coolest accessories, we have it all!
        </p>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "cart" ? "active" : ""}`}
            onClick={() => setActiveTab("cart")}
          >
            Cart
          </button>
          <button
            className={`tab-btn ${activeTab === "wishlist" ? "active" : ""}`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "cart" && <Cart />}
        {activeTab === "wishlist" && <Wishlist />}
      </div>
    </div>
  );
};

export default Dashboard;
