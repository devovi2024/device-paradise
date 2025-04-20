import React, { useEffect, useState } from "react";
import WishlistItem from "../components/WishlistItem";
import gadgetsData from "../data/gadgets.json";
import "../styles/Wishlist.css"; 

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const items = gadgetsData.filter((item) => savedWishlist.includes(item.product_id));
    setWishlistItems(items);
  }, []);

  const handleDeleteItem = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.product_id !== productId);
    setWishlistItems(updatedWishlist);
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const newWishlist = savedWishlist.filter(id => id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="empty-message">No items in wishlist.</p>
      ) : (
        <div className="wishlist-container">
          {wishlistItems.map((item) => (
            <WishlistItem key={item.product_id} product={item}>
              <button onClick={() => handleDeleteItem(item.product_id)}>Delete</button>
            </WishlistItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
