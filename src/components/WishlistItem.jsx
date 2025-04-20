import React from "react";

const WishlistItem = ({ product, children }) => {
  return (
    <div className="wishlist-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {children} 
    </div>
  );
};

export default WishlistItem;
