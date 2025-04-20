import React from "react";
import "../styles/WishlistItem.css";

const WishlistItem = ({ product, children }) => {
  return (
    <div className="wishlist-card">
      <div className="wishlist-image" />
      
      <div className="wishlist-info">
        <h3 className="wishlist-product-name">{product.name}</h3>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>

        <div className="wishlist-actions">
          <button className="wishlist-add-btn">Add to Cart</button>
        </div>
      </div>

      <div className="wishlist-delete">
        {children}
      </div>
    </div>
  );
};

export default WishlistItem;
