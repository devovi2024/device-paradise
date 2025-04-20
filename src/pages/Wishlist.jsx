

import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify'; // Importing toast
import WishlistItem from "../components/WishlistItem";
import gadgetsData from "../data/gadgets.json";
import "../styles/Wishlist.css";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // 🛍️ Load wishlist from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    const items = gadgetsData.filter(item => saved.includes(item.product_id));
    setWishlistItems(items);
  }, []);

  // ❌ Easy delete function (ES6 + React)
  const deleteItem = (id) => {
    setWishlistItems(prev => prev.filter(item => item.product_id !== id));

    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updated = saved.filter(itemId => itemId !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));

    // Show toast when item is deleted from wishlist
    toast.success('Item removed from Wishlist!');
  };

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">💖 My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="empty-message">🌸 No items in wishlist.</p>
      ) : (
        <div className="wishlist-container">
          {wishlistItems.map(item => (
            <WishlistItem key={item.product_id} product={item}>
              <button onClick={() => deleteItem(item.product_id)}>❌</button>
            </WishlistItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;




